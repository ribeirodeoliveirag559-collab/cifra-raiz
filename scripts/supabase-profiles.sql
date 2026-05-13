-- =============================================================
-- CIFRA RAIZ — Tabela de perfis + automação de plano
-- Execute no SQL Editor do Supabase
-- =============================================================

-- 1. Tabela profiles (vinculada ao auth.users do Supabase)
CREATE TABLE IF NOT EXISTS profiles (
  id                    UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  nome                  TEXT,
  plano                 TEXT NOT NULL DEFAULT 'free',   -- 'free' | 'pro'
  stripe_customer_id    TEXT,
  stripe_subscription_id TEXT,
  plano_expira_em       TIMESTAMPTZ,
  created_at            TIMESTAMPTZ DEFAULT NOW()
);

-- 2. RLS: cada usuário só vê/edita o próprio perfil
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "perfil_select" ON profiles;
DROP POLICY IF EXISTS "perfil_update" ON profiles;

CREATE POLICY "perfil_select" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "perfil_update" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- 3. Trigger: cria perfil automaticamente quando usuário se cadastra
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO profiles (id, nome)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'nome', split_part(NEW.email, '@', 1))
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- 4. (Opcional) Migra usuários já existentes que não têm perfil ainda
INSERT INTO profiles (id, nome)
SELECT
  u.id,
  COALESCE(u.raw_user_meta_data->>'nome', split_part(u.email, '@', 1))
FROM auth.users u
WHERE NOT EXISTS (SELECT 1 FROM profiles p WHERE p.id = u.id);
