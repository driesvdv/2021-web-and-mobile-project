<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRecipeRequest;
use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Recipe::paginate(15);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreRecipeRequest $request
     * @return void
     */
    public function store(StoreRecipeRequest $request)
    {
        Recipe::create($request->validated());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
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
     * @param  int  $id
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