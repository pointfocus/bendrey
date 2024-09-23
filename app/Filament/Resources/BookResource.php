<?php

namespace App\Filament\Resources;

use Filament\Forms;
use App\Models\Book;
use Filament\Tables;
use App\Models\Category;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\BookResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\BookResource\RelationManagers;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Toggle;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;

class BookResource extends Resource
{
    protected static ?string $model = Book::class;

    protected static ?string $navigationIcon = 'heroicon-o-book-open';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([ 
                Toggle::make('popular')
                ->columnSpanFull(),
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
                TextInput::make("link"),
                TextInput::make("price")
                ->numeric()
                ->prefix('$')
                ->maxValue(999),
                TextInput::make('keywords')
                ->required(),
                FileUpload::make("image")
                ->image()
                ->imageEditor()
                ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                IconColumn::make('popular')
                ->boolean()
                ->trueIcon('heroicon-o-check')
                ->falseIcon(""),
                ImageColumn::make('image'),
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
                TextColumn::make('keywords')
                ->limit(20),
                TextColumn::make('price')
                ->prefix("$"),
                TextColumn::make('link')
                ->limit(20),
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
            'index' => Pages\ListBooks::route('/'),
            'create' => Pages\CreateBook::route('/create'),
            'edit' => Pages\EditBook::route('/{record}/edit'),
        ];
    }
}
