import db from '../database';
import User from '../types/user.type';
import config from '../config';
import bcrypt from 'bcrypt';

const hashPassword =(password :string)=> {
  const salt = parseInt(config.salt as string);
  return bcrypt.hashSync(`${password}${config.pepper}`, salt);
}
class UserModel {
  // creating all required functions for User Model ,{ create user ,get user, ......}

  //create User
  async create(user: User): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `INSERT INTO users(email, user_name, first_name, last_name, password) values ($1, $2, $3, $4, $5) RETURNING *`;
      const result = await connection.query(sql, [
        user.email,
        user.user_name,
        user.first_name,
        user.last_name,
        hashPassword(user.password),
      ]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to create ${user.user_name}: ${(error as Error).message}`
      );
    }
  }

  // get all users
  async getAllUsers(): Promise<User[]> {
    try {
      const connection = await db.connect();
      const sql = `SELECT * FROM users`;
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Error can't get all users ${(error as Error).message}`);
    }
  }
  // get specific user
  async getUserById(id: string): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `SELECT * FROM users WHERE id=($1)`;
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to get user with id ${id}: ${(error as Error).message}`
      );
    }
  }
  // update user
  async updateUserById(user: User): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `UPDATE users SET email=$1, user_name=$2, first_name=$3, last_name=$4, password=$5 WHERE id=($6) 
      RETURNING *`;
      const result = await connection.query(sql, [
        user.email,
        user.user_name,
        user.first_name,
        user.last_name,
        hashPassword(user.password),
        user.id,
      ]);
      connection.release();
      console.log('the update', result.rows[0]);
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to update user ${user.user_name}: ${(error as Error).message}`
      );
    }
  }
  // delete user
  async deleteUserById(id: string): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `DELETE FROM users WHERE id=($1) RETURNING *`;
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to delete user ${id}: ${(error as Error).message}`
      );
    }
  }
  // authenticate user
}
export default UserModel;
