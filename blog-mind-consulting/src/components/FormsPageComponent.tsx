import React from "react";

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
        <div>
            <h3>{titleModal}</h3>
            <form action="" method="post">
                {inputEmail}
                {inputPassword}
                {inputConfirmPassword}
            </form>
        </div>
    );
};