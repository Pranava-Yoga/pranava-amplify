import { ThemeToggle } from './ThemeToggle';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <p className="text-sm text-black dark:text-white">
          © 2024 Pranava Institute of Yoga and Wellness. All rights reserved.
        </p>
        <ThemeToggle />
      </div>
    </footer>
  );
}
