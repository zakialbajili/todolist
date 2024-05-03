import mysql2 from "mysql2/promise"
import dotenv from "dotenv"
dotenv.config({path:'../.env'});
const runQuery=async(sql,params)=>{
  try{
    const dbConfig = {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    };
    const pool = mysql2.createPool(dbConfig)
    const connection = await pool.getConnection()
    const [result] = await connection.execute(sql, params)
    connection.release();
    return result
  }catch(err){
    console.log(err)
  }
}
// connection.connect(function(err) {
//   if (err) {
//     console.error('Error connecting to database: ' + err.stack);
//     return;
//   }
//   console.log('Connected to database with connection id ' + connection.threadId);
// });
export default runQuery