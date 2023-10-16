const mysql = require('mysql');

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'stiver',
    password: 'Stiver#2002',
    database: 'app'
})


conection.connect( (err) => {
    if (err) throw err
    console.log('La conexion fue exitosa')
})


conection.query('SELECT * from usuario', (err, rows) =>{
    if(err) throw err
    console.log('Lo datos de la tabla son estos :')
    console.log(rows)
    })

conection.end();