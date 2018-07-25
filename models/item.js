const mongoose = require('mongoose');

// module.exports = mongoose.model(
//   'Item',
//   // Define your model schema below:
//   mongoose.Schema({
//     title: {
//       type: String,
//       required: true
//     },
//   })
// );

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Item', ItemSchema);
