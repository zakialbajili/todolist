import m$task from '../module/task.module.js'
import response from '../helpers/response.js'
import { Router } from 'express'
const taskController = Router()
taskController.post('/add', async(req, res)=>{
    const data = await m$task.addTask(req)
    response.sendResponse(res, data)
})
taskController.get('/find', async(req, res)=>{
    const data = await m$task.findTaskUser(req)
    response.sendResponse(res, data)
})
taskController.delete('/delete', async(req, res)=>{
    const data = await m$task.deleteTask(req)
    response.sendResponse(res, data)
})
taskController.put('/edit', async(req, res)=>{
    const data = await m$task.editTask(req)
    response.sendResponse(res, data)
})
export default taskController