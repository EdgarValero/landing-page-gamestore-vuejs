const mysql = require("mysql");

const mysqlConnect = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "gamestoredb"
});

mysqlConnect.connect((err) => {
	if(err) {
		console.log(err);
	} else {
		console.log("Base de Datos Conectada");
	}
});

module.exports = mysqlConnect;