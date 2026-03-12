import registerService from "../services/registerService.js";
import loginService from "../services/loginService.js";

export const registerUser = (req, res) => {

    const { email, password } = req.body;

    registerService(email, password, (err, result) => {

        if (err) {
            return res.status(400).json(err);
        }

        res.status(201).json(result);
    });
};

export const loginUser = (req, res) => {

    const { email, password } = req.body;

    loginService(email, password, (err, result) => {

        if (err) {
            return res.status(401).json(err);
        }

        res.json(result);
    });
};