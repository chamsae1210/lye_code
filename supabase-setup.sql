-- Supabase SQL Editor에서 실행하세요
-- Table: wrong_words - 사용자별 틀린 단어 저장

CREATE TABLE IF NOT EXISTS wrong_words (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  words JSONB DEFAULT '[]',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security: 사용자 본인 데이터만 접근
ALTER TABLE wrong_words ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own wrong_words"
  ON wrong_words FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own wrong_words"
  ON wrong_words FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own wrong_words"
  ON wrong_words FOR UPDATE
  USING (auth.uid() = user_id);
