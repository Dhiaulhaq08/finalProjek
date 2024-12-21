const Pool = require("pg").Pool

const pool = new Pool ({
    user: "postgres",
    password : "123456",
    database : "grocetaurant",
    host : "localhost",
    port : 5432,
});

function eksekusi(script_sql_dan_data) {
    return new Promise( (resolve, reject) => {
        db.query(script_sql_dan_data, function(errorSql, hasil) {
            if (errorSql) {
                reject(errorSql)
            } else {
                resolve(hasil)
            }
        })
    })
}



module.exports = pool , eksekusi;