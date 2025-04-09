<?php

namespace Database\Seeders;

use App\Models\Academy;
use Illuminate\Database\Seeder;

class AcademySeeder extends Seeder
{
    public function run(): void
    {
        Academy::create(['name' => 'Web Development', 'description' => 'Belajar menjadi web developer']);
        Academy::create(['name' => 'Data Science', 'description' => 'Belajar analisis data']);
    }
}
