import { UserFactoryInterface } from '../domain/UserFactory'

export class CreateUserUseCase {
  constructor(private readonly userFactory: UserFactoryInterface) {}

  handler(command: CreateUserCommand): CreateUserResult {
    const user = this.userFactory.create()
    return new CreateUserResult()
  }
}

export class CreateUserCommand {
  constructor(readonly id: string) {}
}

export class CreateUserResult {}
