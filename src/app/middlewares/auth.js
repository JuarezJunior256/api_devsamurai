export default (req, res, next) => {
  const authHeader = req.headers.autorization;
  if (authHeader && authHeader === "secret") {
    return next();
  }
  return res.status(401).json({ error: "error" });
};
