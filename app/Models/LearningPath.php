<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory; 
use Illuminate\Database\Eloquent\Model;

class LearningPath extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];

    public function academies()
    {
        return $this->belongsToMany(Academy::class);
    }
}

