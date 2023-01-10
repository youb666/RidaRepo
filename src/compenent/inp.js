import React, { useState } from "react";
import List  from "./listefood";
export default function Inp(){
const [val1,setVal1]=useState()
const [val2,setVal2]=useState()
return(
    <div>
    <input type="text" onChange={(e)=>setVal1(e.target.value)}/>
   
   <button type="text" onClick={()=>{setVal2(val1)}}>search </button>
    <List pops={val2} />
   
    </div> 

)
}