<?php

namespace App\Http\Controllers;

use App\Traits\ApiResponser;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BasketController extends Controller
{
    use ApiResponser;


    public function index()
    {
        $plannedRecipes = auth()->user()
            ->plannedRecipes()
            ->wherePivot('date', '>=', Carbon::now()->startOfDay())
            ->wherePivot('date', '<', Carbon::now()->addWeeks(2)->startOfDay())
            ->limit(10)
            ->with('ingredients')
            ->get();

        return $plannedRecipes;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
