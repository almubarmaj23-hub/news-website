// ===== DATA =====
const NEWS_DATA = [
  { id:1, title:"قمة دولية تناقش أزمة المناخ وتبعاتها الاقتصادية على الدول النامية", excerpt:"اجتمع قادة أكثر من خمسين دولة في جنيف لمناقشة التداعيات الاقتصادية لأزمة المناخ وسبل التكيف معها.", category:"سياسة", time:"منذ ساعتين", views:4820, img:"https://picsum.photos/seed/politics1/800/500", hero:true },
  { id:2, title:"ارتفاع حاد في أسعار النفط يثير قلق الأسواق العالمية", excerpt:"شهدت أسعار النفط ارتفاعاً حاداً فاق 5% في التداولات الصباحية إثر توترات جيوسياسية في منطقة الخليج.", category:"اقتصاد", time:"منذ 3 ساعات", views:3610, img:"https://picsum.photos/seed/economy1/800/500", hero:true },
  { id:3, title:"المنتخب يتأهل بصعوبة إلى نهائي كأس القارات بركلات الترجيح", excerpt:"تمكن المنتخب الوطني من بلوغ النهائي بعد مباراة مثيرة انتهت بركلات الترجيح أمام المنافس العنيد.", category:"رياضة", time:"منذ 4 ساعات", views:7240, img:"https://picsum.photos/seed/sports1/800/500", hero:true },
  { id:4, title:"شركة تقنية عملاقة تكشف عن مساعد ذكاء اصطناعي يتحدث 50 لغة", excerpt:"أعلنت إحدى كبريات شركات التكنولوجيا عن مساعد ذكاء اصطناعي متعدد اللغات قادر على الترجمة الفورية.", category:"تكنولوجيا", time:"منذ 5 ساعات", views:5890, img:"https://picsum.photos/seed/tech1/800/500" },
  { id:5, title:"دراسة: النوم الجيد يقلل خطر الإصابة بأمراض القلب بنسبة 40%", excerpt:"كشفت دراسة طبية حديثة أن الحصول على قسط كافٍ من النوم يرتبط بانخفاض ملحوظ في معدلات أمراض القلب.", category:"صحة", time:"منذ 6 ساعات", views:3200, img:"https://picsum.photos/seed/health1/800/500" },
  { id:6, title:"معرض دولي للكتاب يستقطب أكثر من مليون زائر في أسبوعه الأول", excerpt:"حقق معرض الكتاب الدولي رقماً قياسياً بتسجيل مليون زيارة خلال الأسبوع الافتتاحي مع مشاركة 800 دار نشر.", category:"ثقافة", time:"منذ 7 ساعات", views:1980, img:"https://picsum.photos/seed/culture1/800/500" },
  { id:7, title:"الأمم المتحدة تطالب بوقف فوري لإطلاق النار في مناطق النزاع", excerpt:"طالب مجلس الأمن الدولي بهدنة إنسانية عاجلة وفتح ممرات آمنة لإيصال المساعدات الإنسانية.", category:"عالم", time:"منذ 8 ساعات", views:6100, img:"https://picsum.photos/seed/world1/800/500" },
  { id:8, title:"إطلاق أول قمر صناعي عربي متطور لخدمات الاتصالات والإنترنت", excerpt:"أعلنت الهيئة الفضائية عن نجاح إطلاق أول قمر صناعي عربي متعدد الخدمات بقدرات اتصالية غير مسبوقة.", category:"تكنولوجيا", time:"منذ 9 ساعات", views:4450, img:"https://picsum.photos/seed/tech2/800/500" },
  { id:9, title:"اكتشاف علمي مبهر: دواء جديد يوقف نمو خلايا السرطان خلال أسابيع", excerpt:"أعلن فريق بحثي دولي عن اكتشاف مركب كيميائي جديد يثبط نمو الأورام بفعالية تفوق العلاجات الحالية بثلاثة أضعاف.", category:"صحة", time:"منذ 10 ساعات", views:8900, img:"https://picsum.photos/seed/health2/800/500" },
  { id:10, title:"ميزانية الدولة تسجل فائضاً للمرة الأولى منذ عقد كامل", excerpt:"أعلنت وزارة المالية عن تحقيق فائض في الميزانية العامة للدولة للمرة الأولى منذ عشر سنوات.", category:"اقتصاد", time:"منذ 11 ساعة", views:3780, img:"https://picsum.photos/seed/economy2/800/500" },
  { id:11, title:"بطولة العالم للشطرنج: لاعب عربي يصل للمربع الذهبي لأول مرة", excerpt:"كتب اللاعب العربي تاريخاً جديداً بتأهله لنصف نهائي بطولة العالم للشطرنج في مفاجأة أدهشت الأوساط الرياضية.", category:"رياضة", time:"منذ 12 ساعة", views:2640, img:"https://picsum.photos/seed/sports2/800/500" },
  { id:12, title:"مهرجان سينمائي دولي يختار فيلماً عربياً لمنافسة الجائزة الكبرى", excerpt:"أعلن مهرجان سينمائي دولي رفيع المستوى عن اختيار فيلم عربي ضمن الأفلام المتنافسة على الجائزة الكبرى.", category:"ثقافة", time:"منذ 13 ساعة", views:2100, img:"https://picsum.photos/seed/culture2/800/500" },
];

const CATEGORIES = [
  { name:"سياسة", icon:"fa-landmark", color:"#c0392b" },
  { name:"اقتصاد", icon:"fa-chart-line", color:"#27ae60" },
  { name:"رياضة", icon:"fa-futbol", color:"#2980b9" },
  { name:"تكنولوجيا", icon:"fa-microchip", color:"#8e44ad" },
  { name:"صحة", icon:"fa-heartbeat", color:"#e74c3c" },
  { name:"ثقافة", icon:"fa-book", color:"#d35400" },
  { name:"عالم", icon:"fa-globe", color:"#16a085" },
  { name:"محليات", icon:"fa-map-marker-alt", color:"#f39c12" },
];

const TAGS = ["عاجل","سياسة","اقتصاد","طاقة","مناخ","رياضة","كرة القدم","تكنولوجيا","ذكاء اصطناعي","صحة","علوم","ثقافة","فضاء"];

// ===== STATE =====
let currentFilter = "all";
let visibleCount = 9;
let isDark = false;

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  updateDate();
  renderHero();
  renderNewsGrid(NEWS_DATA.filter(n => !n.hero).slice(0, visibleCount));
  renderMostRead();
  renderCategories();
  renderTags();
  updateStats();
  setupScrollEvents();
  initDarkMode();
});

// ===== DATE =====
function updateDate() {
  const d = new Date();
  const opts = { weekday:"long", year:"numeric", month:"long", day:"numeric" };
  document.getElementById("header-date").textContent = d.toLocaleDateString("ar-EG", opts);
  document.getElementById("lastUpdate").textContent = d.toLocaleTimeString("ar-EG", {hour:"2-digit", minute:"2-digit"});
}

// ===== HERO =====
function renderHero() {
  const heroNews = NEWS_DATA.filter(n => n.hero);
  const main = heroNews[0];
  const heroMain = document.getElementById("heroMain");
  heroMain.innerHTML = `
    <img src="${main.img}" alt="${main.title}" class="hero-img"/>
    <div class="hero-overlay">
      <span class="cat-badge">${main.category}</span>
      <h2>${main.title}</h2>
      <div class="meta"><span><i class="fas fa-clock"></i> ${main.time}</span><span><i class="fas fa-eye"></i> ${main.views.toLocaleString("ar-EG")} مشاهدة</span></div>
    </div>`;
  heroMain.onclick = () => openModal(main.id);

  const heroSide = document.getElementById("heroSide");
  heroSide.innerHTML = heroNews.slice(1).map(n => `
    <div class="hero-side-item" onclick="openModal(${n.id})">
      <img src="${n.img}" alt="${n.title}" class="hero-side-img"/>
      <div class="hero-side-text">
        <span class="cat-badge">${n.category}</span>
        <h4>${n.title}</h4>
        <div class="meta"><i class="fas fa-clock"></i> ${n.time}</div>
      </div>
    </div>`).join("");
}

// ===== NEWS GRID =====
function renderNewsGrid(news) {
  const grid = document.getElementById("newsGrid");
  grid.innerHTML = news.map(n => `
    <div class="news-card" onclick="openModal(${n.id})">
      <div class="card-img-wrap">
        <img src="${n.img}" alt="${n.title}" class="news-card-img" loading="lazy"/>
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
  const sorted = [...NEWS_DATA].sort((a,b) => b.views - a.views).slice(0, 6);
  document.getElementById("mostReadList").innerHTML = sorted.map((n,i) => `
    <li onclick="openModal(${n.id})">
      <span class="most-read-num">${i+1}</span>
      <div class="most-read-text">
        <h5>${n.title}</h5>
        <span><i class="fas fa-eye"></i> ${n.views.toLocaleString("ar-EG")} مشاهدة</span>
      </div>
    </li>`).join("");
}

// ===== CATEGORIES =====
function renderCategories() {
  const colors = ["#c0392b","#27ae60","#2980b9","#8e44ad","#e74c3c","#d35400","#16a085","#f39c12"];
  document.getElementById("categoriesGrid").innerHTML = CATEGORIES.map((c,i) => {
    const count = NEWS_DATA.filter(n => n.category === c.name).length;
    return `<div class="cat-card" style="background:${colors[i]}" onclick="filterCategory('${c.name}')">
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
  animateNum("totalNews", NEWS_DATA.length);
  animateNum("onlineUsers", Math.floor(Math.random() * 500 + 200));
}
function animateNum(id, target) {
  const el = document.getElementById(id);
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current).toLocaleString("ar-EG");
    if (current >= target) clearInterval(timer);
  }, 16);
}

// ===== FILTER =====
function filterCategory(cat) {
  currentFilter = cat;
  visibleCount = 9;
  const filtered = cat === "all" ? NEWS_DATA : NEWS_DATA.filter(n => n.category === cat);
  renderNewsGrid(filtered.slice(0, visibleCount));
  const title = document.getElementById("sectionTitle");
  title.innerHTML = cat === "all" ? '<i class="fas fa-fire"></i> أبرز الأخبار' : `<i class="fas fa-folder-open"></i> ${cat}`;
  document.querySelectorAll(".nav-list a").forEach(a => a.classList.remove("active"));
  window.scrollTo({top: document.getElementById("newsGrid").offsetTop - 200, behavior:"smooth"});
}

// ===== SORT =====
function sortNews(by) {
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");
  const filtered = currentFilter === "all" ? NEWS_DATA : NEWS_DATA.filter(n => n.category === currentFilter);
  const sorted = by === "popular" ? [...filtered].sort((a,b) => b.views - a.views) : filtered;
  renderNewsGrid(sorted.slice(0, visibleCount));
}

// ===== LOAD MORE =====
function loadMore() {
  visibleCount += 3;
  const filtered = currentFilter === "all" ? NEWS_DATA : NEWS_DATA.filter(n => n.category === currentFilter);
  renderNewsGrid(filtered.slice(0, visibleCount));
  if (visibleCount >= filtered.length) document.getElementById("loadMoreBtn").style.display = "none";
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
  document.getElementById("sectionTitle").innerHTML = `<i class="fas fa-search"></i> نتائج البحث عن: ${q} (${results.length})`;
  window.scrollTo({top: document.getElementById("newsGrid").offsetTop - 200, behavior:"smooth"});
}
function searchByTag(tag) {
  document.getElementById("searchInput").value = tag;
  performSearch();
}
document.getElementById("searchInput").addEventListener("keypress", e => { if(e.key==="Enter") performSearch(); });

// ===== MODAL =====
function openModal(id) {
  const n = NEWS_DATA.find(x => x.id === id);
  if(!n) return;
  document.getElementById("modalContent").innerHTML = `
    <img src="${n.img}" alt="${n.title}"/>
    <span class="modal-cat">${n.category}</span>
    <h2>${n.title}</h2>
    <div class="modal-meta">
      <span><i class="fas fa-clock"></i> ${n.time}</span>
      <span><i class="fas fa-eye"></i> ${n.views.toLocaleString("ar-EG")} مشاهدة</span>
    </div>
    <p>${n.excerpt} وتابع المراقبون والمحللون هذه التطورات باهتمام بالغ، إذ تُلقي بظلالها على المشهد الإقليمي والدولي. وأكد المسؤولون أن الوضع تحت السيطرة وأن الإجراءات اللازمة اتُّخذت. وتبقى التداعيات المحتملة موضع متابعة دقيقة من قِبل الجهات المعنية.</p>`;
  document.getElementById("modalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// ===== SHARE =====
function shareNews(e, id) {
  e.stopPropagation();
  const n = NEWS_DATA.find(x => x.id === id);
  if (navigator.share) {
    navigator.share({title: n.title, text: n.excerpt, url: window.location.href});
  } else {
    navigator.clipboard.writeText(window.location.href);
    showToast("تم نسخ رابط الخبر ✓");
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

// ===== SCROLL =====
function setupScrollEvents() {
  window.addEventListener("scroll", () => {
    const btn = document.getElementById("backTop");
    if (window.scrollY > 400) btn.classList.add("visible");
    else btn.classList.remove("visible");
  });
}
function scrollToTop() { window.scrollTo({top:0, behavior:"smooth"}); }

// ===== NAV TOGGLE =====
document.getElementById("navToggle").addEventListener("click", () => {
  document.getElementById("navList").classList.toggle("open");
});
