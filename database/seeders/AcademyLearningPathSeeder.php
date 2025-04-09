<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Academy;
use App\Models\LearningPath;

class AcademyLearningPathSeeder extends Seeder
{
    public function run(): void
    {
        // Contoh sederhana: hubungkan semua academy dengan semua learning path
        $academies = Academy::all();
        $paths = LearningPath::all();

        foreach ($academies as $academy) {
            $academy->learningPaths()->attach($paths->pluck('id')->toArray());
        }
    }
}
