import { User } from './User'

export interface UserFactoryInterface {
  create(firstName: string, lastName: string, age: number, sex: string): User
}
