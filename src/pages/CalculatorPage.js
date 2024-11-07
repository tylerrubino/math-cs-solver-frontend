import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MathOperation from '../components/MathOperation';
import './CalculatorPage.css';

function CalculatorPage() {
	const [selectedOperation, setSelectedOperation] = useState('add'); // Default to addition

	return (
		<div className='calculator-page'>
			<Sidebar
				selectedOperation={selectedOperation}
				onSelectOperation={setSelectedOperation}
			/>
			<div className='calculator-container'>
				{/* <h1>
					{selectedOperation.charAt(0).toUpperCase() +
						selectedOperation.slice(1)}{' '}
					Calculator
				</h1> */}
				<MathOperation operation={selectedOperation} />
			</div>
		</div>
	);
}

export default CalculatorPage;
