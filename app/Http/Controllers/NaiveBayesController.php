<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Phpml\Dataset\CsvDataset;
use Phpml\Classification\NaiveBayes;

class NaiveBayesController extends Controller
{
    public function predictNaivebayes(Request $request)
    {
        // Path to your CSV file
        $csvFilePath = $request->input('csvFilePath');
        $fileHandle = fopen($csvFilePath, 'r');

        if ($fileHandle !== false) {
            // Read the first row of the CSV file
            $firstRow = fgetcsv($fileHandle);

            // Count the number of columns in the first row
            $numColumns = count($firstRow);

            // Close the file handle
            fclose($fileHandle);
        }

        // Load the dataset
        $dataset = new CsvDataset($csvFilePath, ($numColumns - 1), true); // Assuming 4 columns in your dataset

        // Split the dataset into features and labels
        $samples = $dataset->getSamples();
        $labels = $dataset->getTargets();

        // Initialize and train the Naive Bayes classifier
        $classifier = new NaiveBayes();
        $classifier->train($samples, $labels);

        // Predict the class of the new sample
        $newSample = $request->input('newSample');
        $predictedLabel = $classifier->predict($newSample);


// Open the CSV file for appending
$fileHandle = fopen($csvFilePath, 'a');

if ($fileHandle !== false) {
    // Write the new sample data along with its predicted label to the CSV file
    fputcsv($fileHandle, array_merge($newSample, [$predictedLabel]));

    // Close the file handle
    fclose($fileHandle);
}

        // Return the predicted label
        return response()->json(['predictedLabel' => $predictedLabel]);
    }
}
