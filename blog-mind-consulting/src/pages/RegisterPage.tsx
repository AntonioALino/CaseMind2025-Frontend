import React from "react";
import { PageComponent } from "../components/PageComponent";
import RegisterContainer from "../components/Register/RegisterContainer";

export const RegisterPage : React.FC  = () => {

    return( 
            <PageComponent
                form={RegisterContainer()}
            />
        );
}