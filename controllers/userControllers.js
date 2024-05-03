import {Router} from "express";
import m$user from "../module/user.module.js"
import response from "../helpers/response.js";
const userController=Router();
userController.post('/regis', async(req, res)=>{
    const data = await m$user.createUser(req)
    response.sendResponse(res, data)
})
userController.get('/user', async(req, res)=>{
    const data = await m$user.getUser()
    response.sendResponse(res, data)
})
userController.get('/login', async( req, res)=>{
    const data = await m$user.loginUser(req)
    response.sendResponse(res, data)
})
userController.put('/update', async(req, res)=>{
    const data = await m$user.updateUser(req)
    response.sendResponse(res, data)
})
userController.delete('/delete', async(req, res)=>{
    const data = await m$user.deleteUser(req)
    response.sendResponse(res, data)
})
export default userController