import React from 'react';
import AdminLayout from '../Layouts/AdminLayout';
import { Head, usePage } from '@inertiajs/react';

const LearningPaths = () => {
  const { learningPaths } = usePage().props;

  return (
    <AdminLayout>
      <Head title="Manage Learning Paths" />

      <div>
        <h2 className="text-2xl font-bold mb-4">Learning Paths</h2>

        <div className="space-y-4">
          {learningPaths.map((path) => (
            <div
              key={path.id}
              className="p-4 border rounded-lg bg-white dark:bg-gray-800"
            >
              <h3 className="text-lg font-semibold">{path.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{path.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default LearningPaths;
