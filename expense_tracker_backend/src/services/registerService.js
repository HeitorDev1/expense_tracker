import db from "../config/database.js";

const registerUser = (email, password) => {

    const sql = "INSERT INTO users (email, password) VALUES (?, ?)";

    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Usuário criado");
        }
    });

};

export default registerUser;