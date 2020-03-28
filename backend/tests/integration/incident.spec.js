const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

let ongId;
let incidentId;

describe('Incident', () => {
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

  it('should be able to create a new incident', async () => {
    const ongIdResponse = await request(app)
      .post('/ongs')
      .send({
        name: 'TEST',
        email: 'test@mail.com',
        whatsapp: '9999999999999',
        city: 'Test City',
        uf: 'XX'
      });
    if (ongIdResponse.body.id) {
      ongId = ongIdResponse.body.id;
    }
    const response = await request(app)
      .post('/incidents')
      .set('authorization', ongId)
      .send({
        title: 'Test',
        description: 'Test Description',
        value: 120
      });
    if (response.body.id) {
      incidentId = response.body.id;
    }
    expect(response.body).toHaveProperty('id');
  });

  it('should be able to delete an incident', async () => {
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
    }
    if (!incidentId) {
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
      .delete(`/incidents/${incidentId}`)
      // .delete(`/incidents/0`)
      .set('authorization', ongId)
      .send();
    expect(response.status).toBe(204);
  });
  it('should be able to get a list of incidents', async () => {
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
    }
    const response = await request(app)
      .get('/incidents')
      .set('authorization', ongId)
      .send();
    expect(response.header).toHaveProperty('x-total-count');
  });
});
