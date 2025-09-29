import { Handler } from 'hono'
export const signin: Handler = (c) => {
    return c.json({ msg: "from signin" })
}
