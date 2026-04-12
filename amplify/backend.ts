import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource';

// This is to register the Amplify data backend
defineBackend({
  data,
});
