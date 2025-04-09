<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory; 
use Illuminate\Database\Eloquent\Model;

class Academy extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description'];

    public function learningPaths()
    {
        return $this->belongsToMany(LearningPath::class);
    }
}
