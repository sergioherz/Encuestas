var mysql = require('mysql');

//Declaracion de variable global de conexión
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "123",
    database: "zapa"
  });;

//Funcion para conectar a la base de datos
function conectar(callCon){    
    con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "1234",
        database: "zapa"
      });
    con.connect(callCon);
}

//Para fines de pruebas de conexión
function probarConexion(){
    console.log("Probando conexion....");    
    conectar(function(err){
        if(err)
            console.log("Error de prueba de conexion");
            else
            console.log("La prueba de conexion fue un exito!");
    });
    con.end();
}

//Exportación de funciones para otros archivos
exports.probarConexion = probarConexion;
exports.conectar = conectar;