import {v4 as uuidv4} from 'uuid'
import runQuery from '../helpers/config.js'
class _team{
    createTeam=async(req)=>{
        try{
            const payload =  req.body
            const uuid = uuidv4()
            const uuidToStr = uuid.toString()
            const sql ='INSERT INTO `team`(`idteam`,`nameteam`,`description`) VALUE (?,?,?)'
            const value = [`${uuidToStr}`,`${payload.nameteam}`, `${payload.description}`]
            const data= await runQuery(sql, value)
            if (data){
                const sql = 'INSERT INTO `team_user` (`idteam`, `iduser`,`roleinteam`) VALUE (?,?,?)'
                const value = [`${uuidToStr}`, `${payload.iduser}`, 'admin']
                const result = await runQuery(sql, value)
                if(result){
                    return{
                        status: true,
                        message: "SUCCESS CREATE TEAM"
                    }
                }
            }
        }
        catch(err){
            console.log(err)
            return{
                status: false,
                code: 500,
                message: "CREATE TEAM MODULE TEAM ERROR"
            }
        }
    }
    addMember=async(req)=>{
        try{
            const payload = req.body
            const sql = 'SELECT `roleinteam` FROM `team_user` WHERE `iduser`=? AND `idteam`=?'
            const value = [`${payload.iduser}`, `${payload.idteam}`]
            const data = await runQuery(sql, value)
            const verification = async()=>{
                const sql = 'SELECT * FROM `team_user` WHERE `iduser`=? AND `idteam`=?'
                const value = [`${payload.idmember}`, `${payload.idteam}`]
                const result =await runQuery(sql, value)
                return result
            }
            if(data[0].roleinteam === "admin"){
                const resultVerification =await verification()
                if(resultVerification.length>0){
                    return{
                        status: false,
                        code: 401, 
                        message: "THIS PROFIL HAS JOINED IN THE TEAM"
                    }
                }
                const sql = 'INSERT INTO `team_user` (`idteam`, `iduser`) VALUE (?,?)'
                const value = [`${payload.idteam}`, `${payload.idmember}`]
                const result = await runQuery(sql, value)
                if (result){
                    return{
                        status: true,
                        message: "SUCCESS ADD MEMBER"
                    }
                }3
            }
            return{
                status: false,
                code: 403, 
                message: "SORRY YOU DON'T HAVE ACCESS TO ADD MEMBER"
            }
        }
        catch(err){
            console.log(err)
            return{
                status: false,
                code: 500,
                message: "ADD MEMBER IN MODULE TEAM ERROR"
            }
        }
    }
    myTeam=async(req)=>{
        try{
            const payload = req.body
            const sql = 'SELECT * FROM `team_user` WHERE `iduser`=?'
            const value = [`${payload.iduser}`]
            const data = await runQuery(sql, value)
            if(data){
                return{
                    status: true,
                    message: "SUCCESS FIND MY TEAM",
                    data:data
                }
            }
        }
        catch(err){
            console.log(err)
            return{
                status: false,
                code: 500,
                message: "FIND TEAM IN MODULE TEAM ERROR"
            }
        }
    }
}
export default new _team()