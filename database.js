//Import the mongoose module
const mongoose = require('mongoose');

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

// Decide which environment it's in (Test/Production/Development)
// It looks like Heroku sets NODE_ENV to production by default (https://devcenter.heroku.com/changelog-items/688)
const env = process.env.NODE_ENV || 'lendit-dev';

const databases = {
  'lendit-test': 47101,
  'lendit-prod': 47171,
  'lendit-dev': 47001
}
const databaseUrl = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_Password}@ds247001.mlab.com:${databases[env.toString()]}/${env}`

// I don't know if this is needed or it's old
// const options= {
//   useMongoClient: true,
// };

module.exports = {
  mongoose,
  databaseUrl
  // options,
};
