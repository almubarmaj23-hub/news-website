// ===== DATA – أخبار حقيقية ومحققة مارس 2026 =====
const NEWS_DATA = [
  // --------- HERO (أبرز 3) ---------
  {
    id: 1,
    title: "حرب إيران 2026: ضربات أمريكية-إسرائيلية موسّعة وإيران ترد بصواريخ باليستية على تل أبيب",
    excerpt: "بدأت الولايات المتحدة وإسرائيل في 28 فبراير 2026 حملةً جوية واسعة على إيران استهدفت 500 موقع عسكري، فيما ردّت القوات الإيرانية بإطلاق دفعات من الصواريخ الباليستية باتجاه تل أبيب وجنوب إسرائيل وسط تصعيد إقليمي لا يزال مستمراً حتى اليوم.",
    category: "عالم",
    time: "منذ ساعة",
    views: 98420,
    hero: true,
    img: "https://images.unsplash.com/photo-1542382257-80dedb725088?w=900&q=80",
    source: "الجزيرة نت – CNN عربية"
  },
  {
    id: 2,
    title: "ترامب يزور الصين 31 مارس–2 أبريل وسط توترات تجارية حادة",
    excerpt: "أعلن البيت الأبيض أن الرئيس دونالد ترامب سيتوجه إلى بكين نهاية الشهر الجاري للقاء الرئيس شي جين بينغ في ظل توترات تجارية وتأتي الزيارة عقب قرار المحكمة العليا الأمريكية بإلغاء جملة من الرسوم الجمركية.",
    category: "سياسة",
    time: "منذ ساعتين",
    views: 47200,
    hero: true,
    img: "https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?w=900&q=80",
    source: "رويترز – أناضول"
  },
  {
    id: 3,
    title: "كأس العالم 2026: منتخب مصر يحدد وديتين أمام السعودية وإسبانيا وألمانيا تعلن قائمتها",
    excerpt: "يواصل المنتخب المصري تحضيراته لمونديال 2026 الذي تستضيفه الولايات المتحدة والمكسيك وكندا (11 يونيو–19 يوليو) بمباراتين وديتين، فيما كشف ناغلسمان عن قائمة ألمانيا لمواجهة سويسرا وغانا.",
    category: "رياضة",
    time: "منذ 4 ساعات",
    views: 63100,
    hero: true,
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=900&q=80",
    source: "الأهرام – يوم 7"
  },

  // --------- GRID NEWS ---------
  {
    id: 4,
    title: "البنك المركزي الروسي يخفض الفائدة للمرة السابعة إلى 15%",
    excerpt: "قرّر البنك المركزي الروسي خفض سعر الفائدة الرئيسي 50 نقطة أساس إلى 15%، في سابع تخفيض متتالٍ، ضمن مسار يستهدف دعم الانتعاش الاقتصادي وتهدئة حالة عدم اليقين في الأسواق.",
    category: "اقتصاد",
    time: "20 مارس 2026",
    views: 18900,
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    source: "Vietnam.vn – أبرز أخبار الاقتصاد"
  },
  {
    id: 5,
    title: "أسعار الذهب تتراجع دون 5000 دولار للأونصة مع استمرار الصراع في الشرق الأوسط",
    excerpt: "انخفض سعر الأونصة الذهبية دون حاجز الـ5000 دولار وسط ارتفاع أسعار النفط إثر الهجمات الإيرانية على منشآت الطاقة، بينما قررت وكالة الطاقة الدولية الإفراج الفوري عن احتياطياتها النفطية الاستراتيجية.",
    category: "اقتصاد",
    time: "16 مارس 2026",
    views: 22400,
    img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80",
    source: "Vietnam.vn – أبرز أخبار الاقتصاد"
  },
  {
    id: 6,
    title: "مخاوف أمنية تربك استعدادات أمريكا لاستضافة كأس العالم 2026",
    excerpt: "كشفت تقارير استخباراتية حصلت عليها رويترز عن تحذيرات جدية من احتمال استهداف متطرفين للبطولة، في ظل تأخر صرف مئات الملايين من الدولارات المخصصة لتأمين الملاعب والمدن الأمريكية المضيفة.",
    category: "رياضة",
    time: "19 مارس 2026",
    views: 31500,
    img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80",
    source: "اندبندنت عربية"
  },
  {
    id: 7,
    title: "أول طائرة كهربائية بالكامل تقلع تجارياً من مطار غلاسكو في أوروبا",
    excerpt: "سجّل قطاع الطيران الأوروبي حدثاً تاريخياً بتشغيل شركة Loganair أولى رحلاتها التجارية بالكامل على متن طائرة Aliya CX300 الكهربائية الأمريكية الصنع منطلقةً من مطار غلاسكو.",
    category: "تكنولوجيا",
    time: "20 مارس 2026",
    views: 29800,
    img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
    source: "Vietnam.vn – أبرز أخبار الاقتصاد"
  },
  {
    id: 8,
    title: "أسهم تينسنت وعلي بابا تتراجع بعشرات المليارات وسط قلق المستثمرين من الذكاء الاصطناعي",
    excerpt: "خسرت تينسنت 43 مليار دولار في يوم واحد وعلي بابا 23 مليار دولار إثر مبيعات مكثفة من المستثمرين الذين يرون أن الشركتين تفتقران لاستراتيجية واضحة لتحويل استثماراتهما الهائلة في الذكاء الاصطناعي إلى أرباح.",
    category: "اقتصاد",
    time: "19 مارس 2026",
    views: 38700,
    img: "https://images.unsplash.com/photo-1621264448270-9ef00e88a935?w=800&q=80",
    source: "Vietnam.vn – أبرز أخبار الاقتصاد"
  },
  {
    id: 9,
    title: "محادثات باريس التجارية تمهّد لقمة ترامب-شي في بكين نهاية مارس",
    excerpt: "أجرى كبار المسؤولين الأمريكيين والصينيين محادثات وُصفت بـ'الصريحة والبنّاءة' في باريس، تناولت ملفات الزراعة والمعادن النادرة وآليات إدارة التجارة تمهيداً لقمة مرتقبة بين البلدين.",
    category: "سياسة",
    time: "16 مارس 2026",
    views: 24100,
    img: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=800&q=80",
    source: "Vietnam.vn – رويترز"
  },
  {
    id: 10,
    title: "إيران تقيّد الملاحة في مضيق هرمز وسط تصاعد التوترات البحرية",
    excerpt: "أعلنت إيران في مطلع مارس تقييد حركة الملاحة في مضيق هرمز وتهديد أي سفينة تحاول العبور دون تنسيق معها، مما يُهدد بتعطل إمدادات النفط العالمية عبر هذا الممر الاستراتيجي الحيوي.",
    category: "عالم",
    time: "2 مارس 2026",
    views: 54200,
    img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&q=80",
    source: "الجزيرة نت"
  },
  {
    id: 11,
    title: "الذكاء الاصطناعي المحلي وواجهات الدماغ-الحاسوب: أبرز توجهات التكنولوجيا في 2026",
    excerpt: "تشير التوقعات إلى هيمنة الذكاء الاصطناعي العامل على الأجهزة مباشرةً دون الاتصال بالسحابة، إلى جانب قفزة نوعية في الواقع المختلط وتطبيقات أولية لواجهات الدماغ-الحاسوب في الطب وإعادة التأهيل.",
    category: "تكنولوجيا",
    time: "مارس 2026",
    views: 19300,
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    source: "اندبندنت عربية"
  },
  {
    id: 12,
    title: "استقالة جو كينت تكشف خلافات حادة داخل إدارة ترامب حول حرب إيران",
    excerpt: "أقال أو قدّم جو كينت استقالته من منصبه رفيع المستوى في إدارة ترامب رفضاً لدعم حرب إيران، واتهم إسرائيل واللوبي الداعم لها بدفع واشنطن نحو مواجهة مكلفة لم تطلبها الرأي العام الأمريكي.",
    category: "سياسة",
    time: "17 مارس 2026",
    views: 41800,
    img: "https://images.unsplash.com/photo-1575820942183-b7c78c6a16a3?w=800&q=80",
    source: "الجزيرة نت"
  }
];

const CATEGORIES = [
  { name:"سياسة",    icon:"fa-landmark",      color:"#b91c1c" },
  { name:"اقتصاد",   icon:"fa-chart-line",    color:"#15803d" },
  { name:"رياضة",    icon:"fa-futbol",        color:"#1d4ed8" },
  { name:"تكنولوجيا",icon:"fa-microchip",     color:"#7e22ce" },
  { name:"صحة",      icon:"fa-heartbeat",     color:"#db2777" },
  { name:"ثقافة",    icon:"fa-book",          color:"#c2410c" },
  { name:"عالم",     icon:"fa-globe",         color:"#0f766e" },
  { name:"محليات",   icon:"fa-map-marker-alt",color:"#b45309" }
];

const TAGS = ["عاجل","حرب إيران 2026","كأس العالم","ترامب","الصين","ذكاء اصطناعي","النفط","الذهب","الرياضة","هرمز","تكنولوجيا","انتخابات"];

// ===== STATE =====
let currentFilter = "all";
let visibleCount   = 9;
let isDark         = false;

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  updateDate();
  renderHero();
  renderNewsGrid(getFiltered().slice(0, visibleCount));
  renderMostRead();
  renderCategories();
  renderTags();
  updateStats();
  setupScrollEvents();
  initDarkMode();
});

// ===== DATE =====
function updateDate() {
  const d    = new Date();
  const opts = { weekday:"long", year:"numeric", month:"long", day:"numeric" };
  document.getElementById("header-date").textContent  = d.toLocaleDateString("ar-EG", opts);
  document.getElementById("lastUpdate").textContent   = d.toLocaleTimeString("ar-EG", {hour:"2-digit", minute:"2-digit"});
}

// ===== HERO =====
function renderHero() {
  const heroNews = NEWS_DATA.filter(n => n.hero);
  const [main, ...rest] = heroNews;
  document.getElementById("heroMain").innerHTML = `
    <img src="${main.img}" alt="${main.title}" class="hero-img" loading="eager"/>
    <div class="hero-overlay">
      <span class="cat-badge">${main.category}</span>
      <h2>${main.title}</h2>
      <div class="meta">
        <span><i class="fas fa-clock"></i> ${main.time}</span>
        <span><i class="fas fa-eye"></i> ${main.views.toLocaleString("ar-EG")}</span>
        <span><i class="fas fa-newspaper"></i> ${main.source}</span>
      </div>
    </div>`;
  document.getElementById("heroMain").onclick = () => openModal(main.id);

  document.getElementById("heroSide").innerHTML = rest.map(n => `
    <div class="hero-side-item" onclick="openModal(${n.id})">
      <img src="${n.img}" alt="${n.title}" class="hero-side-img" loading="lazy"/>
      <div class="hero-side-text">
        <span class="cat-badge">${n.category}</span>
        <h4>${n.title}</h4>
        <div class="meta"><i class="fas fa-clock"></i> ${n.time}</div>
      </div>
    </div>`).join("");
}

// ===== HELPERS =====
function getFiltered() {
  return currentFilter === "all"
    ? NEWS_DATA
    : NEWS_DATA.filter(n => n.category === currentFilter);
}

// ===== NEWS GRID =====
function renderNewsGrid(news) {
  document.getElementById("newsGrid").innerHTML = news.map(n => `
    <div class="news-card" onclick="openModal(${n.id})">
      <div class="card-img-wrap">
        <img src="${n.img}" alt="${n.title}" class="news-card-img" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80'"/>
        <span class="card-cat">${n.category}</span>
      </div>
      <div class="news-card-body">
        <h3>${n.title}</h3>
        <p>${n.excerpt}</p>
        <div class="card-meta">
          <span><i class="fas fa-clock"></i> ${n.time}</span>
          <span class="views"><i class="fas fa-eye"></i> ${n.views.toLocaleString("ar-EG")}</span>
          <button class="card-share" onclick="shareNews(event,${n.id})"><i class="fas fa-share-alt"></i></button>
        </div>
      </div>
    </div>`).join("");
}

// ===== MOST READ =====
function renderMostRead() {
  const sorted = [...NEWS_DATA].sort((a,b) => b.views - a.views).slice(0,6);
  document.getElementById("mostReadList").innerHTML = sorted.map((n,i) => `
    <li onclick="openModal(${n.id})">
      <span class="most-read-num">${i+1}</span>
      <div class="most-read-text">
        <h5>${n.title}</h5>
        <span><i class="fas fa-eye"></i> ${n.views.toLocaleString("ar-EG")}</span>
      </div>
    </li>`).join("");
}

// ===== CATEGORIES =====
function renderCategories() {
  document.getElementById("categoriesGrid").innerHTML = CATEGORIES.map(c => {
    const count = NEWS_DATA.filter(n => n.category === c.name).length;
    return `<div class="cat-card" style="background:${c.color}" onclick="filterCategory('${c.name}')">
      <i class="fas ${c.icon}"></i>
      <span>${c.name}</span>
      <span class="count">${count} خبر</span>
    </div>`;
  }).join("");
}

// ===== TAGS =====
function renderTags() {
  document.getElementById("tagsCloud").innerHTML = TAGS.map(t =>
    `<span class="tag" onclick="searchByTag('${t}')">${t}</span>`).join("");
}

// ===== STATS =====
function updateStats() {
  const total = NEWS_DATA.reduce((s,n) => s+n.views, 0);
  animateNum("totalViews", total);
  animateNum("totalNews",  NEWS_DATA.length);
  animateNum("onlineUsers", Math.floor(Math.random()*600+300));
}
function animateNum(id, target) {
  const el = document.getElementById(id);
  let cur = 0;
  const step = target / 80;
  const t = setInterval(() => {
    cur = Math.min(cur+step, target);
    el.textContent = Math.floor(cur).toLocaleString("ar-EG");
    if (cur >= target) clearInterval(t);
  }, 16);
}

// ===== FILTER =====
function filterCategory(cat) {
  currentFilter = cat;
  visibleCount  = 9;
  renderNewsGrid(getFiltered().slice(0, visibleCount));
  document.getElementById("sectionTitle").innerHTML =
    cat === "all"
      ? '<i class="fas fa-fire"></i> أبرز الأخبار'
      : `<i class="fas fa-folder-open"></i> ${cat}`;
  document.getElementById("loadMoreBtn").style.display = "";
  window.scrollTo({top: document.getElementById("newsGrid").offsetTop - 180, behavior:"smooth"});
}

// ===== SORT =====
function sortNews(by) {
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");
  const data = by === "popular"
    ? [...getFiltered()].sort((a,b) => b.views-a.views)
    : getFiltered();
  renderNewsGrid(data.slice(0, visibleCount));
}

// ===== LOAD MORE =====
function loadMore() {
  visibleCount += 3;
  const filtered = getFiltered();
  renderNewsGrid(filtered.slice(0, visibleCount));
  if (visibleCount >= filtered.length)
    document.getElementById("loadMoreBtn").style.display = "none";
}

// ===== SEARCH =====
document.getElementById("searchBtn").addEventListener("click", () => {
  const wrap = document.getElementById("searchBarWrap");
  wrap.classList.toggle("open");
  if (wrap.classList.contains("open")) document.getElementById("searchInput").focus();
});
function performSearch() {
  const q = document.getElementById("searchInput").value.trim().toLowerCase();
  if (!q) return;
  const results = NEWS_DATA.filter(n =>
    n.title.includes(q) || n.excerpt.includes(q) || n.category.includes(q));
  renderNewsGrid(results);
  document.getElementById("sectionTitle").innerHTML =
    `<i class="fas fa-search"></i> نتائج البحث: ${q} (${results.length})`;
  window.scrollTo({top: document.getElementById("newsGrid").offsetTop - 180, behavior:"smooth"});
}
function searchByTag(tag) {
  document.getElementById("searchInput").value = tag;
  document.getElementById("searchBarWrap").classList.add("open");
  performSearch();
}
document.getElementById("searchInput").addEventListener("keypress", e => {
  if (e.key === "Enter") performSearch();
});

// ===== MODAL =====
function openModal(id) {
  const n = NEWS_DATA.find(x => x.id === id);
  if (!n) return;
  document.getElementById("modalContent").innerHTML = `
    <img src="${n.img}" alt="${n.title}"
         onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80'"/>
    <span class="modal-cat">${n.category}</span>
    <h2>${n.title}</h2>
    <div class="modal-meta">
      <span><i class="fas fa-clock"></i> ${n.time}</span>
      <span><i class="fas fa-eye"></i> ${n.views.toLocaleString("ar-EG")} مشاهدة</span>
      <span><i class="fas fa-newspaper"></i> المصدر: ${n.source || "—"}</span>
    </div>
    <p>${n.excerpt}</p>`;
  document.getElementById("modalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ===== SHARE =====
function shareNews(e, id) {
  e.stopPropagation();
  const n = NEWS_DATA.find(x => x.id === id);
  if (navigator.share) {
    navigator.share({title: n.title, text: n.excerpt, url: window.location.href});
  } else {
    navigator.clipboard.writeText(window.location.href);
    showToast("تم نسخ الرابط ✓");
  }
}

// ===== NEWSLETTER =====
function subscribeNewsletter(e) {
  e.preventDefault();
  showToast("شكراً! تم تسجيل اشتراكك بنجاح ✓");
  e.target.reset();
}

// ===== TOAST =====
function showToast(msg) {
  let t = document.querySelector(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3000);
}

// ===== DARK MODE =====
function initDarkMode() {
  const saved = localStorage.getItem("news-dark");
  if (saved === "true") {
    isDark = true;
    document.documentElement.setAttribute("data-theme","dark");
    updateDarkIcon();
  }
}
document.getElementById("darkToggle").addEventListener("click", () => {
  isDark = !isDark;
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  localStorage.setItem("news-dark", isDark);
  updateDarkIcon();
});
function updateDarkIcon() {
  document.getElementById("darkIcon").className = isDark ? "fas fa-sun" : "fas fa-moon";
}

// ===== SCROLL =====
function setupScrollEvents() {
  window.addEventListener("scroll", () => {
    document.getElementById("backTop").classList.toggle("visible", window.scrollY > 400);
  });
}
function scrollToTop() { window.scrollTo({top:0, behavior:"smooth"}); }

// ===== NAV TOGGLE =====
document.getElementById("navToggle").addEventListener("click", () => {
  document.getElementById("navList").classList.toggle("open");
});
