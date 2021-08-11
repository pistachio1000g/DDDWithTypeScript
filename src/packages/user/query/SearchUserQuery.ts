export interface SearchUserQuery {
  handler(minAge: number, maxAge: number): QueryResponse[]
}

export class QueryResponse {
  constructor(
    readonly id: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly age: number
  ) {}
}
