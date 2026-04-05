import React from 'react'
import { useNavigate } from 'react-router-dom'

const RoleSelection = () => {
    const navigate = useNavigate()

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-transparent animate-fadeIn'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 p-10 max-w-5xl w-full'>
                
                {/* Admin Card */}
                <div 
                    onClick={() => navigate('/admin-login')}
                    className='animate-slideUp group cursor-pointer bg-slate-900/40 backdrop-blur-xl p-12 rounded-[2rem] border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-3 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden'
                >
                    <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                    <div className='w-24 h-24 bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-inner'>
                        <span className='text-5xl filter drop-shadow-md'>👨‍💼</span>
                    </div>
                    <h2 className='text-4xl font-black mb-4 text-white group-hover:text-emerald-400 transition-colors tracking-tight font-inter'>Admin Portal</h2>
                    <p className='text-slate-400 text-center text-lg leading-relaxed max-w-xs'>
                        Manage tasks, track performance, and oversee the entire ecosystem with precision.
                    </p>
                    <div className='mt-8 flex items-center text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform'>
                        Enter Portal <span className='ml-2'>→</span>
                    </div>
                </div>

                {/* Employee Card */}
                <div 
                    onClick={() => navigate('/employee-login')}
                    className='animate-slideUp group cursor-pointer bg-slate-900/40 backdrop-blur-xl p-12 rounded-[2rem] border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-3 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden'
                    style={{ animationDelay: '0.1s' }}
                >
                    <div className='absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                    <div className='w-24 h-24 bg-indigo-500/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-indigo-500 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500 shadow-inner'>
                        <span className='text-5xl filter drop-shadow-md'>👨‍💻</span>
                    </div>
                    <h2 className='text-4xl font-black mb-4 text-white group-hover:text-indigo-400 transition-colors tracking-tight font-inter'>Employee Portal</h2>
                    <p className='text-slate-400 text-center text-lg leading-relaxed max-w-xs'>
                        Access your workspace, manage your workload, and achieve your daily objectives.
                    </p>
                    <div className='mt-8 flex items-center text-indigo-400 font-semibold group-hover:translate-x-2 transition-transform'>
                        Enter Portal <span className='ml-2'>→</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RoleSelection
