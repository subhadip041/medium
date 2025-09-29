import { Handler } from "hono";

export const postBlogs: Handler = (c)=>{
    return c.json({"msg":"post blogs"})
}

export const putBlogs: Handler = (c)=>{
    return c.json({"msg":"put blogs"})
}

export const getBlogs: Handler = (c)=>{
    const idPayload = c.req.param("id")
    return c.json({"msg":`get blogs ${idPayload}`})
}

export const bulkBlogs: Handler = (c)=>{
    return c.json({"msg":"bulk blogs"})
}