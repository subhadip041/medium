import { Context } from "hono"

export const signinController = async(c:Context)=>{
    const signinPayload = await c.req.json()
    return c.json({msg: {
        email: signinPayload.email,
        password: signinPayload.password
    }})
}