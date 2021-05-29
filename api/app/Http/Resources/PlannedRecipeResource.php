<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PlannedRecipeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "date" => $this->pivot->date,
            "id" => $this->id,
            "name" => $this->name,
            "imageUrl" => $this->imageUrl,
            "likes" => $this->likes,
            "dislikes" => $this->dislikes,
            "created_at" => $this->created_at,
            "reactions" => ReactionResource::collection($this->reactions),
            "ingredients" => IngredientResource::collection($this->ingredients),
            "steps" => StepResource::collection($this->steps),
        ];
    }
}
