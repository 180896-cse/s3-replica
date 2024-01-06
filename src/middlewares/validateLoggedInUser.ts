import { NextFunction, Request, Response } from "express";
import { validateToken } from "../helpers/jwtToken";
import { getUserByDbId } from "../services/user.service";

export async function validateLoggedinUser(
  req: any,
  res: Response,
  next: NextFunction
) {
  const [, authorizationToken] =
    req.headers.authorization?.split("Bearer ") || [];
  if (!authorizationToken) {
    return res.status(401).send("Authorization token missing");
  }
  try {
    const decodeToken = validateToken<{ id: string }>(authorizationToken);
    const tokenUser = await getUserByDbId(decodeToken.id);
    req.user = tokenUser;
    next();
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
}
