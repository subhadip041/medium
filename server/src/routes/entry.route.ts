import { Hono } from "hono";
import { userRoute } from "./user.route";
import { blogRoute } from "./blog.route";

export const apiV1 = new Hono()

apiV1.get('/',(c)=>{
    return c.json({msg:"from v1 server"})
})

apiV1.route('/user',userRoute)
apiV1.route('/blog',blogRoute)