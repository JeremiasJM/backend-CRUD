import mysql from "promise-mysql";
import {HOST,DB,USER,PORT,PASSWORD} from "../config.js";

const connection = mysql.createConnection({
  host:HOST,
  port:PORT,
  user:USER,
  password: PASSWORD ,
  database: DB,
  multipleStatements:true
});

const getConnection = () => {
  return connection;
};

export const database = {
  getConnection,
};
