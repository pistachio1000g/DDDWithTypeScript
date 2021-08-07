import { UserName } from '../../shared/value/UserName'
import { Id } from '../../shared/value/Id'

export class User {
  constructor(private id: Id, private userName: UserName) {}
}
