import mysql from "mysql2";

const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "expense_tracker"
})

connection.connect((err) => {
    if(err) {
        console.error("erro ao conectar:", err);
    } else {
        console.log("Conectado ao MySQL");
    }
});

export default connection;