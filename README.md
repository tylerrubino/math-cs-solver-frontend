# Math and CS Solver Frontend

This is the frontend of a responsive, modern calculator web app built with React. It features a sidebar for selecting different types of calculators, such as addition, subtraction, multiplication, division, factorial, Fibonacci, binomial coefficient, exponent, and Euler's exponent. Each calculator provides an interactive interface with descriptions to guide users.

The frontend interacts with a seperate backend API (`math-cs-solver-api`) to perform calculations.

![UI Screenshot](public/ui-screenshot.png)

## Features

- **Calculator Types**: Choose from various calculators (addition, subtraction, factorial, fibonacci, and more) with individual parameter inputs.
- **Dynamic Inputs**: Input fields adapt based on parameter inputs.
- **Tooltip Descriptions**: Hover over the "i" icon for information about each calculator's functionality.
- **Modern UI**: A polished sidebar with icons, smooth transitions, and responsive design.
- **Backend API Integration**: Fetches calculation results from the `math-cs-solver-api`.

## Tech Stack

- **Frontend**: React, CSS, `react-icons`
- **Backend API (Seperate Repository)**: [math-cs-solver-api](https://github.com/tylerrubino/math-cs-solver-api) (Node.js, Express, Math.js)

## Prerequisites

- Node.js (>=14.x)
- npm (or yarn)
- Access to the [math-cs-solver-api](https://github.com/tylerrubino/math-cs-solver-api)

## Installation

1. **Clone the Repository**:

```bash
git clone https://github.com/tylerrubino/math-cs-solver-frontend
cd math-cs-solver-frontend
```

2. **Install Dependencies**:

```bash
npm install
```

3. **Setup the Backend API**:

- Follow the instructions in the [math-cs-solver-api](https://github.com/tylerrubino/math-cs-solver-api) repository to setup and run the backend server on `http:localhost:5000`.

## Running the Frontend

1. **Start the React App**:

```bash
npm start
```

The frontend should be runnin on `http://localhost:3000`.

2. **Access the App**:

- Open your browser and go to `http://localhost:3000`.

## Configuration

Make sure the frontend is configured to interact with the backend API at `http://localhost:5000` (or your backend's deployed URL if hosted remotely). You may need to modify the API base URL in your frontend code if your backend runs on a different address.

## Usage

1. Select a calculator from the sidebar.
2. Enter the required input values.
3. Click "Calculate" button to sent input values to the backend API and display the result.
4. Hover over the "i" icon next to each calculator title for more information.

### Example Calculation

To perform an addition calculation:

1. Open the app and select "Addition" from the sidebar.
2. Enter values for `a` and `b`.
3. Click "Calculate" to send a request to the [math-cs-solver-api](https://github.com/tylerrubino/math-cs-solver-api) and see the result.

## API Integration

This frontend makes use of the [math-cs-solver-api](https://github.com/tylerrubino/math-cs-solver-api) repository as the backend. The API endpoints are accessed by making HTTP GET request with appropriate query parameters for each calculation type. Here's the expected configuration:

- **Base URL**: `http://localhost:5000` (or your deployed API URL)

Each calculator type maps to an endpoint in the API. For example:

- **Addition**: `/api/add?a=value&b=value2`
- **Subtraction**: `/api/subtract?a=value&b=value2`
- **Factorial**: `/api/factorial?n=value`
- **Fibonacci**: `/api/fibonacci?n=value`
- (and so on...)

For more information on available endpoints, refer to the [math-cs-solver-api](https://github.com/tylerrubino/math-cs-solver-api) documentation.

## Contributing

Contributions are welcome! If you’d like to improve the UI, add new features, or fix bugs:

1. Fork the project
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push the branch (`git push origin feature-name`)
5. Open a pull request

## License

This project is open-source and available under the MIT License.
