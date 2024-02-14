const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/capybara.gif');
});

console.log('testing credentials');
console.log('testing credentials');

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
