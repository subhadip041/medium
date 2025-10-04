import { z } from "@hono/zod-openapi";

const signinSchema = z.object({
 email: z.email(),
 password: z.string().min(6).max(10)
})
