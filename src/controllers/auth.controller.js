import AuthService from "../services/auth.service.js";

const register = async (req, res) => {
  try {
    const data = req.body;
    const result = await AuthService.register(data);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.login(email, password);
    res.send(result);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export default { register, login };
