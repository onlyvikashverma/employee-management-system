import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-6 animate-fadeIn'>
        
        {/* New Task Card */}
        <div className='animate-slideUp rounded-2xl bg-slate-900/40 backdrop-blur-md border border-slate-700/50 p-8 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2 group shadow-xl'>
            <div className='flex items-center justify-between mb-4'>
                <div className='w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-2xl group-hover:bg-yellow-500/20 transition-colors'>
                    ✨
                </div>
                <span className='text-yellow-500 text-sm font-bold tracking-wider uppercase'>New</span>
            </div>
            <h2 className='text-5xl font-black text-white group-hover:text-yellow-400 transition-colors'>{data.taskCounts.newTask}</h2>
            <h3 className='text-lg font-medium text-slate-400 mt-1'>Upcoming Tasks</h3>
        </div>

        {/* Accepted Card */}
        <div className='animate-slideUp rounded-2xl bg-slate-900/40 backdrop-blur-md border border-slate-700/50 p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 group shadow-xl' style={{ animationDelay: '0.1s' }}>
            <div className='flex items-center justify-between mb-4'>
                <div className='w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-2xl group-hover:bg-blue-500/20 transition-colors'>
                    🚀
                </div>
                <span className='text-blue-500 text-sm font-bold tracking-wider uppercase'>Accepted</span>
            </div>
            <h2 className='text-5xl font-black text-white group-hover:text-blue-400 transition-colors'>{data.taskCounts.active}</h2>
            <h3 className='text-lg font-medium text-slate-400 mt-1'>In Progress</h3>
        </div>

        {/* Completed Card */}
        <div className='animate-slideUp rounded-2xl bg-slate-900/40 backdrop-blur-md border border-slate-700/50 p-8 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 group shadow-xl' style={{ animationDelay: '0.2s' }}>
            <div className='flex items-center justify-between mb-4'>
                <div className='w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-2xl group-hover:bg-emerald-500/20 transition-colors'>
                    ✅
                </div>
                <span className='text-emerald-500 text-sm font-bold tracking-wider uppercase'>Done</span>
            </div>
            <h2 className='text-5xl font-black text-white group-hover:text-emerald-400 transition-colors'>{data.taskCounts.completed}</h2>
            <h3 className='text-lg font-medium text-slate-400 mt-1'>Success Stories</h3>
        </div>

        {/* Failed Card */}
        <div className='animate-slideUp rounded-2xl bg-slate-900/40 backdrop-blur-md border border-slate-700/50 p-8 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 group shadow-xl' style={{ animationDelay: '0.3s' }}>
            <div className='flex items-center justify-between mb-4'>
                <div className='w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-2xl group-hover:bg-red-500/20 transition-colors'>
                    ⚠️
                </div>
                <span className='text-red-500 text-sm font-bold tracking-wider uppercase'>Failed</span>
            </div>
            <h2 className='text-5xl font-black text-white group-hover:text-red-400 transition-colors'>{data.taskCounts.failed}</h2>
            <h3 className='text-lg font-medium text-slate-400 mt-1'>Blockers</h3>
        </div>

    </div>
  )
}

export default TaskListNumbers