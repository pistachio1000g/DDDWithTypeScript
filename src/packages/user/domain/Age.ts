import { MinAgeException } from '../exception/MinAgeException'

export class Age {
  readonly MIN_AGE = 18

  constructor(readonly age: number) {
    if (this.age < this.MIN_AGE) {
      throw new MinAgeException(`${this.MIN_AGE}未満は登録できません`)
    }
  }
}
