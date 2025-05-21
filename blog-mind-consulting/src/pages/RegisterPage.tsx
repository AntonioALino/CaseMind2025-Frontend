import React from "react";
import { PageComponent } from "../components/PageComponent";
import { ButtonPageComponent } from "../components/ButtonPageComponent";
import { FormsPageComponent } from "../components/FormsPageComponent";

export const RegisterPage : React.FC  = () => {

    const handleLogin = () => {
         console.log("teste");
    };

    return( 
            <PageComponent
                onClick={handleLogin}
                form={<FormsPageComponent
                    titleModal="Registrar"
                    formType="text"
                    placeholder="Digite seu email"
                    inputEmail={<>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="text"
                            placeholder="examplo@emailcom"
                            onChange={(e) => console.log(e.target.value)} 
                            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                            />
                    </>}

                    inputPassword={<>
                        <label className="block mb-1 font-medium">Senha</label>
                        <input
                            type="password"
                            placeholder="***"
                            onChange={(e) => console.log(e.target.value)} 
                            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black" 
                            />
                            
                    </>}

                    inputConfirmPassword={<>
                        <label className="block mb-1 font-medium">Confirmar senha</label>
                        <input
                            type="password"
                            placeholder="****"
                            onChange={(e) => console.log(e.target.value)} 
                            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black" />
                    </>} />}
                button={<ButtonPageComponent
                    buttonTextProps="Criar conta"
                    onClick={handleLogin} />}  
                    
                    link={"#"} textLink={"Já tem cadastro? CLique aqui!"}            />
             
        );
}