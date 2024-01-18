// import React, { useEffect, useState } from 'react'
// import { signOut,onAuthStateChanged} from 'firebase/auth'
// // import { auth } from './Firebases'
//  import { auth } from '../src/Firebases'

// // import { auth } from 'firebase/auth'
// import { useNavigate } from 'react-router-dom'
// function Homepage() {
//     const [listname, setListname] = useState("")
//     const [submitlist, setSubmitlist] = useState([])
//     const [submit, setSubmit] = useState([])
//       const [todo, setTodo] = useState({
//          listname:" ",
//          textarea:" ",
//          priority:" medium",
//          taskname:" "
//       });
//        const changehandler =(e)=>{
//            const name = e.target.name;
//            const value = e.target.value;
//            setTodo({...todo, [name]:value})
//        }
//          const submithandler = (e)=>{
//           e.preventDefault();
//           if(todo.taskname.trim() === ""){
//             return;
//           }
//            const newdata = {...todo, id:new Date().getTime().toString()}
//            console.log(submit);
//            setSubmit([...submit, newdata]);
//            console.log(submit);
//           setTodo({listname:" ", textarea:" ", priority:" ", taskname:" "});
//          }
//               const handlesubmitlist = (e) =>{
//                     e.preventDefault();
//                     if(listname){
//                       setSubmitlist([...submitlist, {id:Date.now(), listname, isDone:false}])
//                       console.log(submitlist);
//                       setListname("")
//                       console.log(submitlist);
//                     }
//                   } 
//                   const deleteTask = (id)=>{
//                        const updatedsubmit = submit.filter((task)=>task.id !==id);
//                        setSubmit(updatedsubmit)
//                   };
//                   const onDragStart = (e, id) => {
//                     e.dataTransfer.setData('text/plain', id);
//                   };
                
//                   const onDragOver = (e) => {
//                     e.preventDefault();
//                   };
                
//                   const onDrop = (e, targetPriority) => {
//                     e.preventDefault();
//                     const taskId = e.dataTransfer.getData('text/plain');
                
//                     // Find the task by id
//                     const draggedTask = submit.find((task) => task.id === taskId);

//                      console.log('Dragged Task :', draggedTask )
//                     // Update the priority of the dragged task
//                     const updatedSubmit = submit.map((task) =>
//                       task.id === taskId ? { ...task, priority: targetPriority } : task
//                     );
                
//                     setSubmit(updatedSubmit);
//                   };
                
//     const navigate = useNavigate();
//     useEffect(()=>{
//         auth.onAuthStateChanged((user) =>{
//             if(!user){
//             navigate('/')
//             } 
//         }) 
//     },[])
//     const signouthandle = ()=>{
//         signOut(auth).then(()=>{
//             navigate('/')
//         }).catch((err)=>{alert(err.message);});
//     }
//   return (
//     <div>
//         <div >
//         <h3> click down to sign out 🔽</h3>
//       <button  className='px-4 text-white rounded-md text-xl mt-5 bg-green-500' onClick={signouthandle}>Signout</button>
//         </div>
//       <form onSubmit={handlesubmitlist}>
//         <input type='text' placeholder='Enter List Name' value={listname} onChange={(e)=>setListname(e.target.value)} style={{border:"2px solid black", borderRadius:"7px"}}/>
//         <button style={{border:"1px solid green"}} className='px-4 text-white rounded-md mt-5 bg-green-500 ml-5 text-xl' type='submit'>Add List</button>
//       </form>
//       <form onSubmit={submithandler}>
//         <label htmlFor='Task name'> Task Name</label>
//         <input className='p-3 ' type='text' name='listname' value={todo.listname} id='listname' onChange={changehandler} style={{border:"2px solid black",marginBottom:"10px", height:"28px",borderRadius:"5px", width:"200px", marginLeft:"10px"}}/>
//         <label className='ml-4' htmlFor='description'>Description</label>
//         <textarea  value={todo.textarea} onChange={changehandler} id='textarea' name='textarea' placeholder='Task description' style={{border:"2px solid black",marginTop:"20px", height:"28px",borderRadius:"5px", width:"200px", marginLeft:"10px"}}/>
//         <select  className='ml-5' value={todo.priority} onChange={changehandler} id='priority' name='priority'>
//             <option>medium</option>
//             <option>low</option>
//             <option>high</option>
//         </select>
//         <select className='ml-5' value={todo.taskname} onChange={changehandler}  id='taskname' name='taskname'>
//           <option>Select List</option>
//            {submitlist.map((t)=>(<option key={t.id}>{t.listname}</option>))}
//         </select>
//         <button  className='px-4 text-white text-xl rounded-md mt-5 ml-5 bg-green-500' type='submit'>Add Task</button>
//       </form>
//       <div className='flex justify-between mx-20 border-solid-green mt-20' >
//         <div className='border px-20 py-2 rounded bg-green-600 text-white' onDragOver={(e)=> onDragOver(e)} onDrop={(e)=> onDrop(e, "Medium")}>Medium</div>
//         <div className='border px-20  py-2 rounded bg-green-600 text-white' onDragOver={(e)=> onDragOver(e)} onDrop={(e)=> onDrop(e, "High")}>High</div>
//         <div className='border px-20  py-2 rounded bg-green-600 text-white' onDragOver={(e)=> onDragOver(e)} onDrop={(e)=> onDrop(e, "Low")}>Low</div>
//       </div>
//       <div className='flex  ml-14  mt-5'>
//         {submitlist.map((t)=>(
//           <div>
//             <p className='px-8 w-40 mx-8  bg-green-400'style={{border:" ",borderRadius:"6px"}} key={t.id}>{t.listname}</p>
//           </div>
//         ))}
//       </div>
//       <div className=' flex text-center '  onDragOver={(e)=>onDragOver(e)} onDrop={(e)=> onDrop(e," medium")} draggable='true'>
//       <div className='flex ml-14'>
//         {
//           submit.map((e)=>{
//             const {id, listname, textarea,priority,taskname} = e;
//             return(
//                  <div key={e.id} className='pl-4' onDragStart={(ev)=> onDragStart(ev, e.id)} draggable>
//               <div key={e.id} className='text-center '>
//                <div><p className='bg-blue-500 p-3 rounded-sm text-white'> List Name :{taskname}</p></div> 
//                <div  className='bg-gray-300  rounded-sm'>
//                 <p className='pb-3'> Task tittle :{listname}</p>
//                 <p className='pb-3'> Task description :{textarea}</p>
//                 <p className='pb-3'> priority :{priority}</p>
//                 <p className='pb-3'> List Name :{taskname}</p>
                
//                 <button
//                         className=' mt-6 mb-5 mx-3 px-4 bg-green-500 text-white'
//                         style={{ border: "2px solid black", borderRadius: "8px" }}
//                         onClick={() => deleteTask(id)} >
//                         Delete
//                       </button>
//                </div>
//               </div>
//               </div>
//             );
//           })}
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Homepage;

import React, { useEffect, useState } from 'react'
import { signOut,onAuthStateChanged} from 'firebase/auth'

 import { auth } from '../src/Firebases'

 import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { useNavigate } from 'react-router-dom'
function Homepage() {
    const [listname, setListname] = useState("")
    const [submitlist, setSubmitlist] = useState([])
    const [submit, setSubmit] = useState([])
      const [todo, setTodo] = useState({
         listname:" ",
         textarea:" ",
         priority:" medium",
         taskname:" ",
         date:''
      });
       const changehandler =(e)=>{
           const name = e.target.name;
           const value = e.target.value;
           setTodo({...todo, [name]:value})
       }
         const submithandler = (e)=>{
          e.preventDefault();
          if(todo.taskname.trim() === ""){
            return;
          }
           const newdata = {...todo, id:new Date().getTime().toString()}
           console.log(submit);
           setSubmit([...submit, newdata]);
           console.log(submit);
          setTodo({listname:" ", textarea:" ", priority:" ", taskname:" ",date:''});
         }
              const handlesubmitlist = (e) =>{
                    e.preventDefault();
                    if(listname){
                      setSubmitlist([...submitlist, {id:Date.now(), listname, isDone:false}])
                      console.log(submitlist);
                      setListname("")
                      console.log(submitlist);
                    }
                  } 
                  const deleteTask = (id)=>{
                       const updatedsubmit = submit.filter((task)=>task.id !==id);
                       setSubmit(updatedsubmit)
                  };
                 
                
    const navigate = useNavigate();
    useEffect(()=>{
        auth.onAuthStateChanged((user) =>{
            if(!user){
            navigate('/')
            } 
        }) 
    },[])
    const signouthandle = ()=>{
        signOut(auth).then(()=>{
            navigate('/')
        }).catch((err)=>{alert(err.message);});
    }
  return (
    
    <div>
        <div >
        <h3> click down to sign out 🔽</h3>
      <button  className='px-4 text-white rounded-md text-xl mt-5 bg-green-500' onClick={signouthandle}>Signout</button>
        </div>
      <form onSubmit={handlesubmitlist}>
        <input type='text' placeholder='Enter List Name' value={listname} onChange={(e)=>setListname(e.target.value)} style={{border:"2px solid black", borderRadius:"7px"}}/>
        <button style={{border:"1px solid green"}} className='px-4 text-white rounded-md mt-5 bg-green-500 ml-5 text-xl' type='submit'>Add List</button>
      </form>
      <form onSubmit={submithandler}>
        <label htmlFor='Task name'> Task Name</label>
        <input className='p-3 ' type='text' name='listname' value={todo.listname} id='listname' onChange={changehandler} style={{border:"2px solid black",marginBottom:"10px", height:"28px",borderRadius:"5px", width:"200px", marginLeft:"10px"}}/>
        <label className='ml-4' htmlFor='description'>Description</label>
        <textarea  value={todo.textarea} onChange={changehandler} id='textarea' name='textarea' placeholder='Task description' style={{border:"2px solid black",marginTop:"20px", height:"28px",borderRadius:"5px", width:"200px", marginLeft:"10px"}}/>
        <select  className='ml-5' value={todo.priority} onChange={changehandler} id='priority' name='priority'>
            <option>medium</option>
            <option>low</option>
            <option>high</option>
        </select>
        <select className='ml-5' value={todo.taskname} onChange={changehandler}  id='taskname' name='taskname'>
          <option>Select List</option>
           {submitlist.map((t)=>(<option key={t.id}>{t.listname}</option>))}
        </select>
        <button  className='px-4 text-white text-xl rounded-md mt-5 ml-5 bg-green-500' type='submit'>Add Task</button>
      </form>
    
      <div className='flex    mt-5'>
        {submitlist.map((t)=>(
          <div>
            <p className='px-8 w-40 mx-8  bg-green-400'style={{border:" ",borderRadius:"6px"}} key={t.id}>{t.listname}</p>
          </div>
        ))}
      </div>
      <div className='flex ml-14 '>
        {
          submit.map((e)=>{
            const {id, listname, textarea,priority,taskname,date} = e;
            return(
                 <div key={e.id} className=''   >
              <div key={e.id} className=' '>
               <div><p className=''> List Name :{taskname}</p></div> 
               <div  className=''>
                <p className=''> Task tittle :{listname}</p>
                <p className=''>  description :{textarea}</p>
                <p className=''> priority :{priority}</p>
                <p className=''> List Name :{taskname}</p>
                <p className=''> date :{date}</p>

        
                <button
                        className='bg-red-400 rounded-md px-2' 
                        onClick={() => deleteTask(id)} >
                        Delete
                      </button>
               </div>
              </div>
              </div>
            );
          })}
      </div>
      </div>
  )
}

export default Homepage;

