import React, { useState } from "react";
import { Head, router, useForm } from "@inertiajs/react";
import AdminLayout from "../../Layouts/AdminLayout";

const Edit = ({ learningPath, academies }) => {
  const { data, setData, put, processing, errors } = useForm({
    name: learningPath.name || "",
    description: learningPath.description || "",
    academy_ids: learningPath.academies?.map((a) => a.id) || [],
  });

  const handleCheckboxChange = (e) => {
    const id = parseInt(e.target.value);

    setData((prev) => {
      const selected = prev.academy_ids || [];

      const updated = selected.includes(id)
        ? selected.filter((i) => i !== id)
        : [...selected, id];

      return {
        ...prev,
        academy_ids: updated,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    put(`/admin/learning-paths/${learningPath.id}`);
  };

  return (
    <AdminLayout>
      <Head title="Edit Learning Path" />

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Edit Learning Path</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded dark:bg-gray-700"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block font-medium">Description</label>
            <textarea
              className="w-full border px-3 py-2 rounded dark:bg-gray-700"
              rows="4"
              value={data.description}
              onChange={(e) =>
                setData("description", e.target.value)
              }
              required
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description}
              </p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-2">
              Academies
            </label>
            <div className="space-y-2 max-h-48 overflow-y-auto p-2 border rounded">
              {academies.map((academy) => (
                <label
                  key={academy.id}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    value={academy.id}
                    checked={data.academy_ids.includes(
                      academy.id,
                    )}
                    onChange={handleCheckboxChange}
                  />
                  <span>{academy.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <a
              href="/admin/learning-paths"
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </a>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              disabled={processing}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Edit;
