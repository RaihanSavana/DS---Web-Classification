<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CropTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Truncate the table to clear any existing data
        DB::table('crops')->truncate();

        // Insert the data
        DB::table('crops')->insert([
            [
                'id' => 1,
                'crop' => 'Rice',
                'image' => '/Foto/rice.png',
                'description' => 'Padi (Rice) merupakan tanaman pangan utama di banyak negara, terutama di Asia. Padi ditanam di sawah yang membutuhkan banyak air, dan menghasilkan butir padi yang menjadi beras setelah diproses. Beras merupakan makanan pokok bagi lebih dari setengah populasi dunia dan merupakan sumber karbohidrat utama.',
                'created_at' => Carbon::now(),  // Use Carbon for date/time
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 2,
                'crop' => 'Maize',
                'image' => '/Foto/maize.png',
                'description' => 'Jagung (Maize) merupakan tanaman serbaguna yang digunakan sebagai pangan, pakan ternak, dan bahan baku industri. Jagung dapat tumbuh di berbagai kondisi iklim dan tanah, membuatnya menjadi salah satu tanaman paling penting di dunia. Biji jagung dapat dikonsumsi langsung, diolah menjadi tepung, atau dijadikan bahan dasar untuk produk-produk seperti sirup jagung dan etanol.',
                'created_at' => Carbon::now(),  // Use Carbon for date/time
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 3,
                'crop' => 'Chickpea',
                'image' => '/Foto/chickpea.png',
                'description' => 'Kacang arab (chickpea) merupakan tanaman legum yang kaya protein dan serat, sering digunakan dalam masakan Timur Tengah seperti hummus dan falafel. Tanaman ini tahan terhadap kondisi kering, menjadikannya ideal untuk budidaya di daerah dengan curah hujan rendah. Selain itu, kacang arab juga mengandung berbagai vitamin dan mineral penting.',
                'created_at' => Carbon::now(),  // Use Carbon for date/time
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 4,
                'crop' => 'Kidney Beans',
                'image' => '/Foto/kidneybeans.png',
                'description' => 'Kacang merah merupakan tanaman legum yang sering digunakan dalam masakan sup, stew, dan chili. Mereka kaya akan protein, serat, dan nutrisi penting seperti zat besi dan kalium. Kacang merah dikenal dengan bentuknya yang menyerupai ginjal dan warnanya yang merah cerah.',
                'created_at' => Carbon::now(),  // Use Carbon for date/time
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 5,
                'crop' => 'Pigeonpeas',
                'image' => '/Foto/pigeonpeas.png',
                'description' => 'Kacang gude (Pigeonpeas) merupakan tanaman legum yang tahan terhadap kondisi kering, sering digunakan dalam masakan Asia Selatan. Tanaman ini memiliki kemampuan memperbaiki nitrogen di tanah, membantu meningkatkan kesuburan tanah. Kacang gude kaya akan protein, serat, dan asam amino esensial.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 6,
                'crop' => 'Moth Beans',
                'image' => '/Foto/mothbeans.png',
                'description' => 'Kacang mati (Moth Beans) merupakan tanaman legum yang tumbuh baik di daerah kering, sering digunakan dalam masakan India. Tanaman ini dikenal karena ketahanannya terhadap kondisi lingkungan yang ekstrem dan kandungan proteinnya yang tinggi, serta merupakan sumber serat dan mikronutrien yang baik.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 7,
                'crop' => 'Mung Beans',
                'image' => '/Foto/mungbeans.png',
                'description' => 'Kacang hijau (Mung Beans) merupakan tanaman legum yang sering dijadikan tauge, kaya akan protein dan serat. Mereka digunakan dalam berbagai masakan Asia, baik dalam bentuk kecambah, biji kering, maupun pasta. Kacang hijau juga dikenal memiliki berbagai manfaat kesehatan, termasuk menurunkan kadar kolesterol dan gula darah.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 8,
                'crop' => 'Black Gram',
                'image' => '/Foto/blackgram.png',
                'description' => 'Kacang hitam (Black Gram) merupakan tanaman legum yang sering digunakan dalam masakan India seperti dal. Mereka kaya akan protein, serat, dan nutrisi penting lainnya seperti zat besi dan magnesium. Kacang hitam juga digunakan dalam berbagai hidangan vegetarian karena nilai gizinya yang tinggi.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 9,
                'crop' => 'Lentil',
                'image' => '/Foto/lentil.png',
                'description' => 'Lentil merupakan tanaman legum kecil yang sering digunakan dalam sup dan stew. Mereka merupakan sumber protein, serat, dan zat besi yang baik, serta memiliki indeks glikemik rendah, menjadikannya pilihan yang baik untuk penderita diabetes. Lentil hadir dalam berbagai warna, seperti hijau, merah, dan coklat, masing-masing dengan rasa dan tekstur yang unik.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 10,
                'crop' => 'Pomegranate',
                'image' => '/Foto/pomegranate.png',
                'description' => 'Delima (Pomegranate) merupakan buah yang dikenal dengan biji-bijinya yang merah dan kaya akan antioksidan. Buah ini sering dikonsumsi segar atau dijadikan jus, dan memiliki manfaat kesehatan termasuk meningkatkan kesehatan jantung dan menurunkan risiko beberapa jenis kanker. Delima juga kaya akan vitamin C, K, dan folat.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 11,
                'crop' => 'Banana',
                'image' => '/Foto/banana.png',
                'description' => 'Pisang (Banana ) merupakan buah yang kaya akan kalium dan serat, sering dikonsumsi segar atau digunakan dalam berbagai olahan makanan seperti smoothies dan roti pisang. Buah ini juga mengandung vitamin C, B6, dan berbagai antioksidan yang baik untuk kesehatan. Pisang sangat populer karena rasa manisnya dan kemudahan konsumsinya.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 12,
                'crop' => 'Mango',
                'image' => '/Foto/mango.png',
                'description' => 'Mangga (Mango) merupakan buah tropis yang manis dan kaya akan vitamin C, A, dan berbagai antioksidan. Buah ini sering dikonsumsi segar, dijadikan jus, atau dalam salad buah, dan merupakan salah satu buah tropis paling populer di dunia. Mangga juga digunakan dalam berbagai hidangan kuliner di Asia Selatan dan Tenggara.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 13,
                'crop' => 'Grapes',
                'image' => '/Foto/grapes.png',
                'description' => 'Anggur (Grapes) merupakan buah yang sering dikonsumsi segar, dijadikan jus, atau difermentasi menjadi anggur. Mereka kaya akan antioksidan, terutama resveratrol, yang memiliki berbagai manfaat kesehatan termasuk meningkatkan kesehatan jantung. Anggur tersedia dalam berbagai varietas, baik yang berbiji maupun tanpa biji, serta berwarna merah, hijau, atau hitam.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 14,
                'crop' => 'Watermelon',
                'image' => '/Foto/watermelon.png',
                'description' => 'Semangka (Watermelon) merupakan buah yang kaya akan air dan menyegarkan, sering dikonsumsi segar. Buah ini mengandung banyak vitamin A, C, dan antioksidan seperti likopen yang baik untuk kesehatan jantung. Semangka merupakan pilihan populer untuk dikonsumsi selama musim panas karena efek hidrasi dan rasa manisnya.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 15,
                'crop' => 'Muskmelon',
                'image' => '/Foto/muskmelon.png',
                'description' => 'Melon (Muskmelon) merupakan buah manis yang sering dikonsumsi segar atau dijadikan jus. Buah ini kaya akan vitamin A, C, dan memiliki kandungan air yang tinggi, menjadikannya sangat menyegarkan. Melon juga dikenal karena manfaatnya dalam meningkatkan sistem kekebalan tubuh dan kesehatan kulit.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 16,
                'crop' => 'Apple',
                'image' => '/Foto/apple.png',
                'description' => 'Apel (Apple) merupakan buah yang sering dikonsumsi segar atau dijadikan jus. Mereka kaya akan serat, vitamin C, dan antioksidan, serta dikenal karena manfaat kesehatannya seperti meningkatkan kesehatan jantung dan membantu dalam pengendalian berat badan. Apel hadir dalam berbagai varietas dengan rasa yang bervariasi dari manis hingga asam.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 17,
                'crop' => 'Orange',
                'image' => '/Foto/orange.png',
                'description' => 'Jeruk (Orange) merupakan buah yang kaya akan vitamin C, yang penting untuk sistem kekebalan tubuh. Mereka sering dikonsumsi segar atau dijadikan jus, dan juga mengandung serat, folat, dan antioksidan. Jeruk merupakan salah satu buah yang paling populer di dunia karena rasa segarnya dan manfaat kesehatannya.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 18,
                'crop' => 'Papaya',
                'image' => '/Foto/papaya.png',
                'description' => 'Pepaya (Papaya ) merupakan buah tropis yang kaya akan vitamin C dan enzim papain yang membantu pencernaan. Buah ini sering dikonsumsi segar, dijadikan jus, atau digunakan dalam salad buah. Pepaya juga mengandung vitamin A, E, dan berbagai antioksidan yang baik untuk kesehatan kulit dan mata.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 19,
                'crop' => 'Coconut',
                'image' => '/Foto/coconut.png',
                'description' => 'Kelapa (Coconut) merupakan buah yang serbaguna, dengan air kelapanya yang menyegarkan dan dagingnya yang digunakan dalam berbagai masakan. Minyak kelapa juga banyak digunakan dalam memasak dan produk kecantikan. Kelapa kaya akan lemak sehat, serat, dan berbagai mineral seperti mangan dan magnesium.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 20,
                'crop' => 'Cotton',
                'image' => '/Foto/cotton.png',
                'description' => 'Kapas (Cotton) merupakan tanaman yang seratnya digunakan untuk membuat kain. Kapas merupakan bahan dasar untuk berbagai produk tekstil seperti pakaian, handuk, dan seprai. Tanaman ini tumbuh baik di daerah dengan iklim hangat dan membutuhkan banyak sinar matahari.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 21,
                'crop' => 'Jute',
                'image' => '/Foto/jute.png',
                'description' => 'Rami (Jute) merupakan tanaman serat yang digunakan untuk membuat kain goni, karung, dan berbagai produk tekstil lainnya. Tumbuh baik di daerah tropis dengan tanah yang subur dan curah hujan tinggi. Rami juga dikenal sebagai salah satu serat alami yang paling ramah lingkungan.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 22,
                'crop' => 'Coffee',
                'image' => '/Foto/coffee.png',
                'description' => 'Kopi (Coffee) merupakan tanaman yang bijinya dipanggang dan digiling untuk dijadikan minuman kopi. Kopi merupakan salah satu minuman paling populer di dunia, dikenal karena efek stimulasinya yang berasal dari kafein. Kopi juga memiliki berbagai varietas dan rasa, tergantung pada daerah asal dan metode pemrosesannya.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
