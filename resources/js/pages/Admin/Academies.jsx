import React from 'react';
import AdminLayout from '../Layouts/AdminLayout';
import { Head, usePage } from '@inertiajs/react';

const Academies = () => {
  const { academies } = usePage().props;

  return (
    <AdminLayout>
      <Head title="Manage Academies" />

      <div>
        <h2 className="text-2xl font-bold mb-4">Academies</h2>

        <div className="space-y-4">
          {academies.map((academy) => (
            <div
              key={academy.id}
              className="p-4 border rounded-lg bg-white dark:bg-gray-800"
            >
              <h3 className="text-lg font-semibold">{academy.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{academy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Academies;
