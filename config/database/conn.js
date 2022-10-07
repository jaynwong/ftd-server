if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const mongoose = require('mongoose');

// Connect to different databases based on the environment
const getDBURL = () => {
    var environment = process.env.NODE_ENV || 'testing';
    if (environment == 'development') {
        return process.env.MONGO_DEV_URL;
    } else if (environment == 'testing') {
        return process.env.MONGO_TEST_URL;
    } else if (environment == 'production') {
        return process.env.MONGO_PROD_URL;
    }
    else {
        console.log(`Environment is undefined or incorrect.`);
        return null;
    }
}
const dbURI = getDBURL();
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'foodtodo'
}

mongoose.connect(dbURI, dbOptions)

// Testing if the connection to the database is successful
const connection = mongoose.connection;

connection.once('open', () => {
    console.log(`Database connected on: ${connection.host} port ${connection.port}`);
})
connection.on('error', err => {
    console.log(`Connection failed: ${err}`);
    process.exit(1);
})

module.exports = {
    connection,
    dbURI
};



