<?php

namespace Database\Seeders;

use App\Models\Ingredient;
use Illuminate\Database\Seeder;

class IngredientSeeder extends Seeder
{

    private array $ingredienten = ["zout" => "gram", "boter" => "gram", "wortelen" => "aantal", "kip" => "aantal"];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach($this->ingredienten as $ingredient => $unit)
        {
            Ingredient::create([
                "name" => $ingredient,
                "unit" => $unit,
            ]);
        }
    }
}
