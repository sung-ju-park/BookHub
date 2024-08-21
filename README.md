# Book Hub

당신이 원하는 책들을 한 곳으로, 한 눈에. **Book Hub**는 사용자가 다양한 도서관에서 원하는 책을 검색하고, AI를 통해 사용자 편의성을 극대화하는 웹 애플리케이션입니다.

![Platform](https://img.shields.io/badge/platform-web-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents
- [소개](#소개)
- [주요 기능](#주요-기능)
- [설치](#설치)
- [사용법](#사용법)
- [기여](#기여)
- [라이선스](#라이선스)
- [연락처](#연락처)

## 소개
Book Hub는 서울시 내 주요 구립 도서관(강남구, 강동구, 마포구, 영등포구)의 도서를 한 번에 검색할 수 있는 웹 플랫폼입니다. 사용자는 원하는 책을 검색하고, AI 기능을 활용해 책에 대한 요약과 추천을 받을 수 있습니다. 또한, 마이페이지에서 최근 검색한 책들을 확인할 수 있습니다.

## 주요 기능
- **도서 검색**: 사용자는 원하는 책을 검색하여 여러 도서관에서 해당 책의 소장 여부를 확인할 수 있습니다.
- **AI 기반 책 요약**: 입력된 키워드를 바탕으로 AI가 추천 도서의 요약을 제공합니다.
- **최근 본 책 기록**: 사용자가 최근에 검색한 책들은 마이페이지에 자동으로 기록됩니다.
- **도서 세부 정보**: 검색한 책의 세부 정보를 확인할 수 있으며, 도서관별 대출 가능 여부를 알 수 있습니다.
- **사용자 정보 관리**: 사용자는 자신의 이메일, 전화번호, 주소 등을 마이페이지에서 관리할 수 있습니다.

## 설치
Book Hub를 로컬에서 실행하기 위해 다음의 단계를 따르세요.

```bash
# 1. Repository를 클론합니다.
git clone https://github.com/yourusername/book-hub.git

# 2. 프로젝트 디렉토리로 이동합니다.
cd book-hub

# 3. 필요한 패키지를 설치합니다.
pip install -r requirements.txt

# 4. 애플리케이션을 실행합니다.
python manage.py runserver

