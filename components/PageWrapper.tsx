"use client";

import React, { ReactNode } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ThemeToggle } from './ThemeToggle';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black relative">
      <Navbar signOut={handleSignOut} isAuthenticated={!!user} user={user} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
}
