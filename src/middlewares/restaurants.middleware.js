import jwt from "jsonwebtoken";
import User from "../db/user.schema.js";

export const ensureAdmin = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization || req.headers.Authorization;
		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			return res.status(401).json({ error: "Token no proporcionado" });
		}

		const token = authHeader.split(" ")[1];
		const payload = jwt.verify(token, process.env.JWT_SECRET || "dev_secret");
		const user = await User.findById(payload.id).select("-password");
		if (!user) return res.status(401).json({ error: "Usuario no encontrado" });
		if (user.role !== "admin") return res.status(403).json({ error: "Acceso denegado: se requieren privilegios de administrador" });

		req.user = user;
		next();
	} catch (error) {
		return res.status(401).json({ error: "Token inválido o expirado" });
	}
};

export default { ensureAdmin };