import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Todo></Todo>
    </div>
  )
}

export default App
