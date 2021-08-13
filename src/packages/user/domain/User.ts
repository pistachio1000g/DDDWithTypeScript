import { UserName } from '../../shared/value/UserName'
import { Id } from '../../shared/value/Id'
import { Age } from './Age'
import { Sex } from './Sex'

export class User {
  constructor(
    private _id: Id,
    private _userName: UserName,
    private _age: Age,
    private _sex: Sex
  ) {}

  get id(): Id {
    return this._id
  }

  get userName(): UserName {
    return this._userName
  }

  get age(): Age {
    return this._age
  }

  get sex(): Sex {
    return this._sex
  }

  changeUserName(userName: UserName): void {
    this._userName = userName
  }
}
