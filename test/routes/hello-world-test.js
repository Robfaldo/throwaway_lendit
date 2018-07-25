// assertion library
const {assert} = require('chai');
// used to make server requests in test
const request = require('supertest');
// app file holds our express app
const app = require('../../app');

describe('Server path: /api/hello', () => {
  describe('GET', () => {
    it('returns Hello, World!', async () => {
      // exercise
      const response = await request(app)
          .get('/api/hello');
      // verify
      assert.include(response.text, 'Hello, World!')
    });
  });
});
