import { createPool } from "mysql2";
export const connect =createPool({
    host:'localhost',
    user:'root',
    password:'Jyoti@28',
    database:'wool'
}).promise();