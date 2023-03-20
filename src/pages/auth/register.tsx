import Login from "@/components/login/login";
import Auth from "@/modules/auth/auth";
import React from "react";

const register = () => {
  return (
    <div>
      <Auth type="register" />
    </div>
  );
};

export default register;
