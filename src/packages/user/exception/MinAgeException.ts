import { BaseError } from '../../shared/exception/BaseError'

export class MinAgeException extends BaseError {
  constructor(e?: string) {
    super(e)
  }
}
