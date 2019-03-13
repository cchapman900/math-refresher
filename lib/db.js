const mongoose = require('mongoose');
const bluebird = require('bluebird');
const validator = require('validator');

mongoose.Promise = bluebird;

const Question = require('../models/Question.js');

const mongoString = process.env.MONGO_URI;

const mongooseOptions = {
    useNewUrlParser: true
    // server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    // replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

class DBService {

    dbExecute = (db, fn) => db.then(fn).finally(() => db.close());

    dbConnectAndExecute(fn) {
        return dbExecute(mongoose.connect(mongoString, { useMongoClient: true }), fn);
    }
}


module.exports = DBService;