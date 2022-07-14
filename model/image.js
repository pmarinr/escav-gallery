const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    url: {
        required: true,
        type: String
    }
})


module.exports = mongoose.model('Image', imageSchema)
