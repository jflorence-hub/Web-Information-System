import { Routes , Route} from "react-router-dom"
import { useState } from "react"
import "./design/App.css"
import HomePage from "./HomePage"
import CounterPage from "./CounterPage"
import FormPage from "./FormPage"

function App(){
  return(
    <>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/HomePage" element={<HomePage/>}/>
    <Route path="/CounterPage" element={<CounterPage/>}/>
    <Route path="/FormPage" element={<FormPage/>}/>
    </Routes>
    </>
  )
}
export default App

/*import { Routes , Route} from "react-router-dom"
import { useState } from "react"
import Person from "./Person"
import About from "./About"
import Settings from "./Settings"
import "./App.css"

function App(){
  const[count, setCount] = useState(0)
  return(
    <>
    <Routes>
    <Route path="/" element={<Person name = 'John Florence' age = '19' count={count} setCount={setCount}/>}/>
    <Route path="/About" element={<About count={count}/>}/>
    <Route path="/Settings" element={<Settings/>}/>
    </Routes>
    </>
  )
}
export default App*/
/*
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
        <button onClick={()=>setCount(Math.min(count + 1))}>Add</button>
        <button onClick={()=>setCount(Math.max(0,count - 1))}>Sub</button>
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
export default App*/ 
