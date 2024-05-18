"use client"
import React from 'react';
import {useState} from 'react'
import navigate from "@/helpers/action"
import {loginAPI} from '@/helpers/api';
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] =useState('');
    const handleForm = async(event)=>{
        event.preventDefault();
        try {
            const dataAPI = {
                'username':`${username}`,
                'password': `${password}`
            }
            const response = await loginAPI('login', dataAPI)
            if (response) {
                navigate('/dashboard')
            } else {
                console.error('Login failed');
            }
        
        } catch (error) {
            console.log('Handle Form Error', error)
            return
        }
    }
    return (
        <div className=" min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-indigo-900">
            <div className=" bg-white/10 min-w-[30vw] backdrop-blur-lg border border-white/20 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 text-center">.todolist</h2>
                <form className="space-y-4" onSubmit={handleForm} >
                    <div>
                        <label htmlFor="username" className="block ">Username</label>
                        <input 
                            type="username"
                            id="username"
                            name="username"
                            value={username}
                            placeholder="username"
                            onChange={(e)=>setUsername(e.target.value)}
                            className="w-full border rounded-md py-2 px-3 text-gray-700"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block ">Password</label>
                        <input
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password} 
                            placeholder="********" 
                            onChange={(e)=>setPassword(e.target.value)}
                            className="w-full border rounded-md py-2 px-3 text-gray-700"/>
                    </div>
                    <button type="submit" className="w-full bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-700 border border-green-900/70 transition-colors">Login</button>
                </form>
                <p className="mt-10 text-center text-sm">
                    You don&apos;t have account?
                    <a href="/regist" className="font-semibold leading-6 text-green-500"> Let&apos;s Sign Up!</a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
