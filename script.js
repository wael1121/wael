// ============== بيانات المقالات ==============
const articlesData = [
    {
        id: 1,
        title: "ثورة الذكاء الاصطناعي في 2024: ماذا تتوقع؟",
        description: "تحليل شامل لأهم اتجاهات الذكاء الاصطناعي لهذا العام وتأثيرها على مختلف الصناعات",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "ai",
        date: "15 مارس 2024",
        isNew: true
    },
    {
        id: 2,
        title: "تعلم JavaScript للمبتدئين: دليل شامل",
        description: "بداية رحلتك في البرمجة مع لغة JavaScript من الصفر حتى الإحتراف",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "programming",
        date: "10 مارس 2024",
        isNew: true
    },
    {
        id: 3,
        title: "أفضل 10 لابتوبات للبرمجة في 2024",
        description: "دليل مفصل لاختيار الحاسب المناسب لمطوري البرمجيات والمبرمجين",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "hardware",
        date: "8 مارس 2024"
    },
    {
        id: 4,
        title: "كيف تحمي حسابك من القرصنة الإلكترونية؟",
        description: "نصائح أساسية وأدوات مجانية لتأمين حساباتك على الإنترنت",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "security",
        date: "5 مارس 2024"
    },
    {
        id: 5,
        title: "ChatGPT 4: الثورة القادمة في المحادثات الذكية",
        description: "كل ما تحتاج معرفته عن أحدث إصدارات ChatGPT وكيفية الاستفادة منه",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "ai",
        date: "3 مارس 2024"
    },
    {
        id: 6,
        title: "Python vs JavaScript: أيهما تتعلم أولاً؟",
        description: "مقارنة شاملة بين اللغتين لتساعدك على اتخاذ القرار المناسب",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "programming",
        date: "28 فبراير 2024"
    },
    {
        id: 7,
        title: "تقنية 5G: كيف ستغير عالم الاتصالات؟",
        description: "تأثير الجيل الخامس على السرعة والتطبيقات الذكية",
        image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "hardware",
        date: "25 فبراير 2024"
    },
    {
        id: 8,
        title: "أهم 10 نصائح لزيادة إنتاجيتك التقنية",
        description: "أدوات وحيل بسيطة تضاعف من كفاءتك في العمل الرقمي",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "tips",
        date: "22 فبراير 2024"
    },
    {
        id: 9,
        title: "الحوسبة السحابية: مستقبل تخزين البيانات",
        description: "دليل شامل لفهم السحابة الإلكترونية ومميزاتها",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "ai",
        date: "20 فبراير 2024"
    },
    {
        id: 10,
        title: "كيفية إنشاء أول موقع ويب خاص بك",
        description: "خطوة بخطوة من الصفر حتى النشر على الإنترنت",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "programming",
        date: "18 فبراير 2024"
    },
    {
        id: 11,
        title: "أفضل سماعات الرأس للمطورين والمبرمجين",
        description: "مراجعة شاملة لأفضل سماعات العمل والترفيه",
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "hardware",
        date: "15 فبراير 2024"
    },
    {
        id: 12,
        title: "كيف تحمي خصوصيتك على وسائل التواصل؟",
        description: "إعدادات الخصوصية التي يجب على الجميع تفعيلها",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "security",
        date: "12 فبراير 2024"
    },
    {
        id: 13,
        title: "التعلم الآلي: مقدمة مبسطة للمبتدئين",
        description: "فهم أساسيات Machine Learning بدون تعقيد",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "ai",
        date: "10 فبراير 2024"
    },
    {
        id: 14,
        title: "CSS Grid vs Flexbox: أيهما تختار؟",
        description: "مقارنة تفصيلية بين نظامي التخطيط الأشهر",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "programming",
        date: "8 فبراير 2024"
    },
    {
        id: 15,
        title: "كيف تختار كاميرا الويب المناسبة للعمل عن بعد",
        description: "معايير الاختيار وأفضل الموديلات المتاحة",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "hardware",
        date: "5 فبراير 2024"
    }
];

// ============== متغيرات التحكم ==============
let currentCategory = 'all';
let visibleArticles = 6;

// ============== عرض المقالات ==============
function displayArticles() {
    const container = document.querySelector('.articles-container');
    container.innerHTML = '';
    
    // تصفية المقالات حسب التصنيف
    let filteredArticles = currentCategory === 'all' 
        ? articlesData 
        : articlesData.filter(article => article.category === currentCategory);
    
    // تحديد المقالات المرئية
    const articlesToShow = filteredArticles.slice(0, visibleArticles);
    
    // إنشاء بطاقات المقالات
    articlesToShow.forEach(article => {
        const articleCard = document.createElement('article');
        articleCard.className = 'card';
        articleCard.setAttribute('data-category', article.category);
        
        articleCard.innerHTML = `
            <div class="card-image">
                ${article.isNew ? '<span class="new-badge">جديد</span>' : ''}
                <img src="${article.image}" alt="${article.title}" loading="lazy">
            </div>
            <div class="card-content">
                <div class="card-meta">
                    <span class="card-category">${getCategoryName(article.category)}</span>
                    <span class="card-date">${article.date}</span>
                </div>
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="#" class="read-more-btn" onclick="readArticle(${article.id})">
                    اقرأ المزيد <i class="fas fa-arrow-left"></i>
                </a>
            </div>
            <div class="read-indicator"></div>
        `;
        
        container.appendChild(articleCard);
    });
    
    // إخفاء زر تحميل المزيد إذا لم يكن هناك المزيد
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (visibleArticles >= filteredArticles.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// ============== وظائف مساعدة ==============
function getCategoryName(category) {
    const categories = {
        'ai': 'الذكاء الاصطناعي',
        'programming': 'البرمجة',
        'hardware': 'الأجهزة',
        'security': 'الأمن السيبراني',
        'tips': 'نصائح تقنية'
    };
    return categories[category] || category;
}

function readArticle(articleId) {
    const article = articlesData.find(a => a.id === articleId);
    alert(`ستفتح مقال: "${article.title}"\n\nهذه خاصية تجريبية. في الموقع الحقيقي، ستفتح صفحة المقال الكاملة.`);
}

// ============== أحداث التصنيفات ==============
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // إزالة النشط من جميع الأزرار
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        
        // إضافة النشط للزر المضغوط
        this.classList.add('active');
        
        // تحديث التصنيف الحالي
        currentCategory = this.getAttribute('data-category');
        visibleArticles = 6; // إعادة تعيين عدد المقالات المرئية
        
        // إعادة عرض المقالات
        displayArticles();
    });
});

// ============== زر تحميل المزيد ==============
document.getElementById('loadMoreBtn').addEventListener('click', function() {
    visibleArticles += 3;
    displayArticles();
    
    // تأثير سلس للتمرير
    document.querySelector('.articles-container').lastElementChild.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
});

// ============== بحث بسيط (إضافي) ==============
function addSearchFunctionality() {
    const searchHTML = `
        <div class="search-container">
            <input type="text" id="articleSearch" placeholder="ابحث في المقالات...">
            <button id="searchBtn"><i class="fas fa-search"></i></button>
        </div>
    `;
    
    document.querySelector('.categories').insertAdjacentHTML('beforebegin', searchHTML);
    
    document.getElementById('searchBtn').addEventListener('click', performSearch);
    document.getElementById('articleSearch').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') performSearch();
    });
}

function performSearch() {
    const searchTerm = document.getElementById('articleSearch').value.toLowerCase();
    
    if (searchTerm.trim() === '') {
        displayArticles();
        return;
    }
    
    const filtered = articlesData.filter(article => 
        article.title.toLowerCase().includes(searchTerm) || 
        article.description.toLowerCase().includes(searchTerm)
    );
    
    const container = document.querySelector('.articles-container');
    container.innerHTML = '';
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3>لا توجد نتائج للبحث</h3>
                <p>حاول البحث بكلمات أخرى</p>
            </div>
        `;
    } else {
        filtered.forEach(article => {
            const articleCard = document.createElement('article');
            articleCard.className = 'card';
            articleCard.innerHTML = `
                <img src="${article.image}" alt="${article.title}">
                <div class="card-content">
                    <div class="card-meta">
                        <span class="card-category">${getCategoryName(article.category)}</span>
                        <span class="card-date">${article.date}</span>
                    </div>
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="#" class="read-more-btn" onclick="readArticle(${article.id})">
                        اقرأ المزيد <i class="fas fa-arrow-left"></i>
                    </a>
                </div>
            `;
            container.appendChild(articleCard);
        });
    }
    
    document.getElementById('loadMoreBtn').style.display = 'none';
}

// ============== تهيئة عند تحميل الصفحة ==============
document.addEventListener('DOMContentLoaded', function() {
    // عرض المقالات الأولى
    displayArticles();
    
    // إضافة خاصية البحث (اختياري)
    // addSearchFunctionality();
    
    // تأثيرات عند التمرير
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
});
