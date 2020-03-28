const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Session', () => {
  let ongId;
  beforeAll(async () => {
    await connection.migrate.latest();
  });
  afterAll(async () => {
    //Limpar tabela após o teste
    await connection('ongs')
      .where('name', 'TEST')
      .delete();
    await connection.destroy();
  });

  it('should be able to logon profile.', async () => {
    const ongIdResponse = await request(app)
      .post('/ongs')
      .send({
        name: 'TEST',
        email: 'test@mail.com',
        whatsapp: '9999999999999',
        city: 'Test City',
        uf: 'XX'
      });
    ongId = ongIdResponse.body.id;

    const response = await request(app)
      .post('/sessions')
      .set('authorization', ongId)
      .send({
        id: ongId
      });
    expect(response.body.name).toBe('TEST');
  });
});
