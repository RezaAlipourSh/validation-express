const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const jwt = require("jsonwebtoken")
const secret = "bb98b1d0b523d5e783f931550d7702b6";


class Hash {
    static hashPassword(password) {
        const salt = genSaltSync(10);
        return hashSync(password, salt)
    }

    static comparePass(password, hashedPass) {
        return compareSync(password, hashedPass)
    }

    static signToken(payload) {
        return jwt.sign(payload, secret);
    }

    static verifyToken(token) {
        return jwt.verify(token, secret)
    }
}

module.exports = Hash