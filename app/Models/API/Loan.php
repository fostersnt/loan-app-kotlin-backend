<?php

namespace App\Models\API;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Loan extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        //approved_at becomes the starting point of the first repayment month
        //repayment_period is in months
        'user_id',
        'repayment_months',
        'principal',
        'interest_rate',
        'interest_amount',
        'loan_amount',
        'momo_account',
        'status',
        'approved_at',
        'fully_paid_at'
    ];
}
