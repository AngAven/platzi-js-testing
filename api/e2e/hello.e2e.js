const request = require('supertest');

const createApp = require('../src/app');

describe('tests for hello end point', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(4001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET]', () => {
    test('should return -- hello world', () => request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello World!');
      }));
  });
});
