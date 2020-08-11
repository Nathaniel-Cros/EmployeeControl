<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employees extends Model
{
    protected $table = 'employees';
    protected $fillable = ['employee_id', 'name', 'email', 'area', 'birthday', 'address'];
}
