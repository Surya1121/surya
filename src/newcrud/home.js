import { BrowserRouter,   Route, Routes, useNavigate } from "react-router-dom"
import Form1 from "./form";
import Read1 from "./read";

export default function Home1() {
    // const navi = useNavigate()
    // const HomeForm = () =>{
    //     navi("/form");
    // }
    // const HomeRead = () =>{
    //     navi("/read");
    // }
    return (

        <div>
            {/* <button onClick={HomeForm}>F o r m</button>
            <button onClick={HomeRead}>R E A D</button> */}

            <BrowserRouter>
            <Routes>

                <Route path="/form" element={<Form1></Form1>}></Route>
                <Route path="/read" element={<Read1></Read1>}></Route>  
            </Routes>
            </BrowserRouter>
        </div>
    )

}