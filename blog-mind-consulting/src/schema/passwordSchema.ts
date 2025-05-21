import {z} from 'zod'

export const passwordSchema = z.object({
  password: z.string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .max(100, "A senha deve ter no máximo 100 caracteres"),
  confirmPassword: z.string()
    .min(6, "A confirmação de senha deve ter no mínimo 6 caracteres")
    .max(100, "A confirmação de senha deve ter no máximo 100 caracteres"),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"], // Indica que o erro deve ser associado ao campo 'confirmPassword'
});