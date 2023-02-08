// import axios from "axios";
// import { useEffect, useState } from "react"
// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import { API_CRUD } from "../url/url";

import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_CRUD } from "../url/url"

// export default function Read(){
//     const navi = useNavigate();
//     const [name,setName] =useState([]);
//     useEffect(()=>{
//         axios.get(API_CRUD)
//         .then ((res)=>{
//            setName(res.data);

//         })   
//     },[])
   
//     const clickedme =  (dat) =>{
//         axios.delete(`${API_CRUD}/${dat}` ).then(
//             () =>{
//             axios.get(API_CRUD)
//             .then ((res)=>{
//                setName(res.data);
    
//             })  } );

         
//     }
//     return(

//         <div>
//             <h1>Read&Delete</h1>
        
//             <table className="table">{
//                name.map((dat)=>(
//                 <tr> 
//                     <td>{dat.name}</td>
//                     <td>{dat.age}</td>
//                     <td><button onClick={()=>clickedme(dat.id)}>Delete</button></td>
//                     <td>                       
                       
//                         </td>          </tr>

//                ))}
//             </table>
//         </div>
//     )
// }



export default function Read () {


    const [uname,setName] = useState([])
    useEffect (()=>{
    axios.get(API_CRUD).then((surya)=>{
        setName(surya.data);
    })},[])


    // navigate
        const navi = useNavigate()

// delete
    const deletfun = (id) =>{
            axios.delete(`${API_CRUD}/${id}`).then(
                ()=>{
                    axios.get(API_CRUD).then((surya)=>{
                        setName(surya.data);
                    })
                }
            )

    }
const navi1 =useNavigate();

const homepage = () =>{
    navi1('/a');
} 

    //update 

    const  update = (id,name,age) =>{ 
            localStorage.setItem("id",id)
            localStorage.setItem("name",name)
            localStorage.setItem("age",age)
            console.log(id);    
            
     }
    return (
        <div>       
             { uname.map((user)=>(
                <div key={user.id}>
                <h1> {user.name}</h1>
                <h1> {user.age}</h1>
                
                    <button onClick={()=>{ deletfun(user.id)}}>delete</button>
                    <button onClick={()=>{ update(user.id,user.name,user.age);navi('/c')}}>Update</button>
                 </div>
             ))
                }
            <br/>
            <br/>
            <br/> 
                <button onClick={homepage}>F O R M</button>
        </div>
    )
}