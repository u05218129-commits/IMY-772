import { defineBackend } from '@aws-amplify/backend';
import { userManagement } from './userManagement/userRegistration';
import { report } from './report/reportSubmission';

// This is to register the Amplify data backend
defineBackend({
  userManagement,
  report,
});
