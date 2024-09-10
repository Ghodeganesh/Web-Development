import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200 py-10' style={{ background: color }} >
      <div className=' flex flex-wrap  py-3 px-3 max-w-[800px] mx-auto  gap-3 translate-y-[480px] items-center justify-between bg-white rounded-2xl inset-0'>
        <button className='py-2 px-4 rounded-2xl' style={{ background: "green" }} onClick={() => setColor("green")}>green</button>
        <button className='py-2 px-4 rounded-2xl' style={{ background: "yellow" }} onClick={() => setColor("yellow")}>yellow</button>
        <button className='py-2 px-4 rounded-2xl' style={{ background: "blue" }} onClick={() => setColor("blue")}>blue</button>
        <button className='py-2 px-4 rounded-2xl' style={{ background: "red" }} onClick={() => setColor("red")}>Red</button>
        <button className='py-2 px-4 rounded-2xl' style={{ background: "cyan" }} onClick={() => setColor("cyan")}>cyan</button>
        <button className='py-2 px-4 rounded-2xl' style={{ background: "blue" }} onClick={() => setColor("blue")}>blue</button>
        <button className='py-2 px-4 rounded-2xl' style={{ background: "orange" }} onClick={() => setColor("orange")}>orange</button>
        <button className='py-2 px-4 rounded-2xl' style={{ background: "indigo" }} onClick={() => setColor("indigo")}>indigo</button>
      </div>
    </div>
  )
}

export default App
