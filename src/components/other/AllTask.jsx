
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setUserData] = useContext(AuthContext)
      
  return (

    <div className='bg-slate-900/30 backdrop-blur-xl p-8 mt-10 rounded-[2rem] border border-slate-700/30 shadow-2xl h-80 flex flex-col animate-fadeIn' style={{ animationDelay: '0.4s' }}>
        <div className='bg-slate-800/40 mb-4 py-4 px-8 flex justify-between rounded-xl border border-slate-700/50 shadow-sm'>
            <h2 className='w-1/6 text-slate-400 font-bold tracking-widest uppercase text-xs'>Employee</h2>
            <h3 className='w-1/6 text-indigo-400 font-bold tracking-widest uppercase text-xs text-center'>New</h3>
            <h5 className='w-1/6 text-amber-400 font-bold tracking-widest uppercase text-xs text-center'>Active</h5>
            <h5 className='w-1/6 text-emerald-400 font-bold tracking-widest uppercase text-xs text-center'>Completed</h5>
            <h5 className='w-1/6 text-red-400 font-bold tracking-widest uppercase text-xs text-center'>Failed</h5>
            <h5 className='w-1/6 text-slate-300 font-bold tracking-widest uppercase text-xs text-center'>Performance</h5>
        </div>

        <div className='h-full overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-2'>
            {userData && userData.map(function(elem,idx){
                const total = elem.taskCounts.completed + elem.taskCounts.failed + elem.taskCounts.active;
                const score = total > 0 ? Math.round((elem.taskCounts.completed / total) * 100) : 0;
                
                let textColor = 'text-red-400';
                if(score > 80) textColor = 'text-emerald-400';
                else if(score >= 50) textColor = 'text-yellow-400';

            return <div key={idx} className='group bg-slate-800/20 border border-slate-800/50 py-4 px-8 flex justify-between rounded-xl hover:bg-slate-800/40 hover:border-slate-600/50 transition-all duration-300'>
                <h2 className='w-1/6 text-slate-200 font-semibold group-hover:text-white transition-colors'>{elem.firstName}</h2>
                <h3 className='w-1/6 text-indigo-400 font-bold text-lg text-center'>{elem.taskCounts.newTask}</h3>
                <h5 className='w-1/6 text-amber-400 font-bold text-lg text-center'>{elem.taskCounts.active}</h5>
                <h5 className='w-1/6 text-emerald-400 font-bold text-lg text-center'>{elem.taskCounts.completed}</h5>
                <h5 className='w-1/6 text-red-400 font-bold text-lg text-center'>{elem.taskCounts.failed}</h5>
                <div className='w-1/6 flex items-center justify-center'>
                    <span className={`font-black text-lg ${textColor}`}>{score}%</span>
                </div>
            </div>
            })}
        </div>
    </div>
  )
}

export default AllTask