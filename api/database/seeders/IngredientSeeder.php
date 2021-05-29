<?php

namespace Database\Seeders;

use App\Models\Ingredient;
use Illuminate\Database\Seeder;

class IngredientSeeder extends Seeder
{

    private array $ingredienten = ["gram" => "zout", "gram" => "boter", "aantal" => "wortelen", "aantal" => "kip"];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach($this->ingredienten as $unit => $ingredient)
        {
            Ingredient::create([
                "name" => $ingredient,
                "unit" => $unit,
            ]);
        }
    }
}
