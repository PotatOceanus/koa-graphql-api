const mongoose = require('mongoose');

const initDB = () => {

    mongoose.connect(
        // 'mongodb+srv://dbuser:password@cluster0.o2va6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        'mongodb://127.0.0.1:27017/local?retryWrites=true&w=majority',
        { useNewUrlParser: true }
    );

    mongoose.connection.once('open', () => {
        console.log('connected to database');
    });

}

module.exports = initDB;