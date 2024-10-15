"use client";

import { Amplify } from 'aws-amplify';
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from '@/components/ThemeToggle';

Amplify.configure(outputs);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <Authenticator.Provider>
        {children}
        <div className="fixed bottom-4 right-4 z-50">
          <ThemeToggle />
        </div>
      </Authenticator.Provider>
    </ThemeProvider>
  );
}
