<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        "title_en",
        "title_ma"
    ];

    public function books(): HasMany
    {
        return $this->hasMany(Book::class);
    }
    public function articles(): HasMany
    {
        return $this->hasMany(Article::class);
    }
    public function videos(): HasMany
    {
        return $this->hasMany(Video::class);
    }
}

