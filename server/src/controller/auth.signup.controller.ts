import { Handler } from 'hono'
export const signup: Handler = (c) => {
    return c.json({ msg: "from signup" })
}
