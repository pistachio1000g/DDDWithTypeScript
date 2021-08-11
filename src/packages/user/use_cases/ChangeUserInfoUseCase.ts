import { Id } from '../../shared/value/Id'
import { UserName } from '../../shared/value/UserName'
import { UserRepositoryInterface } from '../domain/UserRepositoryInterface'
import { UserNotFoundException } from '../exception/UserNotFoundException'

export class ChangeUserInfoUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  handler(command: ChangeUserInfoCommand): ChangeUserInfoResult {
    const user = this.userRepository.find(new Id(command.id))
    if (user === null) {
      throw new UserNotFoundException('ユーザーが見つかりません')
    }

    user.changeUserName(new UserName(command.firstName, command.lastName))
    this.userRepository.save(user)

    return new ChangeUserInfoResult(
      user.id.value,
      user.userName.firstName,
      user.userName.lastName
    )
  }
}

export class ChangeUserInfoCommand {
  constructor(
    readonly id: string,
    readonly firstName: string,
    readonly lastName: string
  ) {}
}

export class ChangeUserInfoResult {
  constructor(
    readonly id: string,
    readonly firstName: string,
    readonly lastName: string
  ) {}
}
