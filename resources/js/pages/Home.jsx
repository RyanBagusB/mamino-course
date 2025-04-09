import React from "react";
import { Head } from "@inertiajs/react";
import { useAppearance } from "@/hooks/use-appearance";

const Home = () => {
  const { appearance, updateAppearance } = useAppearance();

  const cycleAppearance = () => {
    const next = appearance === "light"
      ? "dark"
      : appearance === "dark"
        ? "system"
        : "light";

    updateAppearance(next);
  };

  return (
    <>
      <Head title="Home" />

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center transition-colors">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center transition-colors">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to the Home Page
          </h1>

          <button
            onClick={cycleAppearance}
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow transition"
          >
            Switch to {appearance === "light" ? "Dark" : appearance === "dark" ? "System" : "Light"} Mode
          </button>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Current mode: <strong>{appearance}</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
