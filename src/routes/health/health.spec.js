const supertest = require('supertest-as-promised');
const app = require('../../app');

const request = supertest.agent(app.listen());

describe('Health check', () => {
  describe('GET /', () => {
    it('should result in JSON success document', () => {
      return request.get('/')
        .expect(200, { ok: 'OK' });
    });
  });
});
