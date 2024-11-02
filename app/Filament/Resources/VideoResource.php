<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Video;
use App\Models\Category;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\VideoResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\VideoResource\RelationManagers;

class VideoResource extends Resource
{
    protected static ?string $model = Video::class;

    protected static ?string $navigationIcon = 'heroicon-o-film';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make("title_en")
                ->label('Title (English)')
                ->required(),
                TextInput::make("title_ma")
                ->label("Title (Marathi)")
                ->required(),
                Textarea::make("description_en")
                ->label('Description (English)')
                ->required(),
                Textarea::make("description_ma")
                ->label('Description (Marathi)')
                ->required(),
                Select::make("category_id")
                ->label("Category")
                ->required()
                ->options(Category::all()->pluck('title_en', 'id')),
                TextInput::make("link")
                ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title_en')
                ->label("Title(English)"),
                TextColumn::make('title_ma')
                ->label("Description(Marathi)"),
                TextColumn::make('description_en')
                ->limit(30)
                ->label("Description(English)"),
                TextColumn::make('description_ma')
                ->limit(30)
                ->label("Description(Marathi)"),
                TextColumn::make('category.title_en'),
                TextColumn::make('link')
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListVideos::route('/'),
            'create' => Pages\CreateVideo::route('/create'),
            'edit' => Pages\EditVideo::route('/{record}/edit'),
        ];
    }
}
