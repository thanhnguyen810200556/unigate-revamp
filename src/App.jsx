import { Route, Routes } from "react-router-dom";
import HomepageLayout from "./shared/layout/HomepageLayout/HomepageLayout";
import HomePage from "./features/home/pages/HomePage";
import ContactPage from "./features/contact/pages/ContactPage";
import NewsPage from "./features/news/pages/NewsPage";
import LoginPage from "./features/auth/pages/LoginPage";
import Dashboard from "./features/studentDashboard/Pages/Dashboard";
import DashboardLayout from "./shared/layout/DashboardLayout/DashboardLayout";
import ProfilePage from "./features/studentProfile/pages/ProfilePage";
import ExamPage from "./features/exam/pages/ExamPage";
import AIChatPage from "./features/aiChat/pages/AIChatPage";
import ExamTest from "./features/examTest/pages/examTest";
import DetailsNewsPage from "./features/news/pages/DetailsNewsPage";
import ProtectedRoute from "./shared/components/ProtectedRoute";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomepageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="news/:id" element={<DetailsNewsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="exam" element={<ExamPage />} />
        <Route path="ai-chat" element={<AIChatPage />} />
      </Route>
      <Route
        path="/dashboard/exam-test"
        element={
          <ProtectedRoute>
            <ExamTest />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
