"use client";

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import amplifyconfig from '@/amplify_outputs.json';

const config = {
  Auth: {
    Cognito: {
      userPoolId: amplifyconfig.auth.user_pool_id,
      userPoolClientId: amplifyconfig.auth.user_pool_client_id,
      region: amplifyconfig.auth.aws_region,
    }
  },
  API: {
    GraphQL: {
      endpoint: amplifyconfig.data.url,
      region: amplifyconfig.data.aws_region,
      defaultAuthMode: amplifyconfig.data.default_authorization_type,
      apiKey: amplifyconfig.data.api_key
    }
  }
};

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Amplify.configure(config);
  }, []);

  return (
    <Authenticator.Provider>
      {children}
    </Authenticator.Provider>
  );
}
