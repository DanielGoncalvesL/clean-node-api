import { Router } from 'express'
import { makeSignUpController } from '../factories/signup/signup-factory'
import { adaptRoute } from '../adapter/express/express-routes-adapter'
export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
}
