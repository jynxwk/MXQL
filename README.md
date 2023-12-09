# MXQL
An extremly small library that makes queries easier (at least for me).

## Setup

1. Install dependencies.
2. Setup the following .env variables:
```js
MXQL_HOST      // Your database host
MXQL_USER      // Your database user
MXQL_PASSWORD  // Your database password
MXQL_DATABASE  // Your database
MXQL_PORT      // Your database port (uses 3306 if not set)
```

## Usage

### import
```js
import mxql from "mxql";
```

### Query
```js
const result = await mxql.query("SELECT * FROM table");
```

## Features
The main feature is to make queries simpler because I find the standard mysql library query syntax unnecessarily annoying to use. That is also the reason I made this library in the first place. I know that it's nothing special but it makes life a little easier for me. 
There are more features planned though.

> [!NOTE]
> This library was only made to improve my coding experience. Feel free to test it out or suggest changes but don't expect it to be anything special.