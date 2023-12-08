# MXSQL
An extremly small library that makes queries easier (at least for me).

## Setup

1. Install dependencies.
2. Setup the following .env variables:
```js
MXSQL_HOST      // Your database host
MXSQL_USER      // Your database user
MXSQL_PASSWORD  // Your database password
MXSQL_DATABASE  // Your database
MXSQL_PORT      // Your database port (uses 3306 if not set)
```

## Usage

### import
```js
import mxsql from "mxsql";
```

### Query
```js
const result = await mxsql.query("SELECT * FROM table");
```

## Features
The main feature is to make queries simpler because I find the standard mysql library query syntax unnecessarily annoying to use. That is also the reason I made this library in the first place. I know that it's nothing special but it makes life a little easier for me. 
There are more features planned though.
