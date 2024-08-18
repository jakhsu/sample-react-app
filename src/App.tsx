import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>hello</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          test 2 count is {count}
        </button>
        <p>
          Push <code>src/App.tsx</code> and try again to save to test hot module replacement.
        </p>
      </div>
      <p className="read-the-docs">
        Learn more about me!
      </p>
    </>
  )
}

export default App
