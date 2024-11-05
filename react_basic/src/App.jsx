
import React, {useState} from 'react';
import Card from './assets/Card';


function App(){
  const [color,setcolor] = useState("olive")
  
  return(
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg gap-6 bg-white rounded-2xl w-[600px]">
        <button 
        onClick={()=> setcolor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "red"}}>
            red</button> 

            <button 
            onClick={()=> setcolor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "pink"}}>
            pink</button>

             <button 
             onClick={()=> setcolor("orange")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "orange"}}>
            orange</button> 

            <button 
            onClick={()=> setcolor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "blue"}}>
            blue</button> 
            
            <button 
            onClick={()=> setcolor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "green"}}>
            green</button>

            <button 
            onClick={()=> setcolor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "olive"}}>
            olive</button>
        </div>
      </div>

  </div>
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