import { useState } from "react";

export default function Msg(){
    
    let a = Math.floor(Math.random()*10+1)
     

    const [num , setNum] = useState(a);

    const Clickone1 = () =>{
        setNum(a);
        console.log(a);
    }
    let a1 = [{name : "fghjk",age :21},{name : "fghjk",age :21},{name : "fghjk",age :21},
    {name : "fghjk",age :21},{name : "fghjk",age :21},]

    const formClick = (e) =>{
        e.preventDefault();
        console.log(e.target.value);

    }
    // const onchangevalue =(e) =>{
    //     console.log(e.target.value);
    // }


     
    return(
        <div className=" text-center">
            <h1>The Massage</h1>
             
             <form onSubmit={formClick}>
                <input type={"text"} value={""}  />
                <input type={"submit"}  /> 
             </form>


            <h1> {[1,2,3,4,5,6]}</h1>&nbsp;&nbsp;&nbsp;&nbsp;
            <h1>{
                a1.map(data =>(
                    <table className="table table-bordered">
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                        </tr>
                    </table>
                    
                ))
                }</h1>

            <button className="btn btn-warning w-50"    onClick={Clickone1}>click me</button>
        </div>
    )
}