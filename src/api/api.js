const API_BASE_URL =
	process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export async function fetchMathData(endpoint, params = {}) {
	const url = new URL(`${API_BASE_URL}/${endpoint}`);

	// add each parameter to the URL query string
	Object.keys(params).forEach((key) =>
		url.searchParams.append(key, params[key])
	);

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();
		console.log('API Response Data:', data); // Log the API response to confirm
		return data;
	} catch (error) {
		console.error('Fetch error:', error);
		throw error;
	}
}
