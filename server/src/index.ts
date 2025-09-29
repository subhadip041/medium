import { Hono } from 'hono'
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from '@prisma/extension-accelerate'
import { user } from './routes/routes'
import { blog } from './routes/routes'


const app = new Hono<{
Bindings:{
   DATABASE_URL: string
}
}>()


app.get('/',(c)=>{
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
    return c.json({msg:"super saiyan"})

})
app.route('/api/v1/user',user)
app.route('/api/v1/blog',blog)

export default app
