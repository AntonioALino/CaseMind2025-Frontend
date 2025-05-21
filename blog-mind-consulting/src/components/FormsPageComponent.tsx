import React from "react";
import '../styles/teste.css'

interface FormsPageProps {
    titleModal: string;
    formType: string;
    placeholder: string;
    inputEmail?: React.ReactNode;
    inputPassword?: React.ReactNode;
    inputConfirmPassword?: React.ReactNode;  
}


export const FormsPageComponent: React.FC<FormsPageProps> = ({
    titleModal,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
}) => {
    return (
        <div className="login-right">
            <h3>{titleModal}</h3>
            <form action="" method="post" className="login-form">
                {inputEmail}
                {inputPassword}
                {inputConfirmPassword}
            </form>
        </div>
    );
};