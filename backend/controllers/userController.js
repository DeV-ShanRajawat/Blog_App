import userModel from "../models/userModel.js";


export const registerUser = async (req, res) => {
 let newUser = new userModel(req.body);
 await newUser.save();
 res.json({
    message: "User registered successfully",
    user:{
        name: newUser.name,
        email: newUser.email,
        avatar: newUser.avatar,
        _id: newUser._id
    }
 })
};

export const loginUser = async (req, res) => {
    let user=await userModel.findOne({email:req.body.email, password:req.body.password});
    if(user){
        res.json({
            message: "User logged in successfully",
            user:{
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                _id: user._id
            }
        })
    } else{
        res.json({
            message: "User not found or invalid credentials"
        })
    }
}