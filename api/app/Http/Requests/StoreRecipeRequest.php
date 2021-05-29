<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;


class StoreRecipeRequest extends APIRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'description' => 'required|string',
            'imageUrl' => 'nullable',
            'ingredients' => 'array',
            'steps' => 'array',
            'ingredients.*.ingredient_id' => 'int',
            'ingredients.*.amount' => 'int',
            'steps.*.name' => 'required|string',
            'steps.*.description' => 'required|string'
        ];
    }
}
