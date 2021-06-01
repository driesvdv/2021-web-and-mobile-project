<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BasketResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
//        dd($this);
        return [
//            "name" => $this->name,
            "unit" => $this['unit'],
            "amount" => $this['amount'],
            "test" => "test"
        ];
    }
}
