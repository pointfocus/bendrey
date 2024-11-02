<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title_en');
            $table->string('title_ma');
            $table->longText('description_en');
            $table->longText('description_ma');
            $table->decimal('price', 6, 2)->nullable();
            $table->boolean('popular')->default(false);
            $table->longText('link')->nullable();
            $table->string('image')->nullable();
            $table->foreignId('category_id');
            $table->string('pages')->nullable();
            $table->json('languages')->nullable();
            $table->boolean('in_stock')->default(false);
            $table->boolean('new')->default(false)->nullable();
            $table->json('formats')->nullable();
            $table->string('publisher')->nullable();
            $table->json('keywords')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
