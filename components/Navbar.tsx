import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export function Navbar({ 
  signOut, 
  isAuthenticated, 
  user 
}: { 
  signOut: () => Promise<void>, 
  isAuthenticated: boolean, 
  user?: { username: string }
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSignOut = async () => {
    await signOut();
    toggleMenu();
    // We'll use a regular anchor tag for redirection after sign out
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoContainer}>
          <Image src="/images/logo.svg" alt="Logo" width={50} height={50} />
        </Link>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
          {isAuthenticated ? (
            <>
              <li><span className={styles.welcomeMessage}>Welcome, {user?.username}</span></li>
              <li>
                <a 
                  href="/" 
                  onClick={async (e) => {
                    e.preventDefault();
                    await handleSignOut();
                    window.location.href = '/';
                  }}
                >
                  Sign out
                </a>
              </li>
            </>
          ) : (
            <li><Link href="/login" onClick={toggleMenu}>Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
}
