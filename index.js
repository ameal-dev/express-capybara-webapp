const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // Use port 8080 if PORT environment variable is not set

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/capybara.gif');
});

console.log('testing credentials');

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
