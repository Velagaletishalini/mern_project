import React,{useState} from "react"
export default function Login(){
    const [uname,setUname]=useState('');
    const [pass,setPass]=useState('');
    return(
        
        
        <div>
            <h1>Login</h1>
            <p>{uname}::{pass}</p>
            Enter UserName:<input value={uname} id="name" onChange={(e)=>{setUname(e.target.value)}}
            placeholder="Enter  user Name"/>
            <br/>
            Enter Password:<input value={pass} id="name"  onChange={(e)=>{setPass(e.target.value)}}
            placeholder="Enter  password"/>
            <br/>
            <button>submit</button>
        </div>
    )
}