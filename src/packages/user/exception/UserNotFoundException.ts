import { BaseError } from '../../shared/exception/BaseError'

export class UserNotFoundException extends BaseError {
  constructor(e?: string) {
    super(e)
  }
}
