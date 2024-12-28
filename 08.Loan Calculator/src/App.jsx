import './App.css'

function App() {
  const [totalCost, setTotalCost] = useState('')
	const [intervals, setIntervals] = useState('')
	const [result, setResult] = useState(null)

  const handleTotalCostInput = (e) => {
		setTotalCost(e.target.value)
	}

	const handleIntervalChange = (e) => {
		setIntervals(e.target.value)
	}

	const handleCalculate = () => {
		const monthlyPayment = totalCost / intervals
		setResult(monthlyPayment.toFixed(2))
	}
	return (
		<div>
			<h1>Loan Calculator</h1>
			<div
				className="input-fields"
				style={{ display: 'flex', gap: '30px', alignItems: 'center' }}
			>
				<div>
					<label htmlFor="totalCost">Total Cost</label>
					<input
						id="totalCost"
						type="number"
						value={totalCost}
						onChange={handleTotalCostInput}
					/>
				</div>
				<div>
					<label htmlFor="totalCost">Intervals</label>
					<input
						id="numberOfIntervals"
						type="number"
						value={intervals}
						onChange={handleIntervalChange}
					/>
				</div>
			</div>
			<div className="calculate">
				<button id="calculate" onClick={handleCalculate}>
					Calculate
				</button>
			</div>
			<div id="output">{result}</div>
		</div>
	)
}

export default App
