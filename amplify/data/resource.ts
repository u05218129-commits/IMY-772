import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  // Stores the reports that the users submit
  SubmissionReport: a
    .model({
      // Indicates the type of report submission whether it is a bug report, data suggestion, or new case.
      type: a.enum(['BUG', 'DATA_SUGGESTION', 'NEW_CASE']).required(),

      // Short title for the submission
      title: a.string().required(),

      // Full user explanation
      description: a.string().required(),

      // User has the option to input their email.
      submittedByEmail: a.string(),

      //The admin review status
      status: a.enum(['PENDING', 'APPROVED', 'REJECTED']).required(),

      // Optional file/image reference for future uploads
      attachmentKey: a.string(),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(['create']),
      allow.publicApiKey().to(['read']),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
