import React, { useState } from "react";
import { api } from "../../services/api";
import { registerSchema, type RegisterData } from "../../schema/registerSchema";
import { toast, ToastContainer } from "react-toastify";
import { InputComponent } from "../InputComponent";
import { ButtonPageComponent } from "../ButtonPageComponent";


export default function RecoverPasswordContainer() {
    const [form, setForm] = useState<RegisterData>({email: '', password: '', confirmPassword: ''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
    const payload = {
        email: form.email,
        password: form.password,
    };

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        const result = registerSchema.safeParse(form);

        if (!result.success) {
                const firstError = result.error.errors[0].message;
                toast.error(firstError); 
                return;
        }

        try{
            const response = await api.patch('users/password/:id', payload);
            setForm({ email: '', password: '', confirmPassword: '' });

            toast.success('Conta criada com sucesso!')
        } catch (err: any) {
            toast.error("Erro ao criar conta. Verifique seus dados.")

        }
    }

        return(
            <>
            <div className="w-100">
                <h2 className="text-center text-xl font-semibold mb-6">Esqueci a senha</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                      <InputComponent
                          titleInput="Email"
                          name="email"
                          value={form.email}
                          type="text"
                          onChange={handleChange}
                          placeholder="examplo@email.com"
                      />
    
                      <InputComponent
                          titleInput="Senha"
                          name="password"
                          value={form.password}
                          type="password"
                          onChange={handleChange}
                          placeholder="****"
                      />

                      <InputComponent
                          titleInput="Confirmar senha"
                          name="confirmPassword"
                          value={form.confirmPassword}
                          type="password"
                          onChange={handleChange}
                          placeholder="****"
                      />
    
                      <ButtonPageComponent 
                          buttonTextProps={"Alterar"}
                      />

                    <div className="text-center">
                        <a href="/login" className="text-center text-black-500 hover:underline">Já possui uma cadastro? Clique aqui!</a>
                    </div>
                    
                </form>
            </div>    
                <ToastContainer position="bottom-right" autoClose={3000}/>
            </>
        )

}