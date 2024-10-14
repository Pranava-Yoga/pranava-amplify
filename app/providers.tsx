"use client";

import { ThemeProvider } from 'next-themes'
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // Import the default styles
import { generateClient } from 'aws-amplify/api';
import config from '@/amplifyconfiguration.json';

Amplify.configure(config);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <Authenticator.Provider>
        {children}
      </Authenticator.Provider>
    </ThemeProvider>
  );
}
