// ===========================
//   الأخبار اليوم — script.js
//   يجلب الأخبار من news-data.json
//   (يُحدَّث تلقائياً كل ساعتين)
// ===========================

const STATIC_FALLBACK = [
  { id:1, title:"حرب إيران 2026: ضربات أمريكية-إسرائيلية موسّعة وإيران ترد بصواريخ باليستية على تل أبيب", excerpt:"بدأت الولايات المتحدة وإسرائيل في 28 فبراير 2026 حملةً جوية واسعة على إيران استهدفت 500 موقع عسكري، فيما ردّت القوات الإيرانية بإطلاق دفعات من الصواريخ الباليستية.", category:"عالم", time:"منذ ساعة", views:98420, hero:true, img:"https://images.unsplash.com/photo-1542382257-80dedb725088?w=800&q=80", source:"الجزيرة نت" },
  { id:2, title:"ترامب يزور الصين 31 مارس–2 أبريل وسط توترات تجارية حادة", excerpt:"أعلن البيت الأبيض أن الرئيس دونالد ترامب سيتوجه إلى بكين نهاية الشهر الجاري للقاء الرئيس شي جين بينغ.", category:"سياسة", time:"منذ ساعتين", views:47200, hero:true, img:"https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?w=800&q=80", source:"رويترز" },
  { id:3, title:"كأس العالم 2026: منتخب مصر يحدد وديتين أمام السعودية وإسبانيا", excerpt:"يواصل المنتخب المصري تحضيراته لمونديال 2026 الذي تستضيفه الولايات المتحدة والمكسيك وكندا.", category:"رياضة", time:"منذ 4 ساعات", views:63100, hero:true, img:"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80", source:"الأهرام" },
  { id:4, title:"البنك المركزي الروسي يخفض الفائدة للمرة السابعة إلى 15%", excerpt:"قرّر البنك المركزي الروسي خفض سعر الفائدة الرئيسي 50 نقطة أساس إلى 15% دعماً للاقتصاد.", category:"اقتصاد", time:"20 مارس 2026", views:18900, img:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", source:"رويترز" },
  { id:5, title:"أسعار الذهب تتراجع دون 5000 دولار للأونصة وسط توترات الشرق الأوسط", excerpt:"انخفض سعر الأونصة الذهبية دون حاجز الـ5000 دولار وسط ارتفاع أسعار النفط إثر الهجمات الإيرانية.", category:"اقتصاد", time:"16 مارس 2026", views:22400, img:"https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80", source:"رويترز" },
  { id:6, title:"مخاوف أمنية تربك استعدادات أمريكا لاستضافة كأس العالم 2026", excerpt:"كشفت تقارير استخباراتية عن تحذيرات جدية من احتمال استهداف متطرفين للبطولة.", category:"رياضة", time:"19 مارس 2026", views:31500, img:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80", source:"اندبندنت عربية" },
  { id:7, title:"أول طائرة كهربائية بالكامل تقلع تجارياً من مطار غلاسكو في أوروبا", excerpt:"سجّل قطاع الطيران الأوروبي حدثاً تاريخياً بتشغيل أولى الرحلات التجارية الكهربائية الكاملة.", category:"تكنولوجيا", time:"20 مارس 2026", views:29800, img:"https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80", source:"رويترز" },
  { id:8, title:"استقالة جو كينت تكشف خلافات حادة داخل إدارة ترامب حول حرب إيران", excerpt:"أقال أو قدّم جو كينت استقالته من منصبه رفيع المستوى في إدارة ترامب رفضاً لدعم حرب إيران.", category:"سياسة", time:"17 مارس 2026", views:41800, img:"https://images.unsplash.com/photo-1575820942183-b7c78c6a16a3?w=800&q=80", source:"الجزيرة نت" },
  { id:9, title:"الذكاء الاصطناعي المحلي وواجهات الدماغ-الحاسوب: أبرز توجهات التكنولوجيا في 2026", excerpt:"تشير التوقعات إلى هيمنة الذكاء الاصطناعي العامل على الأجهزة مباشرةً دون الاتصال بالسحابة.", category:"تكنولوجيا", time:"مارس 2026", views:19300, img:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80", source:"اندبندنت عربية" },
];

const CATEGORIES = [
  { name:"سياسة",     icon:"fa-landmark",       color:"#b91c1c" },
  { name:"اقتصاد",    icon:"fa-chart-line",     color:"#15803d" },
  { name:"رياضة",     icon:"fa-futbol",         color:"#1d4ed8" },
  { name:"تكنولوجيا", icon:"fa-microchip",      color:"#7e22ce" },
  { name:"صحة",       icon:"fa-heartbeat",      color:"#db2777" },
  { name:"ثقافة",     icon:"fa-book",           color:"#c2410c" },
  { name:"عالم",      icon:"fa-globe",          color:"#0f766e" },
  { name:"محليات",    icon:"fa-map-marker-alt", color:"#b45309" },
];

const TAGS = ["عاجل","حرب إيران 2026","كأس العالم","ترامب","الصين","ذكاء اصطناعي","النفط","الذهب","هرمز","تكنولوجيا","انتخابات","رياضة"];

let NEWS_DATA      = [];
let currentFilter  = "all";
let visibleCount   = 9;
let isDark         = false;
let lastUpdatedAt  = "";

// =============================================
//  INIT  – يجلب أولاً news-data.json
// =============================================
document.addEventListener("DOMContentLoaded", async () => {
  initDarkMode();
  showSkeletons();
  await loadNewsData();
  updateDate();
  renderHero();
  renderNewsGrid(getFiltered().slice(0, visibleCount));
  renderMostRead();
  renderCategories();
  renderTags();
  updateStats();
  setupScrollEvents();
  updateLastUpdatedBadge();
});

// =============================================
//  LOAD NEWS-DATA.JSON  (مع fallback)
// =============================================
async function loadNewsData() {
  try {
    // جرّب أولاً الملف المحلي المحدَّث بواسطة GitHub Actions
    const res  = await fetch("news-data.json?t=" + Date.now());
    if (!res.ok) throw new Error("not found");
    const data = await res.json();
    if (data.news && data.news.length > 0) {
      NEWS_DATA    = data.news;
      lastUpdatedAt = data.updated || "";
      console.log("✅ تم تحميل " + NEWS_DATA.length + " خبر من news-data.json");
      return;
    }
    throw new Error("empty");
  } catch (e) {
    console.warn("⚠️ news-data.json غير متاح — استخدام البيانات الاحتياطية:", e.message);
    NEWS_DATA = STATIC_FALLBACK;
    lastUpdatedAt = "بيانات احتياطية";
  }
}

function updateLastUpdatedBadge() {
  const el = document.getElementById("lastUpdate");
  if (el && lastUpdatedAt) el.textContent = lastUpdatedAt;
}

// =============================================
//  SKELETON LOADER
// =============================================
function showSkeletons() {
  const skeletonCard = `
    <div class="skeleton-card">
      <div class="skeleton-img sk-pulse"></div>
      <div class="skeleton-body">
        <div class="sk-line sk-pulse" style="width:40%;height:12px;margin-bottom:8px"></div>
        <div class="sk-line sk-pulse" style="width:100%;height:16px;margin-bottom:6px"></div>
        <div class="sk-line sk-pulse" style="width:85%;height:16px;margin-bottom:6px"></div>
        <div class="sk-line sk-pulse" style="width:60%;height:12px"></div>
      </div>
    </div>`;
  document.getElementById("newsGrid").innerHTML = skeletonCard.repeat(6);
}

// =============================================
//  DATE
// =============================================
function updateDate() {
  const d    = new Date();
  const opts = { weekday:"long", year:"numeric", month:"long", day:"numeric" };
  document.getElementById("header-date").textContent = d.toLocaleDateString("ar-EG", opts);
}

// =============================================
//  HERO
// =============================================
function renderHero() {
  const heroes = NEWS_DATA.filter(n => n.hero);
  if (!heroes.length) return;
  const [main, ...rest] = heroes;

  document.getElementById("heroMain").innerHTML = `
    <img src="${main.img}" alt="${main.title}" class="hero-img" loading="eager"
         onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80'"/>
    <div class="hero-overlay">
      <span class="cat-badge">${main.category}</span>
      <h2>${main.title}</h2>
      <div class="meta">
        <span><i class="fas fa-clock"></i> ${main.time}</span>
        <span><i class="fas fa-newspaper"></i> ${main.source || ""}</span>
      </div>
    </div>`;
  document.getElementById("heroMain").onclick = () => openModal(main.id);

  document.getElementById("heroSide").innerHTML = (rest.slice(0,2)).map(n => `
    <div class="hero-side-item" onclick="openModal(${n.id})">
      <img src="${n.img}" alt="${n.title}" class="hero-side-img" loading="lazy"
           onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80'"/>
      <div class="hero-side-text">
        <span class="cat-badge">${n.category}</span>
        <h4>${n.title}</h4>
        <div class="meta"><i class="fas fa-clock"></i> ${n.time}</div>
      </div>
    </div>`).join("");
}

// =============================================
//  HELPERS
// =============================================
function getFiltered() {
  return currentFilter === "all" ? NEWS_DATA : NEWS_DATA.filter(n => n.category === currentFilter);
}

// =============================================
//  NEWS GRID
// =============================================
function renderNewsGrid(news) {
  const grid = document.getElementById("newsGrid");
  if (!news.length) {
    grid.innerHTML = `<div class="no-results"><i class="fas fa-search"></i> لا توجد نتائج</div>`;
    return;
  }
  grid.innerHTML = news.map(n => `
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
          ${n.source ? `<span class="card-source"><i class="fas fa-newspaper"></i> ${n.source}</span>` : ""}
          <button class="card-share" onclick="shareNews(event,${n.id})"><i class="fas fa-share-alt"></i></button>
        </div>
      </div>
    </div>`).join("");
}

// =============================================
//  MOST READ
// =============================================
function renderMostRead() {
  const sorted = [...NEWS_DATA].sort((a,b) => (b.views||0) - (a.views||0)).slice(0,6);
  document.getElementById("mostReadList").innerHTML = sorted.map((n,i) => `
    <li onclick="openModal(${n.id})">
      <span class="most-read-num">${i+1}</span>
      <div class="most-read-text">
        <h5>${n.title}</h5>
        <span><i class="fas fa-clock"></i> ${n.time}</span>
      </div>
    </li>`).join("");
}

// =============================================
//  CATEGORIES
// =============================================
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

// =============================================
//  TAGS
// =============================================
function renderTags() {
  document.getElementById("tagsCloud").innerHTML = TAGS.map(t =>
    `<span class="tag" onclick="searchByTag('${t}')">${t}</span>`).join("");
}

// =============================================
//  STATS
// =============================================
function updateStats() {
  const total = NEWS_DATA.reduce((s,n) => s+(n.views||0), 0);
  animateNum("totalViews",  total || NEWS_DATA.length * 5000);
  animateNum("totalNews",   NEWS_DATA.length);
  animateNum("onlineUsers", Math.floor(Math.random()*500+200));
}
function animateNum(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  let cur = 0; const step = target/80;
  const t = setInterval(() => {
    cur = Math.min(cur+step, target);
    el.textContent = Math.floor(cur).toLocaleString("ar-EG");
    if (cur >= target) clearInterval(t);
  }, 16);
}

// =============================================
//  FILTER  /  SORT  /  LOAD MORE
// =============================================
function filterCategory(cat) {
  currentFilter = cat; visibleCount = 9;
  renderNewsGrid(getFiltered().slice(0, visibleCount));
  document.getElementById("sectionTitle").innerHTML =
    cat === "all" ? '<i class="fas fa-fire"></i> أبرز الأخبار'
                  : `<i class="fas fa-folder-open"></i> ${cat}`;
  document.getElementById("loadMoreBtn").style.display = "";
  window.scrollTo({top: document.getElementById("newsGrid").offsetTop - 180, behavior:"smooth"});
}
function sortNews(by) {
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");
  const data = by === "popular"
    ? [...getFiltered()].sort((a,b)=>(b.views||0)-(a.views||0))
    : getFiltered();
  renderNewsGrid(data.slice(0, visibleCount));
}
function loadMore() {
  visibleCount += 3;
  const filtered = getFiltered();
  renderNewsGrid(filtered.slice(0, visibleCount));
  if (visibleCount >= filtered.length) document.getElementById("loadMoreBtn").style.display = "none";
}

// =============================================
//  SEARCH
// =============================================
document.getElementById("searchBtn").addEventListener("click", () => {
  const wrap = document.getElementById("searchBarWrap");
  wrap.classList.toggle("open");
  if (wrap.classList.contains("open")) document.getElementById("searchInput").focus();
});
function performSearch() {
  const q = document.getElementById("searchInput").value.trim().toLowerCase();
  if (!q) return;
  const results = NEWS_DATA.filter(n =>
    (n.title||"").includes(q)||(n.excerpt||"").includes(q)||(n.category||"").includes(q)||(n.source||"").includes(q));
  renderNewsGrid(results);
  document.getElementById("sectionTitle").innerHTML =
    `<i class="fas fa-search"></i> نتائج: ${q} (${results.length} خبر)`;
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

// =============================================
//  MODAL
// =============================================
function openModal(id) {
  const n = NEWS_DATA.find(x => x.id === id);
  if (!n) return;
  const readMore = n.link
    ? `<a href="${n.link}" target="_blank" class="read-more-btn"><i class="fas fa-external-link-alt"></i> قراءة المقال الكامل</a>`
    : "";
  document.getElementById("modalContent").innerHTML = `
    <img src="${n.img}" alt="${n.title}"
         onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80'"/>
    <span class="modal-cat">${n.category}</span>
    <h2>${n.title}</h2>
    <div class="modal-meta">
      <span><i class="fas fa-clock"></i> ${n.time}</span>
      ${n.source ? `<span><i class="fas fa-newspaper"></i> ${n.source}</span>` : ""}
    </div>
    <p>${n.excerpt}</p>
    ${readMore}`;
  document.getElementById("modalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// =============================================
//  SHARE
// =============================================
function shareNews(e, id) {
  e.stopPropagation();
  const n = NEWS_DATA.find(x => x.id === id);
  if (!n) return;
  if (navigator.share) {
    navigator.share({ title: n.title, text: n.excerpt, url: n.link || window.location.href });
  } else {
    navigator.clipboard.writeText(n.link || window.location.href);
    showToast("تم نسخ الرابط ✓");
  }
}

// =============================================
//  NEWSLETTER  /  TOAST
// =============================================
function subscribeNewsletter(e) {
  e.preventDefault(); showToast("شكراً! تم تسجيل اشتراكك بنجاح ✓"); e.target.reset();
}
function showToast(msg) {
  let t = document.querySelector(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3000);
}

// =============================================
//  DARK MODE
// =============================================
function initDarkMode() {
  const saved = localStorage.getItem("news-dark");
  if (saved === "true") { isDark = true; document.documentElement.setAttribute("data-theme","dark"); updateDarkIcon(); }
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

// =============================================
//  SCROLL  /  BACK TO TOP  /  NAV TOGGLE
// =============================================
function setupScrollEvents() {
  window.addEventListener("scroll", () => {
    document.getElementById("backTop").classList.toggle("visible", window.scrollY > 400);
  });
}
function scrollToTop() { window.scrollTo({top:0, behavior:"smooth"}); }
document.getElementById("navToggle").addEventListener("click", () => {
  document.getElementById("navList").classList.toggle("open");
});
