import { NextFunction, Request, Response } from 'express';
import { ProjectErrorException } from '../commons/exceptions';
import r from '../commons/returnData';

const errorHandlers = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ProjectErrorException) {
    return res.status(err.statusCode).send(r.fail(err.statusCode, err.message));
  }
  return res.status(500).send(r.fail(500, (err as Error).message));
};

export default errorHandlers;
