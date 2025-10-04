import { Context } from "hono"
import { signupSchema } from "../../types/auth.types"
import { sign } from 'hono/jwt'


export const signupController = async (c:Context)=>{
    const signupPayload = await c.req.json()
    const signupPayloadCheck = signupSchema.safeParse(signupPayload)

    if(!signupPayloadCheck.success){
                return c.json({ msg: "Bad request" }, 400)

    }
    const jwtSecret = c.env.JWT_SECRET
    const jwtPaylaod = {
        userId: signupPayload.email,
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }
    const token = await sign(jwtPaylaod, jwtSecret);
    return c.json({
        msg:"signup successful",
        token:token
    }, 200)
}