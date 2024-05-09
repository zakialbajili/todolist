import m$team from '../module/team.module.js'
import response from '../helpers/response.js'
import { Router } from 'express'
const teamController = Router()
teamController.post('/create', async(req, res)=>{
    const data = await m$team.createTeam(req)
    response.sendResponse(res, data)
})
teamController.post('/add', async(req, res)=>{
    const data = await m$team.addMember(req)
    response.sendResponse(res, data)
})
teamController.get('/myTeam', async(req, res)=>{
    const data = await m$team.myTeam(req)
    response.sendResponse(res, data)
})
export default teamController