<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Video extends Model
{
    use HasFactory;

    protected $fillable = [
        "title_en",
        "title_ma",
        "description_en",
        "description_ma",
        "category_id",
        "link",
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
