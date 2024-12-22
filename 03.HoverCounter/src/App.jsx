import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleHoverCount = () => {
    setCount((count) => count + 1);
  }

  return (
    <div>
			<button data-testid="button" onMouseEnter={handleHoverCount}>
				Hover Me
			</button>
			<h1 data-testid="count">{count}</h1>
		</div>
  )
}

export default App
