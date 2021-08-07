import { BaseError } from "./BaseError";

export class StringLengthException extends BaseError {
    constructor(e?: string) {
      super(e);
    }
  }