const mongoose = require('mongoose');
const { Schema } = mongoose;

const TokenSchema = new Schema({
    token: {
        type: String,
    },
    email: {
        type: String,
        trim: true
    },
    host: {
        type: String,
    }
});

module.exports = mongoose.model('Token', TokenSchema);