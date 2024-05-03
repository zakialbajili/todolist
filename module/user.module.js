import {v4 as uuidv4} from "uuid"
import bcrypt from 'bcrypt'
import runQuery from "../helpers/config.js";

class User {
    createUser= async(req)=>{
        try{
            const payload = req.body;
            const uuid = uuidv4()
            const uuidToStr = uuid.toString()
            const hashPassword = bcrypt.hashSync(payload.password, 15)
            const sql = 'INSERT INTO `user` (`iduser`, `email`, `username`, `name`, `password`) VALUES (?, ?, ?, ?, ?)'
            const values = [`${uuidToStr}`, `${payload.email}`, `${payload.username}`, `${payload.name}`, `${hashPassword}` ]
            await runQuery(sql, values)
            return{
                status:true,
                message:"regist user succes"
            }
        }
        catch(err){
            console.error
            return{
                status:false,
                data:(err)
            }
        }
    };
    getUser=async()=>{
        try{
            const sql = 'SELECT * FROM user'
            const data = await runQuery(sql);
            return{
                status:true,
                data:data
            }
        }
        catch(err){
            console.log('getUser module error: '+err)
        }
    }
    loginUser=async(req)=>{
        try{
            const payload=req.body
            const sqlFindUser = 'SELECT * FROM `user` WHERE `username`= ?'
            const valueFindUser=[`${payload.username}`]
            const user = await runQuery(sqlFindUser, valueFindUser)
            const dbPassword = user[0].password
            if(!user){
                return{
                    status:false,
                    code:404,
                    message:"User Not Found"
                }
            }
            const compare = bcrypt.compareSync(`${payload.password}`, dbPassword)
            if(compare){
                return{
                    status:true,
                    data:{
                        email:`${user[0].email}`,
                        username:`${user[0].username}`,
                        name:`${user[0].name}`
                    }
                }
            }
        }
        catch(err){
            console.log(err)
        }
    }
    updateUser= async(req)=>{
        try{
            const payload=req.body
            const sql= 'UPDATE `user` SET `username`=?, `email`=? WHERE `iduser`=?'
            const values=[`${payload.username}`, `${payload.email}`, `${payload.iduser}`]
            const update= await runQuery(sql, values)
            if(update){
                return{
                    status:true,
                    message:"UPDATE USER SUCCESS"
                }
            }
            else{
                return{
                    status:true,
                    message:"UPDATE USER FAILED"
                }
            }
        }
        catch(err){
            console.log(err)
        }
    }
    deleteUser=async(req)=>{
        try{
            const payload=req.body
            const sql='DELETE FROM `user` WHERE `iduser`=?'
            const value=[`${payload.iduser}`]
            const data = await runQuery(sql, value)
            if(data){
                return{
                    status: true,
                    message:"DELETE USER SUCCESS"
                }
            }
            else{
                return{
                    status: false,
                    code:404,
                    message:"DELETE USER FAILED"
                }
            }
        }
        catch(err){
            console.log(err)
        }
    }
}
export default new User()