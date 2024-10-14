"use client";

import Link from 'next/link';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <div className={styles.container}>
      <Navbar signOut={signOut} isAuthenticated={!!user} user={user} />
      <main className={styles.main}>
        <h1 className={styles.title}>Pranava Institute of Yoga and Wellness</h1>
        <p className={styles.description}>One-on-one yoga and psychology training</p>
        
        {!user && (
          <Link href="/login" className={styles.button}>
            Login
          </Link>
        )}
      </main>
      <Footer />
    </div>
  );
}
