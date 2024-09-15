// Import express module
const express = require('express');
const cors = require('cors');

//whitelist all the domains

// Create an express application
const app = express();
app.use(cors());

// Define the port number
const PORT = 8000;

const users = [
	{ id: 1, name: 'John Doe' },
	{ id: 2, name: 'Jane Doe' },
	{ id: 3, name: 'Jim Doe' },
];

// Define a route for GET requests to the root URL ('/')
app.get('/:id', (req, res) => {
	const id = req.params.id; //cats rats bats dogs 1 2 3
	const user = users.find((user) => user.id === parseInt(id));
	// Send back some JSON data when this route is accessed
	if (!user) {
		return res.status(404).json({
			message: 'User not found',
		});
	}
	res.json({
		user,
	});
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
