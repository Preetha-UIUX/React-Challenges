import { useState } from "react"

function App() {
  const[startRange, setStartRange] = useState('');
  const [endRange, setEndRange] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleStartChange = (e) => {
    setStartRange(e.target.value);
  }

  const handleEndChange = (e) => {
    setEndRange(e.target.value);
  }

  const handleGenerate = () => {
    const start = Number(startRange);
    const end = Number(endRange);

    if (startRange === '' || endRange === '') {
      setErrorMessage('Please enter both start and end range.');
      setRandomNumber(null);
      return;
    }

    if(isNaN(start) || isNaN(end)) {
      setErrorMessage('Invalid Input');
      setRandomNumber(null);
    } else if (start > end) {
      setErrorMessage('Start Range cant be greater than end Range');
      setRandomNumber(null);
    } else {
      const random = Math.floor(Math.random() * (end - start + 1)) + start;
      setRandomNumber(random);
      setErrorMessage('');
    }

  }

  return (
    <div>
      <h1>Random Number Generator</h1>

      <div>
        <label htmlFor="startRange">StartRange:</label>
        <input type="number" id="startRange" name="startRange" value={startRange} onChange={handleStartChange}/>
      </div>

      <div>
        <label htmlFor="endRange">EndRange:</label>
        <input type="number" id="endRange" name="endRange" value={endRange} onChange={handleEndChange}/>
      </div>

      <button id="generate" onClick={handleGenerate}>Generate</button>

      <div id="randomNumber">
        {errorMessage ? errorMessage : randomNumber}
      </div>
    </div>
  )
}

export default App
