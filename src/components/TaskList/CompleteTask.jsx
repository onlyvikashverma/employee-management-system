import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[340px] bg-emerald-900/80 backdrop-blur-md rounded-2xl border border-emerald-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between p-6'>
            <div>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-emerald-600/90 text-white text-xs px-3 py-1.5 rounded-full font-medium tracking-wide'>{data.category}</h3>
                    <h4 className='text-sm text-emerald-300 font-medium'>{data.date}</h4>
                </div>
                <h2 className='text-2xl font-bold mt-5 text-white leading-tight'>{data.title}</h2>
                <p className='mt-3 text-emerald-100/80 text-sm leading-relaxed'>{data.description}</p>
            </div>
            
            <div className='mt-6 rounded-lg bg-emerald-950/50 py-2.5 border border-emerald-800/50 flex items-center justify-center'> 
                <span className='font-semibold text-emerald-400 tracking-wide text-sm'>✓ Completed</span>
            </div>
    </div>
  )
}

export default CompleteTask