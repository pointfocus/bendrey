<?php

namespace App\Filament\Widgets;

use App\Models\Book;
use App\Models\Video;
use App\Models\Article;
use App\Models\Category;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    
    {
        $books = Book::all();
        return [
            Stat::make('Books', $books->count()),
            Stat::make('Last Added Book', $books->last()->title_en),
        ];
    }
}
