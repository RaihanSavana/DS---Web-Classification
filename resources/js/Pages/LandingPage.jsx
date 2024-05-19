import { Link, Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import heroHeader from "../img/illustrations/hero-header.png";
import heroBg from "../img/illustrations/hero-bg.png";
import shortTermsImg from "../img/gallery/short-terms.png";
import fullyFundedImg from "../img/gallery/fully-funded.png";

export default function LandingPage({}) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar></Navbar>
            <section className="relative py-0" id="header">
                <div
                    className="hidden md:block absolute inset-0 bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${heroHeader})`,
                        backgroundPosition: "right top",
                        backgroundSize: "contain",
                        zIndex: -1,
                    }}
                ></div>
                <div
                    className="md:hidden absolute inset-0 bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${heroBg})`,
                        backgroundPosition: "right top",
                        backgroundSize: "contain",
                        zIndex: -1,
                    }}
                ></div>
                <div className="container mx-auto relative">
                    <div className="flex items-center min-h-[75vh] lg:min-h-[100vh]">
                        <div className="md:w-7/12 lg:w-6/12 xl:w-5/12 py-6 text-center md:text-left">
                            <h1 className="mt-6 mb-4 md:mb-6 font-semibold leading-snug text-4xl md:text-5xl xl:text-6xl">
                                Optimal Crop Yield{" "}
                                <br className="hidden lg:inline" />{" "}
                                Recommendation
                            </h1>
                            <p className="mb-4 pb-5 text-xl">
                                Membantu Dalam memaksimalkan hasil pertanian
                                dengan merekomendasikan tanaman yang sesuai
                            </p>
                            <button className="button1 bg-transparent rounded-3xl font-semibold py-4 px-8 border border-white hover:border-transparent rounded transition-colors duration-500 mt-1 text-xl">
                                <Link href='/dataset/naivebayes/1'>
                                    Predict now!
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-[300px]" id="Opportunities">
                <div
                    className="bg-no-repeat bg-left-top hidden sm:block"
                    style={{
                        backgroundImage: "url('img/illustrations/bg.png')",
                        backgroundSize: "225px 755px",
                        marginTop: "-17.5rem",
                    }}
                ></div>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h5 className="font-bold text-3xl sm:text-5xl leading-snug mb-6">
                            About Us
                        </h5>
                        <p className="mb-20">
                            Platform yang dapat merekomendasikan strategi
                            pertanian kepada petani untuk mengoptimalkan hasil
                            pertanian.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            <div className="bg-white shadow-md rounded-lg p-8">
                                <div className="text-center sm:text-left">
                                    <img
                                        className="mx-auto sm:mx-0 w-16 h-16"
                                        src="img/icons/farmer.svg"
                                        alt="Rekomendasi kepada Petani"
                                    />
                                    <div className="card-body mt-4">
                                        <h6 className="font-bold text-xl text-gray-900">
                                            Rekomendasi kepada Petani
                                        </h6>
                                        <p className="mt-3">
                                            Merekomendasikan kepada petani
                                            tanaman yang paling cocok untuk
                                            ditanam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow-md rounded-lg p-8">
                                <div className="text-center sm:text-left">
                                    <img
                                        className="mx-auto sm:mx-0 w-16 h-16"
                                        src="img/icons/growth.svg"
                                        alt="Produktivitas Optimal"
                                    />
                                    <div className="card-body mt-4">
                                        <h6 className="font-bold text-xl text-gray-900">
                                            Produktivitas Optimal
                                        </h6>
                                        <p className="mt-3">
                                            Meningkatkan efisiensi,
                                            produktivitas, dan keberlanjutan
                                            pertanian.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow-md rounded-lg p-8">
                                <div className="text-center sm:text-left">
                                    <img
                                        className="mx-auto sm:mx-0 w-16 h-16"
                                        src="img/icons/planting.svg"
                                        alt="Precision agriculture"
                                    />
                                    <div className="card-body mt-4">
                                        <h6 className="font-bold text-xl text-gray-900">
                                            Precision agriculture
                                        </h6>
                                        <p className="mt-3">
                                            Metode pertanian yang menggunakan
                                            teknologi dalam memastikan Kesehatan
                                            tanaman dan tanah.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20" id="invest">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="w-full xl:w-3/4 mb-12">
                            <div className="text-center mb-12">
                                <h5 className="font-bold text-3xl sm:text-5xl leading-snug mb-6">
                                    Mulai Prediksi Pertanian
                                </h5>
                                <p className="mb-20">
                                    Memprediksi strategi pertanian dalam
                                    mengoptimalkan hasil pertanian yang cocok.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div
                                    className="relative bg-cover bg-center text-white shadow-md rounded-lg flex flex-col justify-center p-8"
                                    style={{
                                        backgroundImage: `url(${shortTermsImg})`,
                                        backgroundBlendMode: "darken",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    }}
                                >
                                    <h6 className="text-green-500 pt-2">
                                        Crop Label
                                    </h6>
                                    <hr className="border-white border-t-2 w-14 my-4" />
                                    <div>
                                        <h6 className="font-bold text-2xl md:text-3xl mb-4">
                                            List of crop
                                        </h6>
                                        <p className="mb-6">
                                        Tanaman-tanaman yang telah direkomendasikan.
                                        </p>
                                        <Link href={route("croplabel")}>
                                        <button
                                            className="button1 bg-transparent rounded-xl py-2 px-4 hover:border-transparent rounded transition-colors duration-500 mt-1 text-m"
                                            type="button"
                                        >
                                            Browse crop
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                                <div
                                    className="relative bg-cover bg-center text-white shadow-md rounded-lg flex flex-col justify-center p-8"
                                    style={{
                                        backgroundImage: `url(${fullyFundedImg})`,
                                        backgroundBlendMode: "darken",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    }}
                                >
                                    <h6 className="text-green-500 pt-2">
                                        Data Field
                                    </h6>
                                    <hr className="border-white border-t-2 w-14 my-4" />
                                    <div>
                                        <h6 className="font-bold text-2xl md:text-3xl mb-4">
                                            Type of data
                                        </h6>
                                        <p className="mb-6">
                                            Data yang diperlukan untuk
                                            rekomendasi tanaman.
                                        </p>
                                        <Link href={route("datafield")}>
                                        <button
                                            className="button1 bg-transparent rounded-xl py-2 px-4 hover:border-transparent rounded transition-colors duration-500 mt-1 text-m"
                                            type="button"
                                        >
                                            Learn More
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer className=""></Footer>
        </>
    );
}
