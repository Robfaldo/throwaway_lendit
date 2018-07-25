const Item = require('../../models/item');
const {assert} = require('chai');
// removed options from here
const {mongoose, databaseUrl} = require('../../database');

describe('Model: Item', () => {
  beforeEach(async () => {
    // changed databaseUrl (ie. variable imported at top) to the string
    await mongoose.connect(databaseUrl);
    await mongoose.connection.db.dropDatabase();
  });

  afterEach(async () => {
    await mongoose.disconnect();
  });

  describe('#title', () => {
    it('is a String', () => {
      const titleAsNonString = 1;
      const item = new Item({title: "fhriugnrjgnjk"});
      item.save()
      assert.strictEqual(item.title, titleAsNonString.toString());
    });
  });

});
