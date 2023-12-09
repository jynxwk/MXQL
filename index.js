import dotenv from "dotenv"
import mysql from "mysql2"

dotenv.config()

const host = process.env.MXQL_HOST
const user = process.env.MXQL_USER
const password = process.env.MXQL_PASSWORD
const database = process.env.MXQL_DATABASE
const port = process.env.MXQL_PORT

class MXQL {
    constructor() {
        if (!host) throw new Error("MXQL_HOST is not defined.")
        if (!user) throw new Error("MXQL_USER is not defined.")
        if (!password) throw new Error("MXQL_PASSWORD is not defined.")
        if (!database) throw new Error("MXQL_DATABASE is not defined.")

        this.con = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database,
            port: port ?? 3306
        });
    }

    /**
     * Executes a query with the given arguments and returns a Promise.
     *
     * @param {String} args - The arguments for the query.
     * @return {Promise} A Promise that resolves with the result of the query,
     *                   or rejects with an error if there was an error executing the query.
     */
    query(args) {
        return new Promise((resolve, reject) => { 
            this.con.query(args, (err, result, fields) => {
                if (err) {
                    reject(new Error(err))
                    return
                }
                if (result.length === 0) result = undefined
                else if (result.length === 1) result = result[0]
                resolve(result)
                return;
            })
        })
        .catch(error => {
            console.error(error)
        })
    }
}

export default new MXQL();