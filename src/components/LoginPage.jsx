import { Suspense } from "react";
import LoginForm from "./LoginForm";


const LoginPage = () => {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading Login...</div>}>
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;