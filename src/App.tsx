import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>hi</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          test 4 count are {count}!!!
        </button>
        <p>
        </p>
      </div>
      <p className="read-the-docs">
        Care more about me/you!, or don't. I'm not only a sample React app.
      </p>
    </>
  )
}

export default App
