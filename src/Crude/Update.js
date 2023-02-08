import { useEffect, useState } from "react";
import { API_CRUD } from "../url/url";
import axios from "axios"
import { useNavigate } from "react-router-dom";
 


export default function Update(){
//    const navi =useNavigate("")
const navi= useNavigate()
 
    const  onchangeName = (e) =>{
        updatename(e.target.value);  

    }
    const onchangeAge = (e) =>{
         updateage(e.target.value);
    }
    // useState 

    const [upname,updatename] = useState("");
    const [upage,updateage] =useState("");
    const [upid,updateid] =useState("");


    useEffect( ()=>{    
        updateid(localStorage.getItem("id"));
        updateage(localStorage.getItem("age"));
        updatename(localStorage.getItem("name"));
         
    },[]);

    const formsubmit = (e) =>{
        e.preventDefault();  
    
    axios.put(`${API_CRUD}/${upid}`,
    {   
        id:upid,
        age:upage,
        name:upname
    }
    )
    navi('/b')
    }

    return(
        <div>
            
            <form className="main"  onSubmit={formsubmit}  >
            <h1>UPDATE PAGE</h1>
        <input type={"text"}  placeholder={"name"} onChange={onchangeName} value={upname}></input>
        <input type={"number"} placeholder={" age"} onChange={onchangeAge} value={upage}></input>
        <input type={"submit"} ></input>
       </form>
        </div>
    )
}