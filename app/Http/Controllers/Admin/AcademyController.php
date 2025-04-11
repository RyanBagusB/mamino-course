<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Academy;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AcademyController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Academies/Index', [
            'academies' => Academy::all()
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        Academy::create($request->only('name', 'description'));

        return redirect()->route('admin.academies.index')->with('success', 'Academy created.');
    }
}
