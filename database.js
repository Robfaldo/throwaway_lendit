//Import the mongoose module
const mongoose = require('mongoose');

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

// Decide which environment it's in (Test/Production/Development)
// It looks like Heroku sets NODE_ENV to production by default (https://devcenter.heroku.com/changelog-items/688)
const env = process.env.NODE_ENV || 'development';

// Decide what the databaseUrl will be (using the env variable)
// const databaseUrl = process.env.DATABASE_URL || `mongodb://localhost/gather_${env}`;
/// CHANGEd THIS *******************
const databaseUrl = 'mongodb://lendit-admin:makers123@ds245661.mlab.com:45661/lendit-dev'

// I don't know if this is needed or it's old
const options= {
  useMongoClient: true,
};

module.exports = {
  mongoose,
  databaseUrl,
  options,
};
