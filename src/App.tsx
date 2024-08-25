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
          test 2 count is {count}
        </button>
        <p>
          Push <code>src/App.tsx</code> and try again to save to test hot module replacement.
        </p>
      </div>
      <p className="read-the-docs">
        Learn/chat/play/drink/eat less about me/her!, or don't. I'm not only a sample React app.
      </p>
    </>
  )
}

export default App
