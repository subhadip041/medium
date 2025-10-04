import { Context } from "hono"
import { signupSchema } from "../../types/auth.types"



export const signupController = async (c:Context)=>{
    const signupPayload = await c.req.json()
    const signupPayloadCheck = signupSchema.safeParse(signupPayload)

    if(!signupPayloadCheck.success){
                return c.json({ msg: "Bad request" }, 400)

    }
    return c.json({msg:"signup successfull"})
}