const request = require('supertest');
const mongoose = require('mongoose');
const api = require('../../src/api');

const UserFactory = require('../factories/user.factory');

describe('UserService', () => {
  let server;

  beforeAll(async done => {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    server = api.listen(4000, () => {
      global.agent = request.agent(server);
      done();
    });
  });

  afterAll(async () => {
    await server.close();
    await mongoose.disconnect();
  });

  it('GET /users', async () => {
    await request(server)
      .get('/users')
      .expect(200);
  });

  it('POST /users', () => {
    const user = UserFactory();

    request(server)
      .post('/users')
      .send(JSON.stringify(user))
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
