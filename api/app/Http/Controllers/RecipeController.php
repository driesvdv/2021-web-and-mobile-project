<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReactionRequest;
use App\Http\Requests\StoreRecipeRequest;
use App\Http\Resources\RecipeResource;
use App\Models\Recipe;
use App\Models\Step;
use App\Traits\ApiResponser;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class RecipeController extends Controller
{
    use ApiResponser;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        return RecipeResource::collection(Recipe::orderBy("created_at", 'desc')->limit(10)->get());
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
     * @return \App\Http\Resources\RecipeResource
     */
    public function show($id): RecipeResource
    {
        return new RecipeResource(Recipe::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\StoreRecipeRequest $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id): JsonResponse
    {
        return $this->error("Not implemented", 501);
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function like($id)
    {
        recipe::find($id)->increment('likes');
        return $this->success("Liked");
    }

    /**
     * Adds one dislike to the recipe
     *
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function disLike($id)
    {
        recipe::find($id)->increment('disLikes');
        return $this->success("Disliked");
    }

    public function react($id, StoreReactionRequest $request)
    {
        recipe::find($id)->reactions()->create($request->validated());
        return $this->success("Reaction added");
    }
}
