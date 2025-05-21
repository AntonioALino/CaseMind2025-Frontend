import React from "react";
import { PageComponent } from "../components/PageComponent";
import RecoverPasswordContainer from "../components/RecoverPassword/RecoverPasswordContainer";

export const ForgotPasswordPage: React.FC  = () => {
    return( 
            <PageComponent
                form={RecoverPasswordContainer()}
            />
                
        );
}