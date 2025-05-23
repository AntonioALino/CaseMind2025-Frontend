// src/schemas/loginSchema.ts
import { z } from 'zod';

export const loginSchema = z.object({
  password: z.string().min(1, 'Senha é obrigatória'),
  email: z.string().email('E-mail inválido'),
});

export type LoginData = z.infer<typeof loginSchema>;
