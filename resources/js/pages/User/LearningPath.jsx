import React from "react";
import { Head } from "@inertiajs/react";
import UserLayout from "../../layouts/UserLayout";

const LearningPath = ({ learningPath }) => {
  return (
    <UserLayout>
      <Head title={learningPath.name} />

      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4">{learningPath.name}</h1>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          {learningPath.description}
        </p>

        <h2 className="text-xl font-semibold mb-2">Academies:</h2>
        {learningPath.academies.length > 0 ? (
          <ul className="space-y-2">
            {learningPath.academies.map((academy) => (
              <li
                key={academy.id}
                className="p-4 bg-gray-100 dark:bg-gray-700 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <h3 className="text-lg font-semibold">
                  {academy.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {academy.description}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            No academies associated with this learning path yet.
          </p>
        )}
      </div>
    </UserLayout>
  );
};

export default LearningPath;
