import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Qrcode from './components/qr-code'
import Timer from './components/timer'

function App() {
  const [count, setCount] = useState(0)

  
  
  return (
    <>
     <div><h1>qr code generator</h1></div>
     {/* <Qrcode/> */}
     <Timer/>
    </>
  )
}

export default App
