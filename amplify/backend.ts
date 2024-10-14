import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

// Remove or comment out the getAmplifyConfig function
// export const getAmplifyConfig = async () => {
//   const authResources = await backend.auth;
//   const dataResources = await backend.data;

//   return {
//     Auth: {
//       Cognito: {
//         userPoolId: process.env.NEXT_PUBLIC_USER_POOLS_ID,
//         userPoolClientId: process.env.NEXT_PUBLIC_USER_POOLS_WEB_CLIENT_ID,
//         region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
//       }
//     },
//     API: {
//       GraphQL: {
//         endpoint: process.env.NEXT_PUBLIC_APPSYNC_GRAPHQL_ENDPOINT,
//         region: process.env.NEXT_PUBLIC_AWS_APPSYNC_REGION,
//         defaultAuthMode: 'apiKey',
//         apiKey: process.env.NEXT_PUBLIC_AWS_APPSYNC_API_KEY
//       }
//     }
//   };
// };
