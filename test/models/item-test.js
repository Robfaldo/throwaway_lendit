const Item = require('../../models/item');
const {assert} = require('chai');
// removed options from here
const {mongoose, databaseUrl} = require('../../database');

console.log("HERRRO")
console.log(process.env.NODE_ENV)

describe('Model: Item', () => {
  beforeEach(async () => {
    // changed databaseUrl (ie. variable imported at top) to the string
    console.log("DATABASE URL")
    console.log(databaseUrl)
    await mongoose.connect(databaseUrl);
    await mongoose.connection.db.dropDatabase();
  });

  afterEach(async () => {
    await mongoose.disconnect();
  });

  describe('#title', () => {
    it('is a String', () => {
      const titleAsNonString = 1;
      const item = new Item({title: "this one here"});
      item.save()
      assert.strictEqual(item.title, titleAsNonString.toString());
    });
  });

});
