import { Context } from "hono"
import { signinSchema } from "../../types/auth.types"

export const signinController = async (c: Context) => {
    const signinPayload = await c.req.json()
    const signinPayloadCheck = signinSchema.safeParse(signinPayload)
    if (!signinPayloadCheck.success) {
        return c.json({ msg: "Bad request" }, 400)
    }

    return c.json({
        msg: {
            email: signinPayload.email,
            password: signinPayload.password
        }
    })

}