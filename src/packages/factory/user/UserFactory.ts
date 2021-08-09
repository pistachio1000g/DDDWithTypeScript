import { User } from '../../user/domain/User'
import { UserFactoryInterface } from '../../user/domain/UserFactory'
import { v4 as uuidv4 } from 'uuid'
import { Id } from '../../shared/value/Id'
import { UserName } from '../../shared/value/UserName'
import { Age } from '../../user/domain/Age'
import { Sex, SexType } from '../../user/domain/Sex'

export class UserFactory implements UserFactoryInterface {
  create(firstName: string, lastName: string, age: number, sex: string): User {
    return new User(
      new Id(uuidv4()),
      new UserName(firstName, lastName),
      new Age(age),
      new Sex(sex === 'FEMALE' ? SexType.FEMALE : SexType.MALE)
    )
  }
}
