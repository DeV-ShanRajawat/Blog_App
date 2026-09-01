import blogModel from '../models/blogModel.js';

export const createBlog = async (req, res) => {
    let newBlog = new blogModel(req.body);
    await newBlog.save();
    res.json({
        message: "Blog created successfully",
        blog:newBlog
    })
}

export const getAllBlogs = async (req, res) => {
    let blogs = await blogModel.find().populate("user");
    res.json(blogs);
}

export const getBlogById = async (req,res)=>{
    let blog = await blogModel.findById(req.params.id);
    res.json(blog);
}


export const updateBlog = async (req,res)=>{
    await blogModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        message: "Blog updated successfully"
    })
}



export const deleteBlog = async (req,res)=>{
    await blogModel.findByIdAndDelete(req.params.id);
    res.json({
        message: "Blog deleted successfully"
    })
}