const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('ONG', () => {
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
  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'TEST',
        email: 'test@mail.com',
        whatsapp: '9999999999999',
        city: 'Test City',
        uf: 'XX'
      });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
  it('should be able to get a list of ONGs', async () => {
    const response = await request(app)
      .get('/ongs')
      .send();
    expect(response.status).toBe(200);
  });
});
