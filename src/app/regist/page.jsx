"use client"
import React, {useState} from 'react';
import {registAPI} from '@/helpers/api';
import navigate from '@/helpers/action';
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleForm = async (event)=>{
        event.preventDefault()
        try {
            const dataAPI = {
                'email':`${email}`,
                'name': `${fullname}`,
                'username':`${username}`,
                'password': `${password}`
            }
            const response = await registAPI('regis',dataAPI)
            if(response){
                navigate('/regist')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-indigo-900">
            <div className="min-w-[30vw] bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-lg shadow-lg sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-3xl font-semibold mb-4 text-center">.todolist</h2>
                <form className="space-y-4" onSubmit={handleForm}>
                    <div>
                        <label htmlFor="email" className="block ">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="user@email.id" className="w-full border rounded-md py-2 px-3 text-gray-700"/>
                    </div>
                    <div>
                        <label htmlFor="name" className="block ">Full Name</label>
                        <input type="name" id="name" name="name" value={fullname} onChange={(e)=>setFullname(e.target.value)} placeholder="Full Name" className="w-full border rounded-md py-2 px-3 text-gray-700"/>
                    </div>
                    <div>
                        <label htmlFor="username" className="block ">Username</label>
                        <input type="username" id="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" className="w-full border rounded-md py-2 px-3 text-gray-700"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block ">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="********" className="w-full border rounded-md py-2 px-3 text-gray-700"/>
                    </div>
                <button type="submit" className="w-full bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-700 border border-green-900/70 transition-colors">Submit</button>
                </form>
                <p className="mt-10 text-center text-sm">
                    You have account?
                    <a href="/login" className="font-semibold leading-6 text-green-500"> Let&apos;s Sign In!</a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
