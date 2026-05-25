import LoginContent from "@/components/LoginContent";
import { Suspense } from "react";


const LoginPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
};

export default LoginPage;
