import './index.css';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Welcome from './Welcome';
import Homepage from './Homepage'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/homepage' element={<Homepage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import './App.css';

// const finalSpaceCharacters = [
//   {
//     id: 'gary',
//     name: 'Gary Goodspeed',
//     thumb: '/images/gary.png'
//   },
//   {
//     id: 'cato',
//     name: 'Little Cato',
//     thumb: '/images/cato.png'
//   },
//   {
//     id: 'kvn',
//     name: 'KVN',
//     thumb: '/images/kvn.png'
//   },
//   {
//     id: 'mooncake',
//     name: 'Mooncake',
//     thumb: '/images/mooncake.png'
//   },
//   {
//     id: 'quinn',
//     name: 'Quinn Ergon',
//     thumb: '/images/quinn.png'
//   }
// ]

// function App() {
//   const [characters, updateCharacters] = useState(finalSpaceCharacters);

// const [job,setjob]=useState('')
// const [desc,setdesc]=useState('')
// const [title,settitle]=useState('')
// const [date,setDate]=useState('')
// const [val,setVal]=useState('')
// const [val2,setVal2]=useState('')


// const data=['low','medium','high']

// function f(hh){
// updateCharacters([...characters,hh])
// }

// function add(e){
//   e.preventDefault();
//   const save={job,id:job,desc,title,date,val,val2}
// f(save)
// }










//   function handleOnDragEnd(result) {
//     if (!result.destination) return;

//     const items = Array.from(characters);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);

//     updateCharacters(items);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//       <input type='text' placeholder="box"  value={val2} onChange={(e)=>setVal2(e.target.value)} />
// {/* <button onClick={finaladder} >adding up</button> */}

//         <h1>To do list</h1>
// <input type='text' value={job} onChange={(e)=>setjob(e.target.value)} />
// <br />
// <input type='text' value={desc} onChange={(e)=>setdesc(e.target.value)} />
// <br />
// <input type='text' value={title} onChange={(e)=>settitle(e.target.value)} />

// <input type='date' value={date} onChange={(e)=>setDate(e.target.value)} />


// <select  value={val} onChange={e=>setVal(e.target.value)} >
// {
//   data.map(val=><option>{val}</option>)
// }
// </select>

// <button onClick={add} >  add</button>








//         <DragDropContext onDragEnd={handleOnDragEnd}  >



//           <Droppable droppableId="characters"  >
//             {(provided) => (
//               <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
//                 {characters.map(({id, name,job,desc,title,date,val,val2}, index) => {
//                   return (
//                     <Draggable key={id} draggableId={id} index={index} className="every" >
//                       {(provided) => (
//                         <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                           <div className="">
                        

//                           </div>
//                           <p>
//                             { name }
//                             <br />
//                             {job}
//                             <br />
//                             {date}
//                               <br />
//                             {desc}
//                             <br />
//                              {val}
//                              <br />
//                                {val2}
//                                <br />
//                             {title}
//                            </p>
//                          </li>
//                        )}
//                      </Draggable>
//                    );
//                  })}
//                  {provided.placeholder}
//                </ul>
//              )}
//            </Droppable>
//          </DragDropContext>
//        </header>
//        <p>
//        </p>
//      </div>
//    );
//  }
//  export default App; 




//  import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// export default function App(){
//   return(
//     <div>


//     </div>
//   )
// }