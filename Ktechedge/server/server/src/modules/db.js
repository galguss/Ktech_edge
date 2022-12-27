const db = require('mysql2');

const pool = db.createPool({
    host: "localhost",
    user: "lease_ktech",
    password: "Edge2022",
    database: "lease_ktech"

});

module.exports = pool.promise();