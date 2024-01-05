import { userServices } from "../Services/user.Service"; 
import {Request, Response} from "express"

var user = new userServices();

const createUser = async (req:Request, res:Response) => {
    try {
        await user.createUser(req.body.userId, req.body.password)
        res.send("user created sucessfully!")
    } catch (error) {
        console.log(error);
        throw error;
    }
}

   
export{createUser};