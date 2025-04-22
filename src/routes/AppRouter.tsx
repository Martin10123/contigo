import { LoginAuth } from "../modules/auth/pages/LoginAuth";
import { RecoverPassword } from "../modules/auth/pages/RecoverPassword";
import { RegisterAuth } from "../modules/auth/pages/RegisterAuth";
import { WelcomeAuth } from "../modules/auth/pages/WelcomeAuth";
import { Navigate, Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/auth/welcome" element={<WelcomeAuth />} />
          <Route path="/auth/login" element={<LoginAuth />} />
          <Route path="/auth/register" element={<RegisterAuth />} />
          <Route path="/auth/recover-password" element={<RecoverPassword />} />

          <Route path="/*" element={<Navigate to="/auth/welcome" />} />
        </Routes>
      </div>
    </>
  );
};
