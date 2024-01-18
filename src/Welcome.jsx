import React ,{useEffect, useState}from 'react'
// import { Link } from 'react-router-dom'
import {signInWithEmailAndPassword,onAuthStateChanged,createUserWithEmailAndPassword} from 'firebase/auth'
// import {auth} from '../Firebases'
 import {auth} from '../src/Firebases'

import {useNavigate} from 'react-router-dom'
function Welcome() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ragister, setRagister] = useState(false)
      const [ragisterinfo, setRagisterinfo] = useState({
        name:"",
        email:"",
        password:""
      })
    const navigate = useNavigate();
    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
         navigate('/homepage');
        }
      });
    },[]);
    const handleEmailchange = (e)=>{
           setEmail(e.target.value)
    }
    const changePassword= (e)=>{
           setPassword(e.target.value)
    }
    const hadleSignIn = () => {
        signInWithEmailAndPassword(auth, email,password).then(()=>{
            navigate("/homepage")
        }).catch((err)=> alert(err.message));
    }
    const handleRagister = () => {
        createUserWithEmailAndPassword(auth, email,password)
        .then(() => {
            navigate('/homepage');
        }).catch((err)=> alert(err.message));
    }
  return (
    <div>
      <h1 className='mt-11 text-4xl bold'>Todo-list with drag and drop</h1>
      <div>
        {ragister ? (
            <div >
            {/* <label htmlFor='name' className='text-xl bold'>Name</label>
            <input type='text' style={{border:"1px solid black", borderRadius:"6px"}} className='w-60 text-center' placeholder='enter name' value={ragisterinfo.name} onChange={(e)=> setRagisterinfo({...ragisterinfo, name:e.target.value})}/> */}
            <br />
            <label htmlFor='email' className='text-xl bold'>Email</label>
            <input type='text'style={{border:"1px solid black", borderRadius:"6px"}} className='w-60 text-center' placeholder='enter email' value={ragisterinfo.email} onChange={(e)=> setRagisterinfo({...ragisterinfo, email:e.target.value})}/>
            <br />
            <label htmlFor='password'  className='text-xl bold'>Password</label>
            
            <input type='password' style={{border:"1px solid black", borderRadius:"6px"}} className='w-60 text-center' placeholder='enter password' value={ragisterinfo.password} onChange={(e)=> setRagisterinfo({...ragisterinfo, password:e.target.value})}/> 
            <br />
            <button style={{border:"1px solid black"}} className='px-4 text-white rounded-md mt-1 bg-green-500' onClick={handleRagister}>Ragister</button>
            <button style={{border:"1px solid black"}} className='px-4 text-white rounded-md  bg-green-500' onClick={()=> setRagister(false)}>Back</button>
            </div>
        ):(
            <div>
                <label htmlFor='email'  className='text-xl bold'>Email
                </label>
            <input style={{border:"1px solid black", borderRadius:"6px"}} className='text-center mt-1 rounded-sm w-60' type='text' placeholder='enter email' value={email} onChange={handleEmailchange } />
            <br />
           <label htmlFor='password' className='text-xl bold'>Password
           </label>
            <input style={{border:"1px solid black", borderRadius:"6px"}} className='text-center mt-2 items-center rounded-sm w-60' type='password'placeholder='enter password' value={password} onChange={changePassword} />
            <br />
            <button  style={{border:"1px solid black"}} className='px-4 text-white rounded-md mt-5 bg-green-500' onClick={hadleSignIn}>Sign In</button>
            <button style={{border:"1px solid black"}} className='px-4 text-white rounded-md mt-5 bg-green-500' onClick={()=> setRagister(true)}>Create your account</button>
            </div>
        )}
      </div>
    </div>
  )
}

export default Welcome
