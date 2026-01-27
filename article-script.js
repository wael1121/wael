// محتوى المقالات التفصيلي (بنفس ترتيب articlesData)
const fullArticlesContent = {
    1: {
        title: "ثورة الذكاء الاصطناعي في 2024: ماذا تتوقع؟",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        category: "الذكاء الاصطناعي",
        date: "15 مارس 2024",
        author: "أحمد التميمي",
        readTime: "8 دقائق",
        intro: "يشهد عام 2024 تحولات جذرية في مجال ا��ذكاء الاصطناعي، حيث تتحول التقنية من مجرد أداة مساعدة إلى شريك استراتيجي في مختلف القطاعات.",
        content: `
            <h2>المقدمة: عصر الذكاء الاصطناعي العملي</h2>
            <p>لم يعد الذكاء الاصطناعي مجرد مفهوم نظري أو تقنية مستقبلية، بل أصبح واقعاً ملموساً يغير طريقة عملنا وعيشنا. في 2024، نشهد انتقال الذكاء الاصطناعي من مرحلة التجريب إلى التطبيق العملي على نطاق واسع.</p>
            
            <h2>أهم اتجاهات الذكاء الاصطناعي في 2024</h2>
            
            <h3>1. النماذج اللغوية الكبيرة (LLMs)</h3>
            <p>تطور النماذج اللغوية مثل GPT-4 و Claude أصبح أكثر تخصصاً. نرى الآن نماذج مصممة خصيصاً لمجالات مثل:</p>
            <ul>
                <li>الرعاية الصحية: تشخيص الأمراض وقراءة التقارير الطبية</li>
                <li>التعليم: إنشاء مناهج مخصصة لكل طالب</li>
                <li>القانون: تحليل المستندات القانونية بدقة عالية</li>
            </ul>
            
            <h3>2. الذكاء الاصطناعي المتعدد الوسائط</h3>
            <p>القدرة على فهم ومعالجة النصوص، الصور، الصوت، والفيديو في نموذج واحد. هذا يعني:</p>
            <div class="code-block">
                // مثال على استخدام متعدد الوسائط<br>
                AI.analyze({<br>
                &nbsp;&nbsp;text: "وصف المنتج",<br>
                &nbsp;&nbsp;image: "صورة المنتج",<br>
                &nbsp;&nbsp;audio: "مراجعات العملاء"<br>
                });
            </div>
            
            <h3>3. الذكاء الاصطناعي المسؤول</h3>
            <p>مع تطور الذكاء الاصطناعي، تأتي أهمية وضع ضوابط أخلاقية. الشركات الكبرى تستثمر في:</p>
            <ol>
                <li>الشفافية في خوارزميات الذكاء الاصطناعي</li>
                <li>الحماية من التحيز الخوارزمي</li>
                <li>خصوصية البيانات</li>
            </ol>
            
            <h2>تأثير الذكاء الاصطناعي على سوق العمل</h2>
            <p>دراسات حديثة تشير إلى أن 40% من المهام الإدارية يمكن أتمتتها بالذكاء الاصطناعي، لكن هذا يخلق فرصاً جديدة:</p>
            
            <table style="width:100%; border-collapse: collapse; margin: 1.5rem 0;">
                <tr style="background: #f0f0f0;">
                    <th style="padding: 1rem; text-align: right;">المجال</th>
                    <th style="padding: 1rem; text-align: right;">التأثير المتوقع</th>
                </tr>
                <tr>
                    <td style="padding: 1rem; border: 1px solid #ddd;">التعليم</td>
                    <td style="padding: 1rem; border: 1px solid #ddd;">+30% كفاءة في التعليم الشخصي</td>
                </tr>
                <tr style="background: #f9f9f9;">
                    <td style="padding: 1rem; border: 1px solid #ddd;">الرعاية الصحية</td>
                    <td style="padding: 1rem; border: 1px solid #ddd;">تقليل أخطاء التشخيص بنسبة 25%</td>
                </tr>
                <tr>
                    <td style="padding: 1rem; border: 1px solid #ddd;">التصنيع</td>
                    <td style="padding: 1rem; border: 1px solid #ddd;">زيادة الإنتاجية بنسبة 40%</td>
                </tr>
            </table>
            
            <h2>التحديات والمستقبل</h2>
            <p>رغم الإنجازات، لا تزال هناك تحديات مثل:</p>
            <ul>
                <li>استهلاك الطاقة الكبير لمراكز البيانات</li>
                <li>الفجوة الرقمية بين الدول</li>
                <li>الحاجة إلى تشريعات حديثة</li>
            </ul>
            
            <p>خلال السنوات الخمس القادمة، نتوقع أن يصبح الذكاء الاصطناعي جزءاً لا يتجزأ من كل صناعة، مما يجعل فهمه وتعلمه ضرورة لكل محترف.</p>
        `,
        tags: ["ذكاء اصطناعي", "تقنية", "مستقبل", "تعلم الآلة"],
        related: [2, 5, 9]
    },
    2: {
        title: "تعلم JavaScript للمبتدئين: دليل شامل",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        category: "البرمجة",
        date: "10 مارس 2024",
        author: "سارة البرمجة",
        readTime: "12 دقائق",
        intro: "JavaScript هي لغة الويب الأشهر، وفي هذا الدليل سنأخذك في رحلة من الصفر حتى بناء تطبيقات تفاعلية.",
        content: `<p>محتوى مقال JavaScript...</p>`,
        tags: ["جافاسكريبت", "برمجة", "ويب", "مبتدئين"],
        related: [1, 6, 10]
    },
    // ... يمكنك إضافة محتوى لبقية المقالات بنفس الطريقة
};

// مقالات ذات صلة مبسطة
const relatedArticles = {
    1: { title: "تعلم JavaScript للمبتدئين", id: 2 },
    2: { title: "ChatGPT 4: الثورة القادمة", id: 5 },
    5: { title: "ثورة الذكاء الاصطناعي", id: 1 },
    6: { title: "Python vs JavaScript", id: 2 },
    9: { title: "الحوسبة السحابية", id: 1 },
    10: { title: "إنشاء أول موقع ويب", id: 2 }
};

// الحصول على معرف المقال من الرابط
function getArticleIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1;
}

// عرض المقال
function displayArticle() {
    const articleId = getArticleIdFromURL();
    const article = fullArticlesContent[articleId];
    const container = document.querySelector('.article-container');
    
    if (!article) {
        container.innerHTML = '<div class="error"><h2>المقال غير موجود</h2></div>';
        return;
    }
    
    container.innerHTML = `
        <div class="article-header">
            <img src="${article.image}" alt="${article.title}">
            <div class="article-overlay">
                <span class="card-category">${article.category}</span>
                <h1 class="article-title">${article.title}</h1>
                <div class="article-meta">
                    <span class="meta-item">
                        <i class="far fa-calendar"></i> ${article.date}
                    </span>
                    <span class="meta-item">
                        <i class="far fa-user"></i> ${article.author}
                    </span>
                    <span class="meta-item">
                        <i class="far fa-clock"></i> ${article.readTime} قراءة
                    </span>
                </div>
            </div>
        </div>
        
        <div class="article-content">
            <div class="article-intro">
                ${article.intro}
            </div>
            
            <div class="article-body">
                ${article.content}
            </div>
            
            <div class="article-tags">
                ${article.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
            </div>
            
            <div class="share-widget">
                <h3>شارك هذا المقال</h3>
                <div class="share-buttons">
                    <a href="#" class="share-btn twitter"><i class="fab fa-twitter"></i> تويتر</a>
                    <a href="#" class="share-btn facebook"><i class="fab fa-facebook"></i> فيسبوك</a>
                    <a href="#" class="share-btn linkedin"><i class="fab fa-linkedin"></i> لينكدإن</a>
                    <a href="#" class="share-btn whatsapp"><i class="fab fa-whatsapp"></i> واتساب</a>
                </div>
            </div>
            
            <div class="article-actions">
                <div class="action-buttons">
                    <a href="index.html#articles" class="action-btn">
                        <i class="fas fa-arrow-right"></i> جميع المقالات
                    </a>
                    <button class="action-btn" onclick="window.print()">
                        <i class="fas fa-print"></i> طباعة المقال
                    </button>
                </div>
                <div class="article-tags">
                    <span class="tag">${article.category}</span>
                    <span class="tag">تعليمي</span>
                    <span class="tag">شامل</span>
                </div>
            </div>
        </div>
    `;
    
    // عرض مقالات ذات صلة
    displayRelatedArticles(articleId);
}

// عرض مقالات ذات صلة
function displayRelatedArticles(articleId) {
    const relatedIds = fullArticlesContent[articleId]?.related || [1, 2, 5];
    const container = document.querySelector('.related-container');
    
    container.innerHTML = relatedIds.map(id => {
        const article = fullArticlesContent[id];
        if (!article) return '';
        
        return `
            <div class="related-card">
                <img src="${article.image}" alt="${article.title}">
                <div class="related-content">
                    <h3>${article.title}</h3>
                    <p>${article.intro.substring(0, 100)}...</p>
                    <a href="article.html?id=${id}" class="related-link">اقرأ المقال <i class="fas fa-arrow-left"></i></a>
                </div>
            </div>
        `;
    }).join('');
}

// تحميل المقال عند فتح الصفحة
document.addEventListener('DOMContentLoaded', displayArticle);
