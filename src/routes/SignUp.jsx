import React ,{useState , useEffect} from 'react'

const SignUp = () => {
    const [preview, setPreview] = useState();
    const [image, setImage] = useState();
    const fileInputRef = useRef();
    useEffect(() => {
        
        if (image) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result );
        };
        reader.readAsDataURL(image);
        dispatch({type: 'FILE',payload:preview})
        } else {
          setPreview(null);
        }
      }, [image,preview]);
  return (
    <div className='absolute top-[30%] left-[50%] md:w-[29%] w-[80%] translate-x-[-50%] bg-slate-200 p-5 rounded'>
        <h3 className='text-[25px] font-semibold  text-center'>Create an account</h3>
        <p className='mt-3  text-center'>Or <a className='text-blue-400 '>Login</a></p>
        <label className='block w-[80%] m-auto '> 
            Full name 
            <input type="text" className='block w-[100%] mt-[5px] p-1 rounded' />
        </label>
        <label className='block  w-[80%] m-auto' > 
            Email address
            <input type='email' className='block w-[100%] mt-[5px] p-1 rounded '/>
        </label>
        <label className='block  w-[80%] m-auto' > 
            Password
            <input type="password" className='block w-[100%] mt-[5px] p-1 rounded  '/>
        </label>
        {/* FILE */}
        <label  className='block  w-[80%] m-auto'> 
            Profit Image 
            <input type='file' className='block w-[100%] mt-[5px] p-1 rounded  '/>
        </label>
        {/* File */}
        <label className='block  w-[80%] m-auto ' > 
            Birth Date
            <input type="date" className='block w-[100%] mt-[5px] p-1 rounded  '/>
        </label>
        <button className='bg-blue-400 w-[60%] p-1 mx-auto mt-3 rounded block '>Sign Up</button>
    </div>
  )
}

export default SignUp