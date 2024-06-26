class Profile {
    static async getProfile(req, res, next) {
        return res.send(req.user)
    }
}

module.exports = Profile