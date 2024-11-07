
import React, {useState} from 'react';
import Card from './components/Card';
import PasswordGen from "./components/PasswordGen"
import Background from "./components/background"


function App(){
  
  return(
  <PasswordGen/>
  // <Background />
  // <Card/>
)
}


export default App;



//  function App(props) {
//   const [someValue,setSomeValue] = useState(0);
  


// function handleStateUpdate(value){
//   setSomeValue(()=>{
//   value++;
//   return value;
// });
// }




//   return (
//     <div className='bg-black'>
//       <h1>Hello React.</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <button onClick={()=>handleStateUpdate(someValue)}>click me</button>
//       <span>{someValue}</span>

//       <Card kapish={"my react project"}/>

//     </div>
//   );
// }




// let someRandomValue = undefined;

// function someRandomFunction(val){
//   console.log("rendering something");
//   someRandomValue = val;
// }



// function App(){

//   const a =()=>{
//     console.log("my first react"); 
//   }
//   const b =()=>{
//     console.log("second function"); 
//   }

//   return(
//     <>
//     <h1>my name is kapish</h1>

//     <button onClick={()=>{
//       a();b()
//     }}>click me</button>
//     </>
//   )
// }


// let a = 10



// export default App


//--------------------------------------------------------------------


//  ------------> Array destructuring...
// const array1 = [someRandomValue,someRandomFunction,3];


// ---------> some usestate like function...

// function myStateUpdate(){
//   return array1;
// }

// ---------> array destructuring...

// let [aVarbl,bVarbl,cVarbl] = array1;

// bVarbl = array1[1],
// cVarbl = array1[2];

// console.log("aVarbl value ======> ",aVarbl,bVarbl,cVarbl);

// --------> object destructuring...

// const objRandom = {
//   propA:"some_value",
//   propB:"some_value_b",
// };

// const {propA,propB} = objRandom;


// --------> working with useState...