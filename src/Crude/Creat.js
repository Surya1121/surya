// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {API_CRUD}  from "../url/url"

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_CRUD } from "../url/url";

 
// export default function Creat(){
//     const [name1,setName] =useState("");
//     const [age, setName1] = useState("");
//     const clickone =(e) =>{        
//         setName(e.target.value);  } 
//     const clicktwo = (e) =>{  setName1(e.target.value);  }
      
//     const navi = useNavigate();
//     const FinalSubmit =(e) =>{
//         e.preventDefault();
//         axios.post( API_CRUD,
//         {name:name1,
//         age :age})
//         console.log(name1);
//         console.log(age);
//         setName("");
//         setName1("")  
//         navi("/Update")}
           
//     return(
//        <form className="main" onSubmit={FinalSubmit} >
//         <input type={"text"} onChange={clickone} value={name1}  ></input>
//         <input type={"number"} onChange={clicktwo} value={age}></input>
//         <input type={"submit"} ></input>
//        </form>)}
export default function Create(){
    const [uname,setName] =useState("");
    const [uage,setNum] = useState("")
    const navi = useNavigate()

    const form_submit = (e) =>{
        e.preventDefault();
        // console.log(name);
        // console.log(age);
        axios.post(API_CRUD,{name :uname,age:uage})
        setName("");
           setNum("");
        navi("/b")

             }
    const surya =(e) =>{
        setName(e.target.value);
            }
        const surya1 = (e) =>{
            setNum(e.target.value);
        }
    const readfun = () =>{
        navi("/a") 
    }
    return(

        <div>
            <form onSubmit={form_submit}>
                    <input type={`text`} placeholder={`Name`}  onChange={surya}  value={uname} />  <br/>
                    <input type={`number`} placeholder={`Age`} onChange={surya1}  value={uage}/>
                    <input type={`submit`}> 
                    </input>

                    <button onClick={readfun}>R E A D</button> </form> </div>
                    
    )
}