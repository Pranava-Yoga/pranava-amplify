"use client";

import { ThemeProvider } from 'next-themes';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { amplifyConfig } from './amplify-config';

// Ensure all required environment variables are set
const config = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_USER_POOLS_ID ?? '',
      userPoolClientId: process.env.NEXT_PUBLIC_USER_POOLS_WEB_CLIENT_ID ?? '',
      region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION ?? '',
    },
  },
  API: {
    GraphQL: {
      endpoint: process.env.NEXT_PUBLIC_APPSYNC_GRAPHQL_ENDPOINT ?? '',
      region: process.env.NEXT_PUBLIC_AWS_APPSYNC_REGION ?? '',
      defaultAuthMode: 'apiKey',
      apiKey: process.env.NEXT_PUBLIC_AWS_APPSYNC_API_KEY ?? '',
    },
  },
};

Amplify.configure(config);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Authenticator.Provider>{children}</Authenticator.Provider>
    </ThemeProvider>
  );
}
