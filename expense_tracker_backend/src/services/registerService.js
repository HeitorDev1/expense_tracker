import db from "../config/database.js";
import bcrypt from "bcrypt";

const registerUser = async (email, password, callback) => {

    const hash = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (email, password) VALUES (?, ?)";

    db.query(sql, [email, hash], (err, result) => {

        if (err) {

            if (err.code === "ER_DUP_ENTRY") {
                return callback({ error: "Email já cadastrado" }, null);
            }

            return callback(err, null);
        }

        callback(null, { message: "Usuário criado" });
    });
};

export default registerUser;