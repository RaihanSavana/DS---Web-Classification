import { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Tab, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function DataField({}) {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };

    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <br />
            <div className="text-center mb-4 mt-20 ">
                <h5 className="font-bold text-3xl sm:text-5xl leading-snug mb-6">
                Type of data
                </h5>
                <p >
                    Atribut-atribut data yang diperlukan untuk melakukan rekomendasi tanaman.
                </p>
            </div>
            <div className="container mx-auto mt-10 flex pl-10  ">
                <div className="flex flex-col mr-4">
                    {[
                        "Nitrogen",
                        "Phosphorous",
                        "Potassium",
                        "Temperature",
                        "Humidity",
                        "PH",
                        "Rainfall",
                    ].map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleTabSelect(index)}
                            className={`cursor-pointer p-2 rounded-md border border-gray-300 mb-2 ${
                                selectedTab === index ? "bg-gray-200" : ""
                            }`}
                        >
                            <div className="text-center">{item}</div>
                        </div>
                    ))}
                </div>
                <div className="flex-grow">
                    <Tabs
                        className="mt-4"
                        selectedIndex={selectedTab}
                        onSelect={handleTabSelect}
                    >
                        <div className="ml-2">
                            <TabPanel>
                                <div
                                    className={`tab-content ${
                                        selectedTab === 0 ? "active" : ""
                                    }`}
                                >
                                    <div className="font-semibold text-2xl mb-2 ">
                                        <h2>Nitrogen (N)</h2>
                                    </div>
                                    <p className="pr-[75px]">
                                        Nitrogen adalah unsur hara esensial yang
                                        sangat penting bagi pertumbuhan tanaman
                                        karena merupakan komponen utama dari
                                        asam amino, yang merupakan bahan
                                        penyusun protein. Protein diperlukan
                                        untuk pembangunan jaringan tanaman dan
                                        proses metabolisme. Nitrogen juga
                                        merupakan komponen klorofil, yang
                                        digunakan tanaman untuk fotosintesis.
                                        Tanpa nitrogen yang cukup, tanaman tidak
                                        bisa menghasilkan daun hijau sehat yang
                                        dibutuhkan untuk mengumpulkan energi
                                        dari sinar matahari. Kekurangan nitrogen
                                        menyebabkan daun berwarna kuning dan
                                        pertumbuhan yang lambat, sedangkan
                                        kelebihan nitrogen bisa menyebabkan
                                        pertumbuhan daun berlebih namun
                                        mengurangi pembentukan bunga dan buah,
                                        sehingga mengurangi hasil panen.
                                    </p>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div
                                    className={`tab-content ${
                                        selectedTab === 1 ? "active" : ""
                                    }`}
                                >
                                    <div className="font-semibold text-2xl mb-2 ">
                                        <h2>Phosphorous (P)</h2>
                                    </div>
                                    <p className="pr-[75px]">
                                        Fosfor memainkan peran penting dalam
                                        proses energi dan reproduksi tanaman.
                                        Sebagai komponen utama ATP (adenosine
                                        triphosphate), fosfor berfungsi dalam
                                        transfer energi di dalam sel, yang
                                        sangat penting untuk semua aktivitas
                                        biokimia dalam tanaman. Fosfor juga
                                        esensial untuk pembelahan sel dan
                                        pengembangan jaringan baru, termasuk
                                        akar dan bunga. Kekurangan fosfor dapat
                                        mengakibatkan pertumbuhan akar yang
                                        buruk, tanaman kerdil, dan hasil panen
                                        yang rendah. Tanaman yang tidak memiliki
                                        cukup fosfor juga mungkin tidak berbunga
                                        atau berbuah dengan baik, sehingga
                                        mengurangi produktivitas secara
                                        keseluruhan.
                                    </p>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div
                                    className={`tab-content ${
                                        selectedTab === 2 ? "active" : ""
                                    }`}
                                >
                                    <div className="font-semibold text-2xl mb-2 ">
                                        <h2>Potassium (K)</h2>
                                    </div>
                                    <p className="pr-[75px]">
                                        Kalium sangat penting untuk regulasi
                                        osmotik dan aktivasi enzim dalam
                                        tanaman. Ini membantu mengatur tekanan
                                        turgor dalam sel, yang penting untuk
                                        keseimbangan air dan kekuatan sel.
                                        Kalium juga mengaktifkan berbagai enzim
                                        yang terlibat dalam fotosintesis dan
                                        sintesis protein, sehingga mempengaruhi
                                        pertumbuhan dan perkembangan tanaman.
                                        Kekurangan kalium dapat menyebabkan tepi
                                        daun menjadi coklat dan kering serta
                                        mengurangi ketahanan tanaman terhadap
                                        penyakit. Kelebihan kalium jarang
                                        terjadi tetapi bisa mengganggu
                                        penyerapan nutrisi lain seperti
                                        magnesium dan kalsium, yang juga
                                        esensial bagi kesehatan tanaman.
                                    </p>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div
                                    className={`tab-content ${
                                        selectedTab === 3 ? "active" : ""
                                    }`}
                                >
                                    <div className="font-semibold text-2xl mb-2 ">
                                        <h2>Temperature (Suhu)</h2>
                                    </div>
                                    <p className="pr-[75px]">
                                        Suhu udara sangat mempengaruhi laju
                                        berbagai proses fisiologis dalam
                                        tanaman, termasuk fotosintesis,
                                        respirasi, dan transpirasi. Setiap
                                        tanaman memiliki kisaran suhu optimum
                                        untuk pertumbuhan yang optimal. Suhu
                                        yang terlalu tinggi dapat menyebabkan
                                        stres panas, mengurangi fotosintesis,
                                        dan meningkatkan laju respirasi, yang
                                        menghabiskan cadangan energi tanaman dan
                                        mengurangi hasil panen. Sebaliknya, suhu
                                        yang terlalu rendah dapat menghambat
                                        pertumbuhan dan menyebabkan kerusakan
                                        jaringan tanaman, yang bisa mempengaruhi
                                        hasil dan kualitas panen.
                                    </p>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div
                                    className={`tab-content ${
                                        selectedTab === 4 ? "active" : ""
                                    }`}
                                >
                                    <div className="font-semibold text-2xl mb-2 ">
                                        <h2>Humidity (Kelembaban)</h2>
                                    </div>
                                    <p className="pr-[75px]">
                                        Kelembaban mempengaruhi laju
                                        transpirasi, yaitu proses di mana
                                        tanaman kehilangan air melalui daun.
                                        Kelembaban yang memadai membantu menjaga
                                        keseimbangan air dalam tanaman dan
                                        mencegah kekeringan. Kelembaban yang
                                        terlalu rendah dapat menyebabkan tanaman
                                        kekeringan, mengurangi fotosintesis, dan
                                        menyebabkan stres air, yang mengurangi
                                        pertumbuhan dan hasil panen. Sebaliknya,
                                        kelembaban yang terlalu tinggi dapat
                                        meningkatkan risiko infeksi jamur dan
                                        penyakit lainnya, yang bisa merusak
                                        tanaman dan mengurangi hasil panen.
                                    </p>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div
                                    className={`tab-content ${
                                        selectedTab === 5 ? "active" : ""
                                    }`}
                                >
                                    <div className="font-semibold text-2xl mb-2 ">
                                        <h2>PH</h2>
                                    </div>
                                    <p className="pr-[75px]">
                                        pH tanah mempengaruhi ketersediaan dan
                                        penyerapan nutrisi oleh tanaman. Tanah
                                        dengan pH yang tepat memastikan nutrisi
                                        seperti nitrogen, fosfor, dan kalium
                                        tersedia dalam bentuk yang dapat diserap
                                        oleh akar tanaman. Tanaman membutuhkan
                                        rentang pH tertentu untuk tumbuh
                                        optimal. Tanah yang terlalu asam atau
                                        terlalu basa dapat menyebabkan
                                        defisiensi atau toksisitas nutrisi
                                        tertentu, yang dapat menghambat
                                        pertumbuhan dan kesehatan tanaman, serta
                                        mengurangi hasil panen.
                                    </p>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div
                                    className={`tab-content ${
                                        selectedTab === 6 ? "active" : ""
                                    }`}
                                >
                                    <div className="font-semibold text-2xl mb-2 ">
                                        <h2>Rainfall (Curah Hujan)</h2>
                                    </div>
                                    <p className="pr-[75px]">
                                        Curah hujan adalah sumber utama air bagi
                                        tanaman, terutama di daerah tanpa sistem
                                        irigasi. Air diperlukan untuk berbagai
                                        proses fisiologis dalam tanaman,
                                        termasuk fotosintesis, transpirasi, dan
                                        transportasi nutrisi. Jumlah dan
                                        distribusi curah hujan sepanjang musim
                                        tanam sangat penting untuk memastikan
                                        tanaman mendapatkan cukup air.
                                        Kekurangan hujan dapat menyebabkan
                                        kekeringan, mengurangi fotosintesis, dan
                                        menyebabkan stres air, yang mengurangi
                                        hasil panen. Kelebihan hujan dapat
                                        menyebabkan erosi tanah dan pencucian
                                        nutrisi, yang merusak struktur tanah dan
                                        mengurangi ketersediaan nutrisi bagi
                                        tanaman, sehingga mempengaruhi
                                        pertumbuhan dan hasil panen.
                                    </p>
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>
            <Footer />
        </>
    );
}
