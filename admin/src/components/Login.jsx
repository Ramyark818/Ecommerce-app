import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
const Login = ({ setToken }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler=async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl+'/api/user/admin',{email, password});
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 w-full'>
    <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
      <h1 className='text-2xl font-bold mb-5'>Admin Panel</h1>
      <form onSubmit={onSubmitHandler}>
        <div className='mb-4 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Email Address:</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='your@email.com' className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' required/>
        </div>
        <div className='mb-4 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Password:</p>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' required/>
        </div>
        <button type='submit' className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black'>Login</button>
        {/* <p className='text-sm text-gray-500 mt-2'>Forgot Password?</p>
        <p className='text-sm text-gray-500'>Don't have an account? <a href="/register" className='text-blue-500'>Register</a></p> */}

      </form>
    </div>
    </div>
  )
}

export default Login
