import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage, Link } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import DataTable from "react-data-table-component";

export default function Dataset({ auth, datasets }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        file_csv: "",
    });

    const storeDataset = (e) => {
        e.preventDefault();
        post(route("dataset")),
            data,
            {
                onSuccess: reset(),
            };
    };

    const datas = datasets.map((dt) => ({
        id: dt.id,
        name: dt.name,
        action: (
            <>
                <div className="flex items-center justify-center gap-2">
                    <Link href={`/dataset/naivebayes/${dt.id}`}>Predict</Link>
                    <span>|</span>
                    <Link href={`/dataset/view/${dt.id}`}>View</Link>
                </div>
            </>
        ),
    }));

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Action",
            selector: (row) => row.action,
        },
    ];

    const renderDataTable = () => {
        if (!csvData) return null;

        // Define columns based on CSV headers
        const columns = Object.keys(csvData[0]).map((header) => ({
            name: header,
            selector: header,
        }));

        return (
            <DataTable
                title="CSV Data"
                columns={columns}
                data={csvData}
                pagination
                highlightOnHover
                striped
            />
        );
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dataset
                </h2>
            }
        >
            <Head title="Dataset" />
            <div className="container mx-auto px-40 py-6 justify-between items-center">
                <br />
                <form onSubmit={storeDataset}>
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Add Dataset
                        </h2>
                        <br />
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <br />

                    <InputLabel htmlFor="file_csv" value="CSV File" />
                    <label htmlFor="file_csv" className="cursor-pointer block mt-1 w-full text-gray-800 border border-gray-300 rounded-md py-2 px-3 bg-white hover:bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200">
                        <span className="block truncate">{data.file_csv ? data.file_csv.name : "Choose a file"}</span>
                        <input
                            id="file_csv"
                            name="file_csv"
                            type="file"
                            className="hidden"
                            onChange={(e) => setData("file_csv", e.target.files[0])}
                            required
                        />
                    </label>

                    <InputError message={errors.file_csv} className="mt-2" />
                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton
                            className="ms-4 bg-green-500"
                            disabled={processing}
                        >
                            Add
                        </PrimaryButton>
                    </div>
                </form>
                <br />
                <div className="overflow-x-auto">
                    <DataTable
                        columns={columns}
                        data={datas}
                        pagination
                        highlightOnHover
                        striped
                        responsive
                        fixedHeader
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
