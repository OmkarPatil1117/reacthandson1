import { useState } from "react";
import "./App.css"
import "./Button.css"
import './ButtonClass.css'
import ClassBaseComponent from "./ClassBaseComponent";
import FunctionBaseDive from "./FunctionBaseDive";


const App = () => {

  const [n, setn ] = useState(false)
  const [s, sets ] = useState(false)
  const show = ()=> {
    n? setn(false) : setn(true)
  }
  const cShow = () => {
    s? sets(false) : sets(true)
  }
  return (
    <>
    <h1 id="heading">Styling using functional component</h1>
    <button id="button" onClick={show} > Function Componet </button>
    <button id="classButton" onClick={cShow} > Class Base Component </button>
    <div id="flex">
    {n && <FunctionBaseDive/> }
    {s && <ClassBaseComponent/>}
    </div>
    </>
  )
}

export default App