const mongoose = require('mongoose');

const gigSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
        maxlength: 100
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
    },
    budget: {
        type: Number,
        required: [true, 'Please add a budget'],
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['open', 'assigned'],
        default: 'open'
    },
    winner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bid',
    }
}, { timestamps: true });

// Index for search
gigSchema.index({ title: 'text' });

module.exports = mongoose.model('Gig', gigSchema);
