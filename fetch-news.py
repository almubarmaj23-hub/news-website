#!/usr/bin/env python3
"""
Fetches latest Arabic news from multiple RSS feeds,
detects category, picks a relevant image, and writes news-data.json.
Runs automatically via GitHub Actions every 2 hours.
"""
import feedparser, json, re, time
from datetime import datetime, timezone

FEEDS = [
    {"url": "https://www.aljazeera.net/xml/rss/all.xml",       "source": "الجزيرة نت"},
    {"url": "https://www.skynewsarabia.com/rss.xml",           "source": "سكاي نيوز عربية"},
    {"url": "https://feeds.bbci.co.uk/arabic/rss.xml",         "source": "BBC عربية"},
    {"url": "https://almasryalyoum.com/rss/rssfeed",           "source": "المصري اليوم"},
    {"url": "https://gate.ahram.org.eg/rss/AhramGate/1.xml",   "source": "الأهرام"},
]

CAT_IMGS = {
    "سياسة":    "https://images.unsplash.com/photo-1575820942183-b7c78c6a16a3?w=800&q=80",
    "اقتصاد":   "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    "رياضة":    "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80",
    "تكنولوجيا":"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    "صحة":      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    "ثقافة":    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    "عالم":     "https://images.unsplash.com/photo-1542382257-80dedb725088?w=800&q=80",
    "default":  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
}

def detect_category(title, desc=""):
    text = (title or "") + " " + (desc or "")
    if re.search(r'رياضة|كرة|مباراة|بطولة|لاعب|هداف|الفيفا|ملاعب|تنس|سباق|ملاكمة|أولمبياد', text): return "رياضة"
    if re.search(r'اقتصاد|سوق|نفط|ذهب|دولار|بورصة|أسهم|بنك|تجارة|ميزانية|تضخم|صندوق|فائدة', text): return "اقتصاد"
    if re.search(r'تقني|تكنولوجيا|ذكاء اصطناعي|هاتف|برمجة|إلكترون|روبوت|إنترنت|تطبيق|فضاء', text): return "تكنولوجيا"
    if re.search(r'صحة|طب|علاج|مرض|وباء|لقاح|مستشفى|دواء|سرطان|جراحة', text): return "صحة"
    if re.search(r'ثقافة|فن|كتاب|أدب|أفلام|موسيقى|مهرجان|جائزة أدبية|مسرح', text): return "ثقافة"
    if re.search(r'سياسة|انتخاب|رئيس|وزير|برلمان|حكومة|ترامب|مجلس|أمم متحدة|معاهدة', text): return "سياسة"
    return "عالم"

def clean_html(text):
    return re.sub(r'<[^>]+>', '', text or '').strip()

def get_image(entry, category):
    if hasattr(entry, 'media_content') and entry.media_content:
        url = entry.media_content[0].get('url', '')
        if url: return url
    if hasattr(entry, 'media_thumbnail') and entry.media_thumbnail:
        url = entry.media_thumbnail[0].get('url', '')
        if url: return url
    for enc in getattr(entry, 'enclosures', []):
        href = enc.get('href', enc.get('url',''))
        if href and (enc.get('type','').startswith('image') or href.lower().endswith(('.jpg','.jpeg','.png','.webp'))):
            return href
    summary = entry.get('summary','')
    if entry.get('content'):
        summary += entry['content'][0].get('value','')
    m = re.search(r'<img[^>]+src=["']([^"']+)["']', summary)
    if m: return m.group(1)
    return CAT_IMGS.get(category, CAT_IMGS['default'])

def format_time(entry):
    try:
        t  = time.mktime(entry.published_parsed)
        dt = datetime.fromtimestamp(t, tz=timezone.utc)
        diff_min = int((datetime.now(timezone.utc) - dt).total_seconds() / 60)
        if diff_min < 60:   return f"منذ {diff_min} دقيقة"
        hours = diff_min // 60
        if hours < 24:      return f"منذ {hours} ساعة"
        return f"منذ {hours // 24} يوم"
    except Exception:
        return "منذ قليل"

news_list, seen, counter = [], set(), 1

for feed_info in FEEDS:
    try:
        d = feedparser.parse(feed_info["url"])
        print(f"  {feed_info['source']}: {len(d.entries)} مقالة")
        for entry in d.entries[:18]:
            title = clean_html(entry.get("title",""))
            if not title or title in seen or len(title) < 10:
                continue
            seen.add(title)
            desc = clean_html(entry.get("summary",""))[:300]
            cat  = detect_category(title, desc)
            img  = get_image(entry, cat)
            news_list.append({
                "id":       counter,
                "title":    title,
                "excerpt":  desc,
                "category": cat,
                "time":     format_time(entry),
                "views":    0,
                "img":      img,
                "source":   feed_info["source"],
                "link":     entry.get("link",""),
                "hero":     counter <= 3
            })
            counter += 1
    except Exception as e:
        print(f"  خطأ في {feed_info['url']}: {e}")

output = {
    "updated": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC"),
    "count":   len(news_list),
    "news":    news_list
}

with open("news-data.json", "w", encoding="utf-8") as f:
    json.dump(output, f, ensure_ascii=False, indent=2)

print(f"\n✅ تم حفظ {len(news_list)} خبراً في news-data.json")
print(f"🕐 آخر تحديث: {output['updated']}")
