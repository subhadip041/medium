import { Hono } from 'hono'
import { apiV1 } from './routes/entry.route'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
const app = new Hono()

app.get('/', (c) => {
  const prisma = new PrismaClient().$extends(withAccelerate())
  return c.text('Hello Super saiyan')
})

app.route('/api/v1', apiV1)



export default app
