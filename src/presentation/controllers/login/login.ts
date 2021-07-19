import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { EmailValidator } from '../signup/signup-protocols'

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (htppRequest: HttpRequest): Promise<HttpResponse> {
    if (!htppRequest.body.email) { return badRequest(new MissingParamError('email')) }

    if (!htppRequest.body.password) { return badRequest(new MissingParamError('password')) }

    const emailIsValid = this.emailValidator.isValid(htppRequest.body.email)

    if (!emailIsValid) {
      return badRequest(new InvalidParamError('email'))
    }
  }
}
