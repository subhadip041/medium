import { z } from "@hono/zod-openapi";

export const signinSchema = z.object({
 email: z.string().email(),
 password: z.string().min(6).max(10)
})


export const signupSchema = z.object({
 email: z.string().email(),
 password: z.string().min(6).max(10),
 name: z.string(),
})
