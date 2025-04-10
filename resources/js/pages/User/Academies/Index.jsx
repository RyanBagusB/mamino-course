import React from 'react';
import { Head } from '@inertiajs/react';
import UserLayout from '../../Layouts/UserLayout';

const AcademyIndex = ({ academies }) => {
  return (
    <>
      <Head title="Academies" />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">All Academies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {academies.map(academy => (
            <div key={academy.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{academy.title}</h2>
              {academy.description && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{academy.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

AcademyIndex.layout = (page) => <UserLayout children={page} />;

export default AcademyIndex;
