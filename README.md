# Simple GraphQL Server

Node.js/Express CRUD backend using GraphQL and JSON-Server

## Packages

Dependencies

```
$ npm install --save express cors graphql express-graphql
```

```
$ npm install --save-dev nodemon concurrently json-server
```

## Scripts

package.json

```
"scripts": {
	"dev:server": "nodemon server.js",
	"json:server": "json-server --watch db.json",
	"server": "concurrently \"npm run dev:server\" \"npm run json:server\""
}
```

## Usage

Install Dependencies

```
$ npm install
```

Run Server (Port 4000) + Run JSON-Server (Port 3000)

```
$ npm run server
```

Go to [`localhost:4000/graphql`](http://localhost:4000/graphql)
