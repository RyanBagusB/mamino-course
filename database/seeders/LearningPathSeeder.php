<?php

namespace Database\Seeders;

use App\Models\LearningPath;
use Illuminate\Database\Seeder;

class LearningPathSeeder extends Seeder
{
    public function run(): void
    {
        LearningPath::create(['name' => 'Frontend Path', 'description' => 'Belajar HTML, CSS, JS']);
        LearningPath::create(['name' => 'Backend Path', 'description' => 'Belajar PHP dan Laravel']);
    }
}
