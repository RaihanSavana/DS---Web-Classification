import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import DataTable from "react-data-table-component";

export default function NaiveBayes({ auth, datasets }) {
    console.log(datasets);
    const [prediction, setPrediction] = useState(null);
    const [newSample, setNewSample] = useState({});
    const [csvData, setCsvData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewSample((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const predictNaivebayes = async () => {
        try {
            // Convert string values to numbers if possible
            const formattedSample = Object.values(newSample).map((value) => {
                const parsedValue = parseFloat(value);
                return isNaN(parsedValue) ? value : parsedValue;
            });

            // Remove forward slashes from the file path
            const cleanedFilePath = datasets.file_csv.replace(/\//g, "");

            const response = await axios.post("/predict-naivebayes", {
                newSample: formattedSample,
                csvFilePath: cleanedFilePath, // Pass the cleaned file path
            });

            setPrediction(response.data.predictedLabel);
            console.log(newSample);
        } catch (error) {
            console.error("Prediction failed:", error);
            console.log(newSample);
        }
    };

    useEffect(() => {
        // Fetch CSV data
        axios
            .get(datasets.file_csv)
            .then((response) => {
                // Split CSV into rows
                const rows = response.data.split("\n");
                // Extract header row
                const headers = rows[0].split(",");
                // Remove header row from data
                const data = rows.slice(1);
                // Parse CSV data
                const parsedData = data
                    .map((row) => {
                        const values = row.split(",");
                        if (values.length === headers.length) {
                            // Check if the number of values matches the number of headers
                            return headers.reduce((obj, header, index) => {
                                obj[header.trim()] = values[index].trim();
                                return obj;
                            }, {});
                        }
                        return null; // Return null for rows with incorrect number of values
                    })
                    .filter((row) => row !== null); // Filter out null rows

                // Set CSV data
                setCsvData(parsedData);
            })
            .catch((error) => {
                console.error("Error fetching CSV:", error);
            });
    }, []);

    const renderInputs = () => {
        if (!csvData) return null;

        // Mendapatkan nama kolom kecuali kolom terakhir
        const columnNames = Object.keys(csvData[0]).slice(0, -1);

        return columnNames.map((key) => {
            const isNumeric = csvData.every(
                (row) => !isNaN(parseFloat(row[key]))
            );
            return (
                <label
                    key={key}
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={key}
                >
                    {key}:
                    {isNumeric ? (
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id={key}
                            type="number"
                            placeholder={`Enter ${key}`}
                            name={key}
                            value={newSample[key] || ""}
                            onChange={handleChange}
                        />
                    ) : (
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id={key}
                            name={key}
                            value={newSample[key] || ""}
                            onChange={handleChange}
                        >
                            <option value="">Select {key}</option>
                            {[...new Set(csvData.map((row) => row[key]))].map(
                                (value, index) => (
                                    <option key={index} value={value}>
                                        {value}
                                    </option>
                                )
                            )}
                        </select>
                    )}
                </label>
            );
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {datasets.name} Prediction
                </h2>
            }
        >
            <Head title="Naive Bayes" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-4 bg-white-100 p-7 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                            Input Instance
                        </h1>
                        <div className="mt-4">{renderInputs()}</div>
                        <br />
                        <PrimaryButton onClick={predictNaivebayes}>
                            Predict
                        </PrimaryButton>
                        {prediction && (
                            <div className="mt-4 bg-white-100 p-2 rounded-lg">
                                <p className="text-lg font-semibold mb-2">
                                    Prediction Result
                                </p>
                                <p className="text-gray-800">
                                    Predicted: {prediction}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
