import { Request } from "express";
import { iUser } from "./iUser";
import { Document } from "mongoose";

export interface iAuthenticatedUser extends Request {
  user?: Document<string, unknown, iUser>;
}
