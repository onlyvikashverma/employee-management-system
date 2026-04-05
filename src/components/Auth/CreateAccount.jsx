import React, { useState } from 'react'

const CreateAccount = ({ handleRegister, setShowLogin }) => {
    
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        handleRegister(firstName, email, password);
        setFirstName('');
        setEmail('');
        setPassword('');
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20 relative'>
            <button 
                onClick={() => setShowLogin(true)} 
                className='absolute top-4 left-4 text-emerald-400 hover:text-emerald-300'
            >
                ← Back
            </button>
            <form onSubmit={submitHandler} className='flex flex-col items-center justify-center mt-4'>
                <h2 className='text-3xl font-semibold text-white mb-6'>Create Account</h2>
                <input 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className='text-white bg-transparent outline-none border-2 border-green-600 py-2 px-5 rounded-full mb-3' 
                    type="text" 
                    placeholder='First Name' 
                />
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='text-white bg-transparent outline-none border-2 border-green-600 py-2 px-5 rounded-full mb-3' 
                    type="email" 
                    placeholder='Email' 
                />
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    className='text-white bg-transparent outline-none border-2 border-green-600 py-2 px-5 rounded-full mb-3' 
                    type="password" 
                    placeholder='Password' 
                />
                <button className='text-white outline-none bg-emerald-400 border-2 border-green-600 py-2 px-20 rounded-full mt-2 font-semibold hover:bg-emerald-500'>
                    Register
                </button>
            </form>
        </div>
    </div>
  )
}

export default CreateAccount
