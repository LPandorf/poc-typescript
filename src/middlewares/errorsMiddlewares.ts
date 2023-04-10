import { Request, Response, NextFunction } from "express";

interface ApplicationError extends Error {status?: number};

const handleErrors = (err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
  if (err.status) {
    return res.status(err.status).send({ name: err.name, message: err.message });
  }
  return res.status(500).send({message: "Internal Server Error"});
};

export default {handleErrors};