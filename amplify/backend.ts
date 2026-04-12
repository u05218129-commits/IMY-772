import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/reportSubmission';

// This is to register the Amplify data backend
defineBackend({
  auth,
  data,
});
