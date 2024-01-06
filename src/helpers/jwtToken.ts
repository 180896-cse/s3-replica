import jwt, { Algorithm } from "jsonwebtoken";
const privateKey = "abcdefghijklmnop";
const algorithm: Algorithm = "HS512";
const tokenLifeTime = 60 * 60 * 60;

export function creatToken(payload: Record<string, any>) {
  return jwt.sign(payload, privateKey, { algorithm, expiresIn: tokenLifeTime });
}

export function validateToken<T>(token: string): T {
  return jwt.decode(token) as T;
}
