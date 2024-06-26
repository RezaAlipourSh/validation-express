const { userModel } = require("../model/userModel");
const { verifyToken } = require("./authMiddleware");

class Check {
    static async checkAuth(req, res, next) {
        try {
            const auth = req?.headers?.authorization;
            const [bearer, token] = auth?.split(" ");
            if (bearer && bearer.toLowerCase() == "bearer") {
                if (token) {
                    const verifyResult = verifyToken(token);
                    const user = await userModel.findOne({ phone: verifyResult.phone })
                    req.isAuthenticated = !!user;
                    if (!user) throw { status: 401, message: "not found user . login again" };
                    req.user = {
                        fullname: user.fullname,
                        phone: user.phone
                    }
                    return next();
                }
                throw { status: 401, message: "authorization failed login again" }
            }
            throw { status: 401, message: "authorization failed" }
        } catch (error) {
            next(error)
        }
    }
}


module.exports = Check