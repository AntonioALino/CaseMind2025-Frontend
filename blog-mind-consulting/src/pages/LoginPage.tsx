import React from "react";
import {PageComponent}  from "../components/PageComponent";
import { ButtonPageComponent } from "../components/ButtonPageComponent";
import { FormsPageComponent } from "../components/FormsPageComponent";
import '../styles/teste.css';

export const LoginPage: React.FC = () => {
    const handleLogin = () => {
        // Handle login logic here
        console.log("Login button clicked");
    };

    return (
    <div className="login-container">
        <PageComponent
            onClick={handleLogin}
            form={
                <FormsPageComponent
                    titleModal="Acessar"
                    formType="text"
                    placeholder="Digite seu email"
                    inputEmail={
                        <>
                        <p>Email</p>
                        <input
                            type="text"
                            placeholder="Digite seu email"
                            onChange={(e) => console.log(e.target.value)}
                        />
                        </>
                    }
                    
                    inputPassword={
                        <>
                        <p>Senha</p>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            onChange={(e) => console.log(e.target.value)}
                        />
                        </>
                    }
                    
                />
            }
            button={
                <ButtonPageComponent
                    buttonTextProps="Entrar"
                    onClick={handleLogin}
                />
            }
        
        />
    </div>
    );
}