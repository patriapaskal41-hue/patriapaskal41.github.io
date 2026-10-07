    // =========================
// DATA ARTIKEL
// =========================

const articles = [

    {
        title: "Cara Membuat Website dari Nol",
        category: "Website",
        description:
            "Pelajari langkah dasar membuat website menggunakan HTML, CSS, dan JavaScript.",
        date: "5 Oktober 2026",
        icon: "🌐",
        link: "isiartikel_.html"
    },  

    {
        title: "Mengenal HTML untuk Pemula",
        category: "Coding",
        description:
            "Kenali struktur HTML dan fungsi tag yang sering digunakan dalam pembuatan website.",
        date: "3 Oktober 2026",
        icon: "💻",
        link: "materi.html"
    },

    {
        title: "CSS: Membuat Website Lebih Menarik",
        category: "Coding",
        description:
            "Pelajari bagaimana CSS digunakan untuk mengatur warna, ukuran, posisi, dan tampilan website.",
        date: "1 Oktober 2026",
        icon: "🎨",
        link: "materi css.html"
    },

    {
        title: "Apa Itu Website Modern?",
        category: "Teknologi",
        description:
            "Mengenal teknologi yang digunakan dalam website modern dan bagaimana cara kerjanya.",
        date: "28 September 2026",
        icon: "🚀",
        link:"materi website.html"
    },

    {
        title: "Tips Belajar Coding untuk Pemula",
        category: "Tips",
        description:
            "Beberapa cara sederhana agar belajar coding menjadi lebih terarah dan tidak mudah menyerah.",
        date: "25 September 2026",
        icon: "📚",
        link:"materi tips.html"
    },

    {
        title: "JavaScript dan Fungsi Dasarnya",
        category: "Coding",
        description:
            "Kenali JavaScript dan bagaimana bahasa ini membuat website menjadi interaktif.",
        date: "20 September 2026",
        icon: "⚡",
        link:"materijs.html"
    }

];


// =========================
// ELEMENT
// =========================

const articleContainer =
    document.getElementById("articleContainer");

const searchInput =
    document.getElementById("searchInput");

const categories =
    document.querySelectorAll(".category");

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.querySelector(".nav-menu");


// =========================
// MENAMPILKAN ARTIKEL
// =========================

function displayArticles(data) {

    articleContainer.innerHTML = "";

    if (data.length === 0) {

        articleContainer.innerHTML = `
            <p>Tidak ada artikel yang ditemukan.</p>
        `;

        return;
    }


    data.forEach(article => {

        const card = document.createElement("article");

        card.classList.add("article-card");

        card.innerHTML = `

            <div class="article-image">
                ${article.icon}
            </div>

            <div class="article-content">

                <span class="article-category">
                    ${article.category}
                </span>

                <h3 class="article-title">
                  <a href="${article.link}">
                  ${article.title}
                </a>
                </h3>

                <p class="article-description">
                    ${article.description}
                </p>

                <div class="article-meta">

                    <span>
                        PatriaTech
                    </span>

                    <span>
                        ${article.date}
                    </span>

                </div>

                <a href= "${article.link}" class="read-more">
                    Baca selengkapnya →
                </a>

            </div>
        `;

        articleContainer.appendChild(card);

    });

}


// Jalankan pertama kali
displayArticles(articles);


// =========================
// FILTER KATEGORI
// =========================

categories.forEach(button => {

    button.addEventListener("click", () => {

        categories.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category =
            button.dataset.category;

        if (category === "Semua") {

            displayArticles(articles);

        } else {

            const filtered =
                articles.filter(article =>
                    article.category === category
                );

            displayArticles(filtered);

        }

    });

});


// =========================
// SEARCH
// =========================

searchInput.addEventListener("input", () => {

    const keyword =
        searchInput.value.toLowerCase();

    const filtered =
        articles.filter(article =>

            article.title
                .toLowerCase()
                .includes(keyword)

            ||

            article.description
                .toLowerCase()
                .includes(keyword)

        );

    displayArticles(filtered);

});


// =========================
// MENU HP
// =========================

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});