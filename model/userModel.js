const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    phone: { type: Number, unique: true, required: true, minLength: 10 },
    password: { type: String, required: true, minLength: 8 }
}, {
    timestamps: true
}
)

const userModel = mongoose.model("user", userSchema);

module.exports = {
    userModel,
}