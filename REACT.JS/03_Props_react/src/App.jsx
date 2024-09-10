import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './component/card'
import New_card from './component/new_card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-wrap gap-6'>
     <Card username="Ganesh" data="visite_me" desc="hello i am Ganesh Ghode Full_Stack Developer"/>
      <New_card username="Ganesh Ghode" desc="Hello I Am A Computer Engineer Student At Dmce"/>
     <Card username="Amol" data="Clicked_Me" desc="hello i am Amol Ghode Mechanical Engineer"/>
    </div>
  )
}

export default App
