import { defineAuth } from '@aws-amplify/backend';
import { postConfirmation } from './post-confirmation/resource';


//User register and log in using an email
export const auth = defineAuth({
  loginWith: {
    email: true,
  },


  //This allows the register with a username as well.
  userAttributes: {
    preferredUsername: {
      required: true,
      mutable: true,
    },
  },


  //These are the different 
  groups: ['Admin', 'Researcher'],

  triggers: {
    postConfirmation,
  },

  access: (allow) => [
    allow.resource(postConfirmation).to(['manageUsers']),
  ],
});
