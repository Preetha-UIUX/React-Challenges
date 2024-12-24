import { useState } from 'react'
import './App.css'

function App() {
	const celsiusToFahrenheit = (c) => {
		return c * (9 / 5) + 32
	}

	const fahrenheitToCelsius = (f) => {
		return (f - 32) * (5 / 9)
	}

	const [celsius, setCelsius] = useState(0)
	const [fahrenheit, setFahrenheit] = useState(celsiusToFahrenheit(0))

	const handleCelciusConvertion = (e) => {
		console.log('Celcius')
		const celciusValue = e.target.value
		setCelsius(celciusValue)
		setFahrenheit(celsiusToFahrenheit(celciusValue))
	}

	const handleFahrenheitConvertion = (e) => {
		console.log('Fahrenheit')
		const fahrenheitValue = e.target.value
		setFahrenheit(fahrenheitValue)
		setCelsius(fahrenheitToCelsius(fahrenheitValue))
	}

	return (
		<div>
			<h2>Temperature conversion Lab</h2>
			<div>
				<label htmlFor="celsius">Celsius</label>
				<input
					type="number"
					id="celsius"
					name="celsius"
					value={celsius}
					onChange={handleCelciusConvertion}
				/>
			</div>
			<div>
				<label htmlFor="fahrenheit">Fahrenheit</label>
				<input
					type="number"
					id="fahrenheit"
					name="fahrenheit"
					value={fahrenheit}
					onChange={handleFahrenheitConvertion}
				/>
			</div>
		</div>
	)
}

export default App
