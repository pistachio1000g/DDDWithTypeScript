export const MembershipType = {
  NON_PREMIUM_MEMBERS: 'NON_PREMIUM_MEMBERS',
  PREMIUM_MEMBERS: 'PREMIUM_MEMBERS',
} as const
export type MembershipType = typeof MembershipType[keyof typeof MembershipType]

export class PremiumMembers {
  constructor(readonly value: MembershipType) {}
}
