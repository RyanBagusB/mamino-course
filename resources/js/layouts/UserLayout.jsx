import React, { useEffect, useState } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { useAppearance } from '@/hooks/use-appearance';

const UserLayout = ({ children }) => {
  const { auth, learningPaths } = usePage().props;
  const { appearance, updateAppearance } = useAppearance();

  const handleLogout = (e) => {
    e.preventDefault();
    router.post('/logout');
  };

  const cycleAppearance = () => {
    const next =
      appearance === 'light'
        ? 'dark'
        : appearance === 'dark'
          ? 'system'
          : 'light';

    updateAppearance(next);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors">
      <header className="bg-white dark:bg-gray-800 shadow px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-bold">Mamino Course</h1>
          <div className="flex items-center gap-4">
            <span>{auth?.user?.username}</span>
            <button
              onClick={cycleAppearance}
              className="text-sm px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded"
            >
              Mode: {appearance}
            </button>
            <button
              onClick={handleLogout}
              className="text-sm px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-4 overflow-x-auto">
          <Link href="/user/academies" className="text-blue-600 hover:underline">
            Semua Academies
          </Link>
          {learningPaths.map((lp) => (
            <Link
              key={lp.id}
              href={`/learning-paths/${lp.id}`}
              className="text-sm text-gray-700 dark:text-gray-200 hover:underline"
            >
              {lp.name}
            </Link>
          ))}
        </nav>
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
};

export default UserLayout;

