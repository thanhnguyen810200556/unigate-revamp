# 📌 VNUHCM-UNIGATE (Redesign & Refactor – Frontend Only)

Smart Admission Portal for VNU-HCM Competency Assessment Exam

![React](https://img.shields.io/badge/Frontend-React-blue)  ![Tailwind](https://img.shields.io/badge/Style-TailwindCSS-38B2AC)  ![Gemini](https://img.shields.io/badge/AI-Google%20Gemini-ff9800)

---

## 🏛 Project Background

This project was originally developed by a team of 5 members — 2 front-end developers (including me) and 3 back-end developers.  
At that time, both front-end members, including myself, were new to the field, so the initial frontend codebase lacked structure and best practices.

The current version is my **personal redesign and refactor of the frontend**, created with permission from the original team.  
Some layouts may still be inspired by the original design, but all frontend code has been rewritten for better maintainability, scalability, and performance.

---

## 🚀 Introduction

VNUHCM-UNIGATE is a smart admission portal that supports the registration, examination, and admission process for the VNU-HCM Competency Assessment Exam, along with providing preparation tools and study resources.

This **Redesign & Refactor Version** focuses on:

- Modernizing the UI
- Refactoring the frontend code into modular, maintainable components
- Optimizing performance and improving UX

---

## 🔥 Redesign & Refactor Highlights

- 🛠️ Rebuilt the frontend independently _(learned from the original team project)_
- 🎨 Designed a **modern UI** on Figma → implemented with **React & TailwindCSS**
- 🧩 Refactored into **modular components** with a cleaner folder structure
- ⚡ Applied basic **performance improvements** (`useCallback`, reusable components)
- 🧭 Enhanced **user experience** with clearer navigation and simpler layout
- 🤖 Integrated **Google Gemini API** for chatbot & study recommendation demo

---

## 📸 Demo (current version)

_(UI and features may change as the project is still in development)_

### Screenshots

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/a12e5c61-5eb0-4e24-98e8-f146de6f169a" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/3898a980-9a71-4d66-a387-9f1f97a155f8" />

### Video Walkthrough

🎥 [Watch Demo Video](#) _(to be added)_

---

## 📋 Current Features

### Public (Before Login)

- Home page
- News section
- Contact page

### Private (After Login) _(using **FakeAuthContext** with LocalStorage)_

- Dashboard Home
- Exam Test _(sample only, no real exam questions)_
- Candidate Profile
- AI Chatbot (Google Gemini API)
- Competency Assessment Page:
  - Exam registration
  - Result retrieval
  - **AI-based study major recommendation** (demo available with mock result date)

---

## 🛠️ Technologies Used

- **Frontend**: ReactJS, TailwindCSS
- **AI Integration**: Google Gemini API (Chatbot, AI-based recommendation)
- **Design**: Figma

> ℹ️ The original team project also included a FastAPI backend + PostgreSQL database,  
> but this redesign focuses on the **frontend refactor + AI integration** only.

---

## ⚙️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/thanhnguyen810200556/unigate-revamp.git
cd unigate-revamp

# Install dependencies
npm install

# Run development server
npm run dev
```

👉 Create a .env file with your Google Gemini API Key:

VITE_GEMINI_API_KEY=your_api_key_here

---

## 👥 Development

- Initial project: developed by a team of 5 (2 frontend, 3 backend).
- Current version: frontend fully redesigned & refactored individually by **Nguyễn Xuân Thanh**.

---

## 🔗 Links to original

- **Original Frontend Repository**: [VNUHCM-UNIGATE Frontend](https://github.com/KhanhVy-r2/VNUHCM-UNIGATE.git)
- **Original Backend Repository**: [VNUHCM-UNIGATE Backend](https://github.com/Kamekain/VNUHCM-UNIGATE.git)
