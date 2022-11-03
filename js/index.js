const articles = [
    {
        title: "MU Menang, Erik ten Hag Mengumpat, Gary Neville Suka",
        description:
            "Manchester United kalahkan Liverpool 2-1 di lanjutan Liga Inggris. Manajer Erik ten Hag puas bukan main sampai-sampai mengumpat saking senangnya, Gary Neville suka! Manchester United vs Liverpool tersaji di Old Trafford, Selasa (23/8) dini hari WIB pada pekan ketiga Liga Inggris. Manchester United keluar sebagai pemenang, menang 2-1. Gol-gol MU dicetak oleh Jadon Sancho dan Marcus Rashford. Liverpool cuma sekali membalas via Mohamed Salah.",
    },
    {
        title: "Ronaldo Vs Carragher: Kritikan Berujung Dicuekin",
        description:
            "Jamie Carragher kerap melontarkan kritik kepada Cristiano Ronaldo. CR7 membalas dengan sikap cuek kepada legenda Liverpool itu. Kedatangan kembali Ronaldo ke Manchester United pada 2021 tak lepas dari kritik. Salah satu yang paling vokal akan hal itu adalah Carragher.Pundit Sky Sports tersebut heran MU mendatangkan Ronaldo yang sudah tak lagi muda. Carragher menilai eks Real Madrid dan Juventus itu sulit membawa Setan Merah juara.,",
    },
    {
        title: "Kapan Debut Luis Milla Bersama Persib Bandung? Ini Tanggalnya",
        description:
            "Luis Milla resmi diumumkan sebagai pelatih anyar Persib Bandung pada Jumat (19/8/2022). Nakhoda berkebansaan Spanyol itu kemudian diperkenalkan kepada publik pada Senin (22/8/2022) di Graha Persib. Luis Milla menandatangani kontrak berdurasi dua tahun dengan opsi perpanjangan.",
    },
];

const mainArticles = document.querySelector(".main-articles");

let card = ``;
let no = 1;
let noImage = 1;

for (let i = 0; i < articles.length; i++) {
    card += `<article class="main-articles__article">
                <h1 class="main-articles__article-title">${no++}.${articles[i].title}</h1>
                <img src="./assets/img/${noImage++}.jpeg" alt="article" class="main-articles__article-image">
                <p>
                    ${articles[i].description}
                </p>
            </article>`;
}

articles.forEach((article, index) => {});

mainArticles.innerHTML = card;
