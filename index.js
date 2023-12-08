import dotenv from "dotenv"
import mysql from "mysql2"

dotenv.config()

const host = process.env.MXSQL_HOST
const user = process.env.MXSQL_USER
const password = process.env.MXSQL_PASSWORD
const database = process.env.MXSQL_DATABASE
const port = process.env.MXSQL_PORT

class MXSQL {
    constructor() {
        if (!host) throw new Error("MXSQL_HOST is not defined.")
        if (!user) throw new Error("MXSQL_USER is not defined.")
        if (!password) throw new Error("MXSQL_PASSWORD is not defined.")
        if (!database) throw new Error("MXSQL_DATABASE is not defined.")

        this.con = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database,
            port: port ?? 3306
        });
    }

    query(args) {
        return new Promise((resolve, reject) => { 
            this.con.query(args, (err, result) => {
                if (err) {
                    reject(new Error(err))
                    return
                }
                if (result.length == 1) result = result[0]
                resolve(result)
                return;
            })
        })
        .catch(error => {
            console.error(error)
        })
    }
}


let mxsql = new MXSQL();
export default mxsql;