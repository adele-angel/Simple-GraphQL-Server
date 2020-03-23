const express = require('express');
const expressGraphQL = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

const app = express();

// enable `cors` to set HTTP response header: Access-Control-Allow-Origin: *
app.use(cors());

app.use(
	'/graphql',
	expressGraphQL({
		schema: schema,
		graphiql: true // enable GraphQL IDE
	})
);

app.listen(4000, () => {
	console.log('server is running on port 4000');
});
