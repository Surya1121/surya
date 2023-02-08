export default function Form1(){

    const formsubmit1 = (e) =>{
           e.preventDefault();
    }
    const value1 = (e) =>{
        console.log(e.target.value);
    }
    const value2 =(e)=>{
        console.log(e.target.value);

    }
    return(
       <div>
            <form onSubmit={formsubmit1}>
            <input type={`text`} onChange={value1}></input>
            <input type={`number`} onChange={value2}></input>
            <input type={`submit`}> </input>
            </form>
       </div> 
    )
}