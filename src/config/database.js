const mongoose = require('mongoose');
const env = require('../../env.json');

//connecting to database
//const string_connection = `mongodb://${ env.HOST }/${ env.DATABASE_NAME }`;
const string_connection = `mongodb://${ env.DATABASE_USER }:${ env.DATABASE_PASSWORD }@ds243317.mlab.com:43317/${ env.DATABASE_NAME }`;

mongoose.connect(string_connection, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
})
    .then(db => console.log('conectada a db'))
    .catch(err => console.log(err));