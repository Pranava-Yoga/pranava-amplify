import { Amplify } from 'aws-amplify';

export const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_USER_POOLS_ID,
      userPoolClientId: process.env.NEXT_PUBLIC_USER_POOLS_WEB_CLIENT_ID,
      region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
    }
  },
  API: {
    GraphQL: {
      endpoint: process.env.NEXT_PUBLIC_APPSYNC_GRAPHQL_ENDPOINT,
      region: process.env.NEXT_PUBLIC_AWS_APPSYNC_REGION,
      defaultAuthMode: 'apiKey',
      apiKey: process.env.NEXT_PUBLIC_AWS_APPSYNC_API_KEY
    }
  }
};

export default amplifyConfig;
