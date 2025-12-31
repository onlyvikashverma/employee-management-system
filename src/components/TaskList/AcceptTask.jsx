import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded mt-5 ml-4'>{data.category}</h3>
                <h4 className='text-sm mr-5 mt-4'>{data.date}</h4>

            </div>
            <h2 className='text-xl font-semibold mt-5 ml-5'>{data.title}</h2>
            <p className='mt-2 text-sm ml-5'>{data.description}</p>
            <div className='flex justify-between mt-4'> 
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>
    </div>
  )
}

export default AcceptTask