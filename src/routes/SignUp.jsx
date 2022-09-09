import React from 'react'
import { BsFacebook  ,FaGithub , BsTwitter} from 'react-icons/fa';
const SignUp = () => {
  return (
    <div className='w-[80%] bg-gray-100 h-1 absolute top-[50%] left-[50%] translate-x-[-50%]'>
      <div>
        <h4>Sign in to your account</h4>
        <p>or <a>Create an account</a></p>
        <p>Sign in with</p>
        <div className="links">
          <div><BsFacebook/></div>
          <div><FaGithub/></div>
          <div><BsTwitter/></div>
        </div>
        <button></button>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default SignUp