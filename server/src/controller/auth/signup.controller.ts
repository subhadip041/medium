import { Context } from "hono"

export const signupController = (c:Context)=>{
    return c.json({msg:"from signup"})
}