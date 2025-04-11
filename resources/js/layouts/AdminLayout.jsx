import React from 'react';
import { usePage, router, Link } from '@inertiajs/react';
import { useAppearance } from '../hooks/use-appearance';
import { cn } from '../lib/utils';

const AdminLayout = ({ children }) => {
  const { auth, url } = usePage();

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

  const navItems = [
    { label: 'Dashboard', href: '/admin' },
    { label: 'Academies', href: '/admin/academies' },
    { label: 'Learning Paths', href: '/admin/learning-paths' },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors">
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Mamino Admin</h2>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition',
                url.startsWith(item.href) && 'bg-gray-200 dark:bg-gray-700 font-semibold'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white dark:bg-gray-800 shadow px-6 py-4 flex justify-between items-center">
          <div>
            <span className="text-lg font-medium">Hi, {auth?.user?.username}</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={cycleAppearance}
              className="text-sm px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded"
            >
              Mode: {appearance}
            </button>
            <button
              onClick={handleLogout}
              className="text-sm px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="p-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
