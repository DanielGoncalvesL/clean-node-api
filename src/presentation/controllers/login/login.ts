import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class LoginController implements Controller {
  async handle (htppRequest: HttpRequest): Promise<HttpResponse> {
    if (!htppRequest.body.email) { return badRequest(new MissingParamError('email')) }

    if (!htppRequest.body.passwrod) { return badRequest(new MissingParamError('password')) }
  }
}
