<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skills extends Model
{
    protected $table = 'skills';
    protected $fillable = [ 'skill_id', 'employee_id', 'name' ];
}
