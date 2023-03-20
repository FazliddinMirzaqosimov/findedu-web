import React from "react";
import Login from "@/components/login/login";
import Auth from "@/modules/auth/auth";

const LoginPage = () => {
  return (
    <div>
      <Auth type="login" />
    </div>
  );
};

export default LoginPage;
