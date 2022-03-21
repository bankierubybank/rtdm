const express = require('express');
//const config = require('/usr/src/app/config/environments/config.json');
const router = require('/usr/src/app/routes/router.js');

async function createServer() {
	const app = express();

	app.use('/', router);

	let server = await app.listen(8080, () => console.log('App listen on port: 8080'));
}

createServer();