import React from "react";
import {PageComponent}  from "../components/PageComponent";
import { ButtonPageComponent } from "../components/ButtonPageComponent";
import { FormsPageComponent } from "../components/FormsPageComponent";

export const LoginPage: React.FC = () => {
    const handleLogin = () => {
        // Handle login logic here
        console.log("Login button clicked");
    };

    return (
    <div>
        <>
        <PageComponent
            onClick={handleLogin}
            form={
                <FormsPageComponent
                    titleModal="Conectar"
                    formType="text"
                    placeholder="Digite seu email"
                    inputEmail={
                        <>
                        <p>Email</p>
                        <input
                            type="text"
                            placeholder="example@email.com"
                            onChange={(e) => console.log(e.target.value)}
                        />
                        </>
                    }
                    
                    inputPassword={
                        <>
                        <p>Senha</p>
                        <input
                            type="password"
                            placeholder="****"
                            onChange={(e) => console.log(e.target.value)}
                        />
                        <a href="#">Esqueceu a senha?</a>
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
        <a href="">Novo usuário? Clique aqui!</a>
        </>
    </div>
    );
}