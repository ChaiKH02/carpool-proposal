// ---------------------------------------------------------------------------
// SOURCES CATALOG
// Language-agnostic — the same organisations/links back every claim in both
// EN and ZH copy, so they live in one place instead of being duplicated.
// Add a new source here, then reference its key in `sourceRefs` below and/or
// pass it straight to <SourceLink keys={["yourKey"]} />.
// ---------------------------------------------------------------------------
export const sources = {
  // Macro / market data
  transport: { name: "The Centre — \"Getting Around: Towards a Decent Daily Commute\" (World Bank modal-share data)", url: "https://www.centre.my/post/getting-around-towards-decent-daily-commute" },
  soloDriving: { name: "The Star — Cent-GPS survey: 87.3% of Klang Valley drivers commute alone", url: "https://www.thestar.com.my/news/nation/2019/11/04/carpooling-malaysia-is-worst-in-the-world-survey-finds" },
  labor: { name: "DOSM — Salaries & Wages Survey Report 2024 (KL/Selangor income by state)", url: "https://www.dosm.gov.my/portal-main/release-content/salaries-and-wages-survey-report-2024" },
  cost: { name: "EPF — Belanjawanku 2024/2025 Expenditure Guide (Klang Valley cost of living)", url: "https://www.kwsp.gov.my/en/w/epf-releases-belanjawanku-2024-2025-and-retirement-income-adequacy-framework" },
  traffic: { name: "Numbeo KL Traffic Index", url: "https://www.numbeo.com/traffic/in/Kuala-Lumpur" },

  // Competitive landscape — direct sources for each named player
  klcarpool: { name: "KLCarPool (Drixem Group)", url: "https://klcarpool.com/" },
  kumpool: { name: "Kumpool — ride-pooling, Malaysia", url: "https://www.kumpool.com.my/" },
  weride: { name: "WeRide.my carpool portal", url: "https://weride.my/" },
  splyft: { name: "Splyft — intercity carpooling", url: "https://www.splyft.com.my/" },
  rydePool: { name: "Ryde / RydePool Malaysia launch — Tech ARP", url: "https://www.techarp.com/travel/ryde-rydepool-malaysia/" },
  grabShare: { name: "Grab — GrabShare Malaysia launch (2017)", url: "https://www.grab.com/my/press/business/grabsharemalaysia/" },
  grabGroupRide: { name: "Grab Malaysia — Group Ride launch (2026)", url: "https://www.grab.com/my/press/others/groupridelaunch/" },
  grabGroupRideNews: { name: "The Edge — Grab Group Ride coverage", url: "https://theedgemalaysia.com/node/802908" },

  // Regulatory
  ehailingMot: { name: "Ministry of Transport — e-Hailing Services", url: "https://www.mot.gov.my/en/land/infrastructure/e-hailing-services" },
  ehailingLaw2017: { name: "Malay Mail — Land Public Transport (Amendment) Act 2017", url: "https://www.malaymail.com/amp/news/malaysia/2017/07/27/e-hailing-services-now-regulated-says-minister/1430363" },
  ehailingEnforcement: { name: "Malay Mail — APAD enforcement on unlicensed e-hailing", url: "https://www.malaymail.com/news/malaysia/2022/08/30/transport-minister-warns-of-stern-action-against-e-hailing-firm-allegedly-operating-without-licence/25513" },
  evpApad: { name: "Grab — E-Hailing Vehicle Permit (APAD / LPKP)", url: "https://www.grab.com/my/driver-mygrabpartnerevp/" },
  pdpa: { name: "Department of Personal Data Protection (JPDP)", url: "https://www.pdp.gov.my/ppdpv1/en/personal-data-protection-department/" },
} as const;

export type SourceKey = keyof typeof sources;

// ---------------------------------------------------------------------------
// PAGE -> SOURCE MAPPING
// Keys mirror the content blocks in app/page.tsx so each section can pull
// its own citation chips without hardcoding keys inline everywhere.
// ---------------------------------------------------------------------------
export const sourceRefs: Record<string, SourceKey[]> = {
  // Page 2 — Executive Summary
  summary_problem: ["transport", "soloDriving"],
  summary_proposition: ["labor"],
  summary_model: ["cost"],

  // Page 3 — Problem deep dive (one entry per card, in order)
  problem_card_0: ["soloDriving", "transport"],
  problem_card_1: ["labor", "traffic"],
  problem_card_2: ["grabShare", "grabGroupRide"],

  // Page 4/5 — Market & target customer
  market_hubs: ["labor", "transport"],
  market_clusters: ["transport"],
  market_customers: ["labor", "cost"],

  // Page 7 — Business model
  business_gate: ["cost"],

  // Page 8/9 — Competitive landscape (one per listed competitor)
  competitor_klcarpool: ["klcarpool"],
  competitor_apride: [],
  competitor_scoutrans: [],
  competitor_grabgroupride: ["grabGroupRide", "grabGroupRideNews"],
  competitor_intl: ["rydePool"],

  // Regulatory considerations (one per card, matches regs[] order)
  reg_classification: ["ehailingMot", "ehailingLaw2017"],
  reg_insurance: ["evpApad"],
  reg_privacy: ["pdpa"],
  reg_payments: ["evpApad", "ehailingEnforcement"],

  // Page 11 — Financials
  financials_trajectory: ["cost", "labor"],
};

export const content = {
  en: {
    nav: { switchLang: "中文版", contact: "Contact Founder" },
    hero: {
      title: "CORRIDOR CARPOOL",
      subtitle: "A fixed-commute carpool network for Kuala Lumpur & Selangor",
      badge1: "Kuala Lumpur",
      badge2: "Selangor",
      badge3: "One corridor at a time",
    },
    page2_summary: {
      title: "Executive Summary",
      problemTitle: "The problem",
      problemDesc: "Klang Valley has many transport options, yet only ~17% of trips use public transport (vs. 62% in Singapore) and 87.3% of drivers commute completely alone. Commuting remains car-first because alternatives often create transfers, first/last-mile friction or unreliable timing.",
      propTitle: "The proposition",
      propDesc: "Match people who already make the same fixed commute — same residential area, employment hub and time window — and let them share one car.",
      modelTitle: "Why this model",
      modelDesc: "The business is not built around per-ride commissions. It monetises verified identity, safety, recurring-commute automation and future partnerships.",
      entryTitle: "Recommended entry point",
      entryRoute: "Cheras / OUG / Kuchai Lama → TRX & Bukit Bintang",
      entryDesc: "Pilot one corridor before attempting Klang-Valley-wide coverage. The objective is to prove liquidity, retention and willingness to pay before scaling.",
      runway: "9–12 mo target runway",
      ask: "RM150–200k seed ask",
    },
    page3_problem: {
      title: "Why recurring carpooling is still hard",
      subtitle: "The gap is not a lack of transport supply. It is a lack of trusted matching between people making the same trip.",
      cards: [
        { title: "1. Car-first commuting", desc: "87.3% of Klang Valley drivers commute completely alone — one of the highest solo-driving rates in the world. Many live within reach of transit but still drive because the alternative may be slower or harder to coordinate." },
        { title: "2. Repeated trips are fragmented", desc: "Residential clusters and employment hubs create thousands of similar weekday trips, but individuals often do not know who else is making the same journey." },
        { title: "3. Existing tools are not designed for it", desc: "Grab is optimised for one-off paid rides — even its new Group Ride feature books per-trip rather than a recurring weekday pairing; transit solves trunk routes; informal carpooling relies on personal networks and manual coordination." }
      ]
    },
    page4_5_market: {
      title: "Market Focus & Target Customer",
      marketFrame: "High-traffic urban commuting with repeated home → work journeys",
      hubs: "Initial commuter hubs: TRX, KLCC, Bukit Bintang, Bangsar South, KL Sentral, Mont Kiara",
      clusters: "Initial residential clusters: Cheras, OUG/Kuchai Lama, Sri Petaling/Bukit Jalil, Puchong, PJ, Setapak/Ampang",
      customers: [
        { type: "Primary: fixed commuter", desc: "Salaried professional (18–40) earning around the KL/Selangor mean of RM4,000–4,800/month, fixed Mon–Fri schedule, commutes 8–20km into major hubs. Open to sharing if identity, safety and reliability are handled." },
        { type: "Secondary: employer", desc: "HR/ESG teams can subsidise carpool credits, promote internally and support commute-related ESG reporting." },
        { type: "Tertiary: property operator", desc: "Building and parking management can reduce parking pressure and offer carpool-priority bays or rebates." }
      ],
      beachhead: "The beachhead is the commuter; B2B layers come later."
    },
    page6_product: {
      title: "Product & MVP",
      steps: [
        { title: "1. Verify", desc: "Phone + IC + selfie" },
        { title: "2. Set commute", desc: "Origin + destination + weekly schedule" },
        { title: "3. Match", desc: "Radius + time-window overlap" },
        { title: "4. Confirm", desc: "In-app chat → Commute Buddy" },
        { title: "5. Start trip", desc: "Live sharing + safety state" },
        { title: "6. Repeat", desc: "Rating + recurring pairing" },
      ],
      includes: "What v1 includes: Multi-factor verification, matching, in-app chat, Commute Buddy recurrence, Start Trip, live location sharing, ratings, cost-split record and SOS/reporting flow.",
      excludes: "What v1 deliberately excludes: In-app wallet / e-money complexity, multi-corridor matching, insurance product, advertising and full corporate dashboard."
    },
    page7_business: {
      title: "Business Model",
      subtitle: "Monetise retained infrastructure, not the introduction",
      layers: [
        { title: "Free core matching", price: "RM0", desc: "Find a commute buddy, profile and chat" },
        { title: "Plus subscription", price: "RM6.90–9.90 / mo", desc: "Tracking, SOS, recurring auto-match, priority matching" },
        { title: "Corporate carpool", price: "RM3 / employee / mo", desc: "Employee grouping + ESG / carbon reporting (Phase 2)" },
        { title: "Parking partnerships", price: "Revenue share", desc: "Carpool-priority bays / rebates (Phase 2)" },
        { title: "Safety / insurance", price: "Revenue share", desc: "Per-trip protection via partner (Phase 3)" },
        { title: "Commute advertising", price: "Placement revenue", desc: "Fuel, tyres, servicing, coffee (Phase 3)" }
      ],
      gate: "Monetisation gate: ~40%+ of matched pairs become recurring Commute Buddies and stay active 4+ weeks."
    },
    page8_9_landscape_regulatory: {
      compTitle: "Competitive Landscape",
      compDesc: "The fixed-commute idea is validated by existing players, but no proven liquid multi-corridor KL network is established.",
      regTitle: "Regulatory Considerations",
      regDesc: "Do not treat the regulatory position as legal advice. A scoped Malaysian transport / technology legal opinion is recommended.",
      competitors: [
        { key: "competitor_klcarpool", name: "KLCarPool", desc: "AI-matched daily carpooling for KL commuters, women-only option; publicly announced launch, pre-live as of writing." },
        { key: "competitor_apride", name: "APRide", desc: "University-focused carpooling model; limited relevance to the working-commuter segment targeted here." },
        { key: "competitor_scoutrans", name: "Scoutrans", desc: "Limited visible public footprint — treated as a weak/uncertain signal, not a proof point." },
        { key: "competitor_grabgroupride", name: "Grab Group Ride", desc: "Grab Malaysia launched a fare-splitting Group Ride feature in 2026, explicitly framed as government-encouraged carpooling — but it is a per-trip, paid-driver booking, not a recurring-commute match." },
        { key: "competitor_intl", name: "Ryde / RydePool & BlaBlaCar", desc: "Ryde brought a not-for-profit-fare carpool model to the Klang Valley in 2019 as an international reference point for the mechanics." }
      ],
      regs: [
        { key: "reg_classification", title: "Classification", desc: "How will cost-sharing carpooling be characterised relative to commercial e-hailing, which Malaysia has regulated since the 2017 Land Public Transport amendments under APAD?" },
        { key: "reg_insurance", title: "Insurance", desc: "What insurance obligations apply to private vehicles used for cost-shared commuting, versus the EVP/PSV licensing required of commercial e-hailing vehicles?" },
        { key: "reg_privacy", title: "Privacy", desc: "What PDPA obligations — enforced by the Department of Personal Data Protection — apply to IC numbers, selfies and live location data?" },
        { key: "reg_payments", title: "Payments", desc: "What licensing / compliance is triggered if in-app payment is added later, given APAD's active enforcement against unlicensed transport operators?" }
      ]
    },
    page10_roadmap: {
      title: "Go-to-market roadmap",
      phases: [
        { phase: "PHASE 0: Validate before building (6–8 weeks)", desc: "Legal opinion + manual no-code pilot. Sign-up form + WhatsApp / Telegram matching.", gate: "Gate: Real trip density + willingness to coordinate" },
        { phase: "PHASE 1: Single-corridor MVP (4–6 months)", desc: "Lean MVP for one corridor. Seed supply through 1–2 TRX / Bukit Bintang towers.", gate: "Gate: 300–500 active users + 100+ recurring pairs" },
        { phase: "PHASE 2: Monetise + add corridors (6 months)", desc: "Turn on Plus after retention gate. Sign 1–2 corporate pilots. Expand using same playbook.", gate: "Gate: New corridor hits liquidity bar in 8 weeks" },
        { phase: "PHASE 3: Klang Valley network (12+ months)", desc: "Multi-hub coverage, parking / insurance partnerships, corporate program, advertising.", gate: "Gate: Network effects + multiple revenue layers" }
      ]
    },
    page11_financials: {
      title: "Planning Assumptions: Financials & Use of Seed",
      subtitle: "Not a forecast. Internal planning assumptions.",
      trajHeaders: ["Metric", "Year 1", "Year 2", "Year 3"],
      trajData: [
        ["Corridors live", "1", "3–4", "8–10"],
        ["Registered users", "~3,000", "~20,000", "~80,000"],
        ["Active recurring pairs", "~600", "~4,000", "~15,000"],
        ["Monetisation", "No", "Plus + 1–2 corporate", "Full stack"],
        ["Illustrative ARR", "~RM 0", "RM 500k–800k", "RM 3.0m–5.0m"]
      ],
      fundsHeaders: ["Use of funds", "Estimated amount", "Why"],
      fundsData: [
        ["Legal & regulatory", "RM15k–25k", "Confirm the carpool model is legally structured and understand insurance, PDPA, payment, and e-hailing requirements."],
        ["MVP build", "RM60k–90k", "Build the first version of the app for one corridor (registration, matching, chat, pairing, safety)."],
        ["Pilot marketing & ops", "RM20k–30k", "Recruit first users through office towers, onboarding events and referrals (no mass ads)."],
        ["Safety / insurance setup", "RM10k–15k", "Establish the SOS/trip-tracking flow and groundwork for an insurance partnership."],
        ["Runway / contingency", "Remainder", "Cover unexpected costs and basic operating expenses during the pilot."]
      ]
    },
    page12_risks: {
      title: "Key risks & immediate next steps",
      risks: [
        { title: "Cold start", desc: "Launch one tightly scoped corridor; seed through employer partnerships, not broad ads." },
        { title: "Users bypass the app", desc: "Monetise trust and safety infrastructure; make Start Trip useful even for known pairs." },
        { title: "Regulatory reclassification", desc: "Obtain legal opinion before launch; maintain explicit cost-sharing framing." },
        { title: "Safety / low willingness to pay", desc: "Verification + SOS + clear incident response; lead with employer/parking revenue before consumer subscription." }
      ],
      nextStepsTitle: "Immediate next steps",
      nextSteps: [
        "Commission a scoped Malaysian legal opinion before public-facing pilot.",
        "Run the no-code Phase 0 pilot in the initial corridor.",
        "Open conversations with 1–2 TRX / Bukit Bintang office towers.",
        "Only after a positive signal, proceed to MVP build and fundraising."
      ],
      decisionGate: "Decision gate: evidence first, expansion second."
    },
  },
  zh: {
    nav: { switchLang: "English", contact: "联系创始人" },
    hero: {
      title: "CORRIDOR 同路专线",
      subtitle: "专为吉隆坡与雪兰莪打造的固定通勤拼车网络",
      badge1: "吉隆坡",
      badge2: "雪兰莪",
      badge3: "逐个走廊，稳步推进",
    },
    page2_summary: {
      title: "执行摘要",
      problemTitle: "问题痛点",
      problemDesc: "巴生谷虽然有多种交通选择，但公共交通使用率仅约17%（新加坡为62%），且87.3%的驾车者完全独自通勤。通勤仍然以汽车为主，因为替代方案往往会带来多次换乘、首末公里不便或时间不可靠等问题。",
      propTitle: "核心提案",
      propDesc: "将已经在进行相同固定通勤的人匹配起来——相同的居住区、就业中心和时间窗口——让他们共享一辆车。",
      modelTitle: "为什么选择此模式",
      modelDesc: "业务不依赖单次行程抽成。它通过验证身份、安全保障、经常性通勤自动化以及未来的企业/停车合作来实现商业化。",
      entryTitle: "建议切入点 (首条走廊)",
      entryRoute: "Cheras / OUG / Kuchai Lama → TRX & Bukit Bintang",
      entryDesc: "在尝试覆盖整个巴生谷之前，先在一条走廊进行试点。目标是在扩张前验证流动性、用户留存率及付费意愿。",
      runway: "9-12个月目标资金储备",
      ask: "RM 150k - 200k 种子轮融资",
    },
    page3_problem: {
      title: "为什么经常性拼车仍然难以实现？",
      subtitle: "差距不在于缺乏交通工具供应。而在于行程相同的人之间缺乏可信赖的匹配。",
      cards: [
        { title: "1. 汽车优先的通勤习惯", desc: "87.3%的巴生谷驾车者完全独自通勤——是全球单人驾车通勤比例最高的地区之一。许多人虽住在公共交通覆盖范围内，但仍然选择开车，因为替代方案可能更慢或更难协调。" },
        { title: "2. 重复的行程被碎片化", desc: "住宅区和就业中心每天产生数千次相似的通勤行程，但个人往往不知道还有谁在走同样的路线。" },
        { title: "3. 现有工具并非为此设计", desc: "Grab专为单次付费行程优化——即使是其新推出的Group Ride功能，也是按单次行程预订，而非固定的工作日配对；公交解决主干线问题；非正式拼车依赖个人网络和手动协调。" }
      ]
    },
    page4_5_market: {
      title: "市场焦点与目标客户",
      marketFrame: "具有重复性“家→工作地点”行程的高流量城市通勤",
      hubs: "初期通勤枢纽：TRX, KLCC, Bukit Bintang, Bangsar South, KL Sentral, Mont Kiara",
      clusters: "初期住宅群：Cheras, OUG/Kuchai Lama, Sri Petaling/Bukit Jalil, Puchong, PJ, Setapak/Ampang",
      customers: [
        { type: "核心客户：固定通勤者", desc: "受薪专业人士（18-40岁），月收入约为吉隆坡/雪兰莪平均水平的RM4,000–4,800，固定周一至周五日程，通勤8-20km至主要枢纽。如果身份、安全和可靠性得到保障，他们愿意共享行程。" },
        { type: "次要客户：雇主/企业", desc: "人力资源/ESG团队可以提供拼车额度补贴、在内部推广该服务，并支持与通勤相关的ESG数据报告。" },
        { type: "第三级：物业运营商", desc: "建筑和停车管理方可以减少停车压力，并提供拼车专属车位或折扣。" }
      ],
      beachhead: "首要突破口是通勤者本人；B2B商业层将在后期引入。"
    },
    page6_product: {
      title: "产品与MVP (经常性通勤循环)",
      steps: [
        { title: "1. 身份验证", desc: "手机号 + 身份证 + 自拍" },
        { title: "2. 设置通勤", desc: "出发地 + 目的地 + 每周日程" },
        { title: "3. 匹配", desc: "半径 + 时间窗口重叠" },
        { title: "4. 确认", desc: "应用内聊天 → 确立通勤伙伴" },
        { title: "5. 开始行程", desc: "实时位置共享 + 安全状态" },
        { title: "6. 重复", desc: "评分 + 经常性配对" },
      ],
      includes: "V1版本包含：多因素身份验证、匹配、应用内聊天、通勤伙伴复用、开始行程、实时位置共享、评分、费用分摊记录及SOS/举报流程。",
      excludes: "V1版本刻意排除：应用内钱包/电子货币的复杂性、多走廊匹配、保险产品、广告及完整的企业仪表盘。"
    },
    page7_business: {
      title: "商业模式",
      subtitle: "变现核心是留存后的基础设施，而非初始介绍",
      layers: [
        { title: "免费核心匹配", price: "RM0", desc: "寻找通勤伙伴、查看个人资料及聊天" },
        { title: "Plus 订阅服务", price: "RM6.90–9.90 / 月", desc: "行程追踪、SOS、经常性自动匹配、优先匹配" },
        { title: "企业拼车", price: "RM3 / 员工 / 月", desc: "员工分组 + ESG / 碳排放报告 (第2阶段)" },
        { title: "停车场合作", price: "收入分成", desc: "拼车优先车位 / 折扣 (第2阶段)" },
        { title: "安全 / 保险附加包", price: "收入分成", desc: "通过合作伙伴提供单次行程保护 (第3阶段)" },
        { title: "通勤广告", price: "展示收入", desc: "燃油、轮胎、汽车保养、咖啡等 (第3阶段)" }
      ],
      gate: "商业化门槛: 约40%以上的匹配对成为经常性通勤伙伴，并保持活跃4周以上。"
    },
    page8_9_landscape_regulatory: {
      compTitle: "竞争格局 (Competitive Landscape)",
      compDesc: "固定通勤的理念已被现有市场参与者验证，但目前吉隆坡尚未建立起具有成熟流动性的多走廊网络。",
      regTitle: "监管合规考量 (Regulatory Considerations)",
      regDesc: "请勿将此监管立场视为正式法律建议。建议在面向公众发布前获取针对马来西亚交通/科技领域的专门法律意见。",
      competitors: [
        { key: "competitor_klcarpool", name: "KLCarPool", desc: "面向吉隆坡通勤者的AI匹配日常拼车服务，提供女性专属选项；已公开宣布上线计划，截至撰写时尚未正式运营。" },
        { key: "competitor_apride", name: "APRide", desc: "以大学生群体为主的拼车模式；与本提案锁定的上班族通勤群体关联度有限。" },
        { key: "competitor_scoutrans", name: "Scoutrans", desc: "公开可见的运营信息有限——视为较弱/不确定的信号，而非有力的验证证据。" },
        { key: "competitor_grabgroupride", name: "Grab Group Ride", desc: "Grab马来西亚已于2026年推出可分摊车费的Group Ride功能，明确定位为响应政府拼车号召——但其本质是按次付费的单次预约，而非经常性通勤配对。" },
        { key: "competitor_intl", name: "Ryde / RydePool 与 BlaBlaCar", desc: "Ryde于2019年将非营利定价的拼车模式带入巴生谷，是该运作机制的国际参考案例。" }
      ],
      regs: [
        { key: "reg_classification", title: "性质界定", desc: "与商业网约车相比，成本分摊型拼车将如何被定性？马来西亚自2017年《陆路公共交通法》修正案起，已由APAD对网约车进行监管。" },
        { key: "reg_insurance", title: "保险要求", desc: "用于成本分摊型通勤的私家车适用哪些保险义务？这与商业网约车所需的EVP/PSV牌照要求有何不同？" },
        { key: "reg_privacy", title: "隐私数据", desc: "收集身份证号、自拍和实时位置数据适用哪些PDPA (个人数据保护法) 义务？该法由个人数据保护局负责执行。" },
        { key: "reg_payments", title: "支付牌照", desc: "鉴于APAD已对无牌照运营的交通业者采取执法行动，如果后期增加应用内支付，会触发哪些许可/合规要求？" }
      ]
    },
    page10_roadmap: {
      title: "市场进入路线图",
      phases: [
        { phase: "第0阶段：开发前验证 (6–8 周)", desc: "获取法律意见 + 手动无代码试点。使用报名表 + WhatsApp/Telegram 进行匹配。", gate: "门槛: 真实的行程密度 + 协调意愿" },
        { phase: "第1阶段：单一走廊MVP (4–6 个月)", desc: "针对一条走廊的精简版MVP。通过1-2栋TRX/Bukit Bintang的办公楼获取种子用户。", gate: "门槛: 300–500活跃用户 + 100+对经常性拼车" },
        { phase: "第2阶段：变现与增加走廊 (6 个月)", desc: "达到留存门槛后开启Plus订阅。签约1-2个企业试点。使用相同策略扩张。", gate: "门槛: 新走廊在8周内达到流动性标准" },
        { phase: "第3阶段：巴生谷网络 (12个月以上)", desc: "多枢纽覆盖、停车/保险合作、企业项目、广告引入。", gate: "门槛: 网络效应 + 多重收入来源" }
      ]
    },
    page11_financials: {
      title: "规划假设：财务预测与资金用途",
      subtitle: "仅为内部规划假设，非正式业绩预测。",
      trajHeaders: ["指标", "第1年", "第2年", "第3年"],
      trajData: [
        ["上线的走廊数量", "1", "3–4", "8–10"],
        ["注册用户", "~3,000", "~20,000", "~80,000"],
        ["活跃的经常性拼车对", "~600", "~4,000", "~15,000"],
        ["商业化状态", "无", "Plus订阅 + 1–2家企业", "全业务矩阵"],
        ["预估年度经常性收入 (ARR)", "~RM 0", "RM 500k–800k", "RM 3.0m–5.0m"]
      ],
      fundsHeaders: ["资金用途", "预估金额", "原因说明"],
      fundsData: [
        ["法律与合规咨询", "RM15k–25k", "确认拼车模式的法律架构，并理清保险、PDPA、支付及网约车相关要求。"],
        ["MVP 开发", "RM60k–90k", "为单一走廊构建首个APP版本（注册、匹配、聊天、固定通勤配对及安全功能）。"],
        ["试点营销与运营", "RM20k–30k", "通过办公楼宇、活动和推荐来招募首批用户（避免大众广告）。"],
        ["安全与保险设置", "RM10k–15k", "建立SOS/行程追踪流程，并为保险合作打下基础。"],
        ["运营资金/备用金", "剩余资金", "支付试点测试期间的突发意外成本及基本运营开销。"]
      ]
    },
    page12_risks: {
      title: "核心风险与下一步行动",
      risks: [
        { title: "冷启动困难", desc: "先推出一条范围极窄的走廊；通过雇主合作获取种子用户，而非广泛投放广告。" },
        { title: "用户绕开APP私下联系", desc: "通过信任和安全基础设施变现；即使对于已熟识的拼车伙伴，也要让“开始行程”功能变得有价值。" },
        { title: "监管重新分类", desc: "在发布前获取法律意见；保持明确的“成本分摊”定位。" },
        { title: "安全性疑虑 / 付费意愿低", desc: "身份验证 + SOS + 清晰的事故响应；在向消费者收费前，先从雇主/停车相关收入切入。" }
      ],
      nextStepsTitle: "近期的下一步行动",
      nextSteps: [
        "在面向公众试点之前，委托出具一份针对马来西亚的专项法律意见书。",
        "在初始走廊运行无代码的第0阶段试点。",
        "与 1–2 栋 TRX / Bukit Bintang 的办公楼展开初步对话。",
        "只有在获得积极的市场信号后，才推进 MVP 的构建和正式融资。"
      ],
      decisionGate: "决策门槛：证据先行，扩张在后。"
    },
  }
};