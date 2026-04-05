import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[340px] bg-indigo-900/80 backdrop-blur-md rounded-2xl border border-indigo-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between p-6'>
            <div>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-indigo-600/90 text-white text-xs px-3 py-1.5 rounded-full font-medium tracking-wide'>{data.category}</h3>
                    <h4 className='text-sm text-indigo-300 font-medium'>{data.date}</h4>
                </div>
                <h2 className='text-2xl font-bold mt-5 text-white leading-tight'>{data.title}</h2>
                <p className='mt-3 text-indigo-100/80 text-sm leading-relaxed'>{data.description}</p>
            </div>
            
            <div className='mt-6'> 
                <button className='w-full bg-indigo-500 hover:bg-indigo-400 text-white py-2.5 text-sm rounded-lg transition-colors font-semibold shadow-md'>
                    Accept Task
                </button>
            </div>
    </div>
  )
}

export default NewTask