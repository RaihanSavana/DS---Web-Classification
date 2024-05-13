<?php

namespace App\Http\Controllers;

use App\Models\Dataset;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DatasetController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request data
        $data = $request->validate([
            'name' => 'required',
            'file_csv' => 'required|mimes:csv|max:10000'
        ]);

        // Get the uploaded image
        $file_csv = $request->file('file_csv');

        // Get the original file name
        $fileName = $file_csv->getClientOriginalName();

        // Move the uploaded file_$file_csv to the specified directory
        $file_csv->move(public_path('/'), $fileName);

        // Construct the image path
        $filecsvPath = '/' . $fileName;

        // Save the image path in the database along with other data
        $data['file_csv'] = $filecsvPath;

        // Create a new TemukanObat record with the validated data
        Dataset::create($data);

        // Redirect back with a success message
        return back()->with('message', 'CSV Succesfully Added');
    }

    public function index(Dataset $dataset){
        return Inertia::render(
            'Dataset',['datasets' => Dataset::get()
            ]);
    }

    public function predict(Dataset $datasets){
        return Inertia::render(
            'NaiveBayes', ['datasets' => $datasets
            ]);
    }

    public function view(Dataset $datasets){
        return Inertia::render(
            'View', ['datasets' => $datasets
            ]);
    }
}
