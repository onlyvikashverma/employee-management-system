import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5'>
        <div className='rounded-xl w-1/3 bg-yellow-400 py-6 px-9'>
        <h2 className='text-3xl font-semibold text'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
        </div>


        
        <div className='rounded-xl w-1/3 bg-blue-400 py-6 px-9'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
        </div>
        <div className='rounded-xl w-1/3 bg-green-400 py-6 px-9'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Accepted</h3>
        </div>
        <div className='rounded-xl w-1/3 bg-red-400 py-6 px-9'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Faild</h3>
        </div>
    </div>
    
  )
}

export default TaskListNumbers