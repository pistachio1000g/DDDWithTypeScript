import { StringLengthException } from '../exception/StringLengthException'

export class UserName {
  readonly firstName: string
  readonly lastName: string

  readonly MAX_LENGTH = 20

  constructor(firstName: string, lastName: string) {
    if (firstName.length == 0 || lastName.length == 0) {
      throw new StringLengthException(`文字数は1文字以上必要です`)
    }

    if (
      firstName.length > this.MAX_LENGTH ||
      lastName.length > this.MAX_LENGTH
    ) {
      throw new StringLengthException(`文字数は${this.MAX_LENGTH}以下です`)
    }

    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName(): string {
    return this.firstName + this.lastName
  }
}
