<?php

namespace App\Models;

use App\Observers\BookObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;

#[ObservedBy([BookObserver::class])]
class Book extends Model
{
    use HasFactory;

    protected $casts = [
        'popular' => 'boolean',
        'in_stock' => 'boolean',
        'new' => 'boolean',
        'languages' => 'array',
        'formats' => 'array',
        'keywords' => 'array',
    ];

    protected $fillable = [
        "title_en",
        "title_ma",
        "description_en",
        "description_ma",
        "category_id",
        "pages",
        "languages",
        "in_stock",
        "new",
        "formats",
        "publisher",
        "link",
        "price",
        "popular",
        "image",
        "keywords"
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
