<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatasetsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Truncate the table to clear any existing data
        DB::table('datasets')->truncate();

        // Insert the data
        DB::table('datasets')->insert([
            [
                'id' => 1,
                'name' => 'Crop',
                'file_csv' => '/Crop.csv',
                'created_at' => Carbon::now(),  // Use Carbon for date/time
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
