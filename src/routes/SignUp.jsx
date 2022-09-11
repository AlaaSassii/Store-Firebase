import React ,{useState , useEffect ,useRef} from 'react'
import { db } from '../fireConfig';
import { collection , getDocs , addDoc , doc} from 'firebase/firestore'
const SignUp = () => {
    // fireStore 
    const [users , setUsers] = useState([]) 
    const usersCollectionRef = collection(db, "users");
    const [data , setData] = useState({name:'' , email:'' , password:'' ,image:''}) ; 
    console.log(data)
    // data 
    useEffect(()=>{
        const getData = async ()=> {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getData() ; 
    },[]) ; 

        // image
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
            } else {
              setPreview(null);
            }
          }, [image,preview]);

    const addPerson = async () => { 
        console.log('addPerson Func is runing')
        const {name , email , password , image} = data  ;
        if(name && email && password && image) {
            const foundPerson = users.find(user =>  user.email === email ) 
            console.log('foundPerson',foundPerson)
            if (foundPerson === undefined) {
                await addDoc(usersCollectionRef ,{...data}) ; 
                setData({name:'' , email:'' , password:'' ,image:''})
            }
            else {
                alert('a user is found try another  email')
            }
        }
    }

      
  return (
    <div className='absolute top-[30%] left-[50%] md:w-[29%] w-[80%] translate-x-[-50%] bg-slate-200 p-5 rounded'>
        <h3 className='text-[25px] font-semibold  text-center'>Create an account</h3>
        <p className='mt-3  text-center'>Or <a className='text-blue-400 '>Login</a></p>
        <label className='block w-[80%] m-auto '> 
            Full name 
            <input value={data.name} type="text" className='block w-[100%] mt-[5px] p-1 rounded ' onChange={e =>setData({...data , name:e.target.value})} />
        </label>
        <label className='block  w-[80%] m-auto' > 
            Email address
            <input type='email' value={data.email} className='block w-[100%] mt-[5px] p-1 rounded ' onChange={e =>setData({...data , email:e.target.value})}/>
        </label>
        <label className='block  w-[80%] m-auto'  > 
            Password
            <input value={data.password} type="password" className='block w-[100%] mt-[5px] p-1 rounded  'onChange={e =>setData({...data , password:e.target.value})}/>
        </label>
        {/* FILE */}
        <button className='w-[100px] bg-white  mt-3 p-1 rounded mb-2'
            onClick={(event) => {
              event.preventDefault();
              fileInputRef.current.click();
            }}
          >
            Add Image
          </button>
          <input
         
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        accept="image/*"
        onChange={(event) => {
            const file = event.target.files[0];
            if (file && file.type.substr(0, 5) === "image") {
            setImage(file);
            setData({...data , image:preview}) ;
            } else {
              console.log('image is null')
            setData({...data , image:preview});
                
            }
          }}
        />
        {/* File */}
        <label className='block  w-[80%] m-auto ' > 
            Birth Date
            <input type="date" className='block w-[100%] mt-[5px] p-1 rounded  '/>
        </label>
        <button className='bg-blue-400 w-[60%] p-1 mx-auto mt-3 rounded block ' onClick={addPerson}>Sign Up</button>
    </div>
  )
}

export default SignUp