import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Dashboard({ auth }) {

    const naiveBayesInfo = [
        {
            title: "Introduction to Naive Bayes",
            content: "Naive Bayes adalah salah satu algoritma klasifikasi yang cukup populer dalam machine learning. Algoritma ini sering digunakan untuk memprediksi kategori atau label dari data berdasarkan fitur-fiturnya. Namanya diambil dari teorema Bayes, yang merupakan dasar dari algoritma ini. Prinsip dasar dari Naive Bayes adalah menghitung probabilitas setiap kategori berdasarkan fitur-fiturnya. Meskipun disebut Naive (sederhana), algoritma ini cukup kuat dan efisien dalam banyak kasus. Asumsi dasar dalam Naive Bayes adalah bahwa setiap fitur adalah independen satu sama lain, artinya nilai fitur yang satu tidak bergantung pada nilai fitur yang lain. Meskipun ini sering tidak benar dalam dunia nyata, asumsi ini membantu algoritma tetap sederhana dan mudah diimplementasikan. Dalam konteks klasifikasi teks misalnya, Naive Bayes bisa digunakan untuk mengklasifikasikan email sebagai spam atau bukan spam berdasarkan kata-kata yang terdapat di dalamnya. Algoritma ini sudah banyak diaplikasikan dalam berbagai bidang seperti klasifikasi teks, pengenalan pola, dan sistem rekomendasi. Dengan menggunakan data pelatihan yang sudah diberi label, Naive Bayes menghitung probabilitas munculnya setiap fitur dalam setiap kategori, dan kemudian saat mendapatkan data baru, algoritma tersebut menggunakan probabilitas ini untuk memprediksi kategori yang paling mungkin.",
            icon: "📘"
        },
        {
            title: "Bayes' Theorem",
            content: "Teorema Bayes menjelaskan probabilitas suatu kejadian, berdasarkan pengetahuan sebelumnya tentang kondisi yang mungkin terkait dengan kejadian tersebut. Rumusnya adalah P(A|B) = [P(B|A) * P(A)] / P(B). Dalam persamaan ini, P(A|B) adalah probabilitas kejadian A terjadi jika kita tahu bahwa kejadian B telah terjadi, P(B|A) adalah probabilitas kejadian B terjadi jika kita tahu bahwa kejadian A telah terjadi, P(A) dan P(B) adalah probabilitas masing-masing kejadian tanpa mempertimbangkan informasi tambahan.",
            icon: "📊"
        },
        {
            title: "Types of Naive Bayes Classifiers",
            content: "Terdapat beberapa jenis Naive Bayes Classifier yang dapat digunakan tergantung pada jenis data yang akan diolah. Pertama, ada Naive Bayes Gaussian yang cocok digunakan untuk data yang memiliki distribusi normal atau Gaussian. Algoritma ini bekerja dengan asumsi bahwa nilai-nilai fitur dalam setiap kelas terdistribusi secara normal. Kemudian, ada Naive Bayes Multinomial yang berguna untuk data kategorikal dengan distribusi multinomial, seperti dalam klasifikasi teks seperti spam email atau kategori artikel berita. Terakhir, Naive Bayes Bernoulli digunakan untuk data biner di mana setiap fitur bisa hadir atau tidak hadir dalam suatu sampel, sering digunakan dalam klasifikasi teks untuk memutuskan apakah kata-kata tertentu muncul dalam dokumen atau tidak.",
            icon: "📚"
        },
        {
            title: "Applications",
            content: "Naive Bayes adalah sebuah metode klasifikasi yang populer dalam dunia machine learning. Metode ini sering digunakan untuk memprediksi kategori atau kelas dari sebuah sampel data berdasarkan pada fitur-fitur yang dimilikinya. Contohnya, dalam klasifikasi email spam, Naive Bayes dapat digunakan untuk menentukan apakah sebuah email termasuk dalam kategori spam atau bukan dengan menganalisis kata-kata yang terdapat di dalamnya. Selain itu, Naive Bayes juga diterapkan dalam berbagai aplikasi lain, seperti analisis sentimen untuk menentukan apakah suatu teks memiliki sentimen positif, negatif, atau netral, serta dalam klasifikasi dokumen untuk mengelompokkan dokumen ke dalam kategori-kategori tertentu. Dalam bidang keamanan, metode ini juga berguna dalam deteksi penipuan, seperti deteksi transaksi keuangan yang mencurigakan berdasarkan pada pola-pola yang terdapat pada data transaksi. Dengan demikian, Naive Bayes memiliki peran yang penting dalam pengolahan data dan pengambilan keputusan dalam berbagai konteks.",
            icon: "💼"
        },
        {
            title: "Advantages and Disadvantages",
            content: "Algoritma Naive Bayes menawarkan beberapa keunggulan dengan kesederhanaan dan efisiensinya, menjadikannya pilihan yang menarik untuk berbagai tugas klasifikasi. Implementasinya yang langsung dan sifat yang mudah dipahami membuatnya dapat diakses bahkan oleh mereka yang tidak memiliki keahlian dalam pembelajaran mesin yang luas. Selain itu, Naive Bayes efisien secara komputasi, mampu menangani dataset besar dengan sumber daya komputasi yang relatif rendah. Selain itu, ia tampil baik dengan data berdimensi tinggi, seperti tugas klasifikasi teks, karena kemampuannya untuk menangani sejumlah besar fitur secara efektif. Keuntungan lainnya adalah ketangguhannya terhadap fitur yang tidak relevan, karena ia mengasumsikan independensi antara fitur-fitur, memungkinkannya untuk tetap memberikan prediksi yang masuk akal bahkan dalam keberadaan beberapa atribut yang tidak informatif. Namun, Naive Bayes datang dengan sejumlah keterbatasan. Asumsinya tentang independensi fitur mungkin tidak berlaku dalam banyak skenario dunia nyata, menyebabkan ketidakakuratan, terutama ketika berurusan dengan fitur yang berkorelasi. Selain itu, ia dapat sensitif terhadap dataset yang tidak seimbang, cenderung mendukung kelas mayoritas dan menghasilkan hasil yang bias untuk kelas minoritas. Naive Bayes juga kesulitan dalam menangkap hubungan kompleks antara fitur, membatasi efektivitasnya dalam dataset di mana interaksi signifikan. Selain itu, ia memerlukan jumlah data pelatihan yang cukup untuk memperkirakan probabilitas dengan akurat, dan dapat disesatkan oleh fitur yang menyesatkan atau tidak relevan, memengaruhi kinerjanya jika himpunan fitur tidak dipilih atau diproses dengan hati-hati..",
            icon: "⚖️"
        }
    ];



    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2> </h2>}
        >
            <Head title="Dashboard" />

            <div className="min-h-screen flex bg-gray-50">
                <div className="w-1/4 bg-gradient-to-b from-white-50 to-gren-100 overflow-hidden shadow-xl">
                    <div className="p-8 text-gray-900">
                        <h3 className="text-3xl font-bold mb-4 mt-20">Hi! {auth.user.name} 👋
                        </h3>
                        <p className="mb-4">Selamat datang di [Nama Website]! Di sini, Kami menawarkan kemudahan dalam memprediksi dataset Anda dengan langkah-langkah yang sederhana menggunakan naive bayes. Mulai dari mengunggah dataset dengan cepat dan mudah, hingga melakukan prediksi yang cukup akurat dengan hanya dengan beberapa klik.</p>
                    </div>
                </div>
                <div className="w-3/4">
                    <div className="h-screen overflow-y-auto mt-10 px-10">
                        <div className="rounded-xl bg-gradient-to-b from-green-300 to-white-500 overflow-hidden shadow-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            <div className="text-black">
                                <h3 className="text-2xl font-semibold mb-4">Naive Bayes Information</h3>
                                <Carousel
                                    showArrows={true}
                                    showThumbs={false}
                                    infiniteLoop={true}
                                    autoPlay={true}
                                    interval={5000}
                                    showStatus={false}
                                    showIndicators={false}
                                    dynamicHeight={true}
                                    className="rounded-lg shadow-lg"
                                >
                                    {naiveBayesInfo.map((info, index) => (
                                        <div key={index} className="rounded-xl bg-gradient-to-r from-green-200 to-white-500 p-8 flex flex-col justify-center items-center">
                                            <h4 className="text-2xl font-semibold mb-2 flex items-justify">
                                                <span className="mr-2 text-3xl">{info.icon}</span>{info.title}
                                            </h4>
                                            <p className="text-gray-700 text-justify">{info.content}</p>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                        <div className="rounded-xl bg-gradient-to-r from-green-100 to-white-200 overflow-hidden shadow-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-10">
                            <div className="text-black tex-justify">
                                <h3 className="text-2xl font-semibold mb-4">Cara Menggunakan Website ini</h3>
                                <div className="grid grid-cols-1 gap-10">
                                    <div className="p-4 rounded-sm bg-gradient-to-b from-green-200 to-white-500 rounded-xl shadow hover:bg-yellow-200 transition-colors duration-300">
                                        <h4 className="text-lg font-semibold mb-2">Cara Mengupload Dataset:</h4>
                                        <p className="text-gray-700"><p>1. Buka halaman dataset.</p>
                                                                    <p>2. Pada halaman tersebut, cari opsi untuk memasukkan nama dataset.</p>
                                                                    <p>3. Pilih dataset yang ingin diunggah dari perangkat Anda.
                                                                    </p>
                                                                    <p>4. Pastikan untuk memeriksa apakah terdapat ID dataset dalam file yang akan diunggah. Jika ada, hapuslah ID tersebut. Pastikan juga bahwa file tersebut berbentuk CSV.
                                                                    </p>
                                                                    <p>5. Setelah memastikan semua persyaratan terpenuhi, klik tombol "Add" untuk menambahkan dataset ke dalam sistem.
                                                                    </p> </p>
                                    </div>
                                    <div className="p-4 bg-gradient-to-b from-green-200 to-white-500 rounded-xl shadow hover:bg-yellow-200 transition-colors duration-300 ">
                                        <h4 className="text-lg font-semibold mb-2">Cara Melakukan Prediksi Menggunakan Dataset yang Sudah di Upload:</h4>
                                        <p className="text-gray-700"><p>1. Di halaman dataset, temukan tombol "Predict" di bagian tindakan (action).</p>
                                                                    <p>2. Klik tombol tersebut untuk masuk ke halaman prediksi.
                                                                    </p>
                                                                    <p>3. Isi semua kolom sesuai dengan data yang ingin Anda prediksi.
                                                                    </p>
                                                                    <p>4. Setelah mengisi data, klik tombol "Predict". Hasil prediksi akan muncul di bawah kolom prediksi.
                                                                    </p></p>
                                    </div>
                                    <div className="p-4 bg-gradient-to-b from-green-200 to-white-500 rounded-xl shadow hover:bg-yellow-200 transition-colors duration-300">
                                        <h4 className="text-lg font-semibold mb-2">Cara Mengecek Hasil Prediksi:</h4>
                                        <p className="text-gray-700"><p>1. Di halaman dataset, cari tombol "View" di bagian tindakan (action).</p>
                                                                    <p>2. Klik tombol tersebut untuk melihat dataset.</p>
                                                                    <p>3. Dataset akan ditampilkan, dan hasil prediksi Anda akan terletak di bagian paling belakang dari dataset tersebut.
                                                                    </p>
                                                                    </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </AuthenticatedLayout>
    );
}
