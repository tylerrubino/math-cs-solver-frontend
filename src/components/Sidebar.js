import React from 'react';
import {
	FiPlus,
	FiMinus,
	FiX,
	FiDivide,
	FiHash,
	FiList,
	FiGrid,
	FiArrowUpCircle,
	FiFeather,
} from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = ({ selectedOperation, onSelectOperation }) => {
	const operations = [
		{ id: 'add', label: 'Addition', icon: <FiPlus /> },
		{ id: 'subtract', label: 'Subtraction', icon: <FiMinus /> },
		{ id: 'multiply', label: 'Multiplication', icon: <FiX /> },
		{ id: 'divide', label: 'Division', icon: <FiDivide /> },
		{ id: 'factorial', label: 'Factorial', icon: <FiHash /> },
		{ id: 'fibonacci', label: 'Fibonacci', icon: <FiList /> },
		{ id: 'binomial', label: 'Binomial Coefficient', icon: <FiGrid /> },
		{ id: 'exponent', label: 'Exponent', icon: <FiArrowUpCircle /> },
		{ id: 'euler', label: 'Euler Exponent', icon: <FiFeather /> },
	];

	return (
		<div className='sidebar'>
			<h3>Calculators</h3>
			<ul>
				{operations.map((operation) => (
					<li
						key={operation.id}
						className={selectedOperation === operation.id ? 'active' : ''}
						onClick={() => onSelectOperation(operation.id)}>
						{operation.label}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
