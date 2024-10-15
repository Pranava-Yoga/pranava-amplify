"use client";

import { useEffect } from 'react';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import { PageWrapper } from '@/components/PageWrapper';

const components = {
  Header() {
    return (
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Pranava Institute Login
      </h1>
    );
  },
};

export default function LoginPage() {
  const { route } = useAuthenticator((context) => [context.route]);
  const router = useRouter();

  useEffect(() => {
    if (route === 'authenticated') {
      router.push('/dashboard');
    }
  }, [route, router]);

  return (
    <PageWrapper>
      <div className="flex justify-center items-center p-4 sm:p-6">
        <Authenticator
          components={components}
          // Remove this line or set to false to show sign-up
          // hideSignUp={true}
        >
          {({ signOut }) => (
            <div>
              <h1 className="text-gray-800 dark:text-white">You are signed in!</h1>
              <button onClick={signOut} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">Sign out</button>
            </div>
          )}
        </Authenticator>
      </div>
    </PageWrapper>
  );
}
