// محتوى المقالات الكامل
const articlesContent = {
    1: {
        title: "دليل شامل للذكاء الاصطناعي للمبتدئين",
        image: "images/ai-article.jpg",
        date: "15 مارس 2024",
        author: "أحمد التميمي",
        category: "الذكاء الاصطناعي",
        content: `
            <img src="images/ai-article.jpg" alt="الذكاء الاصطناعي" class="article-image">
            
            <h2>ما هو الذكاء الاصطناعي؟</h2>
            <p>الذكاء الاصطناعي (AI) هو مجال من مجالات علوم الكمبيوتر يركز على إنشاء أنظمة قادرة على أداء المهام التي تتطلب عادةً ذكاءً بشرياً. هذه المهام تشمل التعلم، التفكير المنطقي، حل المشكلات، الإدراك، وفهم اللغة.</p>
            
            <h2>أنواع الذكاء الاصطناعي</h2>
            <h3>1. الذكاء الاصطناعي الضعيف (Narrow AI)</h3>
            <p>هذا النوع مصمم لأداء مهام محددة. أمثلته تشمل:</p>
            <ul>
                <li>مساعدين صوتيين مثل Siri وGoogle Assistant</li>
                <li>أنظمة التوصية في Netflix وYouTube</li>
                <li>مرشحات البريد العشوائي</li>
            </ul>
            
            <h3>2. الذكاء الاصطناعي القوي (General AI)</h3>
            <p>هذا النظري يمكنه فهم وتعلم أي مهمة فكرية يمكن للإنسان القيام بها. لم يتحقق بعد ولكنه هدف للعديد من الباحثين.</p>
            
            <h2>كيف تبدأ في تعلم الذكاء الاصطناعي؟</h2>
            <p>لتبدأ رحلتك في الذكاء الاصطناعي، اتبع هذه الخطوات:</p>
            <ol>
                <li>تعلم أساسيات البرمجة (Python هي الأفضل للذكاء الاصطناعي)</li>
                <li>افهم الرياضيات الأساسية (جبر، إحصاء، تفاضل)</li>
                <li>تعلم مكتبات Python مثل NumPy وPandas</li>
                <li>ابدأ بمكتبات التعلم الآلي مثل Scikit-learn</li>
                <li>تقدم لتعلم الشبكات العصبية والتعلم العميق</li>
            </ol>
            
            <div class="code-block">
                # مثال بسيط في Python
                import numpy as np
                
                # إنشاء مصفوفة
                matrix = np.array([[1, 2], [3, 4]])
                print("المصفوفة:", matrix)
            </div>
            
            <h2>تطبيقات عملية للذكاء الاصطناعي</h2>
            <p>يستخدم الذكاء الاصطناعي اليوم في العديد من المجالات:</p>
            <ul>
                <li><strong>الرعاية الصحية:</strong> تشخيص الأمراض، اكتشاف السرطان</li>
                <li><strong>التمويل:</strong> اكتشاف الاحتيال، التداول الآلي</li>
                <li><strong>التعليم:</strong> أنظمة تعلم مخصصة</li>
                <li><strong>المواصلات:</strong> السيارات ذاتية القيادة</li>
            </ul>
            
            <h2>مستقبل الذكاء الاصطناعي</h2>
            <p>يتوقع الخبراء أن الذكاء الاصطناعي سيستمر في التطور، مع التركيز على:</p>
            <ul>
                <li>تحسين الشفافية والأخلاقيات</li>
                <li>دمج الذكاء الاصطناعي مع إنترنت الأشياء</li>
                <li>تطوير ذكاء اصطناعي أكثر كفاءة في استهلاك الطاقة</li>
                <li>تحسين التفاعل بين الإنسان والآلة</li>
            </ul>
            
            <p>الذكاء الاصطناعي ليس مستقبل التكنولوجيا فقط، بل هو حاضرها. البدء في تعلمه اليوم يفتح أمامك آفاقاً مهنية واسعة.</p>
        `
    },
    2: {
        title: "تعلم JavaScript من الصفر",
        image: "images/js-article.jpg",
        date: "10 مارس 2024",
        author: "سارة البرمجة",
        category: "البرمجة",
        content: `
            <img src="images/js-article.jpg" alt="جافاسكريبت" class="article-image">
            
            <h2>مقدمة عن JavaScript</h2>
            <p>JavaScript هي لغة برمجة عالية المستوى تستخدم principalmente لتطوير الويب. مع JavaScript، يمكنك جعل صفحات الويب تفاعلية وديناميكية.</p>
            
            <h2>لماذا تتعلم JavaScript؟</h2>
            <ul>
                <li>لغة الويب الرئيسية (تعمل في جميع المتصفحات)</li>
                <li>سهلة التعلم نسبياً للمبتدئين</li>
                <li>تستخدم في تطوير الواجهات الأمامية والخلفية</li>
                <li>مجتمع نشط وواسع</li>
                <li>فرص عمل ممتازة</li>
            </ul>
            
            <h2>أساسيات JavaScript</h2>
            
            <h3>1. المتغيرات (Variables)</h3>
            <div class="code-block">
                // تعريف المتغيرات
                let name = "أحمد";
                const age = 25;
                var city = "الرياض";
                
                console.log("الاسم:", name);
                console.log("العمر:", age);
            </div>
            
            <h3>2. أنواع البيانات (Data Types)</h3>
            <p>JavaScript لغة ديناميكية، أنواع البيانات تشمل:</p>
            <ul>
                <li>String: "نص"</li>
                <li>Number: 42</li>
                <li>Boolean: true أو false</li>
                <li>Array: [1, 2, 3]</li>
                <li>Object: {name: "أحمد", age: 25}</li>
            </ul>
            
            <h2>مشروعك الأول: آلة حاسبة بسيطة</h2>
            <div class="code-block">
                // آلة حاسبة بسيطة
                function add(a, b) {
                    return a + b;
                }
                
                function subtract(a, b) {
                    return a - b;
                }
                
                function multiply(a, b) {
                    return a * b;
                }
                
                function divide(a, b) {
                    if (b !== 0) {
                        return a / b;
                    } else {
                        return "خطأ: القسمة على صفر";
                    }
                }
                
                // اختبار الدوال
                console.log("الجمع:", add(10, 5));
                console.log("الطرح:", subtract(10, 5));
            </div>
            
            <h2>الخطوات التالية للتعلم</h2>
            <ol>
                <li>أساسيات JavaScript (اكتملت)</li>
                <li>التعامل مع DOM (لجعل الصفحات تفاعلية)</li>
                <li>أساسيات ES6+ (ميزات JavaScript الحديثة)</li>
                <li>تعلم React أو Vue (مكتبات الواجهات)</li>
                <li>Node.js (لبرمجة الخادم)</li>
            </ol>
            
            <h2>نصائح للتعلم</h2>
            <ul>
                <li>تدرب يومياً، حتى لو لـ 30 دقيقة</li>
                <li>ابن مشاريع صغيرة تطبق ما تعلمته</li>
                <li>استخدم منصات مثل freeCodeCamp أو Codecademy</li>
                <li>تابع المطورين على GitHub</li>
                <li>لا تخف من ارتكاب الأخطاء</li>
            </ul>
        `
    },
    4: {
        title: "مستقبل الحوسبة السحابية",
        image: "images/laptop-article.jpg",
        date: "1 مارس 2024",
        author: "نورة التقنية",
        category: "الذكاء الاصطناعي",
        content: `
            <img src="images/laptop-article.jpg" alt="الحوسبة السحابية" class="article-image">
            <h2>لماذا السحابة؟</h2>
            <p>تسمح الحوسبة السحابية بتخزين ومعالجة البيانات على خوادم بعيدة بدلاً من جهازك الشخصي، مما يوفر مرونة وسرعة هائلة.</p>
        `
    }
    // يمكنك إضافة محتوى للمقالات 3-6 بنفس الطريقة
};

// عرض المقال
function displayArticle() {
    // الحصول على معرف المقال من الرابط
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id') || 1;
    const article = articlesContent[articleId];
    
    const container = document.querySelector('.article-container');
    
    if (!article) {
        container.innerHTML = `
            <div class="article-header">
                <h1>المقال غير موجود</h1>
                <a href="index.html" class="back-button">← العودة للمقالات</a>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <div class="article-header">
            <h1>${article.title}</h1>
            <div class="article-meta">
                <span class="meta-item">
                    <i class="far fa-calendar"></i> ${article.date}
                </span>
                <span class="meta-item">
                    <i class="far fa-user"></i> ${article.author}
                </span>
                <span class="meta-item">
                    <i class="far fa-folder"></i> ${article.category}
                </span>
            </div>
        </div>
        
        <div class="article-content">
            ${article.content}
            
            <div style="text-align: center; margin-top: 3rem;">
                <a href="index.html#articles" class="back-button">
                    <i class="fas fa-arrow-right"></i> العودة لجميع المقالات
                </a>
            </div>
        </div>
    `;
}

// تشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', displayArticle);
