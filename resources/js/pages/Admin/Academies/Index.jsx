import React, { useState } from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import AdminLayout from "../../../layouts/AdminLayout";

const Index = () => {
  const { academies, errors } = usePage().props;
  const [showModal, setShowModal] = useState(false);

  const { data, setData, post, processing, reset } = useForm({
    name: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/admin/academies/", {
      onSuccess: () => {
        setShowModal(false);
        reset();
      },
    });
  };

  return (
    <AdminLayout>
      <Head title="Manage Academies" />

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Academies</h2>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            + Add Academy
          </button>
        </div>

        <div className="space-y-4">
          {academies.map((academy) => (
            <div
              key={academy.id}
              className="p-4 border rounded-lg bg-white dark:bg-gray-800"
            >
              <h3 className="text-lg font-semibold">
                {academy.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {academy.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Add Academy</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium">
                  Name
                </label>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) =>
                    setData("name", e.target.value)
                  }
                  className="w-full border px-3 py-2 rounded-lg dark:bg-gray-800"
                  required
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-medium">
                  Description
                </label>
                <textarea
                  value={data.description}
                  onChange={(e) =>
                    setData("description", e.target.value)
                  }
                  className="w-full border px-3 py-2 rounded-lg dark:bg-gray-800"
                  rows="3"
                  required
                />
                {errors.description && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.description}
                  </p>
                )}
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    reset();
                  }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={processing}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default Index;
