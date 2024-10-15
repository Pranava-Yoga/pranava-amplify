"use client";

import { useEffect, useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import { FaCalendar, FaSmile, FaBook, FaUsers, FaComments, FaChartLine, FaMedal, FaLightbulb } from 'react-icons/fa';

export default function Dashboard() {
  const { user } = useAuthenticator((context) => [context.user]);
  const router = useRouter();
  const [currentMood, setCurrentMood] = useState<number | null>(null);

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  if (!user) return null;

  const moodEmojis = ['😢', '😕', '😐', '🙂', '😄'];

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Welcome, {user.username}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Upcoming Sessions */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaCalendar className="mr-2 text-blue-500" /> Upcoming Sessions
          </h2>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <div>
                <p className="font-medium">Dr. Emily Johnson</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Today, 3:00 PM</p>
              </div>
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                Join
              </button>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <p className="font-medium">Group Therapy</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tomorrow, 5:00 PM</p>
              </div>
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                Join
              </button>
            </li>
          </ul>
        </section>

        {/* Mood Tracker */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaSmile className="mr-2 text-yellow-500" /> Mood Tracker
          </h2>
          <p className="mb-2">How are you feeling today?</p>
          <div className="flex justify-between mb-4">
            {moodEmojis.map((emoji, index) => (
              <button
                key={index}
                className={`text-2xl ${currentMood === index ? 'bg-blue-100 dark:bg-blue-900' : ''} p-2 rounded-full`}
                onClick={() => setCurrentMood(index)}
              >
                {emoji}
              </button>
            ))}
          </div>
          {currentMood !== null && (
            <p className="text-center">You're feeling {['very sad', 'sad', 'okay', 'good', 'great'][currentMood]} today.</p>
          )}
        </section>

        {/* Quick Actions */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition">
              <FaBook className="text-2xl mb-2 text-green-500" />
              <span className="text-sm">Resources</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition">
              <FaUsers className="text-2xl mb-2 text-purple-500" />
              <span className="text-sm">Community</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition">
              <FaComments className="text-2xl mb-2 text-blue-500" />
              <span className="text-sm">Chat</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition">
              <FaChartLine className="text-2xl mb-2 text-red-500" />
              <span className="text-sm">Progress</span>
            </button>
          </div>
        </section>

        {/* Wellness Streak */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaMedal className="mr-2 text-yellow-500" /> Wellness Streak
          </h2>
          <p className="text-3xl font-bold text-center">7 Days</p>
          <p className="text-center text-gray-600 dark:text-gray-400">Keep up the great work!</p>
        </section>

        {/* Daily Affirmation */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaLightbulb className="mr-2 text-yellow-500" /> Daily Affirmation
          </h2>
          <p className="text-center italic">"I am capable of handling whatever challenges come my way today."</p>
        </section>

        {/* Community Highlights */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaUsers className="mr-2 text-green-500" /> Community Highlights
          </h2>
          <ul className="space-y-2">
            <li>
              <p className="font-medium">New Support Group</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Anxiety Management - Starts next week</p>
            </li>
            <li>
              <p className="font-medium">Wellness Challenge</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">30-day Mindfulness Challenge - Join now!</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
