import { verifyUser } from "../service/authService.js";

export const requiresAuth = () => {
  return (req, res, next) => {
    try {
      if (!req.headers.authorization) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const authHeader = req.headers.authorization;
      const token = authHeader.split(" ")[1];

      verifyUser(token);

      return next();
    } catch (err) {
      console.log("Auth error", err);
      return res.status(401).json({ message: "Unauthorized" });
    }
  };
};

export default { requiresAuth };
