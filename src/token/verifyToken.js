import jwt  from "jsonwebtoken"
import { SECRET_KEY } from "./signToken.js"

export const verifyToken = (req, res, next) =>{
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1];

   
    try {
     const test = jwt.verify(token, SECRET_KEY)   
     console.log(test);
        next();
    } catch (error) {
        console.log('WRONG TOKEN '+error.message);
    }
}