import jwt from "../helpers/jwt";

export const authenticate = (req: any, res: any, next: any) => {
  if (req.headers["authorization"]) {
    const token = req.headers["authorization"].split(" ")[1];

    const tokenData = jwt.verifyToken(token);
    if (!tokenData) {
      return res.status(401).json({ message: "Token expired" });
    }

    req.user = tokenData;
    return next();
  }

  return res.status(401).json({ message: "Unauthorized" });
};
