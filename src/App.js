import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import './App.css';
import Home1 from "./newcrud/home";
 
import Creat from "./Crude/Creat";
import Read from "./Crude/Read";
import Update from "./Crude/Update";
 
// import One from "./Crude/one"
 
// import Home from './Home';
// import Navbar from './Nav';

function App() {
   
  return (

    // <div className="App">
    //   <Navbar> </Navbar> 
    //  <Home></Home>
     // </div>
    
    <div  className="container " >
      <h1>Crud Option</h1>

      <Home1></Home1>  

        

      
      <BrowserRouter>
      <Routes>
        <Route path={"/a"} exact element={<Creat></Creat>}></Route>
        <Route path={"/b"} exact element ={<Read></Read>}></Route>
        <Route path={"c"} exact element={<Update></Update>}></Route>
         </Routes>
      </BrowserRouter>  

      {/* <One></One>      */}


      
    </div>
  );}
export default App;
