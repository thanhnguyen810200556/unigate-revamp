# VNUHCM-UNIGATE: Smart Admission Portal for VNU-HCM Competency Assessment Exam

## Project Introduction

VNUHCM-UNIGATE is a smart admission portal developed to optimize the process of taking and applying with the results of the Competency Assessment Exam (CAE) of Vietnam National University, Ho Chi Minh City (VNU-HCM). The project is not only an admission management solution but also a learning support application, helping candidates prepare for the exam and orientate towards suitable majors.

## Key Features

- **CAE Exam and Admission Management:**
  - Allows candidates to register for the exam, register for admission, look up exam results and admission results.
  - Provides an interface for member universities and VNU-HCM to manage and announce admission results.
  - Applies a "virtual filtering" method to ensure candidates are admitted to only one nguyện vọng (their highest priority eligible nguyện vọng).
- **Support for Candidates Preparing for the Exam:**
  - Develop online mock tests based on the structure of the 2025 CAE sample test.
  - Integrates a digital document database (ebooks) from the VNU Library to provide a rich source of study materials.
- **Exam Result Analysis and Major Recommendation:**
  - Provides detailed analysis of exam results (especially the highest score from 2 attempts) to identify strengths and weaknesses and offer advice for improvement.
  - Builds a system to recommend suitable majors based on candidates' abilities and scores from the exam results.
- **Learning Community:**
  - A forum for candidates, alumni, and interested individuals to exchange and share experiences, study methods, and official information from universities.
- **Artificial Intelligence Integration:**
  - Chatbot supports answering simple questions about the admission process, hồ sơ, majors, etc., quickly and accurately.
  - AI-based academic and career counseling system.

## Technologies Used

- **Frontend:** ReactJS + REST API + Axios
- **Backend:** FastAPI
- **Version Control System:** Github
- **Database:** PostgreSQL (relational data), NoSQL (posts, ebooks)
- **Artificial Intelligence:** Chatbots, Major Recommendation System.
- **Big Data Processing:** "Virtual filtering" algorithm, Major Recommendation System.
- **Other Technologies:** Azure Database for PostgreSQL flexible server, Adobe Photoshop.

## Feasibility

The project utilizes modern, popular technologies with strong community support. The integration of AI (chatbot, major recommendation) has also proven feasible in many projects. Development and maintenance costs are assessed to be manageable with the use of open-source software and cloud computing services. The system is designed for horizontal scaling to handle high traffic during peak admission season, while also focusing on data security and backup. The layered architecture allows for easy expansion and integration of new features in the future.

## Future Development Directions

- Optimize data processing performance and ensure stability, especially during peak season.
- Improve user interface and user experience (UI/UX).
- Develop an application to support admission applications to universities outside VNU-HCM that also use CAE results.
- Integrate other admission methods (direct admission, priority admission...).
- Enhance system security (data encryption, 2FA...).
- Develop a mobile application version.
- Integrate Machine Learning to predict admission trends.

## Development Team (Team: JAPANESE GOBLIN)

- **Huỳnh Hoàng Hưng:** Team Leader, Fullstack, Report Writing.
- **Nguyễn Hữu Lam Giang:** Database Administrator, Backend Lead, Fullstack.
- **Nguyễn Khánh Vy:** Frontend, Poster Design.
- **Trần Hải Đông:** Fullstack.
- **Nguyễn Xuân Thanh:** Frontend, Poster Design.

## References

- Center for Testing and Quality Assessment of Training - Vietnam National University, Ho Chi Minh City, Project Proposal for the 2025 VNU-HCM Competency Assessment Exam, 2025
