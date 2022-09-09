import React ,{useState , useEffect ,useRef} from 'react'
import { db } from '../fireConfig';
import { collection , getDocs , addDoc , doc} from 'firebase/firestore'
const SignUp = () => {
    // fireStore 
    const [users , setUsers] = useState([]) 
    const usersCollectionRef = collection(db, "users");
    // data 
    useEffect(()=>{
        const getData = async ()=> {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getData() ; 
    },[]) ; 
    const addPerson = async () => { 
        console.log('asdasdasdasjdahsdkjashdkasjhd')

        const {name , email , password , image} = data  ;
        if(name && email && password && image) {
            const foundPerson = users.find(user =>  user.email === email ) 
            if (foundPerson === undefined) {
                console.log('asdasdasdasjdahsdkjashdkasjhd')
                await addDoc(usersCollectionRef , {...data}) ; 
                setData({name:'' , email:'' , password:'' ,image:''})
            }
            else {
                alert('a user is found try another  email')
            }
        }
    }
    const [data , setData] = useState({name:'' , email:'' , password:'' ,image:''}) ; 
    // image
    const [preview, setPreview] = useState();
    const [image, setImage] = useState();
    const fileInputRef = useRef();
    console.log(preview)
    console.log(image)
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
      
  return (
    <div className='absolute top-[30%] left-[50%] md:w-[29%] w-[80%] translate-x-[-50%] bg-slate-200 p-5 rounded'>
        <h3 className='text-[25px] font-semibold  text-center'>Create an account</h3>
        <p className='mt-3  text-center'>Or <a className='text-blue-400 '>Login</a></p>
        <label className='block w-[80%] m-auto '> 
            Full name 
            <input type="text" className='block w-[100%] mt-[5px] p-1 rounded ' onChange={e =>setData({...data , name:e.target.value})} />
        </label>
        <label className='block  w-[80%] m-auto' > 
            Email address
            <input type='email' className='block w-[100%] mt-[5px] p-1 rounded ' onChange={e =>setData({...data , email:e.target.value})}/>
        </label>
        <label className='block  w-[80%] m-auto' > 
            Password
            <input type="password" className='block w-[100%] mt-[5px] p-1 rounded  'onChange={e =>setData({...data , password:e.target.value})}/>
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
            setData({...data , image:file}) ;
            } else {
            setData({...data , image:null});
                
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