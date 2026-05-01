const archetypes = {
  builder: {
    label: "Builder",
    avatar: "assets/results/builder.png",
    title: "Builder: make useful things real",
    summary:
      "You are pulled toward ownership, progress, and visible outcomes. Your next role should let you build, improve, operate, or launch work that people can actually use.",
    roles: ["Product / Program", "Operations / Business Ops", "General Management"],
    priorities: [
      "Look for clear ownership, decision rights, and measurable outcomes.",
      "Choose teams where momentum matters and your work reaches real people.",
      "Ask what success looks like in the first 90 days and first year.",
    ],
    watch: [
      "Slow approval cultures may drain you.",
      "Avoid roles where you coordinate endlessly without real authority.",
      "Make sure the pace is sustainable, not just exciting.",
    ],
    keywords: ["operator", "builder", "launch", "scale", "process improvement"],
  },
  strategist: {
    label: "Strategist",
    avatar: "assets/results/strategist.png",
    title: "Strategist: turn complexity into direction",
    summary:
      "You like understanding the bigger picture, finding patterns, and helping people make sharper decisions. Your next role should reward judgment, analysis, and thoughtful influence.",
    roles: ["Strategy / Chief of Staff", "Insights / Research", "Business Operations"],
    priorities: [
      "Look for ambiguous problems and access to decision-makers.",
      "Choose managers who value synthesis, independent thinking, and depth.",
      "Build proof through memos, strategy docs, research, and recommendations.",
    ],
    watch: [
      "Pure execution roles may feel cramped if you cannot shape the why.",
      "Be careful of organizations that collect analysis but do not act on it.",
      "Pair thinking with visible decisions so your impact is easy to see.",
    ],
    keywords: ["strategy", "insights", "planning", "market research", "chief of staff"],
  },
  helper: {
    label: "Helper",
    avatar: "assets/results/helper.png",
    title: "Helper: create growth for people",
    summary:
      "You are motivated by human progress. Your next role should put you close to coaching, service, education, community, customers, or employee growth.",
    roles: ["People / Talent", "Customer Success / Community", "Learning / Enablement"],
    priorities: [
      "Look for work where relationship quality is central to the outcome.",
      "Choose missions and audiences you can care about for the long run.",
      "Ask how the organization supports boundaries, care work, and development.",
    ],
    watch: [
      "Avoid roles that rely on endless availability.",
      "Do not let purpose compensate for poor pay, support, or leadership.",
      "Make sure you still get room to grow, not only support others.",
    ],
    keywords: ["people", "customer success", "community", "enablement", "coaching"],
  },
  creator: {
    label: "Creator",
    avatar: "assets/results/creator.png",
    title: "Creator: shape ideas into expression",
    summary:
      "You want work with taste, originality, storytelling, and room to make something distinctive. Your next role should give you a creative medium and an audience.",
    roles: ["Brand / Creative", "Content / Editorial", "Marketing / Experience"],
    priorities: [
      "Build a body of work that shows your voice and standards.",
      "Choose teams that understand creative work needs time, taste, and feedback.",
      "Ask how ideas move from concept to launch and who has final say.",
    ],
    watch: [
      "Rigid approval chains can flatten your best instincts.",
      "Avoid roles that say creative but only need high-volume production.",
      "Build business fluency so your creative work gets more leverage.",
    ],
    keywords: ["brand", "content", "creative strategy", "editorial", "experience"],
  },
  explorer: {
    label: "Explorer",
    avatar: "assets/results/explorer.png",
    title: "Explorer: learn, adapt, and open new paths",
    summary:
      "You thrive when you are learning quickly, meeting new contexts, and expanding what is possible. Your next role should include novelty, mobility, and a path toward reinvention.",
    roles: ["Partnerships / Growth", "Innovation / Venture", "Rotational / Founder Track"],
    priorities: [
      "Look for variety, visible learning curves, and open-ended scope.",
      "Choose environments where experiments are welcomed and speed is valued.",
      "Ask what new skills, markets, or responsibilities you can gain in year one.",
    ],
    watch: [
      "Too much novelty without support can become scattered.",
      "Avoid jobs with narrow routines and little room to move.",
      "Turn curiosity into a few concrete bets so your direction does not blur.",
    ],
    keywords: ["growth", "partnerships", "innovation", "venture", "new markets"],
  },
};

const stageProfiles = {
  entry: {
    label: "Entry-level or first serious role",
    salary: "$50k-$75k base",
    levelWords: ["Coordinator", "Associate", "Junior", "Analyst"],
    action:
      "Build proof fast: portfolio samples, internships, projects, volunteer leadership, or measurable freelance work.",
  },
  early: {
    label: "Early career growth role",
    salary: "$65k-$95k base",
    levelWords: ["Associate", "Specialist", "Analyst", "Manager-track"],
    action:
      "Search for roles that teach a durable skill and put you near strong managers, not just flashy companies.",
  },
  manager: {
    label: "Manager / lead role",
    salary: "$90k-$140k base",
    levelWords: ["Manager", "Lead", "Senior Specialist", "Program Manager"],
    action:
      "Show evidence that you can own outcomes, guide others, and improve how work gets done.",
  },
  director: {
    label: "Director / senior manager role",
    salary: "$125k-$185k base",
    levelWords: ["Director", "Senior Manager", "Head of", "Principal"],
    action:
      "Package your story around scope: teams, budgets, strategy, cross-functional influence, and business results.",
  },
  executive: {
    label: "VP / executive role",
    salary: "$170k-$260k+ base",
    levelWords: ["VP", "Vice President", "Executive Director", "Head of"],
    action:
      "Target roles where your leadership narrative, operating range, and executive presence are already visible.",
  },
  pivot: {
    label: "Career pivot / re-entry role",
    salary: "$65k-$115k base",
    levelWords: ["Bridge role", "Program Manager", "Operations", "Strategy Associate"],
    action:
      "Use a bridge role to translate your existing credibility into the new field without restarting from zero.",
  },
};

const industryProfiles = {
  tech: {
    label: "Tech, AI, or digital products",
    lenses: ["Product-led companies", "AI-enabled services", "SaaS or marketplace businesses"],
    adjustment: "often higher, especially with equity",
  },
  consumer: {
    label: "Consumer, brand, media, or fashion",
    lenses: ["Consumer brands", "Media and editorial companies", "Retail, beauty, fashion, or lifestyle"],
    adjustment: "varies widely by brand size and revenue",
  },
  impact: {
    label: "Mission-driven, education, health, or nonprofit",
    lenses: ["Education and workforce programs", "Health and wellness organizations", "Foundations or nonprofits"],
    adjustment: "often lower base, but mission fit may be stronger",
  },
  finance: {
    label: "Finance, consulting, real estate, or professional services",
    lenses: ["Consulting firms", "Financial services", "Real estate or professional services"],
    adjustment: "often higher for analytical and client-facing tracks",
  },
  unknown: {
    label: "Still exploring",
    lenses: ["Industries where you admire the customer", "Teams solving problems you understand", "Companies with roles that match your daily energy"],
    adjustment: "benchmark after choosing 2-3 test industries",
  },
};

const questions = [
  {
    text: "Where are you in your career right now?",
    options: [
      { label: "Starting out", detail: "I am looking for an entry-level or first serious role.", profile: { stage: "entry" } },
      { label: "Building momentum", detail: "I have some experience and want a stronger next step.", profile: { stage: "early" } },
      { label: "Leading work", detail: "I manage projects, people, or important outcomes.", profile: { stage: "manager" } },
      { label: "Director track", detail: "I am aiming for Senior Manager, Director, Principal, or Head of scope.", profile: { stage: "director" } },
      { label: "VP or executive", detail: "I am looking for true executive leadership scope.", profile: { stage: "executive" } },
      { label: "Pivoting or returning", detail: "I am changing fields, returning to work, or redefining my path.", profile: { stage: "pivot" } },
    ],
  },
  {
    text: "How much professional experience are you bringing?",
    options: [
      { label: "0-2 years", detail: "I need a role that helps me build foundations.", profile: { experience: "0-2 years" } },
      { label: "3-6 years", detail: "I have skills and want more ownership.", profile: { experience: "3-6 years" } },
      { label: "7-12 years", detail: "I can lead complex work and influence decisions.", profile: { experience: "7-12 years" } },
      { label: "13+ years", detail: "I bring deep experience and want senior scope.", profile: { experience: "13+ years" } },
    ],
  },
  {
    text: "What kind of work makes you lose track of time?",
    options: [
      { label: "Making progress", detail: "Turning a messy idea into something people can use.", scores: { builder: 1 } },
      { label: "Solving the puzzle", detail: "Finding the pattern underneath a complicated situation.", scores: { strategist: 1 } },
      { label: "Supporting someone", detail: "Helping a person or group get unstuck and grow.", scores: { helper: 1 } },
      { label: "Shaping the story", detail: "Making something feel clear, beautiful, or memorable.", scores: { creator: 1 } },
    ],
  },
  {
    text: "Which industry direction feels most alive right now?",
    options: [
      { label: "Tech or AI", detail: "Products, platforms, digital tools, or emerging technology.", profile: { industry: "tech" }, scores: { builder: 1, strategist: 1 } },
      { label: "Consumer or media", detail: "Brand, fashion, beauty, retail, content, or culture.", profile: { industry: "consumer" }, scores: { creator: 1 } },
      { label: "Impact or care", detail: "Education, health, wellness, nonprofit, or social impact.", profile: { industry: "impact" }, scores: { helper: 1 } },
      { label: "Finance or services", detail: "Consulting, real estate, investing, operations, or client services.", profile: { industry: "finance" }, scores: { strategist: 1 } },
      { label: "I do not know yet", detail: "I need the quiz to help me narrow it down.", profile: { industry: "unknown" }, scores: { explorer: 1 } },
    ],
  },
  {
    text: "When a new project begins, what do you naturally do first?",
    options: [
      { label: "Map the situation", detail: "Clarify the goal, constraints, risks, and choices.", scores: { strategist: 1 } },
      { label: "Start prototyping", detail: "Make the first version so the team can react to something real.", scores: { builder: 1 } },
      { label: "Talk to people", detail: "Understand what people need and what would help them succeed.", scores: { helper: 1 } },
      { label: "Scan possibilities", detail: "Look for unconventional paths, examples, and opportunities.", scores: { explorer: 1 } },
    ],
  },
  {
    text: "What kind of responsibility do you want more of?",
    options: [
      { label: "Owning outcomes", detail: "I want to be trusted with goals, budgets, launches, or business results.", scores: { builder: 1 }, profile: { ambition: "ownership" } },
      { label: "Guiding direction", detail: "I want to influence the strategy and help people make better calls.", scores: { strategist: 1 }, profile: { ambition: "strategy" } },
      { label: "Developing people", detail: "I want to coach, support, teach, or build healthier teams.", scores: { helper: 1 }, profile: { ambition: "people" } },
      { label: "Creating the standard", detail: "I want to shape the brand, voice, experience, or creative bar.", scores: { creator: 1 }, profile: { ambition: "creative" } },
    ],
  },
  {
    text: "Which compliment would mean the most to you?",
    options: [
      { label: "You made that unforgettable", detail: "Your taste and expression changed how people felt.", scores: { creator: 1 } },
      { label: "You helped me become better", detail: "Your presence and guidance made a real difference.", scores: { helper: 1 } },
      { label: "You helped us see clearly", detail: "Your thinking changed the direction of the work.", scores: { strategist: 1 } },
      { label: "You made it happen", detail: "You moved the idea from talk into reality.", scores: { builder: 1 } },
    ],
  },
  {
    text: "What frustrates you most in a role?",
    options: [
      { label: "Endless talk", detail: "Lots of meetings, little ownership, and no visible progress.", scores: { builder: 1 } },
      { label: "Shallow decisions", detail: "People rush ahead without understanding the real problem.", scores: { strategist: 1 } },
      { label: "Cold culture", detail: "Workplaces treat people like resources instead of humans.", scores: { helper: 1 } },
      { label: "No room for taste", detail: "Everything is templated, generic, or over-controlled.", scores: { creator: 1 } },
    ],
  },
  {
    text: "What kind of risk feels most worth taking right now?",
    options: [
      { label: "A new world", detail: "Entering a field, market, or lifestyle that expands you.", scores: { explorer: 1 } },
      { label: "A visible voice", detail: "Putting your ideas, work, or perspective in public.", scores: { creator: 1 } },
      { label: "More ownership", detail: "Taking responsibility for bigger outcomes.", scores: { builder: 1 } },
      { label: "More meaning", detail: "Choosing work that feels closer to your values.", scores: { helper: 1 } },
    ],
  },
  {
    text: "What should your next role give you more of?",
    options: [
      { label: "Intellectual challenge", detail: "Hard questions, sharper people, and better judgment.", scores: { strategist: 1 } },
      { label: "Freedom to learn", detail: "Variety, experiments, and a broader map of possibility.", scores: { explorer: 1 } },
      { label: "Human connection", detail: "Trust, mentorship, and real relationships.", scores: { helper: 1 } },
      { label: "Creative expression", detail: "A medium, an audience, and room for original work.", scores: { creator: 1 } },
    ],
  },
  {
    text: "Which workday sounds best?",
    options: [
      { label: "Deep creative work", detail: "Several focused hours making, writing, designing, or refining.", scores: { creator: 1 } },
      { label: "A mixed day", detail: "New conversations, fresh information, and a few surprising turns.", scores: { explorer: 1 } },
      { label: "A thinking day", detail: "Research, synthesis, and a high-stakes recommendation.", scores: { strategist: 1 } },
      { label: "A launch day", detail: "Decisions, fixes, momentum, and something going live.", scores: { builder: 1 } },
    ],
  },
  {
    text: "What future are you trying to move toward?",
    options: [
      { label: "A useful life", detail: "Being proud of the people and communities you helped.", scores: { helper: 1 } },
      { label: "A spacious life", detail: "Freedom, growth, stories, and many possible chapters.", scores: { explorer: 1 } },
      { label: "A high-agency life", detail: "Owning meaningful work and seeing what you can create.", scores: { builder: 1 } },
      { label: "A distinctive life", detail: "Making work that feels unmistakably yours.", scores: { creator: 1 } },
    ],
  },
];

const intro = document.getElementById("intro");
const quizPanel = document.getElementById("quizPanel");
const resultsPanel = document.getElementById("resultsPanel");
const stepLabel = document.getElementById("stepLabel");
const questionText = document.getElementById("questionText");
const progressBar = document.getElementById("progressBar");
const optionsGrid = document.getElementById("optionsGrid");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");

let currentQuestion = 0;
let answers = [];

function showQuiz() {
  intro.classList.add("is-hidden");
  resultsPanel.classList.add("is-hidden");
  quizPanel.classList.remove("is-hidden");
  currentQuestion = 0;
  answers = [];
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentQuestion];
  stepLabel.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  questionText.textContent = question.text;
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  optionsGrid.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.innerHTML = `<strong>${option.label}</strong><span>${option.detail}</span>`;
    button.setAttribute("aria-pressed", answers[currentQuestion] === index ? "true" : "false");
    if (answers[currentQuestion] === index) button.classList.add("is-selected");
    button.addEventListener("click", () => selectOption(index));
    optionsGrid.appendChild(button);
  });

  backButton.style.visibility = currentQuestion === 0 ? "hidden" : "visible";
  nextButton.textContent = currentQuestion === questions.length - 1 ? "See results" : "Next";
  nextButton.disabled = answers[currentQuestion] === undefined;
}

function selectOption(index) {
  answers[currentQuestion] = index;
  renderQuestion();
}

function goNext() {
  if (answers[currentQuestion] === undefined) return;
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
    return;
  }
  showResults();
}

function goBack() {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuestion();
  }
}

function selectedOptions() {
  return answers.map((answerIndex, questionIndex) => questions[questionIndex].options[answerIndex]);
}

function calculateProfile() {
  const scores = Object.fromEntries(Object.keys(archetypes).map((type) => [type, 0]));
  const profile = {
    stage: "early",
    experience: "3-6 years",
    industry: "unknown",
    ambition: "ownership",
  };

  selectedOptions().forEach((option) => {
    Object.entries(option.scores || {}).forEach(([type, value]) => {
      scores[type] += value;
    });
    Object.assign(profile, option.profile || {});
  });

  if (profile.stage === "entry" && ["7-12 years", "13+ years"].includes(profile.experience)) {
    profile.stage = "pivot";
  }

  return { scores, profile };
}

function showResults() {
  const { scores, profile } = calculateProfile();
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [topType] = sorted[0];
  const secondType = sorted[1]?.[0] || topType;
  const result = archetypes[topType];
  const stage = stageProfiles[profile.stage] || stageProfiles.early;
  const industry = industryProfiles[profile.industry] || industryProfiles.unknown;

  quizPanel.classList.add("is-hidden");
  resultsPanel.classList.remove("is-hidden");

  document.getElementById("resultTitle").textContent = result.title;
  document.getElementById("resultSummary").textContent = `${result.summary} Your second signal is ${archetypes[secondType].label.toLowerCase()}, which means your best-fit roles should combine ${result.label.toLowerCase()} energy with ${archetypes[secondType].label.toLowerCase()} range.`;
  document.getElementById("resultAvatar").src = result.avatar;
  document.getElementById("resultAvatar").alt = `${result.label} result avatar`;
  document.getElementById("avatarDownload").href = result.avatar;
  document.getElementById("avatarDownload").download = `penelope-network-${topType}-avatar.png`;
  document.getElementById("stageResult").textContent = stage.label;
  document.getElementById("experienceResult").textContent = profile.experience;
  document.getElementById("industryResult").textContent = industry.label;
  document.getElementById("salaryResult").textContent = `${stage.salary}; ${industry.adjustment}`;

  renderList("roleList", buildRoleLanes(result, stage, industry));
  renderList("actionList", buildActions(result, stage, industry, profile));
  renderList("industryList", buildIndustryGuidance(industry, profile));
  renderList("priorityList", result.priorities);
  renderList("watchList", result.watch);
  renderList("keywordList", buildKeywords(result, stage, industry));
  renderScoreBars(scores);
}

function buildRoleLanes(result, stage, industry) {
  return result.roles.slice(0, 3).map((lane, index) => {
    const level = stage.levelWords[index] || stage.levelWords[0];
    const lens = industry.lenses[index] || industry.lenses[0];
    return `${level} ${lane} roles in ${lens.toLowerCase()}.`;
  });
}

function buildActions(result, stage, industry, profile) {
  const actions = [
    stage.action,
    `Pick 12 target roles: 4 reach roles, 4 right-level roles, and 4 bridge roles using ${result.keywords.slice(0, 3).join(", ")} language.`,
    `Run three informational interviews in ${industry.label.toLowerCase()} and ask what skills separate good candidates from obvious hires.`,
  ];

  if (profile.industry === "unknown") {
    actions[2] = "Choose three test industries this week and score each one by curiosity, lifestyle fit, compensation, and access to opportunities.";
  }

  return actions;
}

function buildIndustryGuidance(industry, profile) {
  if (profile.industry === "unknown") {
    return [
      "Start with problems you understand personally, communities you care about, and products you already study without being asked.",
      "Test industries through conversations before committing to a job search theme.",
      "Your strongest first filter should be daily work style, then industry.",
    ];
  }

  return [
    `Begin with ${industry.lenses[0].toLowerCase()} and compare against ${industry.lenses[1].toLowerCase()}.`,
    "Look for companies where the customer, product, or mission gives you energy beyond the title.",
    "Use industry as a focus tool, not a cage. A strong role in an adjacent field may still be the better move.",
  ];
}

function buildKeywords(result, stage, industry) {
  return [
    `${stage.levelWords.join(", ")}`,
    `${result.keywords.join(", ")}`,
    `${industry.lenses.join(", ")}`,
  ];
}

function renderList(id, items) {
  const list = document.getElementById(id);
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function renderScoreBars(scores) {
  const scoreBars = document.getElementById("scoreBars");
  const max = Math.max(...Object.values(scores), 1);
  scoreBars.innerHTML = "";

  Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .forEach(([type, score]) => {
      const row = document.createElement("div");
      row.className = "score-row";
      row.innerHTML = `
        <strong>${archetypes[type].label}</strong>
        <span class="score-track"><span class="score-fill" style="width: ${(score / max) * 100}%"></span></span>
        <span>${score}</span>
      `;
      scoreBars.appendChild(row);
    });
}

document.getElementById("startQuiz").addEventListener("click", showQuiz);
document.getElementById("retakeButton").addEventListener("click", showQuiz);
document.getElementById("printButton").addEventListener("click", () => window.print());
nextButton.addEventListener("click", goNext);
backButton.addEventListener("click", goBack);
