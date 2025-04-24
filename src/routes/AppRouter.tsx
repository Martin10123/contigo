import { HomePage } from "../modules/home/HomePage";
import { LoginAuth } from "../modules/auth/pages/LoginAuth";
import { RecoverPassword } from "../modules/auth/pages/RecoverPassword";
import { RegisterAuth } from "../modules/auth/pages/RegisterAuth";
import { WelcomeAuth } from "../modules/auth/pages/WelcomeAuth";
import { Navigate, Route, Routes } from "react-router";
import { DailyPage } from "../modules/daily/DailyPage";

export const AppRouter = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/auth/welcome" element={<WelcomeAuth />} />
          <Route path="/auth/login" element={<LoginAuth />} />
          <Route path="/auth/register" element={<RegisterAuth />} />
          <Route path="/auth/recover-password" element={<RecoverPassword />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/daily" element={<DailyPage />} />

          <Route path="/*" element={<Navigate to="/auth/welcome" />} />
        </Routes>
      </div>
    </>
  );
};
