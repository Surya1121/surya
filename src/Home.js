import { useState } from "react";

  const Home =() =>{  

    const [name,setName] =useState("Surya")  
    const inputvalue =( ) =>{
      setName(Math.random())
    }
    return(
        <div className="Home">   
        <h1>Home Page</h1>
         <p >{name}</p>
          <button onClick={inputvalue} >Click me</button>

        </div>
    )
}
export default Home;