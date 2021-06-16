import request from 'supertest'
import { app } from '../config/app'

describe('Signup routes', () => {
  test('Should return an account on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      })
      .expect(200)
  })
})
