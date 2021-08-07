export const SexType = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
} as const
export type SexType = typeof SexType[keyof typeof SexType]

export class Sex {
  constructor(readonly sexType: SexType) {}
}
