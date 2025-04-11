<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LearningPath;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Academy;

class LearningPathController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/LearningPaths/Index', [
            'learningPaths' => LearningPath::all()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        LearningPath::create($request->only('name', 'description'));

        return redirect()->route('learning-paths.index')->with('success', 'Learning Path created.');
    }

    public function edit(LearningPath $learningPath)
    {
        return Inertia::render('Admin/LearningPaths/Edit', [
            'learningPath' => $learningPath->load('academies'),
            'academies' => Academy::all()
        ]);
    }

    public function update(Request $request, LearningPath $learningPath)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'academy_ids' => 'nullable|array',
            'academy_ids.*' => 'exists:academies,id',
        ]);

        $learningPath->update([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        $learningPath->academies()->sync($request->input('academy_ids', []));

        return redirect()->route('admin.learning-paths.index')->with('success', 'Learning Path updated successfully.');
    }

}
