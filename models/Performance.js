const mongoose = require('mongoose');
const validator = require('validator');

const performanceSchema = new Schema({
    correct: {
        type: Number,
        required: true,
        validate: {
            validator(operation) {
                return validator.isNumeric(operation);
            },
        },
    },
    incorrect: {
        type: Number,
        required: true,
        validate: {
            validator(operation) {
                return validator.isNumeric(operation);
            },
        },
    },
});

const model = mongoose.model('Performance', {
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    session: {
        type: performanceSchema
    },
    overall: {
        type: performanceSchema
    },
});

module.exports = model;