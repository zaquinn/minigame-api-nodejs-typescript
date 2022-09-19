import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";

const authorizationToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers.authorization;

  if (!token) {
    return response
      .status(401)
      .json({ message: "Missing Authorization Token" });
  }

  try {
    const tokenSplit = token.split(" ")[1];

    jwt.verify(
      tokenSplit as string,
      process.env.SECRET_KEY as string,
      (err: any, decoded: any) => {
        request.userId = decoded.id;
        next();
      }
    );
  } catch (error) {
    return response
      .status(401)
      .json({ error: `${error}`, message: "Invalid Token" });
  }
};

export default authorizationToken;
