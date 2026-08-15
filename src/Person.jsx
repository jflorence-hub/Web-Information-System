/* import {Link} from "react-router-dom"

function Person({name, age, count, setCount}){
    
    return(
        <>
        {/* sample of props *//*} 
        <h1>
            Hi my name is {name} I am {age} years old.
        </h1>
        <button><Link to="./About" class="no-underline">About</Link></button>
        <button><Link to="./Settings" class="no-underline">Settings</Link></button>
        <hr />
        {/* sample of useState *//*}
        <h2>Like : {count}</h2>
        <button onClick={()=>setCount(Math.min(20, count + 1))}>Like</button>
        <button onClick={()=>setCount(Math.max(0, count - 1))}>Dislike</button>
        </>
    )
}
export default Person */

import { useState } from "react";

function Person(props){
    const[message, setMassage] = useState('')
    return(
        <>
        <h1>Hi my name {props.name} my age is {props.age}</h1>
        <hr />
        <input type="text" value={message} placeholder="Enter your message" onChange={(e)=>setMassage(e.target.value)}/>
        <button onClick={()=>setMassage('')}>Clear</button>
        <h2>Message : {message}</h2>
        </>
    )
}
export default Person 