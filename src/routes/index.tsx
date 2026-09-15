import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "吳政穎 Arz｜系統開發・AI 自動化・LINE 與企業系統整合",
      },
      {
        name: "description",
        content:
          "吳政穎 Arz，20+ 年系統開發與企業整合經驗，累積 90+ 項專案，專長 PHP、MySQL、API、金流、LINE OA、n8n 與 AI 自動化，提供系統開發、技術顧問與實作教學。",
      },
      {
        property: "og:title",
        content: "吳政穎 Arz｜系統開發・AI 自動化・LINE 與企業系統整合",
      },
      {
        property: "og:description",
        content:
          "20+ 年系統開發與企業整合經驗，累積 90+ 項專案，專長 PHP、MySQL、API、金流、LINE OA、n8n 與 AI 自動化。",
      },
      { name: "twitter:title", content: "吳政穎 Arz｜系統開發・AI 自動化" },
      {
        name: "twitter:description",
        content:
          "20+ 年系統開發與企業整合經驗，提供系統開發、技術顧問與實作教學。",
      },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "關於我", href: "#about" },
  { label: "核心能力", href: "#expertise" },
  { label: "經歷", href: "#experience" },
  { label: "案例", href: "#work" },
  { label: "教學", href: "#teaching" },
  { label: "聯絡", href: "#contact" },
];

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-lime selection:text-ink antialiased">
      {/* Top bar */}
      <div className="border-b border-dashed border-ink/30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 text-[11px] tracking-widest sm:px-6">
          <div className="flex items-center gap-2">
            <span className="inline-block size-2.5 bg-lime" />
            <span className="font-bold">ARZ.WU</span>
            <span className="text-ink/40">/ SYSTEM · AI · INTEGRATION</span>
          </div>
          <div className="hidden items-center gap-5 text-ink/70 sm:flex">
            <span className="flex items-center gap-1.5">
              <span className="inline-block size-1.5 animate-blip rounded-full bg-ink" />
              AVAILABLE
            </span>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#work");
              }}
              className="font-bold hover:text-ink"
            >
              WORK ↗
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="font-bold hover:text-ink"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>

      {/* Sticky navigation */}
      <header
        className={`sticky top-0 z-40 border-b transition-colors ${
          scrolled
            ? "border-dashed border-ink/30 bg-paper/95 backdrop-blur"
            : "border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#top");
            }}
            className="font-display text-sm font-bold tracking-tight"
          >
            吳政穎 Arz
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="px-3 py-1.5 text-xs font-bold text-ink/70 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex size-9 items-center justify-center border border-ink md:hidden"
            aria-label={mobileOpen ? "關閉選單" : "開啟選單"}
          >
            {mobileOpen ? (
              <X className="size-4" />
            ) : (
              <Menu className="size-4" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-b border-dashed border-ink/30 bg-paper md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="py-3 text-sm font-bold text-ink/70 hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid lg:grid-cols-2">
            {/* Left intro */}
            <div className="py-12 pr-0 lg:py-20 lg:pr-12 lg:border-r lg:border-dashed lg:border-ink/30">
              <div className="mb-6 flex items-center gap-2 text-[11px] text-ink/50 sm:mb-8">
                <span>&gt;_</span>
                <span>intro — v2.6</span>
              </div>

              <h1 className="font-display text-[2.6rem] font-extrabold leading-[0.95] tracking-tight sm:text-[3.4rem]">
                吳政穎
                <br />
                <span className="text-ink/80">Arz</span>
                <span className="animate-caret text-lime">_</span>
              </h1>

              <h2 className="mt-4 font-display text-lg font-semibold tracking-tight text-ink/80 sm:text-xl">
                系統開發 × AI 自動化 × 數位整合
              </h2>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/70 sm:mt-7">
                20+ 年系統實戰經驗，從企業後台、金流、API 到 LINE 與 AI 自動化，
                把複雜需求整理成真正能上線、能使用、能持續運作的系統。
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 text-[12px] sm:gap-4">
                <div>
                  <div className="font-display text-2xl font-bold">20+</div>
                  <div className="text-ink/50">年系統開發經驗</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold">90+</div>
                  <div className="text-ink/50">跨產業專案經驗</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold">10+</div>
                  <div className="text-ink/50">年企業系統維運</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold">多領域</div>
                  <div className="text-ink/50">金融 / 品牌 / 電商 / 教育</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#work");
                  }}
                  className="inline-flex items-center gap-1 bg-ink px-5 py-3 text-[12px] font-bold tracking-wide text-paper transition-colors hover:bg-lime hover:text-ink"
                >
                  看代表案例
                  <ArrowUpRight className="size-3.5" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="inline-flex items-center gap-1 border border-ink px-5 py-3 text-[12px] font-bold tracking-wide transition-colors hover:bg-ink hover:text-paper"
                >
                  洽談合作
                </a>
              </div>
            </div>

            {/* Right terminal — AI quick intro */}
            <div className="relative py-8 lg:py-14">
              <div className="animate-float absolute right-4 top-10 z-10 bg-lime px-3 py-2 text-[10px] font-bold tracking-widest text-ink shadow-[3px_3px_0_0_var(--color-ink)] sm:right-6 sm:top-16">
                AI ASSISTANT: ONLINE
              </div>

              <div className="mt-2 overflow-hidden rounded-lg border border-ink bg-ink text-paper lg:mt-10">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
                  <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="size-2.5 rounded-full bg-[#febc2e]" />
                  <span className="size-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-[10px] tracking-widest text-white/40">
                    ~/arz-wu — zsh
                  </span>
                </div>
                <div className="p-5 text-[12px] leading-loose">
                  <div className="text-white/40">$ whoami</div>
                  <div className="text-lime">arz_wu · system developer & AI integrator</div>

                  <div className="mt-3 text-white/40">
                    $ ask --model "用三句話介紹吳政穎"
                  </div>
                  <div className="text-white/90">
                    → 20+ 年系統開發實戰，從後台、金流、API 到 AI 自動化。
                  </div>
                  <div className="text-white/90">
                    → 擅長把說不清楚的需求，整理成可上線的系統。
                  </div>
                  <div className="text-white/90">
                    → 現在也協助企業與個人把 AI 真正帶進工作流程。
                  </div>

                  <div className="mt-3 text-white/40">$ skills --top</div>
                  <div className="mt-1 space-y-1.5">
                    <SkillBar label="PHP / MySQL" value={95} />
                    <SkillBar label="API / 金流整合" value={92} />
                    <SkillBar label="LINE OA / n8n" value={88} />
                    <SkillBar label="AI / LLM 應用" value={85} />
                  </div>

                  <div className="mt-4 text-white/40">
                    $<span className="animate-caret text-lime">█</span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-[11px] text-ink/40">
                這個終端機就是「AI 快速認識我」的小互動
              </p>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="border-y border-dashed border-ink/30">
          <div className="flex overflow-hidden py-3">
            <div className="animate-marquee flex shrink-0 gap-8 whitespace-nowrap text-[11px] tracking-[0.2em] text-ink/50">
              {Array.from({ length: 2 }).map((_, i) => (
                <span key={i} className="flex gap-8">
                  <span>PHP</span>
                  <span>·</span>
                  <span>MYSQL</span>
                  <span>·</span>
                  <span>API</span>
                  <span>·</span>
                  <span>金流</span>
                  <span>·</span>
                  <span>LINE OA</span>
                  <span>·</span>
                  <span>n8n</span>
                  <span>·</span>
                  <span>AI</span>
                  <span>·</span>
                  <span>LLM</span>
                  <span>·</span>
                  <span>RAG</span>
                  <span>·</span>
                  <span>系統整合</span>
                  <span>·</span>
                  <span>技術顧問</span>
                  <span>·</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="mb-8 flex items-center gap-2 text-[11px] text-ink/50">
            <span>&gt;_</span>
            <span>about — profile</span>
          </div>

          <h2 className="max-w-[22ch] font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            我做的事情，從來不只是寫程式
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5 text-sm leading-relaxed text-ink/70">
              <p>
                我是吳政穎，大家也叫我阿茲。
              </p>
              <p>
                從早期企業網站、簡訊平台、APP 與電商系統，到後來的支付、CRM、API、金融科技與流程自動化，我長期處理的都是企業真正會遇到的系統問題。
              </p>
              <p>
                我的工作習慣，是先把需求、流程與資料關係釐清，再決定技術怎麼做。這讓我可以同時站在使用者、企業與工程端思考，將原本零散或說不清楚的需求，整理成可以執行的系統。
              </p>
              <p>
                近年進一步投入 AI、n8n、LINE 官方帳號與 LLM 應用，也開始將多年系統實務轉成教學內容，協助企業與一般使用者把 AI 真正帶進工作流程。
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="mb-4 text-[11px] text-ink/40">TAGS</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "系統架構",
                    "PHP / MySQL",
                    "API 串接",
                    "金流整合",
                    "LINE OA",
                    "n8n",
                    "AI 應用",
                    "技術顧問",
                    "實作教學",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="border border-ink/30 px-3 py-1 text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-4 text-[11px] text-ink/40">INFO</div>
                <ul className="space-y-2 text-sm text-ink/70">
                  <li className="flex gap-3">
                    <span className="w-16 text-ink/40">學歷</span>
                    <span>國立臺灣海洋大學 機械工程學系</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-16 text-ink/40">現職</span>
                    <span>造雨人科技｜系統開發、技術顧問、AI 應用與教學</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-16 text-ink/40">地區</span>
                    <span>台中</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Expertise */}
        <section id="expertise" className="border-t border-dashed border-ink/30">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <div className="mb-3 flex items-center gap-2 text-[11px] text-ink/50">
                  <span>&gt;_</span>
                  <span>expertise — modules</span>
                </div>
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                  核心能力
                </h2>
              </div>
              <span className="hidden text-[11px] text-ink/40 sm:inline">
                04 modules
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <ExpertiseCard
                number="01"
                title="企業系統與後端開發"
                items={[
                  "PHP / MySQL 後端系統",
                  "REST API / Webhook",
                  "會員、訂單、權限、後台管理",
                  "資料庫設計與商業邏輯",
                  "系統維運與既有系統改造",
                ]}
              />
              <ExpertiseCard
                number="02"
                title="金流與企業系統整合"
                items={[
                  "虛擬帳號",
                  "eDDA / eACH",
                  "第三方支付與 SDK",
                  "AML / 風控 API",
                  "Salesforce CRM API",
                  "電子發票、簡訊與外部服務串接",
                ]}
              />
              <ExpertiseCard
                number="03"
                title="AI 與流程自動化"
                items={[
                  "ChatGPT / Gemini / LLM 應用",
                  "n8n 工作流自動化",
                  "LINE Messaging API / LINE OA",
                  "AI + 資料庫 / API 整合",
                  "客服、報名、通知與行政流程自動化",
                ]}
              />
              <ExpertiseCard
                number="04"
                title="顧問與教學"
                items={[
                  "需求分析與系統規劃",
                  "技術與非技術團隊溝通",
                  "AI 工具實作教學",
                  "Vibe Coding",
                  "AI / LINE / 自動化工作流課程",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-t border-dashed border-ink/30">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-[11px] text-ink/50">
                <span>&gt;_</span>
                <span>experience — timeline</span>
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                經歷主軸
              </h2>
              <p className="mt-2 max-w-xl text-sm text-ink/60">
                不做逐年流水帳，只保留能說明能力演進的重要階段。
              </p>
            </div>

            <div className="relative space-y-8 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-ink/20 sm:before:left-1/2 sm:before:-translate-x-1/2 lg:space-y-0">
              <TimelineItem
                period="2003–2004"
                title="企業 MIS / 網管與 ERP 導入"
                items={[
                  "企業內部網路與系統管理",
                  "ASP 程式開發與系統整合",
                  "鼎新 ERP 導入與跨部門流程協作",
                ]}
                side="left"
              />
              <TimelineItem
                period="2005–2012"
                title="網站、後台與客製系統開發"
                items={[
                  "開始長期承接企業網站、後台與商務系統",
                  "累積跨產業需求分析、資料庫與系統開發經驗",
                ]}
                side="right"
              />
              <TimelineItem
                period="2013–2022"
                title="企業級平台與長期維運"
                items={[
                  "建置 MBOX / 企業簡訊發送平台並長期維運",
                  "參與 CASIO 台灣官網、客服與企業系統整合",
                  "開發票務、電商、APP、IoT、RFID、Chatbot 等專案",
                ]}
                side="left"
              />
              <TimelineItem
                period="2023–2025"
                title="FinTech、支付與企業 API"
                items={[
                  "虛擬帳號 + eACH 代收 API",
                  "eDDA 票交所線上授權",
                  "Dow Jones AML API",
                  "MG PAY 改版與全盈+Pay SDK 整合",
                  "Salesforce CRM API",
                ]}
                side="right"
              />
              <TimelineItem
                period="2025–現在"
                title="AI、自動化與實作教學"
                items={[
                  "n8n × LLM 工作流",
                  "LINE OA / LINE API 自動化",
                  "AI 工作應用與個別教學",
                  "國立臺南大學 n8n × LLM 教學工作坊",
                  "Vibe Coding 手把手實作課",
                ]}
                side="left"
              />
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="border-t border-dashed border-ink/30">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <div className="mb-3 flex items-center gap-2 text-[11px] text-ink/50">
                  <span>&gt;_</span>
                  <span>selected_work — cases</span>
                </div>
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                  精選代表案例
                </h2>
              </div>
              <span className="hidden text-[11px] text-ink/40 sm:inline">
                06 cases
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <WorkCard
                number="01"
                category="FinTech / API / 金流整合"
                title="金融科技與支付系統"
                description="整合虛擬帳號、eACH、eDDA、支付 SDK 與 AML API，處理付款、授權、風控與帳務流程。"
                capability="複雜商業邏輯、交易流程、API 串接、資料一致性"
              />
              <WorkCard
                number="02"
                category="品牌官網 / CRM / 長期維運"
                title="CASIO 台灣企業系統"
                description="參與台灣官網、客服系統與 Salesforce CRM API 串接，累積超過 10 年的企業合作與系統維運經驗。"
                capability="企業需求溝通、既有系統維運、跨系統整合"
              />
              <WorkCard
                number="03"
                category="SaaS / 高量資料 / 長期維運"
                title="MBOX 企業簡訊平台"
                description="建置企業簡訊發送與後台管理平台，處理大量發送、排程、紀錄查詢與長期系統維護。"
                capability="後端架構、Queue / Worker、資料庫效能、營運系統維護"
              />
              <WorkCard
                number="04"
                category="票務 / 金流 / QR Code"
                title="大型活動票務與金流"
                description="建置大型活動訂票、付款、票券與驗證流程，整合虛擬 ATM、發票與 QR Code 應用。"
                capability="高流量流程、金流整合、票務邏輯與異常處理"
              />
              <WorkCard
                number="05"
                category="IoT / 倉儲 / 資料整合"
                title="RFID 冷倉管理系統"
                description="將 RFID 硬體資料與後台管理流程串接，建立冷倉管理與追蹤系統。"
                capability="軟硬體整合、資料流程、跨領域系統設計"
              />
              <WorkCard
                number="06"
                category="AI / LINE / n8n / Workflow"
                title="AI + LINE OA 自動化"
                description="以 LINE 作為使用入口，串接 AI、Webhook、資料庫與 n8n，自動完成資料蒐集、通知、客服、報名或營運流程。"
                capability="AI 應用落地、流程設計、自動化與使用者介面整合"
              />
            </div>
          </div>
        </section>

        {/* Teaching & Consulting */}
        <section id="teaching" className="border-t border-dashed border-ink/30">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-[11px] text-ink/50">
                <span>&gt;_</span>
                <span>teaching — share</span>
              </div>
              <h2 className="max-w-[24ch] font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                把技術講到能理解，也帶到真的做得出來
              </h2>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-5 text-sm leading-relaxed text-ink/70">
                <p>
                  除了系統開發，我也將實務經驗整理成可操作的教學內容。
                </p>
                <p>
                  授課方式以「示範 → 跟做 → 完成作品」為主，特別重視零基礎學員在真實操作時遇到的問題，而不是只介紹工具功能。
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="mb-4 text-[11px] text-ink/40">TEACHING</div>
                  <ul className="space-y-3 text-sm text-ink/70">
                    <li className="flex gap-3">
                      <span className="text-lime">→</span>
                      <span>國立臺南大學｜n8n × LLM 串接教學工作坊</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-lime">→</span>
                      <span>Vibe Coding 手把手實戰班｜從零完成 LINE OA 預約系統</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-lime">→</span>
                      <span>ChatGPT / AI 工作應用個別教學</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-lime">→</span>
                      <span>幼兒園 / 國小程式設計與科學社講師</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="mb-4 text-[11px] text-ink/40">TOPICS</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "ChatGPT / Gemini 工作應用",
                      "NotebookLM 資料整理",
                      "AI 圖文與簡報",
                      "LINE OA 建置與應用",
                      "n8n / AI 自動化",
                      "Vibe Coding",
                      "中小企業 AI 工作流程設計",
                    ].map((topic) => (
                      <span
                        key={topic}
                        className="border border-ink/30 px-3 py-1 text-[11px]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Me */}
        <section className="border-t border-dashed border-ink/30">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-[11px] text-ink/50">
                <span>&gt;_</span>
                <span>why_me — value</span>
              </div>
              <h2 className="max-w-[24ch] font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                我能處理的，是「技術」和「現場」中間那一段
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <ValueCard
                number="01"
                title="懂開發"
                description="能直接進入程式、資料庫、API 與系統架構。"
              />
              <ValueCard
                number="02"
                title="懂流程"
                description="會先整理使用者、資料與作業流程，再開始做系統。"
              />
              <ValueCard
                number="03"
                title="懂整合"
                description="有金流、CRM、LINE、簡訊、IoT、AI 等跨系統串接經驗。"
              />
              <ValueCard
                number="04"
                title="懂溝通"
                description="可以和老闆、使用者、PM、設計師與工程師用不同語言把事情說清楚。"
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-dashed border-ink/30">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
            <div className="border border-ink bg-paper p-6 sm:p-10 lg:p-14">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-[11px] text-ink/50">
                    <span>&gt;_</span>
                    <span>contact — start</span>
                  </div>
                  <h2 className="max-w-[16ch] font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                    有一個流程想改善，或一個系統想做出來？
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/70">
                    不需要先把技術規格想完整。把目前的問題、使用情境與你希望做到的結果告訴我，我可以先協助整理成可執行的方向。
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="mb-3 text-[11px] text-ink/40">合作類型</div>
                    <ul className="grid gap-2 text-sm text-ink/70 sm:grid-cols-2">
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 bg-lime" />
                        系統開發 / 舊系統改造
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 bg-lime" />
                        API / 金流 / LINE 串接
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 bg-lime" />
                        AI / n8n 流程自動化
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 bg-lime" />
                        技術顧問 / 需求分析
                      </li>
                      <li className="flex items-center gap-2 sm:col-span-2">
                        <span className="size-1.5 bg-lime" />
                        AI 實作課程 / 企業內訓
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://line.me"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 bg-ink px-5 py-3 text-[12px] font-bold tracking-wide text-paper transition-colors hover:bg-lime hover:text-ink"
                    >
                      LINE 聯繫
                      <ArrowUpRight className="size-3.5" />
                    </a>
                    <a
                      href="mailto:contact@example.com"
                      className="inline-flex items-center gap-1 border border-ink px-5 py-3 text-[12px] font-bold tracking-wide transition-colors hover:bg-ink hover:text-paper"
                    >
                      Email / 聯絡表單
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center gap-1 border border-ink px-5 py-3 text-[12px] font-bold tracking-wide transition-colors hover:bg-ink hover:text-paper"
                    >
                      預約討論
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-dashed border-ink/30">
        <div className="mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-between gap-4 px-5 py-8 text-[11px] tracking-widest text-ink/50 sm:flex-row sm:items-center sm:px-6">
          <span>
            吳政穎 Arz｜System Development · AI Automation · Digital Integration
          </span>
          <span>© 2026 Arz. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}

function SkillBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-28 text-white/50 sm:w-24">{label}</span>
      <span className="flex-1 overflow-hidden rounded-full bg-white/10">
        <span
          className="block h-1.5 bg-lime"
          style={{ width: `${value}%` }}
        />
      </span>
      <span className="w-6 text-right text-white/40">{value}</span>
    </div>
  );
}

function ExpertiseCard({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="border border-ink p-5 transition hover:-translate-y-1 hover:shadow-[5px_5px_0_0_var(--color-ink)]">
      <div className="mb-4 text-[11px] text-ink/40">{number} / MODULE</div>
      <h3 className="font-display text-lg font-bold leading-tight">{title}</h3>
      <ul className="mt-4 space-y-2 text-[12px] leading-relaxed text-ink/60">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-lime">-</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineItem({
  period,
  title,
  items,
  side,
}: {
  period: string;
  title: string;
  items: string[];
  side: "left" | "right";
}) {
  return (
    <div
      className={`relative pl-12 sm:grid sm:grid-cols-2 sm:gap-8 sm:pl-0 ${
        side === "right" ? "sm:text-right" : ""
      }`}
    >
      <div
        className={`${
          side === "right" ? "sm:order-2 sm:pl-8" : "sm:pr-8"
        }`}
      >
        <div className="absolute left-0 top-0 flex size-8 items-center justify-center border border-ink bg-paper sm:left-1/2 sm:-translate-x-1/2">
          <span className="size-2 bg-lime" />
        </div>
        <div className="font-mono text-[11px] tracking-widest text-ink/50">
          {period}
        </div>
      </div>
      <div className={side === "right" ? "sm:order-1 sm:pr-8" : "sm:pl-8"}>
        <div className="border border-ink p-5">
          <h3 className="font-display text-base font-bold">{title}</h3>
          <ul className="mt-3 space-y-1.5 text-[12px] leading-relaxed text-ink/60">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function WorkCard({
  number,
  category,
  title,
  description,
  capability,
}: {
  number: string;
  category: string;
  title: string;
  description: string;
  capability: string;
}) {
  return (
    <article className="group border border-ink p-5 transition hover:-translate-y-1 hover:shadow-[5px_5px_0_0_var(--color-ink)]">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[11px] text-ink/40">{number}</span>
        <span className="text-[10px] text-ink/50">{category}</span>
      </div>
      <h3 className="font-display text-lg font-bold leading-tight">{title}</h3>
      <p className="mt-3 text-[12px] leading-relaxed text-ink/60">
        {description}
      </p>
      <div className="mt-4 border-t border-dashed border-ink/20 pt-3">
        <div className="text-[10px] text-ink/40">代表能力</div>
        <p className="mt-1 text-[11px] leading-relaxed text-ink/70">
          {capability}
        </p>
      </div>
    </article>
  );
}

function ValueCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border border-ink bg-paper p-5 transition hover:-translate-y-1 hover:bg-ink hover:text-paper">
      <div className="mb-4 text-[11px] text-ink/40 group-hover:text-lime/60">
        {number}
      </div>
      <h3 className="font-display text-lg font-bold">{title}</h3>
      <p className="mt-3 text-[12px] leading-relaxed text-ink/60 group-hover:text-white/60">
        {description}
      </p>
    </div>
  );
}
