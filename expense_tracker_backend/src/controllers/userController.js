import registerService from "../services/registerService.js";

const registerUser = (req, res) => {

    const { email, password } = req.body;

    registerService(email, password);

    res.status(201).json({ message: "Usuário criado" });
};

export default registerUser;