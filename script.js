// بيانات المقالات (يجب أن تتطابق المعرفات مع الموجود في article-script.js)
const articles = [
    { id: 1, title: "الذكاء الاصطناعي", description: "دليل المبتدئين الشامل", image: "images/ai-article.jpg", category: "ai" },
    { id: 2, title: "لغة JavaScript", description: "تعلم البرمجة من الصفر", image: "images/js-article.jpg", category: "programming" },
    { id: 3, title: "الأمن السيبراني", description: "طرق حماية بياناتك الرقمية", image: "images/security-article.jpg", category: "security" },
    { id: 4, title: "الحوسبة السحابية", description: "مستقبل تخزين البيانات", image: "images/laptop-article.jpg", category: "ai" }
];

// دالة عرض المقالات
function displayArticles(filter = 'all') {
    const container = document.querySelector('.articles-container');
    container.innerHTML = ''; // مسح المحتوى الحالي

    const filteredArticles = filter === 'all' 
        ? articles 
        : articles.filter(art => art.category === filter);

    filteredArticles.forEach(article => {
        const card = `
            <div class="article-card">
                <img src="${article.image}" alt="${article.title}">
                <div class="article-content">
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="article.html?id=${article.id}" class="read-more">اقرأ المزيد ←</a>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// تفعيل أزرار التصنيفات (Filtering)
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // تغيير الزر النشط
        document.querySelector('.category-btn.active').classList.remove('active');
        e.target.classList.add('active');
        
        // تصفية المقالات
        displayArticles(e.target.dataset.category);
    });
});

// تشغيل الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    displayArticles();
});