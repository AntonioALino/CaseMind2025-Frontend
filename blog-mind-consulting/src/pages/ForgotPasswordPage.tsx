import React from "react";
import { PageComponent } from "../components/PageComponent";
import { ButtonPageComponent } from "../components/ButtonPageComponent";
import { FormsPageComponent } from "../components/FormsPageComponent";

export const ForgotPasswordPage: React.FC  = () => {

    const handleLogin = () => {
         console.log("teste");
    };

    return( 
        <div>
            <PageComponent
                onClick={handleLogin}
                form={
                    <FormsPageComponent
                        titleModal="Registrar"
                        formType="text"
                        placeholder="Digite seu email"
                        inputEmail={
                            <>
                            <p>Email</p>
                            <input
                                type="text"
                                placeholder="examplo@emailcom"
                                onChange={(e) => console.log(e.target.value)}
                            />
                            </>
                        }
                        
                        inputPassword={
                            <>
                            <p>Senha</p>
                            <input
                                type="password"
                                placeholder="***"
                                onChange={(e) => console.log(e.target.value)}
                            />
                            </>
                        }

                        inputConfirmPassword={
                            <>
                            <p>Confirmar senha</p>
                            <input
                                type="password"
                                placeholder="****"
                                onChange={(e) => console.log(e.target.value)} 
                            />
                            </>
                        }
                        
                    />
                }
                button={
                    <ButtonPageComponent
                        buttonTextProps="Alterar"
                        onClick={handleLogin}
                    />
                }
            />
                <a href="">Já tem cadastro? Clique aqui!</a>
        </div>
        );
}