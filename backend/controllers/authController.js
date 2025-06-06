  import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
 


// register controllers   
export const register = async(req,res) => {  

try {
    // hashing password  
 
    const salt = bcrypt.genSaltSync(10) 
    const hash = bcrypt.hashSync(req.body.password, salt) 

    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hash,
        photo:req.body.photo,
    });

    await newUser.save();
    res.status(200).json({success:true, message:"successfully created"});
   } catch (err) {

    res.status(500).json({success:false, message:" failed.  try again"});
    console.log(err);
   }
};

// login of user controller
export const login = async(req,res) => {

    const email = req.body.email
    try {
    
        const user = await User.findOne({email})

        if(!user) {
            return res.status(404).json({success:false, message:"User Not Found"});
        }


        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);

        if(!checkCorrectPassword) {
            return res.status(401).json({success:false, message:"Incorrect Email or Password"});
        }

        const { password, role, ...rest } = user._doc

        // jwt token

        const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY, { expiresIn: '15d'} );


        // SET TOKEN IN THE BROWSER COOKIES AND SEND THE RESPONSE TO THE CLIENT

        res.cookie('accessToken', token, {
            httpsOnly: true,
            expires:token.expiresIn
        }).status(200).json({token, role, success:true, message:"Successfully login", data:{...rest} });

        console.log(token);


     } catch (err) {
    
        res.status(500).json({success:false, message:"Failed to login"});
        console.log(err);
     }
};
