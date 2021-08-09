import { StringLengthException } from '../exception/StringLengthException'

export class Id {
  readonly STANDARD_LENGTH = 36

  constructor(readonly value: string) {
    if (value.length !== this.STANDARD_LENGTH) {
      throw new StringLengthException(`IDは${this.STANDARD_LENGTH}文字必要です`)
    }
  }
}
