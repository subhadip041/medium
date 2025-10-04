import { Context } from "hono"

export const blogController = (c:Context)=>{
    return c.json({msg:"from blog"})
}

export const bulkBlogController = (c:Context)=>{
    return c.json({msg:"from bulk blog"})
}

export const blogIdController = (c:Context)=>{
    const blogId = c.req.param('id')
    return c.json({blogId:blogId})
}