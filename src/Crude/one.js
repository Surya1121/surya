import { useState } from "react";
import Msg from "./msg";

export default function one(){
    


    return(
        <div   >
        <div className="container  d-flex justify-content-between  p-5 " >
            <div>

                <h1> S U R Y A</h1>
            </div>
            <div className="pt-2 hover-overlay">
                <a href="#" className="text-warning btn btn-danger ">Home</a> &nbsp;&nbsp;
                <a href="#" className="text-warning btn btn-danger">blog</a>

            </div>
        </div>
        <Msg></Msg>

        

        </div>

    )
}