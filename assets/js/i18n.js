/*
 * Bilingual support (English / Vietnamese) for the portfolio and CV pages.
 *
 * How it works
 * ------------
 * The English text stays in the HTML, so the pages still read correctly with
 * JavaScript disabled and for search engines. This file holds the Vietnamese
 * translations, keyed by the English source string.
 *
 * To edit a translation: find the English string below and change its
 * Vietnamese value. To add a new one: copy the exact English text from the
 * page as the key.
 *
 * Strings deliberately NOT translated: game titles (they are the App Store /
 * Google Play names people search for), company names, store names, industry
 * terms (Unity Developer, gameplay, SDK, Agile / Scrum, CI / CD), URLs and
 * contact details.
 */
(() => {
  "use strict";

  const STORAGE_KEY = "site-lang";
  const DEFAULT_LANG = "en";

  const VI = {
    /* ---------- Portfolio: header ---------- */
    "Hi, thanks for visiting my portfolio!": "Xin chào, cảm ơn bạn đã ghé qua portfolio của mình!",
    "I am Long Ngo, a Unity Developer shipping 2D and 3D mobile games":
      "Mình là Long Ngo, Unity Developer phát hành game mobile 2D và 3D",
    "on Android and iOS since 2021.":
      "trên Android và iOS từ năm 2021.",
    "Here you can find the titles I have worked on and what I do.":
      "Tại đây bạn có thể xem các tựa game mình đã tham gia và công việc mình làm.",
    "Feel free to contact me if you have any questions or want to work together.":
      "Đừng ngần ngại liên hệ nếu bạn có câu hỏi hoặc muốn hợp tác.",

    /* ---------- Portfolio: summary ---------- */
    "Summary & Career Objective": "Giới thiệu & Định hướng nghề nghiệp",
    "Unity Developer shipping 2D and 3D mobile games since 2021, across hyper-casual, hybrid-casual and puzzle genres — covering gameplay development, SDK integration, Android and iOS releases, performance optimization and codebase modularization.":
      "Unity Developer phát hành game mobile 2D và 3D từ năm 2021, thuộc các thể loại hyper-casual, hybrid-casual và puzzle — bao gồm phát triển gameplay, tích hợp SDK, phát hành trên Android và iOS, tối ưu hiệu năng và module hoá codebase.",
    "Focused on maintainable systems and smooth player experiences across a wide range of mobile devices. Comfortable profiling and fixing FPS, memory, crash and ANR issues, and on mentoring junior developers through code review and technical guidance.":
      "Tập trung vào việc xây dựng hệ thống dễ bảo trì và trải nghiệm mượt mà trên nhiều dòng thiết bị di động. Thành thạo profiling và xử lý các vấn đề về FPS, memory, crash và ANR, đồng thời hướng dẫn junior developer qua code review và định hướng kỹ thuật.",
    "With prior experience as a Product Owner, I bring a strong understanding of product thinking, development workflows, and cross-functional collaboration.":
      "Với kinh nghiệm từng làm Product Owner, mình có hiểu biết vững về tư duy sản phẩm, quy trình phát triển và phối hợp giữa các bộ phận.",
    "I aim to contribute not only from a technical perspective but also in shaping product direction and ensuring successful delivery of game projects from both development and business standpoints.":
      "Mình mong muốn đóng góp không chỉ ở góc độ kỹ thuật mà còn trong việc định hình hướng đi của sản phẩm và bảo đảm dự án game được hoàn thành thành công trên cả phương diện phát triển lẫn kinh doanh.",
    "View Full CV": "Xem CV đầy đủ",

    /* ---------- Portfolio: technical skills ---------- */
    "Technical Skills": "Kỹ năng chuyên môn",
    "Engine & Programming": "Engine & Lập trình",
    "Performance & Delivery": "Hiệu năng & Phát hành",
    "Workflow & Collaboration": "Quy trình & Phối hợp",
    "Android and iOS release builds": "Build phát hành Android và iOS",
    "Mentoring and technical guidance": "Mentoring và định hướng kỹ thuật",
    "Languages:": "Ngôn ngữ:",
    "Vietnamese (native) · English (advanced reading, basic communication)":
      "Tiếng Việt (bản ngữ) · Tiếng Anh (đọc hiểu tốt, giao tiếp cơ bản)",

    /* ---------- Portfolio: freelance ---------- */
    "Open to Freelance & Outsourcing": "Nhận Freelance & Outsourcing",
    "Alongside full-time roles, I am available for": "Song song với công việc full-time, mình nhận",
    "freelance and outsourcing work": "công việc freelance và outsourcing",
    "— whether that is building a game from scratch, joining an existing project as an extra pair of hands, or taking on a focused piece of work such as performance optimization, SDK integration or playable ads.":
      "— từ việc xây dựng một tựa game từ đầu, tham gia hỗ trợ một dự án đang chạy, cho đến nhận những phần việc cụ thể như tối ưu hiệu năng, tích hợp SDK hoặc làm playable ads.",
    "I am comfortable working remotely with distributed teams, and open to short one-off tasks, fixed-scope projects and longer-term part-time engagements. Tell me what you need and I will let you know honestly whether I am the right fit.":
      "Mình quen làm việc remote với các team phân tán, và nhận cả những task ngắn, dự án có phạm vi cố định lẫn hợp tác part-time dài hạn. Hãy cho mình biết bạn cần gì, mình sẽ trả lời thẳng thắn liệu mình có phù hợp hay không.",

    /* ---------- Portfolio: projects ---------- */
    "Selected Projects": "Dự án tiêu biểu",
    "For more detail please click view project.": "Nhấn vào từng dự án để xem chi tiết.",
    "A soothing puzzle journey where vibrant yarns and satisfying logic come together to create pixel-perfect masterpieces.":
      "Một hành trình giải đố nhẹ nhàng, nơi những cuộn len rực rỡ và logic thoả mãn kết hợp tạo nên các tác phẩm hoàn hảo đến từng pixel.",
    "Dive into a colorful world filled with soft textures and creative challenges.":
      "Bước vào thế giới đầy màu sắc với chất liệu mềm mại và những thử thách sáng tạo.",
    "Your daily dose of cuteness! This game will bring to you oddly satisfying moments through dedicated gameplay and graphics!":
      "Liều thuốc đáng yêu mỗi ngày! Tựa game mang đến những khoảnh khắc thoả mãn kỳ lạ qua gameplay và hình ảnh được chăm chút tỉ mỉ!",
    "Purchase the balls and see your gold going up to the moon in this ASMR game.":
      "Mua thêm bóng và ngắm số vàng của bạn tăng vọt trong tựa game ASMR này.",
    "How far can you climb? To infinity and beyond!":
      "Bạn có thể leo cao đến đâu? Đến vô cực và xa hơn nữa!",
    "This is a water sorting puzzle game that you will love! It is simple to play, but it will challenge your brain and make you think hard.":
      "Một tựa game giải đố phân loại nước mà bạn sẽ yêu thích! Dễ chơi nhưng đủ sức thử thách trí não của bạn.",
    "Combine your favorite internet animal memes and watch them transform into wild, wacky, and totally unexpected meme creatures.":
      "Kết hợp những meme động vật yêu thích trên internet và xem chúng biến thành các sinh vật meme kỳ quái, hài hước và cực khó đoán.",
    "A simplistic roguelite endless runner. You have to quickly make decisions on which power-up to pick and whether to skip or fight a monster.":
      "Một tựa endless runner roguelite tối giản. Bạn phải nhanh chóng quyết định chọn power-up nào và nên bỏ qua hay chiến đấu với monster.",
    "It's more of a tower than a castle, but it's yours to defend in this intense tower defense game.":
      "Nó giống một toà tháp hơn là lâu đài, nhưng vẫn là thứ bạn phải bảo vệ trong tựa game tower defense đầy căng thẳng này.",
    "Ever wondered what's hiding beneath your backyard?":
      "Bạn có bao giờ tự hỏi điều gì đang ẩn dưới sân sau nhà mình?",
    "A relaxing yet clever puzzle game where observation and logic combine to create a fun brain challenge.":
      "Một tựa game giải đố thư giãn nhưng thông minh, nơi khả năng quan sát và tư duy logic kết hợp thành thử thách trí não thú vị.",
    "Look closely at the characters, discover their shared traits, and group them together to complete each puzzle!":
      "Quan sát kỹ các nhân vật, tìm ra đặc điểm chung và nhóm chúng lại để hoàn thành từng câu đố!",
    "Additional Shipped Titles": "Các tựa game đã phát hành khác",
    "Earlier commercial releases from PocketSized Team and Hapiga Studio.":
      "Các sản phẩm thương mại phát hành trước đây tại PocketSized Team và Hapiga Studio.",

    /* ---------- Portfolio: contact ---------- */
    "Get In Touch": "Liên hệ",
    "Feel free to reach out if you're interested in working together or would like to connect.":
      "Hãy liên hệ với mình nếu bạn muốn hợp tác hoặc chỉ đơn giản là muốn kết nối.",
    "Address": "Địa chỉ",
    "Name": "Họ và tên",
    "Message": "Nội dung",
    "Send Message": "Gửi tin nhắn",
    "Original Design:": "Thiết kế gốc:",

    /* ---------- CV: controls ---------- */
    "Dark theme": "Giao diện tối",
    "Light theme": "Giao diện sáng",
    "Print / Save as PDF": "In / Lưu thành PDF",
    "Document controls": "Điều khiển tài liệu",
    "Print or save this CV as PDF": "In hoặc lưu CV này thành PDF",
    "Switch to dark theme": "Chuyển sang giao diện tối",
    "Switch to light theme": "Chuyển sang giao diện sáng",
    "Contact details and technical skills": "Thông tin liên hệ và kỹ năng chuyên môn",

    /* ---------- CV: sidebar ---------- */
    "Contact": "Liên hệ",
    "Phone": "Điện thoại",
    "Location": "Địa điểm",
    "Ho Chi Minh City, Vietnam": "TP. Hồ Chí Minh, Việt Nam",
    "Core Expertise": "Chuyên môn chính",
    "C# and Unity": "C# và Unity",
    "2D / 3D gameplay systems": "Hệ thống gameplay 2D / 3D",
    "Mobile game optimization": "Tối ưu hiệu năng game mobile",
    "Memory, FPS, crash and ANR analysis": "Phân tích memory, FPS, crash và ANR",
    "Android and iOS delivery": "Phát hành Android và iOS",
    "Unity UI and animation": "Unity UI và animation",
    "Spine and Shader Graph": "Spine và Shader Graph",
    "Unity Editor tooling": "Xây dựng tool cho Unity Editor",
    "Playable Ads with Luna": "Playable Ads với Luna",
    "Asynchronous programming (async / await, coroutines)":
      "Lập trình bất đồng bộ (async / await, coroutines)",
    "Git workflows and code review": "Quy trình Git và code review",
    "Azure DevOps and CI / CD pipelines": "Azure DevOps và CI / CD pipeline",
    "Agile / Scrum workflows": "Quy trình Agile / Scrum",
    "AI tool / agent assisted workflows": "Quy trình làm việc với AI tool / agent",
    "SDKs & Services": "SDK & Dịch vụ",
    "Ad mediation SDKs": "SDK ad mediation",
    "Mobile analytics": "Analytics cho mobile",
    "Languages": "Ngôn ngữ",
    "Vietnamese": "Tiếng Việt",
    "Native": "Bản ngữ",
    "English": "Tiếng Anh",
    "Advanced reading; basic communication": "Đọc hiểu tốt; giao tiếp cơ bản",

    /* ---------- CV: summary and experience ---------- */
    "Unity Developer shipping 2D and 3D mobile games since 2021, across hyper-casual, hybrid-casual and puzzle genres. Experienced in gameplay development, SDK integration, Android and iOS releases, performance optimization, codebase modularization and developer mentoring. Focused on building maintainable systems and smooth player experiences across a wide range of mobile devices.":
      "Unity Developer phát hành game mobile 2D và 3D từ năm 2021, thuộc các thể loại hyper-casual, hybrid-casual và puzzle. Có kinh nghiệm phát triển gameplay, tích hợp SDK, phát hành trên Android và iOS, tối ưu hiệu năng, module hoá codebase và hướng dẫn developer. Tập trung xây dựng hệ thống dễ bảo trì và mang lại trải nghiệm mượt mà trên nhiều dòng thiết bị di động.",
    "Experience": "Kinh nghiệm làm việc",
    "Aug 2022 - May 2026": "08/2022 - 05/2026",
    "May 2021 - Aug 2021": "05/2021 - 08/2021",
    "Developer, Mentor and Sub-Lead | 2024 - 2026": "Developer, Mentor và Sub-Lead | 2024 - 2026",
    "Profiled and optimized FPS, memory usage, crashes and ANRs to improve stability and gameplay quality on mobile devices.":
      "Profiling và tối ưu FPS, mức sử dụng memory, crash và ANR để cải thiện độ ổn định cũng như chất lượng gameplay trên thiết bị di động.",
    "Refactored production code into reusable modules, improving maintainability and development efficiency across projects.":
      "Refactor code production thành các module tái sử dụng, giúp tăng khả năng bảo trì và hiệu quả phát triển trên nhiều dự án.",
    "Mentored junior developers through code reviews, debugging support and technical guidance.":
      "Hướng dẫn junior developer thông qua code review, hỗ trợ debug và định hướng kỹ thuật.",
    "Developed playable ads with Luna and collaborated with the user-acquisition team on creative production.":
      "Phát triển playable ads bằng Luna và phối hợp với team user acquisition trong quá trình sản xuất creative.",
    "Evaluated and applied AI-assisted workflows to accelerate development while maintaining engineering review and quality control.":
      "Đánh giá và áp dụng các quy trình có hỗ trợ của AI để tăng tốc phát triển, đồng thời vẫn duy trì review kỹ thuật và kiểm soát chất lượng.",
    "Developed gameplay and supporting systems for commercial 2D and 3D mobile titles across hyper-casual, hybrid-casual and puzzle genres.":
      "Phát triển gameplay và các hệ thống hỗ trợ cho các tựa game mobile 2D và 3D thương mại thuộc thể loại hyper-casual, hybrid-casual và puzzle.",
    "Integrated monetization and analytics SDKs, including ad mediation, Firebase and Adjust.":
      "Tích hợp các SDK monetization và analytics, bao gồm ad mediation, Firebase và Adjust.",
    "Diagnosed build and release issues and supported reliable publishing workflows for Android and iOS.":
      "Xử lý các vấn đề về build và release, hỗ trợ quy trình phát hành ổn định trên Android và iOS.",
    "Collaborated with artists, designers and product stakeholders to turn gameplay requirements into production-ready features.":
      "Phối hợp với artist, designer và các bên liên quan để chuyển yêu cầu gameplay thành tính năng hoàn chỉnh.",
    "Unity Developer Intern": "Thực tập sinh Unity Developer",
    "Developed gameplay features for 2D hyper-casual and casual mobile games using Unity and C#.":
      "Phát triển tính năng gameplay cho các game mobile 2D hyper-casual và casual bằng Unity và C#.",
    "Contributed to shipped titles including Bandit Hero, Tuber Rescue and Tower Quest: Epic Heroes.":
      "Tham gia phát triển các tựa game đã phát hành gồm Bandit Hero, Tuber Rescue và Tower Quest: Epic Heroes.",

    /* ---------- CV: project list ---------- */
    "Complete Shipped Project List": "Danh sách đầy đủ dự án đã phát hành",
    "Unity Developer | Mobile puzzle game": "Unity Developer | Game puzzle mobile",
    "Unity Developer | Satisfying casual game": "Unity Developer | Game casual satisfying",
    "Unity Developer | 3D casual game": "Unity Developer | Game casual 3D",
    "Unity Developer | 3D runner": "Unity Developer | Game runner 3D",
    "Unity Developer | Roguelite runner": "Unity Developer | Game runner roguelite",
    "Unity Developer | Mobile merge puzzle": "Unity Developer | Game merge puzzle mobile",
    "Screenshots and additional store links are available on the":
      "Ảnh chụp màn hình và các link store khác có trong",
    "full portfolio": "portfolio đầy đủ",

    /* ---------- CV: education and footer ---------- */
    "Education & Certification": "Học vấn & Chứng chỉ",
    "HUTECH University of Technology": "Đại học Công nghệ TP.HCM (HUTECH)",
    "University studies": "Chương trình đại học",
    "Game Developer Program": "Chương trình Lập trình Game",
    "References and further project details are available upon request. Commercial source code is subject to employer confidentiality.":
      "Thông tin người tham chiếu và chi tiết dự án có thể cung cấp khi được yêu cầu. Source code thương mại thuộc phạm vi bảo mật của công ty.",

    /* ---------- Page titles and meta ---------- */
    "Long Ngo Portfolio": "Portfolio của Long Ngo",
    "Ngo Bao Long | Unity Developer": "Ngo Bao Long | Unity Developer",
    "Ngo Bao Long - Unity Developer building mobile games since 2021.":
      "Ngo Bao Long - Unity Developer phát triển game mobile từ năm 2021.",

    /* ---------- The language button itself ---------- */
    "Switch to Vietnamese": "Chuyển sang tiếng Anh"
  };

  const normalize = (text) =>
    text
      .trim()
      .replace(/\s+/g, " ")
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"');

  const translate = (text, lang) => {
    if (lang !== "vi") return text;
    const hit = VI[normalize(text)];
    return hit === undefined ? text : hit;
  };

  /* Attributes that carry user-visible text. */
  const ATTRIBUTES = ["aria-label", "placeholder", "title", "alt"];

  let textNodes = [];
  let attrNodes = [];
  let currentLang = DEFAULT_LANG;

  const readStoredLang = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === "vi" || saved === "en" ? saved : null;
    } catch (error) {
      return null;
    }
  };

  const storeLang = (lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* Language switching still works without persistence. */
    }
  };

  /* Collect every translatable node once, keeping the English original. */
  const collect = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest("script, style, [data-i18n-skip]")) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    let node;
    while ((node = walker.nextNode())) {
      const original = node.nodeValue;
      if (VI[normalize(original)] === undefined) continue; // nothing to swap, skip forever
      textNodes.push({
        node,
        original,
        lead: original.match(/^\s*/)[0],
        tail: original.match(/\s*$/)[0]
      });
    }

    document.querySelectorAll("*").forEach((el) => {
      if (el.closest("[data-i18n-skip]")) return;
      ATTRIBUTES.forEach((attr) => {
        const value = el.getAttribute(attr);
        if (value && VI[normalize(value)] !== undefined) {
          attrNodes.push({ el, attr, original: value });
        }
      });
      if (el.tagName === "INPUT" && el.type === "submit") {
        const value = el.value;
        if (value && VI[normalize(value)] !== undefined) {
          attrNodes.push({ el, attr: "value", original: value });
        }
      }
    });
  };

  const apply = (lang) => {
    currentLang = lang === "vi" ? "vi" : "en";

    textNodes.forEach(({ node, original, lead, tail }) => {
      node.nodeValue =
        currentLang === "vi"
          ? lead + translate(normalize(original), "vi") + tail
          : original;
    });

    attrNodes.forEach(({ el, attr, original }) => {
      const next = currentLang === "vi" ? translate(normalize(original), "vi") : original;
      if (attr === "value") el.value = next;
      else el.setAttribute(attr, next);
    });

    document.documentElement.lang = currentLang;

    /* Title and meta description are outside <body>. */
    if (originalTitle) document.title = translate(originalTitle, currentLang);
    if (metaDescription && originalDescription) {
      metaDescription.setAttribute("content", translate(originalDescription, currentLang));
    }

    updateButton();
    document.dispatchEvent(new CustomEvent("i18n:change", { detail: { lang: currentLang } }));
  };

  let originalTitle = "";
  let metaDescription = null;
  let originalDescription = "";
  let button = null;

  const updateButton = () => {
    if (!button) return;
    /* The button always offers the *other* language. */
    button.textContent = currentLang === "vi" ? "English" : "Tiếng Việt";
    button.setAttribute(
      "aria-label",
      currentLang === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt"
    );
    button.setAttribute("lang", currentLang === "vi" ? "en" : "vi");
  };

  const buildButton = () => {
    button = document.createElement("button");
    button.type = "button";
    button.id = "lang-toggle";
    button.setAttribute("data-i18n-skip", "");

    const toolbar = document.querySelector(".toolbar");
    if (toolbar) {
      /* CV page: sit alongside the existing controls and inherit their look. */
      button.className = "theme-button";
      toolbar.insertBefore(button, toolbar.firstChild);
    } else {
      /* Portfolio page: floating control in the top corner. */
      button.className = "lang-toggle";
      document.body.appendChild(button);
    }

    button.addEventListener("click", () => {
      const next = currentLang === "vi" ? "en" : "vi";
      storeLang(next);
      apply(next);
    });
  };

  const init = () => {
    originalTitle = document.title;
    metaDescription = document.querySelector('meta[name="description"]');
    originalDescription = metaDescription ? metaDescription.getAttribute("content") : "";

    collect();
    buildButton();
    apply(readStoredLang() || DEFAULT_LANG);
  };

  /* Expose a small API so page scripts can stay in sync. */
  window.I18N = {
    get lang() {
      return currentLang;
    },
    t: (text) => translate(text, currentLang)
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
