const mysql = require("promise-mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bdscap_sd_v3",
  // database: "bdscaprevis",
  port: 3308,
  // port: 3306,
});
function getConnection() {
  console.log("Conexion: ", connection);
  return connection;
}
async function closeConnection() {
  const conn = await getConnection();
  conn
    .end()
    .then(() => {
      console.log("Closed :) ");
    })
    .catch((error) => {
      console.log("No closed :(");
    });
}


module.exports = { getConnection, closeConnection };
//const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'xxxx',
//   port:3308
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error al conectar a la base de datos:', err);
//     return;
//   }
//   console.log('Conexión exitosa a la base de datos.');

//   // Aquí puedes realizar consultas y operaciones en la base de datos
// });
//  function getConnection(){
//  return connection;
//  }
//  module.exports={getConnection}
