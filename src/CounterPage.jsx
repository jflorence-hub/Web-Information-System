import { useState } from "react"
import { Link } from "react-router-dom"
import "./CounterPage.css"

function CounterPage(){
    const[count, setCount] = useState(0)
    return(
        <>
        <div className="navbar">
        <Link to="/HomePage" class="no-underline" className="nav-btn">Home</Link>
        <Link to="/CounterPage" class="no-underline" className="nav-btn">Counter</Link>
        <Link to="/FormPage" class="no-underline" className="nav-btn">Form</Link>
        </div>
        <hr />
        <div className="inside-counter">
        <h2 className="title-counter">Counter</h2>
        <h2 className="count-output">{count}</h2>
        <div className="opt-btns">
        <button onClick={()=>setCount(count + 1)} className="operation-btn">+</button>
        <button onClick={()=>setCount(Math.max(0,count - 1))} className="operation-btn">-</button>
        </div>
        </div>
        </>
    )
}
export default CounterPage