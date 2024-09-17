import jwt from "../helpers/jwt";

export const authenticate = (req: any, res: any, next: any) => {
  const token = req.headers['authorization'].split(" ")[1];

  const tokenData = jwt.verifyToken(token);
  if (!tokenData) {
    throw new Error("token expired");
  }

  req.user = tokenData;
  next();
};
