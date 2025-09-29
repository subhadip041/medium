import { Hono } from 'hono'
import { signin } from '../controller/auth.signin.controller'
import { signup } from '../controller/auth.signup.controller'
import { getBlogs, putBlogs, postBlogs, bulkBlogs } from '../controller/blog.controller'

export const blog = new Hono()
export const user = new Hono()

blog
    .get('/:id', getBlogs)
    .get('/bulk', bulkBlogs)
    .post('/', postBlogs)
    .put('/', putBlogs)

user
    .post('/signin', signin)
    .post('/signup', signup)



