const request = require('supertest');
let app;

beforeEach(() => {
  // Clear require cache to reset in-memory data between tests
  delete require.cache[require.resolve('../server')];
  app = require('../server');
});

describe('Poll API', () => {
  test('GET /api/polls returns empty array initially', async () => {
    const res = await request(app).get('/api/polls');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  test('POST /api/admin/polls then GET /api/polls returns new poll', async () => {
    const pollData = { question: 'Best color?', optionA: 'Red', optionB: 'Blue' };
    const postRes = await request(app).post('/api/admin/polls').send(pollData);
    expect(postRes.status).toBe(200);
    expect(postRes.body).toMatchObject({ question: 'Best color?' });

    const getRes = await request(app).get('/api/polls');
    expect(getRes.status).toBe(200);
    expect(getRes.body.length).toBe(1);
    expect(getRes.body[0]).toMatchObject({ question: 'Best color?' });
  });
});
