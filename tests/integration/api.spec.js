const http = require('http');
const supertest = require('supertest');
const api = require('../../src/api');
const dbConnection = require('../../src/database');

describe('HTTP Server', () => {
  let server;
  let request;

  beforeAll(done => {
    server = http.createServer(api);
    server.listen(done);
    request = supertest(server);
  });

  afterAll(done => {
    dbConnection.disconnect();
    server.close(done);
  });

  it('GET /non-existent-route returns 404', async () => {
    const response = await request.get('/non-existent-route');
    expect(response.status).toBe(404);
  });

  it('GET / return 200', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('The API is up');
  });
});
