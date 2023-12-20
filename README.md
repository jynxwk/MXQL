# MXQL
An extremly small library that makes queries easier (at least for me).

## Installation
`npm install mxql`

## Usage

### import
```js
import MXQL from "mxql";
```

### Query
```js

const config = {
    host: "database_host",
    user: "database_user",
    password: "database_password",
    database: "database_name"
}

const db = new MXQL(config)
const result = await db.query("SELECT * FROM table WHERE condition = ?", ["value"]);
console.log(result) // Logs all rows and fields.
```

### QueryBuilder

Alternatively you can use the QueryBuilder to execute queries:
```js
import { QueryBuilder } from "mxql";

const config = {
    host: "database_host",
    user: "database_user",
    password: "database_password",
    database: "database_name"
}

const qb = new QueryBuilder(config)
const result = await qb.select("*").from("table").where("condition = ?").values("value").run()
console.log(result) // Logs all rows and fields.
```

> [!WARNING]
> The QueryBuilder is experimental and I have barely made any functions for it yet.

## Features
The main feature is to make queries simpler because I find the standard mysql library query syntax unnecessarily annoying to use. That is also the reason I made this library in the first place. I know that it's nothing special but it makes life a little easier for me. 
There are more features planned though.

> [!NOTE]
> This library was only made to improve my coding experience. Feel free to test it out or suggest changes but don't expect it to be anything special.