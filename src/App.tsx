import { useState } from 'react'
import './App.css'
import GlobalStyles from './emotionstyle'
import Navibar from './navigation'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default App
