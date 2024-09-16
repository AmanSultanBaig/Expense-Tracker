import { sign, verify } from "jsonwebtoken";
import { config } from "dotenv";
config({ path: ".env" });

const secretKey = process.env.SECRET_KEY || "";

const createToken = (payload: any) => {
  return sign(payload, secretKey, { expiresIn: "6h" });
};

const verifyToken = (token: string) => {
  return verify(token, secretKey);
};

export default { createToken, verifyToken };