import { Id } from '../../shared/value/Id'
import { User } from '../../user/domain/User'
import { UserRepositoryInterface } from '../../user/domain/UserRepositoryInterface'

export class userRepository implements UserRepositoryInterface {
  save(user: User): void {
    const userToJson = JSON.stringify(user)
    localStorage.setItem(user.id.value, userToJson)
  }
  find(id: Id): User | null {
    const userFromJson = localStorage.getItem(id.value)
    if (userFromJson === null) {
      return null
    }

    const user = JSON.parse(userFromJson)
    return user
  }
}
