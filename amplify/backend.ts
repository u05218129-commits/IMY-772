import { defineBackend } from '@aws-amplify/backend';
import { auth } from './userManagement/userRegistration';
import { data } from './report/reportSubmission';

// This is to register the Amplify data backend
defineBackend({
  userManagement,
  report,
});
