import { UserFactory } from '../../..//packages/factory/user/UserFactory'
import { userRepository } from '../../../packages/infrastructure/user/UserRepository'
import {
  CreateUserCommand,
  CreateUserUseCase,
} from '../../../packages/user/use_cases/CreateUserUseCase'

import 'jest-localstorage-mock'

describe('CreateUserUseCaseTest', (): void => {
  test('ユーザーが正しく作られるか.', (): void => {
    const useCase = new CreateUserUseCase(
      new UserFactory(),
      new userRepository()
    )

    useCase.handler(new CreateUserCommand('名前', '名字', 20, 'FEMALE'))
  })
})
