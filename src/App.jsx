/*import { Routes , Route} from "react-router-dom"
import { useState } from "react"
import Person from "./Person"
import About from "./About"
import Settings from "./Settings"

function App(){
  const[count, setCount] = useState(0)
  return(
    <Routes>
    <Route path="/" element={<Person name = 'John Florence' age = '19' count={count} setCount={setCount}/>}/>
    <Route path="/About" element={<About count={count}/>}/>
    <Route path="/Settings" element={<Settings/>}/>
    </Routes>
  )
}
export default App*/
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

function Home(){
    return(
        <>
        <h1>Welcome to Home Page</h1>
        </>
    )
}

function About(){
    return(
        <>
        <h1>Welcome to About Page</h1>
        </>
    )
}

function Counter(){
  const[count,setCount] = useState(0)
    return(
        <>
        <br />
        <br />
        <button onClick={()=>setCount(count + 1)}>Add</button>
        <h2>Counter : {count}</h2>
        </>
    )
}

function App(){
    return(
        <BrowserRouter>
        <nav className="navbar">
            <Link to="/about">About</Link> 
            <Link to="/home">Home</Link>
            <Link to="/counter">Counter</Link>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Counter" element={<Counter/>}/>
            </Routes>
        </nav>
        </BrowserRouter>
    )
}
export default App