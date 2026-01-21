// 1. تفاعل زر الاستكشاف في القسم الرئيسي
document.getElementById('exploreBtn').addEventListener('click', function() {
    alert('مرحباً! سنأخذك في رحلة عبر أحدث تقنيات العصر. استعد للإلهام!');
    // يمكنك تغيير هذا لتنقل المستخدم لقسم معين مثلاً:
    // document.getElementById('articles').scrollIntoView({behavior: 'smooth'});
});

// 2. إضافة صور ديناميكية لمعرض التكنولوجيا
const galleryImages = [
    "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
];

const galleryContainer = document.querySelector('.gallery-container');

galleryImages.forEach(imgSrc => {
    const imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    imgElement.alt = "صورة تقنية";
    imgElement.title = "انقر للتكبير";
    // إمكانية إضافة تفاعل عند النقر
    imgElement.addEventListener('click', () => {
        window.open(imgSrc, '_blank'); // يفتح الصورة في نافذة جديدة
    });
    galleryContainer.appendChild(imgElement);
});

// 3. منع إعادة تحميل الصفحة عند إرسال نموذج الاتصال وعرض رسالة
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الحقيقي (لأننا لا نملك خادم حالياً)
    alert('شكراً على رسالتك! سنتواصل معك قريباً.');
    this.reset(); // مسح الحقول بعد الإرسال
});

// 4. إضافة تأثير بسيط لبطاقات المقالات عند التمرير
const cards = document.querySelectorAll('.card');

// وظيفة تتحقق إذا كان العنصر ظاهراً على الشاشة
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// عند التمرير، نضيف كلاس للعناصر الظاهرة
function checkCards() {
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('visible');
        }
    });
}

// نستمع لحدث التمرير
window.addEventListener('scroll', checkCards);
// نتحقق مرة عند التحميل
window.addEventListener('load', checkCards);

// نضيف هذا في الـ CSS أيضاً لتحقيق التأثير
const style = document.createElement('style');
style.textContent = 
    .card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s, transform 0.5s;
    }
    .card.visible {
        opacity: 1;
        transform: translateY(0);
    }
;
document.head.appendChild(style);