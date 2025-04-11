import React from "react";
import { Head, Link } from "@inertiajs/react";
import UserLayout from "../../layouts/UserLayout";

const Academies = ({ academies }) => {
  return (
    <UserLayout>
      <Head title="All Academies" />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">All Academies</h1>

        {academies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academies.map((academy) => (
              <div
                key={academy.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {academy.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {academy.description}
                </p>

                {academy.learning_paths?.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Learning Paths:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                      {academy.learning_paths.map(
                        (lp) => (
                          <li key={lp.id}>
                            <Link
                              href={`/learning-paths/${lp.id}`}
                              className="text-blue-600 hover:underline"
                            >
                              {lp.name}
                            </Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">
            No academies available.
          </p>
        )}
      </div>
    </UserLayout>
  );
};

export default Academies;
