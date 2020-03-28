const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Profile', () => {
  let ongId;

  beforeAll(async () => {
    await connection.migrate.latest();
  });
  afterAll(async () => {
    //Limpar tabela após o teste
    await connection('incidents')
      .where('title', 'Test')
      .delete();
    await connection('ongs')
      .where('name', 'TEST')
      .delete();
    await connection.destroy();
  });

  it('should be able to return the incidents from a profile.', async () => {
    if (!ongId) {
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
      const createdIncidentResponse = await request(app)
        .post('/incidents')
        .set('authorization', ongIdResponse.body.id)
        .send({
          title: 'Test',
          description: 'Test Description',
          value: 120
        });

      incidentId = createdIncidentResponse.body.id;
    }
    const response = await request(app)
      .get('/profile')
      .set('authorization', ongId)
      .send();
    expect(response.status).toBe(200);
    expect(response.body).toContainEqual('Test');
  });
});
