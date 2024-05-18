"use client"
import { useState } from "react"
import { getTaskUser } from "@/helpers/api"
const Body = ()=>{
    const [taskData, setTaskData]=useState([])
    const fetchAPI=async()=>{
        try {
            const dataAPI={
                "iduser":"9ef5d507-bfea-4274-bb1a-b89fbcd22d40"
            }
            const response = await getTaskUser('task/find', dataAPI)
            if(response){
                const data = await response
                setTaskData(data)
                console.log(taskData)
            }
        } catch (error) {
            console.log(error)
        }
    }
    fetchAPI()
    return(
        <main className="pt-20 bg-gradient-to-t to-slate-900 from-indigo-900">
            <div className="lg:container md:mx-auto flex flex-row min-h-screen border-x border-white/20">
                <div className="">INI PANEL</div>
                <div className="min-w-[30vh] flex flex-column">
                </div>
                
            </div>
        </main>
    )
}
export default Body