import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string()
    .min(1, "O e-mail é obrigatório")
    .email("Formato de e-mail inválido"), // Validação de formato de e-mail
  password: z.string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .max(100, "A senha deve ter no máximo 100 caracteres"),
  confirmPassword: z.string()
    .min(6, "A confirmação de senha deve ter no mínimo 6 caracteres")
    .max(100, "A confirmação de senha deve ter no máximo 100 caracteres"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

export type RegisterData = z.infer<typeof registerSchema>;
