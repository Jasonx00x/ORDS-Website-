const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const src = path.join(root, "src");
const dist = path.join(root, "dist");
const siteUrl = "https://ordsmusic.com";
const siteName = "ORDS Music School & Studio";
const socialImage = "https://res.cloudinary.com/dtmonxj1h/image/upload/q_auto/f_auto/v1781886182/ORDS_Music_School_Studio_nloflc.jpg";

const logo = "https://static.wixstatic.com/media/a51682_27dfdd46028443e7a016d349782ffa8f~mv2.png";
const favicon = "/assets/WhiteStick-Logo.png";
const academyVideo = "https://video.wixstatic.com/video/fc478d_f979a3da0eae41a480bb521a6cb0d73b/1080p/mp4/file.mp4";
const poster = "https://static.wixstatic.com/media/a51682_2bb1edb8c8c141ca874042123b9b7d91~mv2.jpg";
const experienceImg = "https://static.wixstatic.com/media/fc478d_0fc4ed886cc64a2eb07aa454308d136f~mv2.jpg";
const studioImg = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1800&q=75";

const programs = [
  {
    slug: "drum-lessons",
    title: "Drum Lessons in Manassas, VA | ORDS Music School",
    desc: "Private drum lessons in Manassas, VA focused on rhythm, timing, technique, confidence, and live performance.",
    eyebrow: "Drum Program",
    h1: "Drum Lessons",
    lead: "Build rhythm, timing, technique, and confidence behind the kit.",
    image: "https://static.wixstatic.com/media/fc478d_95a620ae93d740b08cd763e29df85895~mv2.jpg",
    icon: "https://static.wixstatic.com/media/fc478d_79dce991bfb64fb0b4821bb84c5cac26~mv2.png",
    learn: ["Rhythm & Timing", "Drum Technique", "Live Performance"],
    audience: ["Beginners", "Intermediate Players", "Worship & Live Performance"],
    instructors: [
      ["Oscar Ramos", "Founder & Drum Instructor", "https://static.wixstatic.com/media/fc478d_95a620ae93d740b08cd763e29df85895~mv2.jpg"],
      ["Bryan", "Drum Instructor", "https://static.wixstatic.com/media/fc478d_3cfc0ded764d423686c837a6b2d96941~mv2.jpg"]
    ]
  },
  {
    slug: "piano-lessons",
    title: "Piano Lessons in Manassas, VA | ORDS Music School",
    desc: "Private piano lessons in Manassas, VA for foundations, worship keys, chords, technique, and musical confidence.",
    eyebrow: "Piano Program",
    h1: "Piano Lessons",
    lead: "Learn foundations, worship keys, chords, and musical confidence.",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1800&q=75",
    icon: "https://static.wixstatic.com/media/fc478d_f5596a401b044422bb5ff74c00bb03a2~mv2.png",
    learn: ["Chords & Progressions", "Technique", "Worship Keys"],
    audience: ["New Players", "Growing Musicians", "Worship Keys"],
    instructors: [["David", "Piano Instructor", "https://static.wixstatic.com/media/a51682_0cdbf152f1894652892de49e9732f8d4~mv2.jpg"]]
  },
  {
    slug: "guitar-lessons",
    title: "Guitar Lessons in Manassas, VA | ORDS Music School",
    desc: "Private guitar lessons in Manassas, VA for clean chords, rhythm, tone, worship playing, and confident musicianship.",
    eyebrow: "Guitar Program",
    h1: "Guitar Lessons",
    lead: "Build clean chords, rhythm, tone, and confidence for modern playing.",
    image: "https://static.wixstatic.com/media/fc478d_4bc6faefbe5e41599fcba325c00a09e3~mv2.jpg",
    icon: "https://static.wixstatic.com/media/fc478d_a9da3f49f7a74fceac9c3f5a9094f94e~mv2.png",
    learn: ["Chords & Rhythm", "Technique", "Worship Playing"],
    audience: ["Beginners", "Worship Guitarists", "Pedalboard Coaching"],
    instructors: [
      ["Osiel", "Guitar Instructor", "https://static.wixstatic.com/media/fc478d_20fbdf144cf04af5886785f3dd098131~mv2.jpg"],
      ["Jorge Saenz", "Guitar Coach / Pedalboard FX", "https://static.wixstatic.com/media/fc478d_4bc6faefbe5e41599fcba325c00a09e3~mv2.jpg"]
    ]
  },
  {
    slug: "bass-lessons",
    title: "Bass Lessons in Manassas, VA | ORDS Music School",
    desc: "Private bass lessons in Manassas, VA focused on groove, pocket, timing, and supporting a band with confidence.",
    eyebrow: "Bass Program",
    h1: "Bass Lessons",
    lead: "Learn groove, pocket, timing, and how to support a band with confidence.",
    image: "https://static.wixstatic.com/media/a51682_0cdbf152f1894652892de49e9732f8d4~mv2.jpg",
    icon: "https://static.wixstatic.com/media/fc478d_a9da3f49f7a74fceac9c3f5a9094f94e~mv2.png",
    learn: ["Groove & Pocket", "Timing", "Band Confidence"],
    audience: ["Beginners", "Band Players", "Worship Bassists"],
    instructors: [["David", "Bass Instructor", "https://static.wixstatic.com/media/a51682_0cdbf152f1894652892de49e9732f8d4~mv2.jpg"]]
  },
  {
    slug: "vocal-coaching",
    title: "Vocal Coaching at ORDS Music School | ORDS",
    desc: "Build vocal control, pitch confidence, expression, and stage presence.",
    eyebrow: "Vocal Coaching",
    h1: "Vocal Coaching",
    lead: "Build vocal control, pitch confidence, expression, and stage presence.",
    image: "https://static.wixstatic.com/media/a51682_36db621d6cc84a4d9237115930725adf~mv2.jpg",
    icon: "",
    learn: ["Vocal Control", "Pitch Confidence", "Stage Presence"],
    audience: ["New Singers", "Worship Vocalists", "Performers"],
    instructors: [["Vocal Team", "Vocal Coaching", "https://static.wixstatic.com/media/a51682_36db621d6cc84a4d9237115930725adf~mv2.jpg"]]
  },
  {
    slug: "audio-lessons",
    title: "Audio Production & Recording Studio | ORDS Music School & Studio",
    desc: "Recording, mixing, mastering, audio production, and creative studio support for artists, students, and worship teams.",
    eyebrow: "Audio Program",
    h1: "Audio Classes",
    lead: "Learn recording, mixing, production workflow, and creative audio fundamentals.",
    image: studioImg,
    icon: "",
    learn: ["Recording Basics", "Mixing Workflow", "Creative Production"],
    audience: ["Beginners", "Musicians", "Future Producers"],
    instructors: [
      ["Oscar Ramos", "Mixing / Audio Coach", "https://static.wixstatic.com/media/fc478d_95a620ae93d740b08cd763e29df85895~mv2.jpg"],
      ["Jorge Saenz", "Mastering / Audio Coach", "https://static.wixstatic.com/media/fc478d_4bc6faefbe5e41599fcba325c00a09e3~mv2.jpg"]
    ]
  }
];

const merchProducts = [
  {
    id: "logo-hoodie",
    name: "ORDS Printed Logo Hoodie",
    category: "Hoodies",
    price: 55,
    status: "Available",
    image: "https://static.wixstatic.com/media/a51682_6aa4ccc7427f481aa3374d31b19501f3~mv2.jpeg",
    altImage: "https://static.wixstatic.com/media/a51682_8dad7f0fab1a430dae7e5367847703da~mv2.jpeg",
    description: "Premium printed-logo hoodie with a clean ORDS front mark.",
    sizes: ["Small", "Medium", "Large", "XL"]
  },
  {
    id: "ords-hat",
    name: "ORDS Hat",
    category: "Hats",
    price: 35,
    status: "Available",
    image: "https://static.wixstatic.com/media/a51682_2546cb4743b4413db8ba81190ddbbb54~mv2.jpeg",
    altImage: "",
    description: "Clean everyday ORDS hat for students, musicians, and supporters.",
    sizes: ["One Size"]
  },
  {
    id: "embroidered-logo-shirt",
    name: "ORDS Embroidered Tee",
    category: "Shirts",
    price: null,
    status: "New",
    image: "https://res.cloudinary.com/dtmonxj1h/image/upload/q_auto/f_auto/v1781816311/IMG_3691_jku9ln.heic",
    description: "ORDS tee with an embroidered logo detail.",
    variants: [
      {
        name: "Black",
        color: "#050505",
        media: [
          { type: "image", src: "https://res.cloudinary.com/dtmonxj1h/image/upload/q_auto/f_auto/v1781816311/IMG_3691_jku9ln.heic" },
          { type: "image", src: "https://res.cloudinary.com/dtmonxj1h/image/upload/q_auto/f_auto/v1781816310/IMG_3678_btbtwu.heic" },
          { type: "video", src: "https://res.cloudinary.com/dtmonxj1h/video/upload/q_auto/f_auto/v1781816908/IMG_3781_yxh8dt.mov", poster: "https://res.cloudinary.com/dtmonxj1h/image/upload/q_auto/f_auto/v1781816311/IMG_3691_jku9ln.heic" }
        ]
      },
      {
        name: "White",
        color: "#f4f4ef",
        media: [
          { type: "image", src: "https://res.cloudinary.com/dtmonxj1h/image/upload/q_auto/f_auto/v1781817128/IMG_3641_esmhxz.heic" },
          { type: "image", src: "https://res.cloudinary.com/dtmonxj1h/image/upload/q_auto/f_auto/v1781817127/IMG_3659_s2ifvb.heic" },
          { type: "video", src: "https://res.cloudinary.com/dtmonxj1h/video/upload/q_auto/f_auto/v1781817156/0618_1_yukdch.mov", poster: "https://res.cloudinary.com/dtmonxj1h/image/upload/q_auto/f_auto/v1781817128/IMG_3641_esmhxz.heic" }
        ]
      }
    ],
    sizes: ["Small", "Medium", "Large", "XL"]
  }
];

const pages = [];

function cleanDist() {
  fs.rmSync(dist, { recursive: true, force: true });
  fs.mkdirSync(path.join(dist, "css"), { recursive: true });
  fs.mkdirSync(path.join(dist, "js"), { recursive: true });
  fs.mkdirSync(path.join(dist, "assets"), { recursive: true });
  fs.copyFileSync(path.join(src, "styles.css"), path.join(dist, "css", "styles.css"));
  fs.copyFileSync(path.join(src, "main.js"), path.join(dist, "js", "main.js"));
  fs.copyFileSync(path.join(src, "assets", "WhiteStick-Logo.png"), path.join(dist, "assets", "WhiteStick-Logo.png"));
}

function pagePath(slug) {
  return slug === "index" ? "/" : `/${slug}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function nav() {
  const classLinks = programs.map((p) => `<a href="/${p.slug}">${p.h1}</a>`).join("");
  return `<nav class="nav"><div class="container nav-inner"><a class="brand" href="/"><img src="${logo}" alt="ORDS logo"><span>ORDS</span></a><button class="menu-btn" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span><span></span></button><div class="links"><a href="/">Home</a><a href="/about">Get to Know Us</a><div class="dropdown"><a class="drop-toggle" href="/classes">Classes</a><div class="dropdown-menu">${classLinks}<a href="/ords-studio">ORDS Studio</a></div></div><a href="/ords-studio">Studio</a><a href="/shop">Shop</a><a href="/raffle">Raffle</a><a class="btn nav-cta" href="/consultation">Book Consultation</a></div></div></nav>`;
}

function footer() {
  return `<footer class="footer"><div class="container footer-grid"><div><div class="brand footer-brand"><img src="${logo}" alt="ORDS"><span>ORDS</span></div><p>Music Academy and Studio serving students, musicians, and creatives with discipline, order, practice, and excellence.</p><p>140 Kent Dr<br>Manassas Park, VA 20111</p></div><div><h4>Contact</h4><p>Phone Number<br><a href="tel:+17034758719"><strong>(703) 475-8719</strong></a></p><p>Email<br><a href="mailto:RAMOSDS@GMAIL.COM"><strong>RAMOSDS@GMAIL.COM</strong></a></p><h4>Social</h4><a href="https://www.instagram.com/_ords_/" target="_blank" rel="noopener noreferrer">ORDS Music Instagram</a><a href="https://www.instagram.com/ordstudios_/" target="_blank" rel="noopener noreferrer">ORDS Studio Instagram</a></div><div><h4>Quick Links</h4><a href="/about">Get To Know Us</a><a href="/classes">Classes</a><a href="/drum-lessons">Drum Lessons</a><a href="/piano-lessons">Piano Lessons</a><a href="/shop">Shop</a><a href="/consultation">Book Consultation</a><a href="/ords-studio">ORDS Studio</a></div></div><div class="container footer-bottom"><span>© ORDS Music Academy</span><span>Timing is everything.</span></div></footer>`;
}

function layout({ slug, title, desc, body, image = socialImage, ogTitle, ogDesc, ogUrl, canonicalUrl }) {
  pages.push({ slug, title, desc });
  const canonical = canonicalUrl || `${siteUrl}${pagePath(slug)}`;
  const shareTitle = ogTitle || title;
  const shareDesc = ogDesc || desc;
  const shareUrl = ogUrl || canonical;
  const shareImage = socialImage || image;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(desc)}">
  <link rel="canonical" href="${canonical}">
  <meta name="theme-color" content="#02040a">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${siteName}">
  <meta property="og:title" content="${escapeHtml(shareTitle)}">
  <meta property="og:description" content="${escapeHtml(shareDesc)}">
  <meta property="og:url" content="${shareUrl}">
  <meta property="og:image" content="${shareImage}">
  <meta property="og:image:secure_url" content="${shareImage}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(shareTitle)}">
  <meta name="twitter:description" content="${escapeHtml(shareDesc)}">
  <meta name="twitter:image" content="${shareImage}">
  <link rel="icon" type="image/png" href="${favicon}">
  <link rel="shortcut icon" href="${favicon}">
  <link rel="apple-touch-icon" href="${favicon}">
  <meta name="msapplication-TileImage" content="${favicon}">
  <link rel="preconnect" href="https://static.wixstatic.com">
  <link rel="preconnect" href="https://video.wixstatic.com">
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="preconnect" href="https://res.cloudinary.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/styles.css">
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MusicSchool",
    name: siteName,
    url: siteUrl,
    telephone: "+17034758719",
    email: "RAMOSDS@GMAIL.COM",
    address: {
      "@type": "PostalAddress",
      streetAddress: "140 Kent Dr",
      addressLocality: "Manassas Park",
      addressRegion: "VA",
      postalCode: "20111",
      addressCountry: "US"
    },
    sameAs: ["https://www.instagram.com/_ords_/", "https://www.instagram.com/ordstudios_/"]
  })}</script>
</head>
<body>${nav()}${body}${footer()}<script src="/js/main.js"></script></body>
</html>`;
}

function hero({ eyebrow, h1, span, lead, image, video, ctas = true }) {
  const media = video
    ? `<video class="hero-media" autoplay muted loop playsinline poster="${image}"><source src="${video}" type="video/mp4"></video>`
    : `<img class="hero-media" src="${image}" alt="${escapeHtml(h1)}">`;
  return `<header class="hero${video ? "" : " page-hero"}">${media}<div class="container hero-content reveal"><span class="eyebrow">${eyebrow}</span><h1>${h1} <span>${span}</span></h1><p class="lead">${lead}</p>${ctas ? `<div class="cta-row"><a class="btn" href="/consultation">Book Free Consultation</a><a class="btn secondary" href="/classes">Explore Classes</a></div>` : ""}</div></header><div class="wave-divider"></div>`;
}

function finalCta() {
  return `<section class="final-cta"><div class="container reveal"><span class="eyebrow">Ready?</span><h2>Start your musical journey today.</h2><p class="lead" style="margin:auto">Book a free consultation and find the right next step with ORDS.</p><div class="cta-row" style="justify-content:center"><a class="btn" href="/consultation">Book Free Consultation</a></div></div></section>`;
}

function iconMarkup(p) {
  return p.icon ? `<img src="${p.icon}" alt="${p.h1} icon">` : `<svg viewBox="0 0 64 64"><path d="M18 12v40M32 12v40M46 12v40"/><circle cx="18" cy="25" r="5"/><circle cx="32" cy="39" r="5"/><circle cx="46" cy="29" r="5"/></svg>`;
}

function productPriceLabel(product) {
  return product.price ? `$${product.price}` : "Request price";
}

function indexPage() {
  const cards = programs.map((p) => `<a class="card reveal" href="/${p.slug}"><div class="icon">${iconMarkup(p)}</div><h3>${p.h1.replace(" Lessons", "").replace(" Coaching", "s")}</h3><p>${p.desc}</p></a>`).join("");
  const homeTitle = "ORDS Music School & Studio | Music Lessons, Recording & Production";
  const homeDesc = "ORDS Music School & Studio provides private music lessons, recording, mixing, mastering, and creative production services. Learn drums, piano, guitar, bass, audio production, and more.";
  const homeShareDesc = "Private music lessons, recording, mixing, mastering, and creative production services. Learn music with purpose at ORDS.";
  const body = `${hero({ eyebrow: "Let's Get Started", h1: "ORDS", span: "Music Academy", lead: "Molding the next generation of musicians through discipline, creativity, confidence, and excellence.", image: poster, video: academyVideo })}
  <section class="light"><div class="container"><div class="section-head reveal"><span class="eyebrow tag-on-light">Music Lessons We Offer</span><h2>Choose your instrument.</h2><p>From first notes to advanced growth, we help students build skill, confidence, and discipline.</p></div><div class="cards six">${cards}</div></div></section>
  <section class="dark video-showcase welcome-videos"><div class="container"><div class="section-head reveal"><span class="eyebrow">Start Here</span><h2>See what ORDS is building.</h2><p>Watch the Music Academy introduction first, then see how ORDS Studio supports artists, churches, and creatives through recording, mixing, and production.</p></div><div class="video-grid featured mixed-video-grid final-video-grid"><div class="video-embed landscape-video reveal"><video class="video-audio" autoplay muted loop controls playsinline preload="metadata"><source src="https://res.cloudinary.com/dtmonxj1h/video/upload/q_auto/f_auto/v1779490327/WHY_ORDS_1_rdowjg.mp4" type="video/mp4"></video><button class="unmute-btn" type="button">Tap sound</button><div class="video-label"><span class="eyebrow">ORDS Music</span><h3>Music Academy Introduction</h3><p>Discover the heart behind ORDS: students, instructors, discipline, creativity, and musical growth.</p></div></div><div class="video-embed landscape-video reveal"><video class="video-audio" autoplay muted loop controls playsinline preload="metadata"><source src="https://res.cloudinary.com/dtmonxj1h/video/upload/q_auto/f_auto/v1779485136/A_little_about_us_to_you_Let_us_help_you_out_for_your_future_projects_Let_s_make_sure_your_vis_v33sux.mp4" type="video/mp4"></video><button class="unmute-btn" type="button">Tap sound</button><div class="video-label"><span class="eyebrow">ORDS Studio</span><h3>Studio Introduction</h3><p>Recording, mixing, mastering, and creative production support for artists and projects.</p></div></div></div></div></section>
  <section class="studio-band"><div class="container studio-split"><div class="reveal"><span class="eyebrow">ORDS Studio</span><h2 class="display-small">Music lessons meet creative production.</h2><p class="lead">ORDS also supports artists and creatives with recording, mixing, mastering, and audio learning pathways.</p><div class="cta-row"><a class="btn" href="/ords-studio">Explore ORDS Studio</a><a class="btn secondary" href="/audio-lessons">Audio Classes</a></div></div><div class="image-panel reveal"><img src="${studioImg}" alt="ORDS Studio audio production"></div></div></section>
  ${finalCta()}`;
  return layout({ slug: "index", title: homeTitle, desc: homeDesc, ogTitle: homeTitle, ogDesc: homeShareDesc, ogUrl: siteUrl, canonicalUrl: `${siteUrl}/`, body });
}

function programPage(p) {
  const learn = p.learn.map((item) => `<div class="card reveal"><div class="icon">${iconMarkup(p)}</div><h3>${item}</h3><p>Hands-on coaching that builds skill, confidence, discipline, and real musical application.</p></div>`).join("");
  const audience = p.audience.map((item, i) => `<div class="feature-row reveal"><span>${String(i + 1).padStart(2, "0")}</span><div><strong>${item}</strong><p>We match each student with a path that fits their goals, pace, and musical background.</p></div></div>`).join("");
  const instructors = p.instructors.map(([name, role, img]) => `<div class="instructor-card reveal"><img src="${img}" alt="${name}"><div class="instructor-info"><span class="role">${role}</span><h3>${name}</h3><p>Focused on musical excellence, confidence, discipline, and practical growth.</p></div></div>`).join("");
  const body = `${hero({ eyebrow: p.eyebrow, h1: p.h1, span: "ORDS Music School", lead: p.lead, image: p.image })}
  <section class="light"><div class="container"><div class="section-head reveal"><span class="eyebrow tag-on-light">${p.eyebrow}</span><h2>What you'll learn.</h2><p>Personalized lessons that help students grow musically and confidently.</p></div><div class="cards">${learn}</div></div></section>
  <section class="dark"><div class="container split"><div class="image-panel reveal"><img src="${p.image}" alt="${p.h1} at ORDS"></div><div class="reveal"><span class="eyebrow">Who Can Join?</span><h2 class="display-small">${p.h1} for every skill level.</h2><p class="lead">Whether you're just starting or ready to refine your skill, ORDS helps students grow with personalized instruction and musical discipline.</p><div class="feature-list">${audience}</div><a class="btn" href="/consultation">Book Free Consultation</a></div></div></section>
  <section class="dark"><div class="container"><div class="section-head reveal"><span class="eyebrow">The ORDS Team</span><h2>Learn from experienced mentors.</h2><p>Students receive guidance from people who care about skill, discipline, confidence, and musical growth.</p></div><div class="instructors">${instructors}</div></div></section>
  <section class="experience"><img src="${experienceImg}" alt="ORDS experience"><div class="container reveal"><span class="eyebrow">The ORDS Experience</span><h2>More than lessons.</h2><p class="lead" style="margin:auto">A place to build discipline, confidence, creativity, and musical excellence.</p><div class="cta-row" style="justify-content:center"><a class="btn" href="/consultation">Start Your Journey</a></div></div></section>
  ${finalCta()}`;
  return layout({ slug: p.slug, title: p.title, desc: p.desc, image: p.image, body });
}

function aboutPage() {
  const team = programs.flatMap((p) => p.instructors).filter((item, idx, arr) => arr.findIndex((x) => x[0] === item[0]) === idx);
  const cards = team.map(([name, role, img]) => `<div class="instructor-card reveal"><img src="${img}" alt="${name}"><div class="instructor-info"><span class="role">${role}</span><h3>${name}</h3><p>Part of the ORDS team helping students grow with order, discipline, practice, and excellence.</p></div></div>`).join("");
  const body = `${hero({ eyebrow: "Get To Know Us", h1: "Discipline. Order.", span: "Practice. Excellence.", lead: "Our mission is to inspire students to uncover and nurture their creative side in a warm and inviting environment.", image: "https://static.wixstatic.com/media/a51682_2d3321eee0154056afd009e56a986496~mv2.jpg" })}
  <section class="white"><div class="container split"><div class="reveal"><span class="eyebrow tag-on-light">About ORDS</span><h2 class="display-small">A passionate team of talented and creative instructors.</h2><p style="font-size:18px;line-height:1.8;color:#596174">With personalized lessons tailored for each student, ORDS exists to develop musicians with skill, confidence, discipline, and purpose.</p></div><div class="image-panel reveal about-image-panel"><img src="${studioImg}" alt="ORDS music studio"></div></div></section>
  <section class="dark"><div class="container"><div class="section-head reveal"><span class="eyebrow">The Team</span><h2>Meet ORDS.</h2><p>Instructors and mentors serving students, musicians, and creatives.</p></div><div class="instructors">${cards}</div></div></section>${finalCta()}`;
  return layout({ slug: "about", title: "Get To Know Us | ORDS", desc: "Meet the ORDS Music Academy team and learn the mission behind the academy.", body });
}

function classesPage() {
  const cards = programs.map((p) => `<a class="card reveal" href="/${p.slug}"><div class="icon">${iconMarkup(p)}</div><h3>${p.h1}</h3><p>${p.desc}</p></a>`).join("");
  const body = `${hero({ eyebrow: "Classes", h1: "Find your", span: "next step.", lead: "Explore drums, piano, guitar, bass, vocals, audio classes, and studio pathways.", image: "https://static.wixstatic.com/media/fc478d_957e95071a06421589ff1c5d2901faaa~mv2.jpg" })}
  <section class="light"><div class="container"><div class="section-head reveal"><span class="eyebrow tag-on-light">Programs</span><h2>Choose a path.</h2><p>Each program is built for practical growth, confidence, and musical excellence.</p></div><div class="cards six">${cards}</div></div></section>${finalCta()}`;
  return layout({ slug: "classes", title: "Classes | ORDS Music Academy", desc: "Explore drums, piano, guitar, bass, vocals, and audio classes at ORDS.", body });
}

function consultationPage() {
  const consultationSlots = [
    ["Monday", ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"]],
    ["Wednesday", ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"]],
    ["Friday", ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM"]],
    ["Saturday", ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"]]
  ];
  const slotOptions = consultationSlots.flatMap(([day, times]) => times.map((time) => {
    const value = `${day}, ${time}`;
    return `<button type="button" class="custom-option" data-value="${value}"><span>${value}</span></button>`;
  })).join("");
  const body = `${hero({ eyebrow: "Free Consultation", h1: "Book your free", span: "music consultation.", lead: "Find the right class for drums, piano, guitar, bass, vocals, or audio production.", image: "https://static.wixstatic.com/media/fc478d_a2e800b7d9bd4fc1a2e158e8957443b0~mv2.png", ctas: false })}
  <section class="consult-flow"><div class="container"><div class="section-head reveal"><span class="eyebrow tag-on-light">Consultation</span><h2>Find the right ORDS path.</h2><p>Answer a few quick questions and we will follow up with the best next step.</p></div><div class="flow-shell"><aside class="flow-progress reveal"><div class="progress-step active" data-step="1"><span>1</span>Instrument</div><div class="progress-step" data-step="2"><span>2</span>Level</div><div class="progress-step" data-step="3"><span>3</span>Goal</div><div class="progress-step" data-step="4"><span>4</span>Contact</div></aside><div class="flow-card reveal"><form class="consult-form" name="consultation" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you"><input type="hidden" name="form-name" value="consultation"><input type="hidden" name="subject" value="New ORDS consultation request"><input type="hidden" name="instrument" id="flowInstrument"><input type="hidden" name="level" id="flowLevel"><input type="hidden" name="goal" id="flowGoal"><p class="hidden-field"><label>Do not fill this out: <input name="bot-field"></label></p><div class="flow-step active" data-step="1"><span class="eyebrow tag-on-light">Step 1</span><h2>What are you interested in?</h2><div class="choice-grid">${["Drums","Piano","Guitar","Bass","Vocals","Audio / Studio"].map((x) => `<button class="choice" type="button" data-flow-choice data-group="instrument" data-value="${x}"><strong>${x}</strong><small>Tell us where you want to grow.</small></button>`).join("")}</div></div><div class="flow-step" data-step="2"><span class="eyebrow tag-on-light">Step 2</span><h2>What level are you at?</h2><div class="choice-grid">${["Beginner","Intermediate","Advanced","Not sure"].map((x) => `<button class="choice" type="button" data-flow-choice data-group="level" data-value="${x}"><strong>${x}</strong><small>We will match the path to your current level.</small></button>`).join("")}</div><div class="flow-actions"><button class="btn secondary" type="button" data-flow-back="1">Back</button></div></div><div class="flow-step" data-step="3"><span class="eyebrow tag-on-light">Step 3</span><h2>What's the goal?</h2><div class="choice-grid">${["Build confidence","Join worship/live team","Develop discipline","Create or record music"].map((x) => `<button class="choice" type="button" data-flow-choice data-group="goal" data-value="${x}"><strong>${x}</strong><small>Share what you want this training to help with.</small></button>`).join("")}</div><div class="flow-actions"><button class="btn secondary" type="button" data-flow-back="2">Back</button></div></div><div class="flow-step" data-step="4"><span class="eyebrow tag-on-light">Final Step</span><h2>Book your free consultation.</h2><p class="flow-summary" id="flowSummary">Your selections will appear here.</p><div class="contact-grid"><label>Full Name<input name="name" placeholder="Enter your name" required></label><label>Email<input name="email" type="email" placeholder="Enter your email" required></label><label>Phone<input name="phone" type="tel" placeholder="Enter your phone" required></label><div class="consult-slot-field"><span class="field-label">Preferred Time</span><input type="hidden" name="preferred-time" id="consultationTimeInput" required><div class="custom-select consultation-time-select" data-target="consultationTimeInput"><button class="custom-select-trigger" type="button"><span>Choose a 30-minute time slot</span></button><div class="custom-options slot-options">${slotOptions}<button type="button" class="custom-option" data-value="Not sure yet"><span>Not sure yet</span></button></div></div></div></div><label>Anything else we should know?<textarea name="message" rows="4" placeholder="Tell us about your goals, schedule, or student age."></textarea></label><div class="flow-actions"><button class="btn secondary" type="button" data-flow-back="3">Back</button><button class="btn" type="submit">Submit Consultation Request</button></div></div></form></div></div></div></section>`;
  return layout({ slug: "consultation", title: "Free Music Consultation | ORDS", desc: "Book your free ORDS Music Academy consultation.", body });
}

function shopPage() {
  const productCards = merchProducts.map((product) => {
    const priceLabel = productPriceLabel(product);
    const productValue = `${product.name} - ${priceLabel}`;
    const variants = product.variants || [
      { name: "Default", color: "", media: [{ type: "image", src: product.image }, ...(product.altImage ? [{ type: "image", src: product.altImage }] : [])] }
    ];
    const activeVariant = variants[0];
    const activeMedia = activeVariant.media[0];
    const galleryClass = variants.some((variant) => variant.media.length > 1) ? " product-gallery" : "";
    const variantData = escapeHtml(JSON.stringify(variants));
    const mainMedia = activeMedia.type === "video"
      ? `<video class="merch-main-media" autoplay loop muted defaultMuted playsinline preload="none" poster="${activeMedia.poster || product.image}"><source src="${activeMedia.src}" type="video/mp4"></video>`
      : `<img class="merch-main-media gallery-main" src="${activeMedia.src}" alt="${escapeHtml(product.name)}" loading="lazy" decoding="async">`;
    const variantControls = product.variants ? `<div class="variant-row" aria-label="${escapeHtml(product.name)} color options"><span class="variant-label">Color</span>${variants.map((variant, index) => `<button class="variant-swatch${index === 0 ? " active" : ""}" type="button" data-variant="${escapeHtml(variant.name)}" aria-label="${escapeHtml(variant.name)}" style="--swatch:${variant.color}"><span></span>${variant.name}</button>`).join("")}</div>` : "";
    const mediaRail = activeVariant.media.length > 1 ? `<div class="media-rail">${activeVariant.media.map((media, index) => `<button class="media-thumb${media.type === "video" ? " video-thumb" : ""}${index === 0 ? " active" : ""}" type="button" data-media-index="${index}" aria-label="${media.type === "video" ? "View product video" : `View product photo ${index + 1}`}">${media.type === "video" ? `<span class="media-play">Video</span>` : `<img src="${media.src}" alt="" loading="lazy" decoding="async">`}</button>`).join("")}</div>` : "";
    const priceMarkup = product.price ? `<strong>${priceLabel}</strong>` : `<strong class="price-request">Request price</strong>`;
    return `<article class="product-card merch-card${galleryClass} reveal" data-product-id="${product.id}" data-product-name="${escapeHtml(product.name)}" data-product-price="${product.price || ""}" data-product-price-label="${priceLabel}" data-product-sizes="${product.sizes.join("|")}" data-product-variants="${variantData}"><div class="gallery-frame">${mainMedia}<span class="stock-pill">${product.status}</span></div>${variantControls}${mediaRail}<div class="product-body"><div class="product-meta"><span>${product.category}</span>${priceMarkup}</div><h3>${product.name}</h3><p>${product.description}</p><div class="size-chips">${product.sizes.map((size) => `<span>${size}</span>`).join("")}</div><button class="btn merch-add" type="button" data-add="${escapeHtml(productValue)}" data-product-id="${product.id}">Add to Request</button></div></article>`;
  }).join("");
  const itemOptions = merchProducts.map((product) => {
    const priceLabel = productPriceLabel(product);
    return `<button type="button" class="custom-option" data-value="${product.name} - ${priceLabel}"><span>${product.name}</span><strong>${priceLabel}</strong></button>`;
  }).join("");
  const preferenceOptions = ["Pick up at ORDS", "Ask about shipping", "Pay in person", "Send payment link"].map((preference) => `<button type="button" class="custom-option" data-value="${preference}"><span>${preference}</span></button>`).join("");
  const body = `${hero({ eyebrow: "Merch", h1: "Timing is", span: "everything.", lead: "ORDS merch for students, musicians, and the ORDS community.", image: "https://static.wixstatic.com/media/a51682_ab3ee4b5d51f43f5a96189e9c864d1dc~mv2.jpeg" })}
  <section class="light merch-section" id="shop"><div class="container"><div class="section-head reveal"><span class="eyebrow tag-on-light">ORDS Essentials</span><h2>Shop merch.</h2><p>Build a merch request and the ORDS team will follow up to confirm stock, pickup, and payment.</p></div><div class="merch-toolbar reveal"><div><strong>Featured Drop</strong><span>Hoodies, hats, and tees</span></div><a class="btn secondary" href="#checkout">Review Request</a></div><div class="shop-layout merch-layout"><div class="product-grid merch-grid">${productCards}</div><aside class="checkout-card merch-request-card reveal" id="checkout"><span class="eyebrow tag-on-light">Merch Request</span><h2>Build Your Request</h2><div class="selected-merch"><span id="checkout-item">Select an item</span><strong id="checkout-price">$0</strong></div><form name="merch-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you"><input type="hidden" name="form-name" value="merch-request"><input type="hidden" name="subject" value="New ORDS merch request"><p class="hidden-field"><label>Do not fill this out: <input name="bot-field"></label></p><input type="hidden" name="current-item" id="checkoutItemInput"><input type="hidden" name="selected-color" id="checkoutColorInput"><input type="hidden" name="estimated-total" id="checkoutTotalInput"><input type="hidden" name="items" id="checkoutItemsInput" required><input type="hidden" name="selected-item" id="merchItemSelect"><input type="hidden" name="size" id="merchSizeSelect"><input type="hidden" name="preference" id="merchPreferenceInput" required><div class="merch-field"><span class="field-label">Item</span><div class="custom-select" data-target="merchItemSelect"><button class="custom-select-trigger" type="button"><span>Choose an item</span></button><div class="custom-options">${itemOptions}</div></div></div><div class="merch-form-row"><div class="merch-field"><span class="field-label">Size</span><div class="custom-select" data-target="merchSizeSelect" id="merchSizeControl"><button class="custom-select-trigger" type="button"><span>Choose size</span></button><div class="custom-options"></div></div></div><label>Quantity<input name="quantity" id="merchQuantity" type="number" min="1" max="20" value="1"></label></div><button class="btn secondary merch-add-line" type="button">Add Item To Request</button><div class="request-list" id="requestList"><span>No items added yet.</span></div><div class="merch-field"><span class="field-label">Pickup / Payment Preference</span><div class="custom-select" data-target="merchPreferenceInput"><button class="custom-select-trigger" type="button"><span>Choose preference</span></button><div class="custom-options">${preferenceOptions}</div></div></div><label>Name<input name="name" required placeholder="Your name"></label><label>Email<input name="email" type="email" required placeholder="Your email"></label><label>Phone<input name="phone" type="tel" required placeholder="Your phone"></label><label>Notes<textarea name="message" rows="3" placeholder="Sizes for multiple items, pickup timing, or questions."></textarea></label><button class="btn" type="submit">Send Merch Request</button><p class="small">No payment is collected here. ORDS will confirm availability and next steps.</p></form></aside></div></div></section>`;
  return layout({ slug: "shop", title: "Shop | ORDS Music Academy", desc: "Shop ORDS hoodies and hats.", body });
}

function rafflePage() {
  const body = `<main class="raffle-hero"><section class="raffle-form"><form class="form" name="raffle-interest" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you" style="box-shadow:none"><input type="hidden" name="form-name" value="raffle-interest"><input type="hidden" name="subject" value="New ORDS raffle interest"><p class="hidden-field"><label>Do not fill this out: <input name="bot-field"></label></p><span class="eyebrow tag-on-light">ORDS Raffle</span><h1 style="font-size:42px;margin:18px 0 4px">iPhone Raffle Interest</h1><p><strong>Submit your information and the ORDS team will contact you with ticket details.</strong></p><label>First name<input name="first-name" placeholder="Enter your first name" required></label><label>Last name<input name="last-name" placeholder="Enter your last name" required></label><label>Email<input name="email" type="email" placeholder="Enter your email address" required></label><label>Phone<input name="phone" type="tel" placeholder="Enter your phone number" required></label><label class="checkline"><input name="mailing-list" type="checkbox" style="width:auto;margin-right:8px">Yes, add me to your mailing list.</label><div class="ticket-row"><img src="https://static.wixstatic.com/media/a51682_6507f870d6be428abf2032fae07f133c~mv2.png" alt="iPhone raffle mockup" style="width:54px;height:72px;object-fit:contain" loading="lazy" decoding="async"><div><strong>Raffle Ticket Interest</strong><br>Details confirmed by ORDS</div></div><button class="raffle-btn" type="submit" style="width:100%;margin-top:18px">Request Ticket Info</button><p class="small" style="margin-top:14px;color:#5b6377!important">No payment is collected on this page. Official rules, eligibility, deadline, and winner details should be confirmed before collecting paid entries.</p></form></section><section class="raffle-art"><div class="vertical-raffle">ORDS RAFFLE ORDS RAFFLE</div><div class="phone-stage"><div class="phone-cluster">${Array.from({ length: 6 }, () => `<img src="https://static.wixstatic.com/media/a51682_6507f870d6be428abf2032fae07f133c~mv2.png" alt="iPhone raffle" loading="lazy" decoding="async">`).join("")}</div></div></section></main>`;
  return layout({ slug: "raffle", title: "ORDS Raffle Interest", desc: "Submit raffle interest and ORDS will follow up with ticket details.", body });
}

function studioPage() {
  const body = `${hero({ eyebrow: "ORDS Studio", h1: "Create. Record.", span: "Release.", lead: "Recording, mixing, mastering, and creative audio support for artists, students, worship teams, and creatives.", image: studioImg })}
  <section class="dark"><div class="container split"><div class="image-panel reveal"><img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=75" alt="Live concert and worship production"></div><div class="reveal"><span class="eyebrow">Studio Services</span><h2 class="display-small">Audio support with intention.</h2><p class="lead">ORDS Studio helps creatives shape recordings with clarity, taste, and purpose.</p><div class="feature-list"><div class="feature-row"><span>01</span><div><strong>Recording & Production</strong><p>Creative support for artists, students, worship teams, and content.</p></div></div><div class="feature-row"><span>02</span><div><strong>Mixing - Oscar Ramos</strong><p>Balance, clarity, energy, and musical emotion for your tracks.</p></div></div><div class="feature-row"><span>03</span><div><strong>Mastering - Jorge Saenz</strong><p>Final polish, loudness, tone, and release-ready sound.</p></div></div></div><a class="btn" href="/consultation">Book Studio Consultation</a></div></div></section><section class="light"><div class="container"><div class="section-head reveal"><span class="eyebrow tag-on-light">Studio Services</span><h2>Build the right studio path.</h2><p>Tell us about your project and we will confirm the best recording, mixing, or mastering option during consultation.</p></div><div class="service-grid">${["Recording","Mixing","Mastering"].map((x) => `<div class="price-card reveal"><h3>${x}</h3><p class="muted">Project details and pricing confirmed during consultation.</p><div class="price">Consult</div></div>`).join("")}</div></div></section>${finalCta()}`;
  return layout({ slug: "ords-studio", title: "Audio Production & Recording Studio | ORDS Music School & Studio", desc: "ORDS Studio offers recording, mixing, mastering, production support, and audio learning pathways.", body, image: studioImg });
}

function simplePage(slug, title, desc, heading, message) {
  const body = `<main class="white" style="min-height:72vh;padding-top:160px"><div class="container center reveal visible"><span class="eyebrow tag-on-light">${heading}</span><h1 style="font-size:clamp(46px,7vw,88px);letter-spacing:-.06em;line-height:.95">${title}</h1><p style="font-size:20px;line-height:1.7;color:#596174;max-width:760px;margin:20px auto">${message}</p><div class="cta-row" style="justify-content:center"><a class="btn" href="/">Back Home</a><a class="btn secondary" href="/consultation">Book Consultation</a></div></div></main>`;
  return layout({ slug, title, desc, body });
}

function writePage(slug, html) {
  fs.writeFileSync(path.join(dist, slug === "index" ? "index.html" : `${slug}.html`), html);
}

cleanDist();
writePage("index", indexPage());
writePage("about", aboutPage());
writePage("classes", classesPage());
writePage("consultation", consultationPage());
writePage("shop", shopPage());
writePage("raffle", rafflePage());
writePage("ords-studio", studioPage());
programs.forEach((p) => writePage(p.slug, programPage(p)));
writePage("thank-you", simplePage("thank-you", "Thank you.", "Your ORDS request was received.", "Request Sent", "The ORDS team will follow up with you soon."));
writePage("404", simplePage("404", "Page not found.", "The requested ORDS page could not be found.", "404", "That page does not exist. Use the links below to get back to the website."));

fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
fs.writeFileSync(path.join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter((p) => p.slug !== "404").map((p) => `  <url><loc>${siteUrl}${pagePath(p.slug)}</loc></url>`).join("\n")}\n</urlset>\n`);

console.log(`Built ${pages.length} pages into ${dist}`);
