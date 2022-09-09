import React from 'react'
import { BsFacebook  , BsTwitter} from 'react-icons/bs';
import {FaGithub } from 'react-icons/fa';
const SignUp = () => {
  return (
    <div className=' w-[80%] md:w-[60%] bg-gray-100 flex absolute top-[30%] left-[50%] translate-x-[-50%] rounded'>
      <div className='md:basis-[50%] w-[100%] md:p-[20px] p-[30px]'>
        <h4 className='text-[21px] font-bold'>Sign in to your account</h4>
        <p>or <a className='text-blue-400'>Create an account</a></p>
        <p className='text-sm'>Sign in with</p>
        <div className="flex content-between w-[100%]">
          <div className='border-solid w-[33%] 	bg-white h-[33px] rounded relative p-2  m-2 flex content-center place-items-center'><div className='absolute left-[50%] translate-x-[-50%]'><BsFacebook className='text-[20px]'/></div></div>
          <div className='border-solid w-[33%] 	bg-white h-[33px] rounded relative p-2  m-2 flex content-center place-items-center'><div className='absolute left-[50%] translate-x-[-50%]'><FaGithub className='text-[20px]'/></div></div>
          <div className='border-solid w-[33%] 	bg-white h-[33px] rounded relative p-2  m-2 flex content-center place-items-center'><div className='absolute left-[50%] translate-x-[-50%]'><BsTwitter className='text-[20px]'/></div></div>
        </div>
        {/*   */}
        <label htmlFor="" className='text-sm'>
          Email address
          <input type="text" className='block p-1 w-[100%] rounded m-1' />
        </label>
        <label htmlFor="" className='text-sm'>
          password
          <input type="password" className='block p-1 w-[100%] rounded m-1' />
        </label>
        <div className='flex content-between bg-red-400 p-2' >
          <label htmlFor="" className='text-sm'>
          <input type='checkbox' /> 
            Remember me
          </label>
          <span>{'  '}</span>
          <p className='text-sm text-blue-400 '>Forgot your password </p>
        </div>
        <button className='w-[80%] ml-5 p-1 text-white size-[20px] font-bold mt-3 bg-blue-400 rounded m-auto '>Sign in</button>
      </div>
      <div className='md:w-[70%] hidden md:block'>
        <img className='object-cover' src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg" alt="" />
      </div>
    </div>
  )
}

export default SignUp