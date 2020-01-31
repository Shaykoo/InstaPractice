const mongoose = require('mongoose')

const imagesSchema = new mongoose.Schema({  // Constructor model
    images:[{
        image: {
            type: String,
            required: true
        }
    }],
    description:{
        type: Boolean,
        default: false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,  // says owner type is an Object ID
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})


// creating a model for Images

const Task = mongoose.model('images', imagesSchema)

module.exports= Task
