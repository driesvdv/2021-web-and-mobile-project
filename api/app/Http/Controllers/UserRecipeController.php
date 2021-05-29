<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRecipeRequest;
use App\Http\Requests\StoreUserRecipeRequest;
use App\Http\Resources\PlannedRecipeResource;
use App\Http\Resources\RecipeResource;
use App\Models\Recipe;
use App\Traits\ApiResponser;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class UserRecipeController extends Controller
{
    use ApiResponser;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        return PlannedRecipeResource::collection(auth()->user()->plannedRecipes()->orderByPivot('date')->limit(10)->get());
    }

    public function store(StoreUserRecipeRequest $request)
    {
        auth()->user()->plannedRecipes()->attach([$request["recipe_id"] => ["date" => $request["date"]]]);
        return $this->success($request->validated(), "Recipe added");
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \App\Http\Resources\RecipeResource
     */
    public function show($id): RecipeResource
    {
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
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return void
     */
    public function destroy($id)
    {
    }
}
