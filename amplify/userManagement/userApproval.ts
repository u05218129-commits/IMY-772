import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  UserProfile: a
    .model({
      email: a.string().required(),
      username: a.string().required(),
      role: a.enum(['ADMIN', 'RESEARCHER']).required(),
      approvalStatus: a.enum(['PENDING', 'APPROVED', 'REJECTED']).required(),
    })
    .authorization((allow) => [
      allow.authenticated().to(['read']),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
});
