import { useState } from "react"
import { Link } from "react-router-dom"
import "./FormPage.css"

function FormPage(){
    const[comment, setComment] = useState('')
    return(
        <>
        <div className="navbar">
        <Link to="/HomePage" class="no-underline" className="nav-btn">Home</Link>
        <Link to="/CounterPage" class="no-underline" className="nav-btn">Counter</Link>
        <Link to="/FormPage" class="no-underline" className="nav-btn">Form</Link>
        </div>
        <hr />
        <div className="inside-form">
        <h2 className="title-form">Form Page</h2>
        <div className="user-input">
        <input type="text" className="input-text" placeholder="Enter your name" value={comment} onChange={(e)=>setComment(e.target.value)}/>
        </div>
        <h2 className="message">Message : {comment}</h2>
        <div className="clear-prop">
        <button onClick={(e)=>setComment('')} className="clear-btn">Clear</button>
        </div>
        </div>
        </>
    )
}
export default FormPage