const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const patientSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
patientSchema.pre("save", async function (next) {
    const patient = this;
    if (patient.isModified('password')) {
        patient.password = await bcrypt.hash(patient.password, 8);
    }
    next();
});
patientSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
module.exports = mongoose.model('patientSchema', patientSchema);