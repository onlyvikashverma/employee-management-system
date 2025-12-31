import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded mt-5 ml-4'>{data.category}</h3>
                <h4 className='text-sm mr-5 mt-4'>{data.date}</h4>

            </div>
            <h2 className='text-xl font-semibold mt-5 ml-5'>{data.title}</h2>
            <p className='mt-2 text-sm ml-5'>{data.description}</p>
            <div className='mt-2'>
                <button className='w-full bg-green-300'>Complete</button>

            </div>
        </div>
  )
}

export default CompleteTask