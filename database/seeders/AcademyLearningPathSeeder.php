<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Academy;
use App\Models\LearningPath;

class AcademyLearningPathSeeder extends Seeder
{
    public function run(): void
    {
        $academies = Academy::all();
        $paths = LearningPath::all();

        foreach ($academies as $academy) {
            $academy->learningPaths()->attach($paths->pluck('id')->toArray());
        }
    }
}
