export async function loginAPI (url, dataAPI){
    try {
        const response = await fetch(`http://localhost:5000/api/${url}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(dataAPI)
        })
        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log('Error Fetch API Login')
        return
    }
}
export async function registAPI (url, dataAPI){
    try {
        const response = await fetch(`http://localhost:5000/api/${url}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(dataAPI)
        })
        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log('Error Fetch API Register')
        return
    }
}
export async function getTaskUser (url, dataAPI){
    try {
        const response = await fetch(`http://localhost:5000/api/${url}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(dataAPI)
        })
        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log('Error Fetch API Find Task User', error)
        return
    }
}