"use client";

import { useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import styles from './dashboard.module.css'; // We'll create this file

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <div className={styles.dashboardContainer}>
      <Navbar signOut={signOut} isAuthenticated={!!user} user={user} />
      <main className={styles.dashboardContent}>
        {children}
      </main>
    </div>
  );
}
