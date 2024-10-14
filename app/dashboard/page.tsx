"use client";

import { useAuthenticator } from '@aws-amplify/ui-react';
import styles from './dashboard.module.css';

export default function Dashboard() {
  const { user } = useAuthenticator((context) => [context.user]);

  return (
    <div className={styles.dashboardPage}>
      <h1 className={styles.welcomeMessage}>Welcome to your Dashboard, {user?.username}</h1>
      {/* Add more dashboard content here */}
    </div>
  );
}
