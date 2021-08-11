import { UserFactoryInterface } from '../domain/UserFactory'

export class CreateUserUseCase {
  constructor(private readonly userFactory: UserFactoryInterface) {}

  handler(command: CreateUserCommand): CreateUserResult {
    const user = this.userFactory.create(
      command.firstName,
      command.lastName,
      command.age,
      command.sex
    )

    return new CreateUserResult(
      user.id.value,
      user.userName.firstName,
      user.userName.lastName,
      user.age.value,
      user.sex.value
    )
  }
}

export class CreateUserCommand {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly age: number,
    readonly sex: string
  ) {}
}

export class CreateUserResult {
  constructor(
    readonly id: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly age: number,
    readonly sex: string
  ) {}
}
