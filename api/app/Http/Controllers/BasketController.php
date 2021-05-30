<?php

namespace App\Http\Controllers;

use App\Http\Resources\BasketResource;
use App\Traits\ApiResponser;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BasketController extends Controller
{
    use ApiResponser;

    private function calc($ingredients)
    {
        $unique = $ingredients->unique("name");

        $filtered = $unique->flatMap(function ($ingredient) {
            return [$ingredient->name => ["unit" => $ingredient->unit, "amount" => 0]];
        })->toArray();

        foreach($ingredients as $ingredient) $filtered[$ingredient->name]["amount"] += $ingredient->pivot->amount;

        return $filtered;
    }

    public function index()
    {
        $plannedRecipes = auth()->user()
            ->plannedRecipes()
            ->wherePivot('date', '>=', Carbon::now()->startOfDay())
            ->wherePivot('date', '<', Carbon::now()->addWeeks(2)->startOfDay())
            ->with('ingredients')
            ->limit(10)
            ->get();

        $ingredients = $plannedRecipes->flatMap(function ($recipe) {
            return $recipe->ingredients;
        });

        return $this->calc($ingredients);


        return $ingredients;
        return BasketResource::collection();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
