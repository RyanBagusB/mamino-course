import React, { useState } from "react";
import { Head, usePage, router } from "@inertiajs/react";
import AdminLayout from "../../../layouts/AdminLayout";

const Index = () => {
  const { learningPaths } = usePage().props;
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.post("/admin/learning-paths", form, {
      onSuccess: () => {
        setShowModal(false);
        setForm({ name: "", description: "" });
      },
    });
  };

  const handleEdit = (id) => {
    router.visit(`/admin/learning-paths/${id}/edit`);
  };

  return (
    <AdminLayout>
      <Head title="Manage Learning Paths" />

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Learning Paths</h2>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            + Add Learning Path
          </button>
        </div>

        <div className="space-y-4">
          {learningPaths.map((path) => (
            <div
              key={path.id}
              className="p-4 border rounded-lg bg-white dark:bg-gray-800"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">
                    {path.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {path.description}
                  </p>
                </div>
                <button
                  onClick={() => handleEdit(path.id)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">
              Add Learning Path
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className="w-full border px-3 py-2 rounded-lg dark:bg-gray-800"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">
                  Description
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      description: e.target.value,
                    })
                  }
                  className="w-full border px-3 py-2 rounded-lg dark:bg-gray-800"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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
