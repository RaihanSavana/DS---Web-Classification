import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    FiChevronLeft,
    FiChevronRight,
    FiChevronsLeft,
    FiChevronsRight,
} from "react-icons/fi";

export default function View({ auth, datasets }) {
    const [csvData, setCsvData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10); // Default value

    useEffect(() => {
        // Fetch CSV data when component mounts
        fetch(datasets.file_csv)
            .then((response) => response.text())
            .then((text) => {
                const rows = text
                    .trim()
                    .split("\n")
                    .map((row) => row.split(","));
                const headers = ["ID", ...rows.shift()]; // Added "ID" to headers
                setCsvData({ headers, rows });
            })
            .catch((error) => console.error("Error fetching CSV:", error));
    }, []); // Run only once on component mount

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = csvData
        ? csvData.rows.slice(indexOfFirstItem, indexOfLastItem)
        : [];

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Go to first page
    const goToFirstPage = () => setCurrentPage(1);

    // Go to last page
    const goToLastPage = () =>
        setCurrentPage(Math.ceil(csvData.rows.length / itemsPerPage));

    // Handle items per page change
    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(1); // Reset to first page when items per page changes
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dataset {datasets.name}
                </h2>
            }
        >
            <Head title="View Dataset" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* Render table if csvData is available */}
                        {csvData && (
                            <>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead>
                                            <tr>
                                                {/* Map headers */}
                                                {csvData.headers.map(
                                                    (header, index) => (
                                                        <th
                                                            key={index}
                                                            className="px-6 py-3 text-left text-xs font-large text-gray-500 uppercase tracking-wider font-bold"
                                                        >
                                                            {header}
                                                        </th>
                                                    )
                                                )}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Map rows */}
                                            {currentItems.map(
                                                (row, rowIndex) => (
                                                    <tr
                                                        key={rowIndex}
                                                        className={
                                                            rowIndex % 2 === 0
                                                                ? "bg-gray-100"
                                                                : "bg-gray-200"
                                                        }
                                                    >
                                                        {/* Map columns */}
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            {indexOfFirstItem +
                                                                rowIndex +
                                                                1}
                                                        </td>{" "}
                                                        {/* ID Column */}
                                                        {row.map(
                                                            (
                                                                column,
                                                                columnIndex
                                                            ) => (
                                                                <td
                                                                    key={
                                                                        columnIndex +
                                                                        1
                                                                    }
                                                                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                                >
                                                                    {column}
                                                                </td>
                                                            )
                                                        )}
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex justify-end items-center mt-4 pr-5">
                                    <label
                                        htmlFor="itemsPerPage"
                                        className="mr-2"
                                    >
                                        Rows Per Page:
                                    </label>
                                    <select
                                        id="itemsPerPage"
                                        className="border rounded-md py-1 px-2"
                                        value={itemsPerPage}
                                        onChange={handleItemsPerPageChange}
                                    >
                                        <option value={10}>10</option>
                                        <option value={20}>20</option>
                                        <option value={30}>30</option>
                                        <option value={50}>50</option>
                                    </select>
                                </div>
                                {/* Pagination Controls */}
                                <div className="mt-4 flex justify-end p-5">
                                    <button
                                        onClick={goToFirstPage}
                                        disabled={currentPage === 1}
                                        className={`text-xl mr-2 ${
                                            currentPage === 1
                                                ? "text-gray-400"
                                                : ""
                                        }`}
                                    >
                                        <FiChevronsLeft size={34} />
                                    </button>
                                    <button
                                        onClick={() =>
                                            paginate(currentPage - 1)
                                        }
                                        disabled={currentPage === 1}
                                        className={`text-xl mr-2 ${
                                            currentPage === 1
                                                ? "text-gray-400"
                                                : ""
                                        }`}
                                    >
                                        <FiChevronLeft size={34} />
                                    </button>

                                    <button
                                        onClick={() =>
                                            paginate(currentPage + 1)
                                        }
                                        disabled={
                                            indexOfLastItem >=
                                            csvData.rows.length
                                        }
                                        className={`text-xl mr-2 ${
                                            indexOfLastItem >=
                                            csvData.rows.length
                                                ? "text-gray-400"
                                                : ""
                                        }`}
                                    >
                                        <FiChevronRight size={34} />
                                    </button>
                                    <button
                                        onClick={goToLastPage}
                                        disabled={
                                            currentPage ===
                                            Math.ceil(
                                                csvData.rows.length /
                                                    itemsPerPage
                                            )
                                        }
                                        className={`text-xl ${
                                            currentPage ===
                                            Math.ceil(
                                                csvData.rows.length /
                                                    itemsPerPage
                                            )
                                                ? "text-gray-400"
                                                : ""
                                        }`}
                                    >
                                        <FiChevronsRight size={34} />
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
