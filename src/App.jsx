import HomepageLayout from "./shared/layout/HomepageLayout/HomepageLayout";
import HomePage from "./features/home/pages/HomePage";
import ContactPage from "./features/contact/pages/ContactPage";
import NewsPage from "./features/news/pages/NewsPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./features/auth/pages/loginPage";
import Dashboard from "./features/studentDashboard/Pages/dashboard";
import DashboardLayout from "./shared/layout/DashboardLayout/DashboardLayout";
import ProfilePage from "./features/studentProfile/pages/ProfilePage";
import ExamPage from "./features/exam/pages/ExamPage";
import DocumentsPage from "./features/documents/pages/DocumentsPage";
import AIChatPage from "./features/aiChat/pages/AIChatPage";
import AdmissionPage from "./features/admission/pages/AdmissionPage";
import ForumPage from "./features/forum/pages/ForumPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomepageLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="home" element={<Dashboard />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="exam" element={<ExamPage />} />
        <Route path="document" element={<DocumentsPage />} />
        <Route path="ai-chat" element={<AIChatPage />} />
        <Route path="admission" element={<AdmissionPage />} />
        <Route path="forum" element={<ForumPage />} />
      </Route>
    </Routes>
  );
}

export default App;
