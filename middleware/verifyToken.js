//Middleware
const verifyToken = (req, res, next) => {
    const autorizacionHeader = req.headers.authorization;
    if(!autorizacionHeader) {
        return res.status(401).json({message: "token no válido 1"});
    }

    const [bearer, token] = autorizacionHeader.split(" ");

    if (bearer !== "Bearer" || !token) {
        return res.status(401).json({message: "token no válido 2"})
    }
    try {
        jwt.verify(token, key) && next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({message: "token no válido 3"})
    }
};

module.exports = {verifyToken}