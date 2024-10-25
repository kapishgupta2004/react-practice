function App(){

  const a =()=>{
    console.log("my first react"); 
  }
  const b =()=>{
    console.log("second function"); 
  }

  return(
    <>
    <h1>my name is kapish</h1>

    <button onClick={()=>{
      a();b()
    }}>click me</button>
    </>
  )
}



export default App