import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("email is: ", email);
        console.log("password is: ", password);
        handleLogin(email,password);
        setEmail('');
        setPassword('');
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }
            }
            className='flex flex-col items-center justify-center'>
                <input 
                value = {email}
                onChange={(e)=>
                    setEmail(e.target.value)

                }
                 required
                 className='text-white bg-transparent outline-none border-2 border-green-600 py-2 px-5 rounded-full'type="email" placeholder='Email' />
                <input 
                value={password}
                onChange={(e)=>
                    setPassword(e.target.value)
                }
                required className='text-white bg-transparent outline-none border-2 border-green-600 py-2 px-5 rounded-full mt-2' type="password" placeholder='Password' />
                <button className='text-white outline-none bg-emerald-400 border-2 border-green-600 py-2 px-20 rounded-full mt-2 placeholder:text-white'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login