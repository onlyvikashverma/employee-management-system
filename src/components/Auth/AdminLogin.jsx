import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = ({ handleLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-[#0f1115]'>
            <div className='border-2 rounded-2xl border-emerald-600 bg-slate-900/50 backdrop-blur-md p-16 shadow-2xl relative max-w-md w-full'>
                <button 
                    onClick={() => navigate('/')}
                    className='absolute top-6 left-6 text-slate-400 hover:text-emerald-400 transition-colors'
                >
                    ← Back
                </button>
                <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
                    <div className='w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6'>
                        <span className='text-3xl'>👨‍💼</span>
                    </div>
                    <h2 className='text-3xl font-bold text-white mb-8 font-inter bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>Admin Login</h2>
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='w-full text-white bg-slate-800/50 outline-none border-2 border-slate-700 focus:border-emerald-500 py-3 px-6 rounded-full transition-all mb-4' 
                        type="email" 
                        placeholder='Admin Email' 
                    />
                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        className='w-full text-white bg-slate-800/50 outline-none border-2 border-slate-700 focus:border-emerald-500 py-3 px-6 rounded-full transition-all mb-6' 
                        type="password" 
                        placeholder='Password' 
                    />
                    <button className='w-full text-white font-bold bg-emerald-500 hover:bg-emerald-400 py-3 px-10 rounded-full shadow-lg transition-all duration-300'>
                        Login to Admin
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin
