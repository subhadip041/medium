import { Hono } from "hono";
import { blogController, blogIdController, bulkBlogController } from "../controller/blog.controller";

export const blogRoute = new Hono()

blogRoute
.get('/',blogController)
.get('/bulk', bulkBlogController)
.get('/:id', blogIdController)