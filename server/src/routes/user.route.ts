import { Hono } from "hono";
import { signinController } from "../controller/auth/signin.controller";
import { signupController } from "../controller/auth/signup.controller";
export const userRoute = new Hono()

userRoute.get('/',(c)=>{
    return c.json({msg:"from v1 user"})
})

userRoute
.post('/signin',signinController)
.post('/signup',signupController)