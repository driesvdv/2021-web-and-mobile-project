<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Recipe extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function reactions(): HasMany
    {
        return $this->hasMany(Reaction::class);
    }

    public function steps(): HasMany
    {
        return $this->hasMany(Step::class);
    }

    public function ingredients(): BelongsToMany
    {
        return $this->belongsToMany(Ingredient::class, "recipe_ingredient")
            ->withPivot('amount');
    }
}
