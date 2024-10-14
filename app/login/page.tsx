"use client";

import { useEffect } from 'react';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { route } = useAuthenticator((context) => [context.route]);
  const router = useRouter();

  useEffect(() => {
    if (route === 'authenticated') {
      router.push('/dashboard');
    }
  }, [route, router]);

  return <Authenticator />;
}
