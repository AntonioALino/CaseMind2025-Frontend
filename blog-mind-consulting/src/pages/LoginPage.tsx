import React from "react";
import { PageComponent } from "../components/PageComponent";
import  LoginContainer  from "../components/Login/LoginContainer";

export const LoginPage: React.FC = () => {
  return (
    <>
    <PageComponent
              form={LoginContainer()}
    />
    </>
  );
};
