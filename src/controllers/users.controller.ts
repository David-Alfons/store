import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/user.model';

const userModel = new UserModel();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userModel.create(req.body);
    res.json({
      status: 'success',
      data: { ...user },
      message: 'Hello World from users',
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userModel.getAllUsers();
    res.json({
      status: 'success',
      data: users,
      message: 'Hello World from users',
    });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userModel.getUserById(
      req.params.id as unknown as string
    );
    res.json({
      status: 'success',
      data: user,
      message: 'Hello World from email',
    });
  } catch (error) {
    next(error);
  }
};

export const updateUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userModel.updateUserById(req.body);
    res.json({
      status: 'success',
      data: user,
      message: 'Hello World from update',
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userModel.deleteUserById(
      req.params.id as unknown as string
    );
    res.json({
      status: 'success',
      data: user,
      message: 'Hello World from email',
    });
  } catch (error) {
    next(error);
  }
};
