import { useState, useEffect } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Navbar } from './Navbar';
import { LandingPage } from './LandingPage';
import { AuthenticatedContent } from './AuthenticatedContent';

export function AppContent() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  return (
    <>
      <Navbar signOut={signOut} isAuthenticated={isAuthenticated} user={user} />
      {isAuthenticated ? (
        <AuthenticatedContent user={user} />
      ) : (
        <LandingPage />
      )}
    </>
  );
}
