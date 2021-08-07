export class CreateUserUseCase {
  handler(command: CreateUserCommand): CreateUserResult {
    return new CreateUserResult()
  }
}

export class CreateUserCommand {
    constructor()
}

export class CreateUserResult {}
