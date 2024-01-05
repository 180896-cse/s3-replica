import { bucketServices } from "../Services/bucket.Service"; 
import {Request, Response} from "express"

var bucket = new bucketServices();

const createBucket = async (req:Request, res:Response) => {
    try {
        await bucket.createBucket(req.body.userId, req.body.bucketName)
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const listBuckets =async (req:Request, res:Response) => {
    try{
        return res.send(await bucket.listBucket());
    }catch(error){
        console.log(error);
        throw error;
    }
}
   
export{createBucket,listBuckets};