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
                if (data.length<1){
                    return{
                        status: false,
                        code:404,
                        message:"There no tasks in this profile"
                    }
                }
                return{
                    status: true,
                    message:"FIND TASK SUCCESS",
                    data: data
                }
            }
            else{
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
    editTask=async(req)=>{
        try{
            const payload = req.body
            // const sql = 'UPDATE `task` SET `name` WHERE `idtask`=?'
            const sqlFindTask = 'SELECT * FROM `task` WHERE `idtask`=?'
            const valueFindTask= [`${payload.idtask}`]
            const findTask = await runQuery(sqlFindTask, valueFindTask)
            if(findTask){
                if (findTask.length<1){
                    return{
                        status: false,
                        code:404,
                        message:"There no tasks in this profile"
                    }
                }
                let sqlEditUser = 'UPDATE `task` SET '
                let valuesEditTask = []
                if(payload.nametask){
                    sqlEditUser+='`nametask`=?, '
                    valuesEditTask.push(payload.nametask)
                }
                if(payload.typetask){
                    sqlEditUser+='`typetask`=?, '
                    valuesEditTask.push(payload.typetask)
                }
                if(payload.status){
                    sqlEditUser+='`status`=?, '
                    valuesEditTask.push(payload.status)
                }
                if(payload.created_at){
                    sqlEditUser+='`created_at`=?, '
                    valuesEditTask.push(payload.created_at)
                }
                if(payload.finished_at){
                    sqlEditUser+='`finished_at`=?, '
                    valuesEditTask.push(payload.finished_at)
                }
                sqlEditUser=sqlEditUser.slice(0, -2)
                sqlEditUser+=' WHERE `idtask`=?'
                valuesEditTask.push(payload.idtask)
                const resultEditTask= await runQuery(sqlEditUser, valuesEditTask)
                if(resultEditTask.length<1){
                    return{
                        status: false,
                        code:500,
                        message:"EDIT TASK MODULE IN TASK.MODULE ERROR"
                    }
                }
                return{
                    status: true,
                    message:"EDIT TASK SUCCESS",
                    data: resultEditTask
                }
            }
        }
        catch(err){
            console.log(err)
        }
    }
    deleteTask=async(req)=>{
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
                message:"DELETE TASK MODULE IN TASK.MODULE ERROR "
            }
        }
    }
}
export default new _task()