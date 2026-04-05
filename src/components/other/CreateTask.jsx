import React, { useContext,useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const CreateTask = () => {
    const [userData,setUserData] = useContext(AuthContext)

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [date,setDate] = useState('')
    const [asignTo,setAsignTo] = useState('')
    const [category,setCategory] = useState('')

  const [overloadWarning, setOverloadWarning] = useState(false)

  const checkOverload = (val) => {
    setAsignTo(val)
    if (userData) {
      const employee = userData.find(emp => emp.firstName.toLowerCase() === val.toLowerCase())
      if (employee && employee.taskCounts.active >= 3) {
        setOverloadWarning(true)
      } else {
        setOverloadWarning(false)
      }
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    
    const taskObj = {
      title,
      description,
      date,
      category,
      active: true,
      newTask: true,
      failed: false,
      completed: false
    }

    const data = [...userData]

    let found = false
    data.forEach(function (elem) {
      if (asignTo.toLowerCase() === elem.firstName.toLowerCase()) {
        elem.tasks.push(taskObj)
        elem.taskCounts.active = elem.taskCounts.active + 1
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1
        found = true
      }
    })

    if (!found) {
      alert("Employee not found! Please check the name.")
      return
    }

    setUserData(data)
    localStorage.setItem('employees', JSON.stringify(data))

    setTitle('')
    setCategory('')
    setAsignTo('')
    setDate('')
    setDescription('')
    setOverloadWarning(false)
    alert("Task assigned successfully!")
  }

  return (
    <div className='p-8 bg-slate-900/30 backdrop-blur-xl mt-10 rounded-[2rem] border border-slate-700/30 shadow-2xl animate-fadeIn' style={{ animationDelay: '0.2s' }}>
      <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between gap-10'>
        <div className='w-full lg:w-[45%] flex flex-col gap-6'>
          <div>
            <h3 className='text-sm text-slate-400 font-bold tracking-widest uppercase mb-2 ml-1'>Task Title</h3>
            <input value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className='text-sm py-3 px-5 w-full rounded-2xl outline-none bg-slate-800/30 border border-slate-700/50 focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 transition-all text-white placeholder-slate-500 shadow-inner'
              placeholder="E.g. Design UI Mockups"
            />
          </div>
          <div>
            <h3 className='text-sm text-slate-400 font-bold tracking-widest uppercase mb-2 ml-1'>Date</h3>
            <input value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className='text-sm py-3 px-5 w-full rounded-2xl outline-none bg-slate-800/30 border border-slate-700/50 focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-300 shadow-inner'
            />
          </div>
          <div className='relative'>
            <div className='flex justify-between items-center mb-2 ml-1'>
              <h3 className='text-sm text-slate-400 font-bold tracking-widest uppercase'>Assign To</h3>
              {overloadWarning && (
                <span className='text-[10px] bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-full font-bold animate-pulse'>
                  ⚠️ High Workload Alert
                </span>
              )}
            </div>
            <input value={asignTo}
              onChange={(e) => checkOverload(e.target.value)}
              type="text"
              placeholder="Employee name"
              className={`text-sm py-3 px-5 w-full rounded-2xl outline-none bg-slate-800/30 border transition-all text-white placeholder-slate-500 shadow-inner ${overloadWarning ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/10' : 'border-slate-700/50 focus:border-emerald-500/50 focus:ring-emerald-500/10'}`}
            />
          </div>
          <div>
            <h3 className='text-sm text-slate-400 font-bold tracking-widest uppercase mb-2 ml-1'>Category</h3>
            <input value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Design, Development, etc."
              className='text-sm py-3 px-5 w-full rounded-2xl outline-none bg-slate-800/30 border border-slate-700/50 focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 transition-all text-white placeholder-slate-500 shadow-inner'
            />
          </div>
        </div>

        <div className='flex flex-col w-full lg:w-[48%]'>
          <h3 className='text-sm text-slate-400 font-bold tracking-widest uppercase mb-2 ml-1'>Task Description</h3>
          <textarea value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full h-64 text-sm py-4 px-5 rounded-3xl outline-none bg-slate-800/30 border border-slate-700/50 focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 transition-all text-white placeholder-slate-500 resize-none shadow-inner'
            placeholder="What needs to be done?"
          ></textarea>

          <button className='group relative overflow-hidden bg-emerald-500 hover:bg-emerald-400 text-white font-black py-4 px-8 rounded-2xl shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 mt-8 w-full text-lg tracking-widest uppercase'>
            <span className='relative z-10'>Assign Task</span>
            <div className='absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask