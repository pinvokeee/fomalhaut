import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { GanttContainer } from './features/gantt/components/GanttBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <GanttContainer />
    </>
  )
}

export default App
