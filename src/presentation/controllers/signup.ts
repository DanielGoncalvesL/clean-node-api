import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (htppRequest: HttpRequest): HttpResponse {
    if (!htppRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }

    if (!htppRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email')
      }
    }
  }
}
