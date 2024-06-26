const { userModel } = require("../model/userModel");
const { comparePass, hashPassword, signToken } = require("../middlewares/authMiddleware");

class AuthControl {

    async signup(req, res, next) {
        try {
            let { fullname, phone, password } = req.body;
            const user = await userModel.create({
                fullname,
                phone,
                password: hashPassword(password)
            });
            res.send(user)
        } catch (error) {
            next(error)
        }
    }

    async login(req, res, next) {
        try {
            const { phone, password } = req.body;
            const user = await userModel.findOne({ phone })
            if (!user) throw { status: 404, message: "user NotFound" }
            if (comparePass(password, user.password)) {
                const token = signToken({ id: user._id, phone: user.phone })
                res.send({ token, message: "successful login" })
            } else {
                throw {
                    status: 400,
                    message: "password or phone number inCorrect. try with Correct values!"
                }
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    AuthControl
}