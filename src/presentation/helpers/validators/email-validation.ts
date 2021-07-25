import { EmailValidator } from '../../controllers/signup/signup-protocols'
import { InvalidParamError } from '../../errors'
import { Validation } from './validator'

export class EmailValidation implements Validation {
  private readonly emailValidator: EmailValidator
  private readonly fieldName: string

  constructor (emailValidator: EmailValidator, fieldName: string) {
    this.emailValidator = emailValidator
    this.fieldName = fieldName
  }

  validate (input: any): Error {
    const isValid = this.emailValidator.isValid(input[this.fieldName])

    if (!isValid) return new InvalidParamError(this.fieldName)
  }
}
