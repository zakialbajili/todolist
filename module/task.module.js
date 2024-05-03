import runQuery from '../helpers/config.js'
import {v4 as uuidv4} from 'uuid'
class _task{
    addTask=async(req)=>{
        try{
            const payload =  req.body
            const uuid = uuidv4()
            const uuidToStr = uuid.toString()
            const sql = 'INSERT INTO `task` (`idtask`, `iduser`,`nametask`, `typetask`, `status`, `started_at`, `finished_at`) VALUES (?,?,?,?,?,?,?)'
            const value = [`${uuidToStr}`, `${payload.iduser}`, `${payload.nametask}`, `${payload.typetask}`, `${payload.status}`, `${payload.started_at}`, `${payload.finished_at}`,]
            const data = await runQuery(sql, value)
            if(data){
                return{
                    status: true,
                    message:"SUCCESS CREATE TASK",
                    data: data
                }
            }else{
                return{
                    status: false,
                    code:422,
                    message:"CREATE TASK FAILED"
                }
            }
        }
        catch(err){
            console.log(err)
            return{
                status: false,
                code:500,
                message:"CREATE TASK MODULE IN TASK.MODULE ERROR"
            }
        }
    }
    findTaskUser=async(req)=>{
        try{
            const payload=req.body
            const sql = 'SELECT * FROM `task` WHERE `iduser`=?'
            const value = [`${payload.iduser}`]
            const data = await runQuery(sql, value)
            if(data){
                return{
                    status: true,
                    message:"FIND TASK SUCCESS",
                    data: data
                }
            }
        }
        catch(err){
            console.log(err)
            return{
                status: false,
                code:500,
                message:"CREATE TASK MODULE IN TASK.MODULE ERROR"
            }
        }
    }
    deleteTask= async(req)=>{
        try{
            const payload = req.body
            const sql = 'DELETE FROM `task` WHERE `idtask`=?'
            const value= [`${payload.idtask}`]
            const data = await runQuery(sql, value)
            if(data){
                return{
                    status: true,
                    message:"DELETE TASK SUCCESS",
                    data: data
                }
            }
        }
        catch(err){
            console.log(err)
            return{
                status: false,
                code:500,
                message:"DELETE TASK MODULE IN TASK.MODULE ERROR"
            }
        }
    }
}
export default new _task()