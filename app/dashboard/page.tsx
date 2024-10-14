"use client";

import { useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import { PageWrapper } from '@/components/PageWrapper';

export default function Dashboard() {
  const { user } = useAuthenticator((context) => [context.user]);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
        Welcome, {user.username}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Upcoming Sessions</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">You have 2 sessions scheduled this week.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Progress Tracker</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">You've completed 8 out of 12 modules.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Latest Resources</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">3 new articles have been added to your library.</p>
        </div>
      </div>
    </div>
  );
}
