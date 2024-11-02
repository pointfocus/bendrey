<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Article;
use App\Models\Category;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\FileUpload;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\ArticleResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\ArticleResource\RelationManagers;

class ArticleResource extends Resource
{
    protected static ?string $model = Article::class;

    protected static ?string $navigationIcon = 'heroicon-o-newspaper';

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
                TextInput::make("link"),
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
            'index' => Pages\ListArticles::route('/'),
            'create' => Pages\CreateArticle::route('/create'),
            'edit' => Pages\EditArticle::route('/{record}/edit'),
        ];
    }
}
