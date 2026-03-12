import db from "../config/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginUser = (email, password, callback) => {

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, result) => {

        if (err) return callback(err, null);

        if (result.length === 0) {
            return callback({ error: "Usuário não encontrado" }, null);
        }

        const user = result[0];

        if (user.active === 0) {
            return callback({ error: "Usuário desativado" }, null);
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return callback({ error: "Senha inválida" }, null);
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            "segredo_super_token",
            { expiresIn: "1h" }
        );

        callback(null, {
            message: "Login realizado",
            token: token
        });

    });

};

export default loginUser;