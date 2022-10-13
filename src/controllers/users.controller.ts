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
      message: 'user created',
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
      message: 'All the users are here',
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
      message: 'the requierd user is here',
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
      message: 'the user updated ',
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
      message: 'the user deleted',
    });
  } catch (error) {
    next(error);
  }
};
