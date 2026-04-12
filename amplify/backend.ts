import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/userRegistration';
import { data } from './data/reportSubmission';

// This is to register the Amplify data backend
defineBackend({
  auth,
  data,
});
