import { useState } from "react";

function App() {



  let [counter, setCounter] = useState(10)

  const addval = () => {
    counter = counter + 1
    setCounter(counter)
    console.log("hello", counter)

  }

  const subval = () => {
    counter = counter - 1
    if (counter>=0) {
      setCounter(counter)
    }
    console.log("hello", counter)

  }

  return (
    <div>
      <h2>Hello React Counter val:{counter}</h2>
      <button onClick={addval} >Add Val:{counter}</button>
      <button onClick={subval}>sub val:{counter}</button> <br /> <br />
      <footer>counter is :{counter}</footer>
    </div>

  )
}

export default App
