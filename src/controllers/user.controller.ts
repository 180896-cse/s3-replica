import { userServices } from "../services/user.service";
import { NextFunction, Request, Response } from "express";

const user = new userServices();
/**
 *
 * @param req
 * @param res
 * @param next
 */
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res
      .status(201)
      .send(await user.createUser(req.body.userId, req.body.password));
  } catch (error) {
    next(error);
  }
};
/**
 *
 * @param req
 * @param res
 * @param next
 */

const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await user.validateLogin(req.body.userId, req.body.password);

    res.status(200).send(token);
  } catch (error) {
    next(error);
  }
};

export { createUser, validateUser };
