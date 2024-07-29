const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
       
    },
    email: {
        type: String,
        required: true,
    
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcryptjs.hash(this.password, 10);
    }
    next();
})
userSchema.methods.comparePassword = async function(password) {
    return await bcryptjs.compare(password, this.password);
}
module.exports = mongoose.model('users',userSchema);
