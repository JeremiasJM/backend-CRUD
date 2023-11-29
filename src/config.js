import dotenv from "dotenv";
dotenv.config();

export const HOST = process.env.HOST;
export const PORT = process.env.PORT;
export const DB = process.env.DATABASE;
export const USER = process.env.USER;
export const PASSWORD = process.env.PASSWORD;
