import "./App.css"
import Button from "./Button"


const addDiv = ()=> {
  console.log("Hello World");
}

const App = () => {
  return (
    <>
    <h1 id="heading">Styling using functional component</h1>
    < Button value={"to see styling in functional componet"} />
    < Button value={"to see styling in class componet"}  />
    </>
  )
}

export default App