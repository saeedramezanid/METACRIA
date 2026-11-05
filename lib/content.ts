export type Lang = "fa" | "en";
export type Text = { fa: string; en: string };

export const DEFAULT_LANG: Lang = "fa";
export const dirOf = (lang: Lang) => (lang === "fa" ? "rtl" : "ltr");

export const seo: Record<Lang, { title: string; description: string }> = {
  fa: {
    title: "METACRIA — استودیوی تولید نرم‌افزار",
    description:
      "استودیوی محصول برای وب، موبایل، پلتفرم و داده. از کشف ایده تا معماری، توسعه و نگهداری بلندمدت. تهران.",
  },
  en: {
    title: "METACRIA Studio — Software production studio",
    description:
      "A product studio for web, mobile, platform and data. From discovery through architecture, delivery and long-term maintenance. Based in Tehran.",
  },
};

export const brand = {
  name: { fa: "METACRIA", en: "METACRIA" } satisfies Text,
  suffix: { fa: "استودیو نرم‌افزار", en: "Software Studio" } satisfies Text,
  email: "info@metacriastudio.ir",
  phone: "+98 21 8877 6655",
  address: {
    fa: "تهران، خیابان ولی‌عصر، برج نگین، طبقه ۹",
    en: "Tehran, Valiasr St., Negin Tower, Floor 9",
  } satisfies Text,
};

export const nav = [
  { id: "services", label: { fa: "خدمات", en: "Services" } },
  { id: "work", label: { fa: "نمونه کارها", en: "Work" } },
  { id: "team", label: { fa: "تیم", en: "Team" } },
  { id: "pricing", label: { fa: "تعرفه‌ها", en: "Pricing" } },
  { id: "contact", label: { fa: "تماس", en: "Contact" } },
];

export const hero = {
  // Decorative image behind the headline. Replace this one file (or this path)
  // to change it — anything in public/ is served from the site root.
  backdrop: "/images/hero-backdrop.webp",
  eyebrow: {
    fa: "از سال ۱۳۹۵ · ۷۴ پروژه‌ی تحویل‌شده",
    en: "Since 2016 · 74 shipped projects",
  } satisfies Text,
  title: {
    fa: "نرم‌افزار می‌سازیم که",
    en: "We build software that",
  } satisfies Text,
  titleAccent: { fa: "روی خط تولید می‌ایستد", en: "survives production" } satisfies Text,
  lede: {
    fa: "استودیوی محصولی که از کشف ایده تا معماری، توسعه و نگهداری بلندمدت در کنار تیم شماست. بدون بلوف، بدون بدهی فنی پنهان.",
    en: "A product studio that stays with you from discovery through architecture, delivery and long-term maintenance. No buzzwords, no hidden tech debt.",
  } satisfies Text,
  primaryCta: { fa: "جلسه‌ی رایگان بگیرید", en: "Book a free call" } satisfies Text,
  secondaryCta: { fa: "دیدن نمونه کارها", en: "See our work" } satisfies Text,
  stack: [
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Go",
    "PostgreSQL",
    "Python",
    "Kubernetes",
    "Terraform",
    "Flutter",
    "AWS",
    "gRPC",
  ],
};

export const stats = [
  { value: { fa: "۷۴", en: "74" }, label: { fa: "پروژه‌ی تحویل‌شده", en: "Projects shipped" } },
  { value: { fa: "۹", en: "9" }, label: { fa: "سال تجربه", en: "Years in production" } },
  { value: { fa: "۲۳", en: "23" }, label: { fa: "متخصص تمام‌وقت", en: "Full-time specialists" } },
  { value: { fa: "۹۹.۹۸٪", en: "99.98%" }, label: { fa: "آپ‌تایم سرویس‌ها", en: "Managed uptime" } },
];

export const servicesIntro = {
  eyebrow: { fa: "خدمات", en: "Capabilities" } satisfies Text,
  title: {
    fa: "چهار تیم، یک خط تولید",
    en: "Four squads, one delivery line",
  } satisfies Text,
  lede: {
    fa: "هر خدمت با معیار پذیرش و تحویل قابل‌سنجش تعریف می‌شود؛ چیزی که در قرارداد نوشته می‌شود، همان چیزی است که در محیط عملیاتی می‌بینید.",
    en: "Every service ships with an explicit acceptance definition. What lands in the contract is what you see in production.",
  } satisfies Text,
};

export type Service = {
  title: Text;
  blurb: Text;
  bullets: Text[];
  icon: string;
};

export const services: Service[] = [
  {
    icon: "layers",
    title: { fa: "توسعه‌ی وب و محصول", en: "Web & product engineering" } satisfies Text,
    blurb: {
      fa: "اپلیکیشن‌های تک‌صفحه‌ای و سامانه‌های سازمانی با معماری مقیاس‌پذیر و تجربه‌ی کاربری سریع.",
      en: "SPAs and enterprise systems with scalable architecture and genuinely fast UX.",
    } satisfies Text,
    bullets: [
      { fa: "Next.js / React با SSR و Edge", en: "Next.js / React with SSR & edge" },
      { fa: "طراحی سیستم و کتابخانه‌ی کامپوننت", en: "Design system & component library" },
      { fa: "دسترسی‌پذیری AA و سئوی فنی", en: "AA accessibility & technical SEO" },
    ],
  },
  {
    icon: "device",
    title: { fa: "اپلیکیشن موبایل", en: "Mobile apps" } satisfies Text,
    blurb: {
      fa: "یک کدبیس، دو پلتفرم — یا دو اپ بومی، وقتی عملکرد واقعاً مهم است.",
      en: "One codebase, two platforms — or two native apps when performance demands it.",
    } satisfies Text,
    bullets: [
      { fa: "Flutter و React Native", en: "Flutter & React Native" },
      { fa: "انتشار در کافه‌بازار و پلی/اپ‌استور", en: "Cafe Bazaar, Play & App Store releases" },
      { fa: "آفلاین‌فرست و همگام‌سازی داده", en: "Offline-first data sync" },
    ],
  },
  {
    icon: "server",
    title: { fa: "بک‌اند و زیرساخت", en: "Backend & platform" } satisfies Text,
    blurb: {
      fa: "سرویس‌هایی که بار را تحمل می‌کنند: API، صف، پایگاه داده و خطوط CI/CD.",
      en: "Services that carry the load: APIs, queues, data layer and CI/CD pipelines.",
    } satisfies Text,
    bullets: [
      { fa: "Go / Node / Python و gRPC", en: "Go / Node / Python & gRPC" },
      { fa: "Kubernetes، Terraform و مانیتورینگ", en: "Kubernetes, Terraform & observability" },
      { fa: "مهاجرت امن بدون قطعی سرویس", en: "Zero-downtime migrations" },
    ],
  },
  {
    icon: "spark",
    title: { fa: "داده و هوش مصنوعی", en: "Data & AI" } satisfies Text,
    blurb: {
      fa: "از خط لوله‌ی داده تا قابلیت‌های مبتنی بر مدل زبانی که به کار واقعی می‌آیند.",
      en: "From pipelines to LLM features that solve an actual job to be done.",
    } satisfies Text,
    bullets: [
      { fa: "انبار داده و داشبورد تصمیم", en: "Warehouse & decision dashboards" },
      { fa: "RAG و چت‌بات دامنه‌ای", en: "RAG & domain chat assistants" },
      { fa: "ارزیابی، پایش و کنترل هزینه‌ی استدلال", en: "Evals, monitoring & inference cost control" },
    ],
  },
];

export const portfolioIntro = {
  eyebrow: { fa: "نمونه کارها", en: "Selected work" } satisfies Text,
  title: {
    fa: "چیزی که تحویل دادیم",
    en: "What we actually shipped",
  } satisfies Text,
  lede: {
    fa: "برای هر پروژه همان سه سؤال را پاسخ می‌دهیم: چه مشکلی وجود داشت، چه ساختیم و چه عددی تغییر کرد.",
    en: "Each case answers the same three questions: what hurt, what we built, what number moved.",
  } satisfies Text,
};

export const portfolioFilters = [
  { id: "all", label: { fa: "همه", en: "All" } },
  { id: "fintech", label: { fa: "فین‌تک", en: "Fintech" } },
  { id: "health", label: { fa: "سلامت", en: "Health" } },
  { id: "retail", label: { fa: "خرده‌فروشی", en: "Retail" } },
  { id: "ai", label: { fa: "هوش مصنوعی", en: "AI" } },
];

export type Project = {
  id: string;
  category: string;
  name: Text;
  client: Text;
  year: string;
  summary: Text;
  challenge: Text;
  solution: Text;
  outcome: Text;
  metric: { value: Text; label: Text };
  stack: string[];
  hue: [string, string];
};

export const projects: Project[] = [
  {
    id: "hesab24",
    category: "fintech",
    name: { fa: "حساب ۲۴", en: "Hesab24" } satisfies Text,
    client: { fa: "هلدینگ پرداخت", en: "Payments holding" } satisfies Text,
    year: "2025",
    summary: {
      fa: "بازنویسی سامانه‌ی تسویه‌ی بلادرنگ برای ۱.۲ میلیون تراکنش در روز.",
      en: "Rewritten real-time settlement core handling 1.2M daily transactions.",
    } satisfies Text,
    challenge: {
      fa: "نرخ شکست تسویه در ساعت اوج به ۷٪ می‌رسید و تیم عملیات شبانه با دست تسویه می‌کرد.",
      en: "Settlement failures hit 7% at peak and the ops team cleared queues by hand overnight.",
    } satisfies Text,
    solution: {
      fa: "معماری رویداد-محور با Go، صف idempotent و رویدادنگاری کامل برای ممیزی.",
      en: "Event-driven Go architecture, idempotent queues and a full audit ledger.",
    } satisfies Text,
    outcome: {
      fa: "تسویه‌ی خودکار با قابلیت بازپخش؛ تیم عملیات از حالت شبانه به روز تبدیل شد.",
      en: "Automated, replayable settlement; the ops squad moved from night shifts to days.",
    } satisfies Text,
    metric: {
      value: { fa: "۰.۳٪", en: "0.3%" } satisfies Text,
      label: { fa: "نرخ شکست تسویه", en: "settlement failure rate" } satisfies Text,
    },
    stack: ["Go", "PostgreSQL", "Kafka", "Kubernetes"],
    hue: ["#6d54ff", "#2ee6d6"],
  },
  {
    id: "darmancare",
    category: "health",
    name: { fa: "دارمن", en: "Darman" } satisfies Text,
    client: { fa: "شبکه‌ی کلینیک‌ها", en: "Clinic network" } satisfies Text,
    year: "2025",
    summary: {
      fa: "پلتفرم نوبت‌دهی و پرونده‌ی الکترونیک برای ۳۸ کلینیک.",
      en: "Scheduling and e-health-record platform across 38 clinics.",
    } satisfies Text,
    challenge: {
      fa: "داده‌ی بیمار در چهار سیستم پراکنده بود و ویزیت بدون تاریخچه انجام می‌شد.",
      en: "Patient data lived in four disconnected systems; doctors saw no history.",
    } satisfies Text,
    solution: {
      fa: "لایه‌ی یکپارچه‌سازی با HL7، رمزنگاری فیلد-به-فیلد و رابط React برای پزشکان.",
      en: "HL7 integration layer, field-level encryption and a React clinician console.",
    } satisfies Text,
    outcome: {
      fa: "پرونده در سه کلیک؛ زمان ویزیت ۱۱ دقیقه کاهش یافت.",
      en: "Full record in three clicks; consultation time down by 11 minutes.",
    } satisfies Text,
    metric: {
      value: { fa: "۱۱ دقیقه", en: "11 min" } satisfies Text,
      label: { fa: "کاهش زمان ویزیت", en: "faster consultations" } satisfies Text,
    },
    stack: ["Next.js", "Python", "HL7", "AWS"],
    hue: ["#1687e6", "#b4a6ff"],
  },
  {
    id: "bazarche",
    category: "retail",
    name: { fa: "بازارچه", en: "Bazarche" } satisfies Text,
    client: { fa: "فروشگاه زنجیره‌ای", en: "Retail chain" } satisfies Text,
    year: "2024",
    summary: {
      fa: "کامرس هدلس با پنل فروشندگان و انبار چند‌مکانی.",
      en: "Headless commerce with vendor panel and multi-location inventory.",
    } satisfies Text,
    challenge: {
      fa: "سبد خرید در موبایل ۶۲٪ ریزش داشت و موجودی هفتگی دستی همگام می‌شد.",
      en: "62% mobile checkout drop-off and weekly manual stock sync.",
    } satisfies Text,
    solution: {
      fa: "Checkout در دو مرحله، کوپن‌های سمت سرور و همگام‌سازی بلادرنگ موجودی.",
      en: "Two-step checkout, server-side promotions and real-time stock sync.",
    } satisfies Text,
    outcome: {
      fa: "تجربه‌ی خرید روان‌تر و پایان مغایرت انبار.",
      en: "Smoother buying flow and the end of inventory discrepancies.",
    } satisfies Text,
    metric: {
      value: { fa: "+۲۸٪", en: "+28%" } satisfies Text,
      label: { fa: "نرخ تبدیل موبایل", en: "mobile conversion" } satisfies Text,
    },
    stack: ["React", "Node.js", "Redis", "Stripe"],
    hue: ["#ff8a5c", "#6d54ff"],
  },
  {
    id: "pezeshkgpt",
    category: "ai",
    name: { fa: "دستیار دانش‌بنیان", en: "Knowledge Copilot" } satisfies Text,
    client: { fa: "شرکت بیمه", en: "Insurance group" } satisfies Text,
    year: "2026",
    summary: {
      fa: "پاسخ‌گر دامنه‌ای روی ۴۰ هزار صفحه‌ی بخشنامه با منبع‌دار.",
      en: "Domain assistant over 40k pages of policy text, fully cited.",
    } satisfies Text,
    challenge: {
      fa: "پاسخ به یک پرسش بیمه‌ای یعنی ۲۰ دقیقه جست‌وجو در فایل‌های PDF.",
      en: "Answering one underwriting question meant 20 minutes of PDF digging.",
    } satisfies Text,
    solution: {
      fa: "RAG با بازیابی ترکیبی، ارزیابی روزانه و ارجاع دقیق به بند.",
      en: "Hybrid-retrieval RAG, daily evals and clause-level citations.",
    } satisfies Text,
    outcome: {
      fa: "تأیید انسانی همچنان در جریان است؛ مدل فقط پیشنهاد می‌دهد.",
      en: "A human still signs off — the model only proposes.",
    } satisfies Text,
    metric: {
      value: { fa: "۹۲٪", en: "92%" } satisfies Text,
      label: { fa: "پاسخ درست در ارزیابی", en: "eval pass rate" } satisfies Text,
    },
    stack: ["Python", "pgvector", "Next.js", "OpenAI"],
    hue: ["#2ee6d6", "#1687e6"],
  },
  {
    id: "logix",
    category: "retail",
    name: { fa: "لوجیکس", en: "Logix" } satisfies Text,
    client: { fa: "لجستیک شخص ثالث", en: "3PL operator" } satisfies Text,
    year: "2024",
    summary: {
      fa: "مسیریابی و ردیابی ناوگان برای ۱٬۴۰۰ خودرو.",
      en: "Routing and fleet tracking across 1,400 vehicles.",
    } satisfies Text,
    challenge: {
      fa: "تحویل دوم به ۱۹٪ می‌رسید چون مسیری دستی بسته می‌شد.",
      en: "19% second-delivery rate because routes were built by hand.",
    } satisfies Text,
    solution: {
      fa: "الگوریتم بهینه‌سازی مسیر، اپ راننده‌ی آفلاین و تلمتری بلادرنگ.",
      en: "Route optimiser, offline driver app and live telemetry.",
    } satisfies Text,
    outcome: {
      fa: "کاهش پیمایش و تصمیم عملیاتی روی نقشه‌ی زنده.",
      en: "Fewer kilometres and live operational decisions on one map.",
    } satisfies Text,
    metric: {
      value: { fa: "−۲۳٪", en: "−23%" } satisfies Text,
      label: { fa: "پیمایش سوخت", en: "distance driven" } satisfies Text,
    },
    stack: ["Go", "React Native", "PostGIS", "MQTT"],
    hue: ["#8f7bff", "#ff8a5c"],
  },
  {
    id: "sarmayeh",
    category: "fintech",
    name: { fa: "سرمایه", en: "Sarmayeh" } satisfies Text,
    client: { fa: "کارگزاری", en: "Brokerage" } satisfies Text,
    year: "2023",
    summary: {
      fa: "داشبورد پرتفو و ریسک بلادرنگ برای تحلیل‌گران.",
      en: "Real-time portfolio and risk dashboard for analysts.",
    } satisfies Text,
    challenge: {
      fa: "گزارش ریسک هر صبح با اکسل ساخته می‌شد و تا ظهر قدیمی بود.",
      en: "The morning risk report was hand-built in Excel and stale by noon.",
    } satisfies Text,
    solution: {
      fa: "استریم قیمت روی WebSocket، محاسبه‌ی ریسک سمت سرور و خروجی لحظه‌ای.",
      en: "WebSocket price stream, server-side risk calc and instant exports.",
    } satisfies Text,
    outcome: {
      fa: "تیم ریسک به‌جای جمع‌کردن داده، تصمیم می‌گیرد.",
      en: "The risk team decides instead of assembling data.",
    } satisfies Text,
    metric: {
      value: { fa: "۴ ساعت", en: "4 hrs" } satisfies Text,
      label: { fa: "زمان ذخیره‌شده در روز", en: "saved daily" } satisfies Text,
    },
    stack: ["TypeScript", "Node.js", "TimescaleDB"],
    hue: ["#1687e6", "#2ee6d6"],
  },
];

export const teamIntro = {
  eyebrow: { fa: "تیم", en: "The studio" } satisfies Text,
  title: {
    fa: "کسانی که کد را می‌نویسند",
    en: "The people who write the code",
  } satisfies Text,
  lede: {
    fa: "بدون لایه‌ی مدیریتی اضافه: کسی که با شما جلسه می‌گذارد، همان کسی است که سیستم را طراحی می‌کند.",
    en: "No management wrapper: the person in your kickoff is the person designing the system.",
  } satisfies Text,
};

export type Member = {
  name: Text;
  role: Text;
  focus: Text;
  years: string;
  hue: [string, string];
};

export const team: Member[] = [
  {
    name: { fa: "سارا موحد", en: "Sara Mohaddes" } satisfies Text,
    role: { fa: "مدیر فنی", en: "CTO / Tech lead" } satisfies Text,
    focus: {
      fa: "معماری توزیع‌شده، Go و طراحی مقیاس",
      en: "Distributed systems, Go and design for scale",
    } satisfies Text,
    years: "12",
    hue: ["#6d54ff", "#3fa9ff"],
  },
  {
    name: { fa: "امیر رستگار", en: "Amir Restgar" } satisfies Text,
    role: { fa: "مهندس ارشد فرانت‌اند", en: "Staff frontend engineer" } satisfies Text,
    focus: {
      fa: "React، طراحی سیستم و عملکرد وب",
      en: "React, design systems and web performance",
    } satisfies Text,
    years: "9",
    hue: ["#2ee6d6", "#8f7bff"],
  },
  {
    name: { fa: "نگار شریفی", en: "Negar Sharifi" } satisfies Text,
    role: { fa: "طراح محصول", en: "Product designer" } satisfies Text,
    focus: {
      fa: "پژوهش کاربر، وایرفریم و رابط‌های پیچیده",
      en: "User research, flows and complex interfaces",
    } satisfies Text,
    years: "8",
    hue: ["#ff8a5c", "#6d54ff"],
  },
  {
    name: { fa: "پویا کاظمی", en: "Pooya Kazemi" } satisfies Text,
    role: { fa: "مهندس پلتفرم", en: "Platform engineer" } satisfies Text,
    focus: {
      fa: "Kubernetes، Terraform و قابلیت مشاهده",
      en: "Kubernetes, Terraform and observability",
    } satisfies Text,
    years: "7",
    hue: ["#1687e6", "#2ee6d6"],
  },
  {
    name: { fa: "مهسا آذری", en: "Mahsa Azari" } satisfies Text,
    role: { fa: "مهندس داده و AI", en: "Data & AI engineer" } satisfies Text,
    focus: {
      fa: "خط لوله‌ی داده، ارزیابی مدل و RAG",
      en: "Pipelines, model evals and retrieval systems",
    } satisfies Text,
    years: "6",
    hue: ["#b4a6ff", "#1687e6"],
  },
  {
    name: { fa: "رضا فرهمند", en: "Reza Farhmand" } satisfies Text,
    role: { fa: "مدیر پروژه", en: "Delivery lead" } satisfies Text,
    focus: {
      fa: "برنامه‌ریزی، ریسک و ارتباط با ذی‌نفعان",
      en: "Planning, risk and stakeholder communication",
    } satisfies Text,
    years: "10",
    hue: ["#12c9bb", "#ff8a5c"],
  },
];

export const pricingIntro = {
  eyebrow: { fa: "تعرفه‌ها", en: "Engagement" } satisfies Text,
  title: {
    fa: "سه روش کار با ما",
    en: "Three ways to work with us",
  } satisfies Text,
  lede: {
    fa: "قیمت‌ها ریالی و بر اساس تیم ترکیبی محاسبه می‌شود. چیزی که اینجا می‌خوانید همان چیزی است که فاکتور می‌شود.",
    en: "Figures are indicative and quoted in your currency. What you read here is what gets invoiced.",
  } satisfies Text,
};

export type Plan = {
  name: Text;
  price: Text;
  cadence: Text;
  blurb: Text;
  features: Text[];
  cta: Text;
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    name: { fa: "کشف", en: "Discovery" } satisfies Text,
    price: { fa: "از ۴۵۰ میلیون", en: "from $4.5k" } satisfies Text,
    cadence: { fa: "پروژه در ۲ هفته", en: "fixed, 2 weeks" } satisfies Text,
    blurb: {
      fa: "وقتی هنوز مطمئن نیستید چه بسازید یا ارزش آن وجود دارد یا نه.",
      en: "When you are not yet sure what to build — or whether it is worth building.",
    } satisfies Text,
    features: [
      { fa: "کارگاه ذی‌نفعان و نقشه‌ی مشکل", en: "Stakeholder workshop & problem map" },
      { fa: "پروتوتایپ کلیک‌خور", en: "Clickable prototype" },
      { fa: "طرح معماری و برآورد فازبندی‌شده", en: "Architecture plan & phased estimate" },
    ],
    cta: { fa: "شروع با کشف", en: "Start with discovery" } satisfies Text,
  },
  {
    name: { fa: "تیم اختصاصی", en: "Dedicated squad" } satisfies Text,
    price: { fa: "از ۱۸۰ میلیون", en: "from $18k" } satisfies Text,
    cadence: { fa: "در ماه · ۴ نفر", en: "per month · 4 people" } satisfies Text,
    blurb: {
      fa: "برای محصولاتی که خط تولید فعال می‌خواهند و نقشه‌ی راه دارند.",
      en: "For products that need a live delivery line and a roadmap to feed it.",
    } satisfies Text,
    features: [
      { fa: "تیم ثابت: فنی، فرانت، طراحی و دلیوری", en: "Steady team: tech lead, frontend, design, delivery" },
      { fa: "اسپرینت دو هفته‌ای با دمو", en: "Two-week sprints with a demo" },
      { fa: "دسترسی کامل به ریپو، کانال و داشبورد", en: "Full repo, channel and dashboard access" },
      { fa: "نگهداری و پایش ۲۴/۷", en: "Maintenance & 24/7 monitoring" },
    ],
    cta: { fa: "گفت‌وگوی تیمی", en: "Talk to us" } satisfies Text,
    highlighted: true,
  },
  {
    name: { fa: "پروژه‌ی مقطوع", en: "Fixed scope" } satisfies Text,
    price: { fa: "برآورد مقطوع", en: "Fixed quote" } satisfies Text,
    cadence: { fa: "معمولاً ۳ تا ۶ ماه", en: "typically 3–6 months" } satisfies Text,
    blurb: {
      fa: "محدوده‌ی روشن و زمان‌بندی بسته — وقتی نیازها روی کاغذ قطعی‌اند.",
      en: "Clear scope and a hard date — once requirements are genuinely frozen.",
    } satisfies Text,
    features: [
      { fa: "اسپک فنی و معیار پذیرش", en: "Technical spec & acceptance criteria" },
      { fa: "تحویل مرحله‌ای با پذیرش", en: "Staged handover with sign-off" },
      { fa: "۹۰ روز پشتیبانی پس از انتشار", en: "90 days of post-launch support" },
    ],
    cta: { fa: "درخواست برآورد", en: "Request a quote" } satisfies Text,
  },
];

export const pricingNote = {
  fa: "همه‌ی قراردادها بند مالکیت کد، محرمانگی و سطح خدمات (SLA) دارند. زمان خالی نمی‌فروشیم.",
  en: "Every contract carries code ownership, confidentiality and an SLA. We do not sell hourly padding.",
} satisfies Text;

export const testimonials = [
  {
    quote: {
      fa: "در ماه دوم، نرخ شکست تسویه پایین آمد و ما برای اولین بار شب‌ها خوابیدیم. گزارش هفتگی‌شان صادقانه بود — شامل چیزهایی که خراب بود هم.",
      en: "By month two settlement failures dropped and our team slept through the night for the first time. Their weekly report was honest — including what was going badly.",
    } satisfies Text,
    name: { fa: "مینا توکلی", en: "Mina Tavakoli" } satisfies Text,
    role: { fa: "مدیر عملیات، هلدینگ پرداخت", en: "COO, payments holding" } satisfies Text,
    hue: ["#6d54ff", "#2ee6d6"],
  },
  {
    quote: {
      fa: "ما قبلاً دو بار پیمانکار عوض کرده بودیم. این بار کسی جلسه آمد که واقعاً معماری را فهمیده بود و همان نفر کد را نوشت.",
      en: "We had already switched vendor twice. This time the person in the kickoff understood the architecture — and wrote the code too.",
    } satisfies Text,
    name: { fa: "کامران صافی", en: "Kamran Safi" } satisfies Text,
    role: { fa: "مدیر فناوری، شبکه‌ی کلینیک", en: "CTO, clinic network" } satisfies Text,
    hue: ["#1687e6", "#b4a6ff"],
  },
  {
    quote: {
      fa: "تست‌نویسی و CI آن‌ها باعث شد انتشار از یک رویداد ترسناک به یک کار روزمره تبدیل شود. ۳۸ بار در ماه، بدون برنامه‌ریزی.",
      en: "Their test coverage and CI turned releases from a scary event into a Tuesday. Thirty-eight times a month, no war room.",
    } satisfies Text,
    name: { fa: "الهام نادری", en: "Elham Naderi" } satisfies Text,
    role: { fa: "مدیر محصول، فروشگاه زنجیره‌ای", en: "Head of product, retail chain" } satisfies Text,
    hue: ["#ff8a5c", "#8f7bff"],
  },
];

export const contactIntro = {
  eyebrow: { fa: "تماس", en: "Start a project" } satisfies Text,
  title: {
    fa: "سیستم‌تان را تعریف کنید",
    en: "Tell us what you are building",
  } satisfies Text,
  lede: {
    fa: "فرم را پر کنید؛ کمتر از یک روز کاری پاسخ می‌دهیم. اگر مناسب هم باشیم، یک جلسه‌ی ۴۵ دقیقه‌ای رایگان با نقشه‌ی اولیه تنظیم می‌کنیم.",
    en: "Fill this in and you hear back within one business day. If we are a fit, we set up a free 45-minute call with a first sketch.",
  } satisfies Text,
};

export const form = {
  name: { fa: "نام و نام خانوادگی", en: "Full name" } satisfies Text,
  email: { fa: "ایمیل کاری", en: "Work email" } satisfies Text,
  company: { fa: "شرکت (اختیاری)", en: "Company (optional)" } satisfies Text,
  budget: { fa: "بودجه‌ی تقریبی", en: "Rough budget" } satisfies Text,
  message: { fa: "درباره‌ی پروژه بنویسید", en: "Describe the project" } satisfies Text,
  submit: { fa: "ارسال پیام", en: "Send message" } satisfies Text,
  sending: { fa: "در حال ارسال…", en: "Sending…" } satisfies Text,
  success: {
    fa: "پیام ثبت شد. کمتر از یک روز کاری پاسخ می‌گیرید.",
    en: "Got it. We reply within one business day.",
  } satisfies Text,
  budgets: [
    { fa: "زیر ۵۰۰ میلیون", en: "Under $25k" },
    { fa: "۵۰۰ تا ۱٫۵ میلیارد", en: "$25k – $75k" },
    { fa: "بالای ۱٫۵ میلیارد", en: "$75k+" },
    { fa: "هنوز نمی‌دانم", en: "Not sure yet" },
  ],
  errors: {
    name: { fa: "نام را وارد کنید.", en: "Please enter your name." } satisfies Text,
    email: { fa: "ایمیل معتبر نیست.", en: "That email does not look valid." } satisfies Text,
    message: {
      fa: "حداقل ۲۰ کاراکتر بنویسید.",
      en: "Please write at least 20 characters.",
    } satisfies Text,
  },
};

export const footer = {
  blurb: {
    fa: "استودیوی تولید نرم‌افزار — محصول، پلتفرم و داده. تهران، با تیمی که از راه دور هم کار می‌کند.",
    en: "Software production studio — product, platform and data. Based in Tehran, working remote too.",
  } satisfies Text,
  rights: {
    fa: "© ۲۰۲۶ — همه‌ی حقوق برای METACRIA محفوظ است.",
    en: "© 2026 METACRIA. All rights reserved.",
  } satisfies Text,
  columns: [
    {
      title: { fa: "خدمات", en: "Services" } satisfies Text,
      links: [
        { fa: "توسعه‌ی وب", en: "Web engineering" },
        { fa: "اپ موبایل", en: "Mobile apps" },
        { fa: "بک‌اند و زیرساخت", en: "Backend & platform" },
        { fa: "داده و AI", en: "Data & AI" },
      ],
    },
    {
      title: { fa: "شرکت", en: "Company" } satisfies Text,
      links: [
        { fa: "درباره‌ی ما", en: "About" },
        { fa: "فرصت‌های شغلی", en: "Careers" },
        { fa: "وبلاگ فنی", en: "Engineering blog" },
        { fa: "تماس", en: "Contact" },
      ],
    },
    {
      title: { fa: "منابع", en: "Resources" } satisfies Text,
      links: [
        { fa: "مطالعه‌ی موردی", en: "Case studies" },
        { fa: "روش کار", en: "How we work" },
        { fa: "حریم خصوصی", en: "Privacy" },
        { fa: "شرایط همکاری", en: "Terms" },
      ],
    },
  ],
};
