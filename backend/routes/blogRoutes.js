import {Router} from "express"
import{createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog} from "../controllers/blogController.js"

const router = Router()

router.post("/create", createBlog)
router.get("/", getAllBlogs)
router.get("/:id", getBlogById)
router.put("/:id", updateBlog)
router.delete("/:id", deleteBlog)


export default router 