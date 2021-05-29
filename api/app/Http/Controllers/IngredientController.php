<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreIngredientRequest;
use App\Http\Resources\IngredientResource;
use App\Models\Ingredient;
use App\Traits\ApiResponser;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class IngredientController extends Controller
{
    use ApiResponser;

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreIngredientRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreIngredientRequest $request): JsonResponse
    {
        Ingredient::create($request->validated());
        return $this->success($request->validated());
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Ingredient $ingredient
     * @return \App\Http\Resources\IngredientResource
     */
    public function show(Ingredient $ingredient)
    {
        return new IngredientResource($ingredient);
    }

}
