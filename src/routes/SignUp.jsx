import React from 'react'

const SignUp = () => {
  return (
    <div className='absolute top-[30%] left-[50%] md:w-[29%] w-[80%] translate-x-[-50%] bg-slate-200 p-5 rounded'>
        <h3 className='text-[25px] font-semibold  text-center'>Create an account</h3>
        <p className='mt-3  text-center'>Or <a className='text-blue-400 '>Login</a></p>
        <label className='block w-[80%] m-auto '> 
            Full name 
            <input className='block w-[100%] mt-[5px] p-1 rounded' />
        </label>
        <label className='block  w-[80%] m-auto' > 
            Email address
            <input className='block w-[100%] mt-[5px] p-1 rounded '/>
        </label>
        <label className='block  w-[80%] m-auto' > 
            Password
            <input className='block w-[100%] mt-[5px] p-1 rounded  '/>
        </label>
        <label  className='block  w-[80%] m-auto'> 
            Profit Image 
            <input className='block w-[100%] mt-[5px] p-1 rounded  '/>
        </label>
        <label className='block  w-[80%] m-auto ' > 
            Birth Date
            <input className='block w-[100%] mt-[5px] p-1 rounded  '/>
        </label>
        <button className='bg-blue-400 w-[60%] p-1 mx-[100px] mt-3 rounded'>Sign Up</button>
    </div>
  )
}

export default SignUp