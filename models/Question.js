const mongoose = require('mongoose');
const validator = require('validator');

const model = mongoose.model('Question', {
    firstNumber: {
        type: Number,
        required: true,
        validate: {
            validator(firstNumber) {
                return validator.isNumeric(firstNumber);
            },
        },
    },
    secondNumber: {
        type: Number,
        required: true,
        validate: {
            validator(secondNumber) {
                return validator.isNumeric(secondNumber);
            },
        },
    },
    operation: {
        type: String,
        required: true,
        validate: {
            validator(operation) {
                return validator.isAlphanumeric(operation);
            },
        },
    },
    answer: {
        type: Number,
        required: true,
        validate: {
            validator(answer) {
                return validator.isNumeric(answer);
            },
        },
    },
});

module.exports = model;