import React, { useState, useEffect } from 'react';
import { FiInfo } from 'react-icons/fi';
import { fetchMathData } from '../api/api';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './MathOperation.css';

const MathOperation = ({ operation, paramFields }) => {
	const [params, setParams] = useState({});
	const [result, setResult] = useState(null);
	const [error, setError] = useState(null);
	const [showTooltip, setShowTooltip] = useState(false);

	// Descriptions for each operation
	const operationDescriptions = {
		add: 'This calculator performs addition of two numbers.',
		subtract: 'This calculator performs subtraction of two numbers.',
		multiply: 'This calculator performs multiplication of two numbers.',
		divide: 'This calculator performs division of two numbers.',
		factorial: 'Calculates the factorial of a single integer.',
		fibonacci: 'Calculates the nth Fibonacci number.',
		binomial: 'Calculates the binomial coefficient for given n and k values.',
		exponent: 'Calculates the result of raising a number to a power.',
		euler: 'Calculates Euler’s exponent for a given value.',
		derivative:
			'Calculates the derivative of a function with respect to a variable',
	};

	// Define required parameters for each operation
	const operationParams = {
		add: ['a', 'b'],
		subtract: ['a', 'b'],
		multiply: ['a', 'b'],
		divide: ['a', 'b'],
		factorial: ['n'],
		fibonacci: ['n'],
		binomial: ['n', 'k'],
		exponent: ['a', 'n'],
		euler: ['n'],
		derivative: ['function', 'variable'],
	};

	const requiredParams = operationParams[operation] || [];

	// Handle input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setParams((prevParams) => ({
			...prevParams,
			[name]: value,
		}));
	};

	// Fetch the result from the API
	const handleFetch = async () => {
		try {
			let data;

			if (operation === 'derivative') {
				// Make a POST request for the derivative calculation
				const response = await fetch('http://localhost:5000/api/derivative/', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						function: params.function,
						variable: params.variable,
					}),
				});
				data = await response.json();
			} else {
				// Make a GET request for other calculations
				data = await fetchMathData(operation, params);
			}

			console.log(data);

			if (data.result) {
				setResult(data.result);
				setError(null);
			} else {
				setError(data.error || 'Error calculating result');
			}
		} catch (err) {
			setError('Error connecting to API');
			setResult(null);
		}
		// Validate that all required params are present
		// const missingParams = requiredParams.filter((param) => !params[param]);
		// if (missingParams.length > 0) {
		// 	setError(`Please provide values for: ${missingParams.join(', ')}`);
		// 	setResult(null);
		// 	return;
		// }

		// try {
		// 	const data = await fetchMathData(operation, params);
		// 	setResult(data.result);
		// 	setError(null);
		// } catch (err) {
		// 	setError(err.message);
		// 	setResult(null);
		// }
	};

	useEffect(() => {
		setParams({});
		setResult(null);
		setError(null);
	}, [operation]);

	return (
		<div className='operation-container'>
			<h2>
				{operation.toUpperCase()}
				<span
					className='info-icon'
					onMouseEnter={() => setShowTooltip(true)}
					onMouseLeave={() => setShowTooltip(false)}>
					<FiInfo />
					{showTooltip && (
						<span className='tooltip'>{operationDescriptions[operation]}</span>
					)}
				</span>
			</h2>

			{/* Conditionally render input fields based on required parameters */}
			{requiredParams.map((param) => (
				// <div key={param}>
				<label key={param} className='input-label'>
					{param}:
					<input
						type='text'
						name={param}
						value={params[param] || ''}
						onChange={handleInputChange}
						className='input'
					/>
				</label>
				// </div>
			))}

			<button onClick={handleFetch} className='button'>
				Calculate
			</button>

			{result !== null && (
				<div className='result'>
					<p className='result'>Result: {result}</p>
					<BlockMath math={result} />
				</div>
			)}
			{error && <p className='error'>Error: {error}</p>}
		</div>
	);
};

export default MathOperation;
