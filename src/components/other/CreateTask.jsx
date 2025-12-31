import React, { useContext,useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const CreateTask = () => {
    const [userData,setUserData] = useContext(AuthContext)

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [date,setDate] = useState('')
    const [asignTo,setAsignTo] = useState('')
    const [category,setCategory] = useState('')

    const [newTask,setnewTask] = useState({})

  const submitHandler = (e) =>{
    e.preventDefault('')
    
    setnewTask({title,description,date,category,active:false,newTask:true,failed:false,completed:false})

    const data = userData

    data.forEach(function(elem){
        if(asignTo == elem.firstName){
            elem.tasks.push(newTask)
            elem.taskCounts.newTask = elem.taskCounts.newTask+1
            
        }
    })
    setUserData(data)
    // localStorage.setItem('employees',JSON.stringify(data))

    setTitle('')
    setCategory('')
    setAsignTo('')
    setDate('')
    setDescription('')
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }
            }
             className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}

                    type="text" className='text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-300'/>
                    </div>
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input value={date}
                    onChange={(e)=>{
                        setDate(e.target.value)
                    }}
                    
                    
                    
                    type="date" className='text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-300'/>
                    </div>

                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Asign To</h3>
                    <input value={asignTo}
                    onChange={(e)=>{
                        setAsignTo(e.target.value)
                    }}
                    
                    
                    
                    type="text" placeholder="Employee name" className='text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-300'/>
                    </div>

                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input value={category}
                    onChange={(e)=>{
                        setCategory(e.target.value)
                    }}
                    
                    
                    
                    type="text" placeholder='design, dev, etc' className='text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-300'/>
                    </div>

                </div>
                
                <div className='w-2/5' flex flex-col items-start>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
                    <textarea value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    
                    
                    className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1.5px] border-gray-300 'name="" id=""  ></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            
            </form>
        </div>
  )
}

export default CreateTask