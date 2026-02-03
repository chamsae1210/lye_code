# Supabase 설정 가이드 (계정·단어장 저장)

## 1. Supabase 프로젝트 생성
1. https://supabase.com 접속 후 로그인
2. **New Project** 클릭
3. 프로젝트 이름, 비밀번호 설정 후 생성

## 2. API 키 확인
1. 프로젝트 대시보드 → **Settings** → **API**
2. **Project URL**과 **anon public** 키 복사

## 3. config.js 설정
`config.js` 파일에서 아래 값을 입력하세요:
```javascript
const SUPABASE_URL = "https://xxxxx.supabase.co";  // Project URL
const SUPABASE_ANON_KEY = "eyJhbGci...";           // anon public 키
```

## 4. 테이블 생성
1. 프로젝트 대시보드 → **SQL Editor**
2. `supabase-setup.sql` 파일 내용을 붙여넣고 **Run** 실행

## 5. 이메일 인증 (선택)
Supabase는 기본적으로 회원가입 시 이메일 인증을 요구합니다.
- **Authentication** → **Providers** → **Email** → **Confirm email** 끄면 바로 사용 가능 (개발용)
