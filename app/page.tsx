"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { PageWrapper } from '@/components/PageWrapper';

export default function Home() {
  const { user } = useAuthenticator((context) => [context.user]);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center p-4 sm:p-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Welcome to Pranava Institute
        </h1>
        <p className="text-base sm:text-lg mb-6 text-center text-gray-600 dark:text-gray-300 max-w-xl">
          Discover the perfect harmony of mind and body through our personalized yoga and psychology training.
        </p>
        <div className="space-y-3 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
          <Link href="/about" className="text-sm bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
            Learn More
          </Link>
          <Link href="/login" className="text-sm bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
            Start Your Journey
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
