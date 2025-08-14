const jwt = require("jsonwebtoken");

const User = require("../models/userModel");
const authMiddleware = async (req , res, next) =>{
    const { authorization } = req.headers;
    // console.log(authorization);
    const token = authorization.split(" ")[1];
    const userData = await jwt.verify(token, process.env.SECRET_KEY);
    // console.log(userData)
    if(!userData){
        return res.status(401).json({ message: "Unauthorized" });
    }
     const {_id} = userData.user;
    // console.log("Console.log",_id);

    const user = await User.find({_id});
    // console.log(user);

    req.user = user;

    // req.user = user;


    
   
  

    next();
}
module.exports = authMiddleware;