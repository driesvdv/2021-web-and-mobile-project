<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRecipeRequest;
use App\Models\Recipe;
use App\Models\Step;
use App\Traits\ApiResponser;

class RecipeController extends Controller
{
    use ApiResponser;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Recipe::paginate(15);
    }

    public function store(StoreRecipeRequest $request)
    {
        $recipe = $request->only(['name', 'description']);
        $ingredients = $request->only('ingredients');
        $steps = $request->only('steps');

        $ingredients = (collect($ingredients["ingredients"])->mapWithKeys(function ($ingredient) {
            return [$ingredient["ingredient_id"] => ["amount" => $ingredient["amount"]]];
        }));

        $recipe = auth()->user()->recipes()->create($recipe);
        $recipe->steps()->createMany($steps["steps"]);
        $recipe->ingredients()->attach($ingredients);

        return $this->success($recipe, "Recipe has been saved", 201);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Recipe::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\StoreRecipeRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreRecipeRequest $request, $id)
    {
        $recipe = Recipe::find($id);

        $recipe->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return void
     */
    public function destroy($id)
    {
        recipe::find($id)->delete();
    }

    /**
     * Adds one like to the recipe
     *
     * @param $id
     */
    public function like($id)
    {
        recipe::find($id)->increment('likes');
    }

    /**
     * Adds one dislike to the recipe
     *
     * @param $id
     */
    public function disLike($id)
    {
        recipe::find($id)->increment('disLikes');
    }
}
