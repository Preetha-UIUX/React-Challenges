import { useState } from "react"


function App() {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      {isVisible && <p id="my-paragraph">Toggle Paragraph to hide and show</p>}
      <button id="toggle-btn" onClick={handleToggle}>Toggle Paragraph</button>
    </div>
  )
}

export default App
