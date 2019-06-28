const mongoose = require('mongoose');

//connecting to database
//const string_connection = `mongodb://${ env.HOST }/${ env.DATABASE_NAME }`;
const string_connection = `mongodb://${ process.env.DB_USERNAME }:${ process.env.DB_PASSWORD }@ds243317.mlab.com:43317/${ process.env.DB_DATABASE }`;

mongoose.connect(string_connection, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
})
    .then(db => console.log('conectada a db'))
    .catch(err => console.log(err));