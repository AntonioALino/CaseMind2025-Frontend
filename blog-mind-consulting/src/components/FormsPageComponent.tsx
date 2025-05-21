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
            <h3 className="text-center text-xl font-semibold mb-6">{titleModal}</h3>
            <form action="" method="post" className="w-full max-w-sm">
                {inputEmail}
                {inputPassword}
                {inputConfirmPassword}
            </form>
        </div>
    );
};