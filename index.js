import mysql from "mysql2/promise"

export default class MXQL {
    constructor(config = {host: undefined, user: undefined, password: undefined, database: undefined, port: 3306}) {
        if (!config.host) throw new Error("Host is not defined")
        if (!config.user) throw new Error("User is not defined")
        if (!config.password) throw new Error("Password is not defined")
        if (!config.database) throw new Error("Database is not defined")
        this.con = mysql.createPool(config);
    }

    async query(sql, params) {
        return await this.con.query(sql, params)
    }
}

export class QueryBuilder {
    constructor(config = {host: undefined, user: undefined, password: undefined, database: undefined, port: 3306}) {
        this.sql = ""
        this.parameters = []

        if (!config.host) throw new Error("Host is not defined")
        if (!config.user) throw new Error("User is not defined")
        if (!config.password) throw new Error("Password is not defined")
        if (!config.database) throw new Error("Database is not defined")
        this.con = mysql.createPool(config);
    }

    select(params) {
        this.sql += `SELECT ${params} `
        return this
    }

    from(params) {
        this.sql += `FROM ${params} `
        return this
    }

    where(params) {
        this.sql += `WHERE ${params} `
        return this
    }

    orderBy(params) {
        this.sql += `ORDER BY ${params} `
        return this
    }

    limit(params) {
        this.sql += `LIMIT ${params} `
        return this
    }

    values() {
        for (let i = 0; i < arguments.length; i++) {
            this.parameters.push(arguments[i])
        }
        return this
    }

    async run() {
        return await this.con.query(this.sql, this.params)
    }
}