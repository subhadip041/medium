import { Context } from "hono"
import { signinSchema } from "../../types/auth.types"
import { sign } from "hono/jwt"

export const signinController = async (c: Context) => {
    const signinPayload = await c.req.json()
    const signinPayloadCheck = signinSchema.safeParse(signinPayload)
    if (!signinPayloadCheck.success) {
        return c.json({ msg: "Bad request" }, 400)
    }
    const jwtSecret = c.env.JWT_SECRET
    const jwtPaylaod = {
        userId: signinPayload.email,
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }
    const token = await sign(jwtPaylaod,jwtSecret)
    return c.json({
        msg:"signin successful",
        token:token
    }, 200)

}