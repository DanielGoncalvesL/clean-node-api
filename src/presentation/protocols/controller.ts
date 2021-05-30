import { HttpRequest, HttpResponse } from './http'

export interface Controller {
  handle: (htppRequest: HttpRequest) => Promise<HttpResponse>
}
