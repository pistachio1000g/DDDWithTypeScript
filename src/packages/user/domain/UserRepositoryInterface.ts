import { Id } from '../../shared/value/Id'
import { User } from './User'

export interface UserRepositoryInterface {
  save(user: User): void
  find(id: Id): User
}
