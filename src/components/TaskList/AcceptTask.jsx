import React from 'react'

const AcceptTask = ({data, updateTaskStatus}) => {
  const isUrgent = new Date(data.date) <= new Date();

  return (
    <div className={`flex-shrink-0 h-full w-[340px] bg-slate-800/80 backdrop-blur-md rounded-2xl border transition-all duration-500 hover:-translate-y-3 flex flex-col justify-between p-7 relative overflow-hidden group shadow-xl ${isUrgent ? 'border-amber-500/30' : 'border-slate-700'}`}>
            
            {isUrgent && (
                <div className="absolute top-0 right-0">
                    <div className="bg-amber-500 text-[10px] font-black text-slate-900 px-8 py-1 rotate-45 translate-x-6 translate-y-2 shadow-lg tracking-widest uppercase">
                        Urgent
                    </div>
                </div>
            )}

            <div>
                <div className='flex justify-between items-center mb-6'>
                    <h3 className='bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] px-3 py-1 rounded-full font-bold tracking-widest uppercase'>{data.category}</h3>
                    <h4 className={`text-xs font-bold ${isUrgent ? 'text-amber-400 animate-pulse' : 'text-slate-400'}`}>{data.date}</h4>
                </div>
                <h2 className='text-2xl font-black text-white leading-tight group-hover:text-emerald-400 transition-colors mb-3'>{data.title}</h2>
                <p className='text-slate-400 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors'>{data.description}</p>
            </div>
            
            <div className='flex justify-between mt-8 gap-4'> 
                <button 
                  onClick={() => updateTaskStatus(data.title, 'completed')}
                  className='flex-1 bg-emerald-500 hover:bg-emerald-400 text-white py-3 px-2 text-xs rounded-xl transition-all duration-300 font-bold shadow-lg shadow-emerald-500/20 active:scale-95 uppercase tracking-wider'>
                    Complete
                </button>
                <button 
                  onClick={() => updateTaskStatus(data.title, 'failed')}
                  className='flex-1 bg-red-500/10 text-red-500 border border-red-500/30 hover:bg-red-500 hover:text-white py-3 px-2 text-xs rounded-xl transition-all duration-300 font-bold active:scale-95 uppercase tracking-wider'>
                    Fail
                </button>
            </div>
    </div>
  )
}

export default AcceptTask