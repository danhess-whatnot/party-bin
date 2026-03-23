// ── Constants ────────────────────────────────────

const AVATARS = [
  "https://www.figma.com/api/mcp/asset/d1b662fb-01ba-4985-a98d-c9bc05148695",
  "https://www.figma.com/api/mcp/asset/a5a09b94-9298-4db9-a5f6-126f1f3da900",
  "https://www.figma.com/api/mcp/asset/3dce07be-4477-47d9-89a5-116c0c706cf9",
  "https://www.figma.com/api/mcp/asset/b1c2d5b0-85f4-4800-be06-a1ab1ac86310",
  "https://www.figma.com/api/mcp/asset/e386bf0b-9089-494b-83f8-40a6ed90c87a",
];

const USERNAMES = [
  "somedude", "lilbawler", "notstarr", "jmalkemus", "kickqueen",
  "sneakhead99", "hypebeast_", "grail_hunter", "sole_sniper",
  "waffleboy", "dunkmaster", "retro_rick", "shoegod", "laced_up",
  "complexkid", "dropday_dan", "stockx_stan", "sz10gang",
];

const MESSAGES = [
  "🔥🔥🔥", "these are heat", "how much for the jordans?",
  "do you ship to canada?", "instant cop", "my wallet is crying",
  "take my money", "w2c???", "those are clean", "need these in a 10.5",
  "price check on the dunks?", "grail alert 🚨", "let's gooo",
  "been waiting for these", "sheeeesh", "yo those are fire",
  "any size 9s?", "quality looks insane", "just copped 💰",
  "bro ship faster pls", "can I get a closer look?", "steal price",
  "deadstock?", "NEED", "bruh those are fake jk jk",
  "yay! 🥳🥳🥳", "can't wait for this weeks show!",
  "my wallet is ready", "do you have any tiffany af1s?",
  "those are going FAST", "drop the link!", "W seller",
  "this stream is elite", "added to cart 🛒", "best show yet",
];

const HIGHLIGHTED_MESSAGES = [
  "do you have any tiffany af1s?",
  "can I get a closer look?",
  "price check on the dunks?",
  "any size 9s?",
  "how much for the jordans?",
  "deadstock?",
];

const MAX_VISIBLE = 9;
const SPEED_TIERS = [0, 4000, 1800, 800, 250];
const PURCHASE_TIERS = [0, 3000, 1200, 500, 150];
const STARTING_STOCK = 200;
const BASE_PRICE = 100;
const DAN_AVATAR = "https://www.figma.com/api/mcp/asset/3bf437ba-ebfe-4533-b203-6c8ceb7d207d";
const PARTY_HAT = "https://www.figma.com/api/mcp/asset/e7ead8f7-1dd3-4c7e-ab54-6761e23bbda1";
const CONFETTI_COLORS = ["#ffe414", "#ef6a1f", "#2dd4a8", "#ff4d6a", "#7c5cfc", "#00b4ff", "#fff"];
const ICON_GIFT = "https://www.figma.com/api/mcp/asset/6e54026c-7041-4cf2-9b8b-8e25106c9ed0";
const ICON_DISCOUNT = "https://www.figma.com/api/mcp/asset/fceab759-bfb7-46f2-abbe-4add488a7cb2";

const SPARKLE_OFFSETS = [
  { sx: -8, sy: -10 }, { sx: 10, sy: -7 }, { sx: -6, sy: 9 },
  { sx: 12, sy: 5 },   { sx: -11, sy: 3 }, { sx: 5, sy: -12 },
];

const CELEBRATIONS = [
  {
    icon: "https://www.figma.com/api/mcp/asset/09d361af-48cd-4204-95b9-2ee37dce0877",
    title: "Buyer Giveaway",
    subtitle: "Milestone Reached!",
    avatars: [
      "https://www.figma.com/api/mcp/asset/a9d7898a-43bd-426d-afe8-90d105a6e1a9",
      "https://www.figma.com/api/mcp/asset/2ce32645-7b5e-4ff2-b7fb-2e3870b06bbb",
      "https://www.figma.com/api/mcp/asset/1468690b-b9d7-4d3b-aad3-2f65e9a9a396",
      "https://www.figma.com/api/mcp/asset/06c218ab-d5e7-42af-9974-dddf34a1fb8b",
      "https://www.figma.com/api/mcp/asset/6106904c-6c02-4709-ada4-70fdae4293c6",
      "https://www.figma.com/api/mcp/asset/e6d98af8-ab32-47e2-b6b5-d4ae01c193be",
      "https://www.figma.com/api/mcp/asset/eedf1861-c206-46c3-9562-08b50582044f",
      "https://www.figma.com/api/mcp/asset/97649aef-9b15-4caf-8216-17349f17b2bb",
    ],
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/ffa91e18-1119-444f-858c-5ff00aac14a2",
    title: "5% Off",
    subtitle: "Milestone Reached!",
    avatars: [
      "https://www.figma.com/api/mcp/asset/6aef1917-741b-4ed6-8c95-d2037eb97824",
      "https://www.figma.com/api/mcp/asset/b26c2c6c-46be-453b-a71d-173fa13ca5eb",
      "https://www.figma.com/api/mcp/asset/41222753-d771-480f-a43b-a3c21adcc95e",
      "https://www.figma.com/api/mcp/asset/4f405a23-b099-4bd3-9204-c9b19de5c4d8",
      "https://www.figma.com/api/mcp/asset/9ae051e7-d53e-433a-85eb-b47feb68fca6",
      "https://www.figma.com/api/mcp/asset/eba7c084-53ef-40d7-a673-16d22170bae0",
      "https://www.figma.com/api/mcp/asset/1c856eb6-e4fc-4cc2-a3e1-fd9fa194ce2c",
      "https://www.figma.com/api/mcp/asset/3c969792-f925-46c1-ba65-d70e8f1841fd",
    ],
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/eb7d0893-b066-4669-abb0-d8c836ed216d",
    iconClass: "product",
    title: "Free Socks",
    subtitle: "Milestone Reached!",
    avatars: [
      "https://www.figma.com/api/mcp/asset/c1416f4d-84ac-460f-adae-309061297e37",
      "https://www.figma.com/api/mcp/asset/bec07cd1-7845-4d09-b881-6153533aa867",
      "https://www.figma.com/api/mcp/asset/e68425d1-6bef-4bf0-a101-bba631cdb7cc",
      "https://www.figma.com/api/mcp/asset/c6dd773a-f925-41a7-8fcf-494f711569c3",
      "https://www.figma.com/api/mcp/asset/d74e59af-8017-452c-ad84-c5870e073432",
      "https://www.figma.com/api/mcp/asset/5dfe8d2a-a6cf-4999-bea9-804727f4b594",
      "https://www.figma.com/api/mcp/asset/b02619f9-4d53-48b4-a121-eacd5d8d9adc",
      "https://www.figma.com/api/mcp/asset/35ec410d-e021-429d-ac1c-965a23fb5579",
    ],
  },
];

// Each entry: { type: "giveaway"|"discount"|"gift", qty: number, discountPct?: number, giftName?: string }
let milestoneConfig = [
  { type: "giveaway", qty: 20 },
  { type: "discount", qty: 20, discountPct: 5 },
  { type: "gift",     qty: 20, giftName: "Free Socks" },
];

const MILESTONE_TYPE_META = {
  giveaway: { unlock: "Unlock for Buyer Giveaway", badge: "buyer giveaway", celebration: 0, giveaway: true },
  discount: { celebration: 1, giveaway: false },
  gift:     { celebration: 2, giveaway: false },
};

function buildMilestonesFromConfig() {
  let cursor = 0;
  const total = milestoneConfig.length;
  return milestoneConfig.map((cfg, i) => {
    const meta = MILESTONE_TYPE_META[cfg.type];
    const start = cursor;
    const end = cursor + cfg.qty;
    cursor = end;

    let unlock, badge, discount = 0, giftName;
    if (cfg.type === "giveaway") {
      unlock = meta.unlock;
      badge = meta.badge;
    } else if (cfg.type === "discount") {
      discount = cfg.discountPct || 5;
      unlock = `Unlock for ${discount}% off all sales`;
      badge = `${discount}% off`;
    } else {
      giftName = cfg.giftName || "Free Gift";
      unlock = `Unlock for ${giftName}`;
      badge = giftName.toLowerCase();
    }

    return {
      label: `Milestone ${i + 1} of ${total}`,
      unlock,
      badge,
      celebration: meta.celebration,
      discount,
      giveaway: meta.giveaway,
      giftName,
      start,
      end,
    };
  });
}

// ── DOM refs ─────────────────────────────────────

const webcamEl = document.getElementById("webcam");
const chatThread = document.querySelector(".chat-thread");
const chatInput = document.getElementById("chat-input");
const speedSlider = document.getElementById("speed-slider");
const badgeToggle = document.getElementById("badge-toggle");
const barEffectsToggle = document.getElementById("bar-effects-toggle");
const modeToggle = document.getElementById("mode-toggle");
const modeBtns = modeToggle.querySelectorAll(".mode-btn");
const swipeTrack = document.getElementById("swipe-track");
const swipeThumb = document.getElementById("swipe-thumb");
const milestoneTitle = document.querySelector(".milestone-title");
const milestoneSection = document.querySelector(".milestone-section");
const milestoneCount = document.querySelector(".milestone-count");
const milestoneProgressEl = document.querySelector(".milestone-progress");
const milestoneIconEl = document.querySelector(".milestone-icon");
const progressFill = document.querySelector(".progress-fill");
const progressTrack = document.querySelector(".progress-track");
const giftIcon = document.querySelector(".gift-icon");
const productStock = document.querySelector(".product-stock");
const priceOriginal = document.querySelector(".product-price-original");
const priceDiscount = document.querySelector(".product-price-discount");
const purchaseSlider = document.getElementById("purchase-slider");
const celebration = document.getElementById("celebration");
const buyerActivity = document.getElementById("buyer-activity");
const giveawayOverlay = document.getElementById("giveaway-overlay");
const giveawayTitle = document.getElementById("giveaway-title");
const giveawayScroller = document.getElementById("giveaway-scroller");
const milestoneTimer = document.querySelector(".milestone-timer");
const milestoneListEl = document.getElementById("milestone-list");
const showNotesEl = document.getElementById("show-notes");
const showNotesToggle = document.getElementById("show-notes-toggle");
const showNotesClose = document.getElementById("show-notes-close");
const showNotesList = document.getElementById("show-notes-list");
const addMilestoneBtn = document.getElementById("add-milestone-btn");

// ── Mutable state ────────────────────────────────

let webcamStream = null;
let chatTimer = null;
let purchaseTimer = null;
let titleSwapTimer = null;
let buyerFadeTimer = null;
let titleSwapped = false;
let swipeStartX = 0;
let swipeActive = false;
let swipeMax = 0;
let MILESTONES = buildMilestonesFromConfig();
let totalPurchases = 0;
let burstCounter = 0;
let recentPurchaseTimes = [];
let currentMilestone = 0;
let transitioning = false;
let stockLeft = STARTING_STOCK;
let activeDiscount = 0;
let countdownSeconds = 10 * 60;

// ── Helpers ──────────────────────────────────────

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ── Background video toggle ──────────────────────

const bgVideo = document.getElementById("bg-video");
const bgVideoToggle = document.getElementById("bg-video-toggle");

bgVideoToggle.addEventListener("change", () => {
  if (bgVideoToggle.checked) {
    bgVideo.style.display = "";
    bgVideo.play();
  } else {
    bgVideo.pause();
    bgVideo.style.display = "none";
  }
});

// ── Webcam ───────────────────────────────────────

function startWebcam() {
  if (webcamStream) return;
  navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false })
    .then(stream => {
      webcamStream = stream;
      webcamEl.srcObject = stream;
    })
    .catch(() => {});
}

function stopWebcam() {
  if (!webcamStream) return;
  webcamStream.getTracks().forEach(track => track.stop());
  webcamStream = null;
  webcamEl.srcObject = null;
}

modeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modeBtns.forEach(el => el.classList.remove("active"));
    btn.classList.add("active");
    if (btn.dataset.mode === "seller") startWebcam();
    else stopWebcam();
  });
});

// ── Chat ─────────────────────────────────────────

function appendAndSlide(msg) {
  chatThread.appendChild(msg);
  const slideOffset = msg.offsetHeight + 8;
  chatThread.style.transition = "none";
  chatThread.style.transform = `translateY(${slideOffset}px)`;
  requestAnimationFrame(() => {
    chatThread.style.transition = "transform 0.35s ease";
    chatThread.style.transform = "translateY(0)";
  });
  while (chatThread.children.length > MAX_VISIBLE) {
    chatThread.removeChild(chatThread.firstElementChild);
  }
}

function addMessage(username, text, avatar, isHighlight) {
  const msg = document.createElement("div");
  msg.className = "chat-message";
  const isTeam = HIGHLIGHTED_MESSAGES.includes(text);
  msg.innerHTML = `
    <img src="${avatar}" alt="" class="chat-avatar">
    <div class="chat-content">
      <span class="chat-username${isTeam ? " team" : ""}">${username}</span>
      <span class="chat-text${isHighlight ? " highlight" : ""}">${text}</span>
    </div>`;
  appendAndSlide(msg);
}

function addBuyerBadge(username, avatar) {
  const ms = MILESTONES[currentMilestone];
  const rewardName = ms.badge || ms.label;
  const msg = document.createElement("div");
  msg.className = "chat-message";
  msg.innerHTML = `
    <div class="chat-avatar-wrap">
      <img src="${PARTY_HAT}" alt="" class="party-hat">
      <img src="${avatar}" alt="" class="chat-avatar">
    </div>
    <div class="chat-content">
      <span class="chat-username">${username}</span>
      <div class="badge-tag">
        <span class="badge-tag-text">got</span>
        <span class="badge-label">${rewardName}</span>
      </div>
    </div>`;
  appendAndSlide(msg);
}

function addRandomMessage() {
  const avatar = pick(AVATARS);
  const username = pick(USERNAMES);
  const text = pick(MESSAGES);
  addMessage(username, text, avatar, HIGHLIGHTED_MESSAGES.includes(text));
}

function startAutoChat(intervalMs) {
  stopAutoChat();
  if (intervalMs <= 0) return;
  function scheduleNext() {
    const jitter = intervalMs * (0.5 + Math.random());
    chatTimer = setTimeout(() => { addRandomMessage(); scheduleNext(); }, jitter);
  }
  scheduleNext();
}

function stopAutoChat() {
  clearTimeout(chatTimer);
  chatTimer = null;
}

speedSlider.addEventListener("input", () => {
  startAutoChat(SPEED_TIERS[parseInt(speedSlider.value, 10)]);
});

startAutoChat(SPEED_TIERS[2]);

chatInput.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  const text = chatInput.value.trim();
  if (!text) return;
  addMessage("you", text, pick(AVATARS), false);
  chatInput.value = "";
});

// ── Swipe-to-Buy ─────────────────────────────────

function getSwipeMax() {
  return swipeTrack.offsetWidth - swipeThumb.offsetWidth - 2;
}

function onSwipeStart(e) {
  if (currentMilestone >= MILESTONES.length && totalPurchases >= MILESTONES[MILESTONES.length - 1].end) return;
  swipeActive = true;
  swipeMax = getSwipeMax();
  swipeStartX = (e.touches ? e.touches[0] : e).clientX;
  swipeThumb.classList.add("swiping");
  swipeThumb.classList.remove("success");
}

function onSwipeMove(e) {
  if (!swipeActive) return;
  const clientX = (e.touches ? e.touches[0] : e).clientX;
  const dx = Math.max(0, Math.min(clientX - swipeStartX, swipeMax));
  swipeThumb.style.transform = `translateX(${dx}px)`;
}

function onSwipeEnd(e) {
  if (!swipeActive) return;
  swipeActive = false;
  swipeThumb.classList.remove("swiping");
  const clientX = (e.changedTouches ? e.changedTouches[0] : e).clientX;
  const dx = clientX - swipeStartX;
  if (dx >= swipeMax * 0.7) {
    swipeThumb.classList.add("success");
    swipeThumb.style.transform = `translateX(${swipeMax}px)`;
    recordPurchase(DAN_AVATAR, "dan");
    setTimeout(() => { swipeThumb.style.transform = ""; swipeThumb.classList.remove("success"); }, 400);
  } else {
    swipeThumb.style.transform = "";
  }
}

swipeTrack.addEventListener("mousedown", onSwipeStart);
swipeTrack.addEventListener("touchstart", onSwipeStart, { passive: true });
document.addEventListener("mousemove", onSwipeMove);
document.addEventListener("touchmove", onSwipeMove, { passive: true });
document.addEventListener("mouseup", onSwipeEnd);
document.addEventListener("touchend", onSwipeEnd);

// ── Milestone title swap ─────────────────────────

function scheduleTitleSwap(milestoneIndex) {
  clearTimeout(titleSwapTimer);
  titleSwapped = false;
  const ms = MILESTONES[milestoneIndex];
  milestoneTitle.textContent = ms.label;
  if (ms.unlock) {
    titleSwapTimer = setTimeout(() => {
      milestoneTitle.textContent = ms.unlock;
      titleSwapped = true;
    }, 4000);
  }
}

// ── Progress bar effects ─────────────────────────

function emitBarStars() {
  const trackRect = progressTrack.getBoundingClientRect();
  const progRect = milestoneProgressEl.getBoundingClientRect();
  const trackLeft = trackRect.left - progRect.left;
  const trackWidth = trackRect.width;
  for (let i = 0; i < 18; i++) {
    const star = document.createElement("div");
    star.className = "bar-star";
    const x = trackLeft + Math.random() * trackWidth;
    const dy = -(14 + Math.random() * 26);
    star.style.cssText = `left:${x}px;--dy:${dy}px;animation-delay:${(Math.random() * 0.8).toFixed(2)}s`;
    milestoneProgressEl.appendChild(star);
    setTimeout(() => star.remove(), 1800);
  }
}

function emitChargeParticles() {
  const iconRect = milestoneIconEl.getBoundingClientRect();
  const progRect = milestoneProgressEl.getBoundingClientRect();
  const cx = iconRect.left - progRect.left + iconRect.width / 2;
  const cy = iconRect.top - progRect.top + iconRect.height / 2;

  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    const dist = 40 + Math.random() * 30;
    const sx = Math.cos(angle) * dist;
    const sy = Math.sin(angle) * dist;
    const dur = 0.4 + Math.random() * 0.3;
    const delay = Math.random() * 0.25;
    const particle = document.createElement("div");
    particle.className = "charge-particle";
    particle.style.cssText = `left:${cx}px;top:${cy}px;--sx:${sx}px;--sy:${sy}px;--dur:${dur}s;--delay:${delay}s`;
    milestoneProgressEl.appendChild(particle);
    setTimeout(() => particle.remove(), (dur + delay) * 1000 + 100);
  }

  setTimeout(() => {
    giftIcon.classList.remove("wiggling");
    giftIcon.classList.add("charged");
    setTimeout(() => giftIcon.classList.remove("charged"), 1200);

    const ring = document.createElement("div");
    ring.className = "icon-ring-burst";
    ring.style.cssText = `left:${cx}px;top:${cy}px`;
    milestoneProgressEl.appendChild(ring);
    setTimeout(() => ring.remove(), 1000);
  }, 350);
}

function triggerProgressBurst() {
  const fillW = progressFill.offsetWidth;
  const trackLeft = progressTrack.offsetLeft;
  const burst = document.createElement("div");
  burst.className = "progress-burst";
  burst.style.left = `${trackLeft + fillW}px`;
  burst.innerHTML = '<div class="progress-burst-glow"></div><div class="progress-burst-ring"></div>';
  SPARKLE_OFFSETS.forEach(({ sx, sy }, i) => {
    const sparkle = document.createElement("div");
    sparkle.className = "progress-burst-sparkle";
    sparkle.style.cssText = `--sx:${sx}px;--sy:${sy}px;animation-delay:${i * 0.025}s`;
    burst.appendChild(sparkle);
  });
  milestoneProgressEl.appendChild(burst);
  setTimeout(() => burst.remove(), 800);
}

// ── Celebration / Jumbotron ──────────────────────

function loadCelebration(milestoneIndex) {
  const ms = MILESTONES[milestoneIndex];
  const data = CELEBRATIONS[ms.celebration];
  const iconClass = data.iconClass ? `gift-main ${data.iconClass}` : "gift-main";
  const celebTitle = ms.badge || data.title;
  const avatarHTML = data.avatars
    .map((src, i) => `<img src="${src}" alt="" class="float-avatar a${i + 1}">`)
    .join("");
  const sparkleHTML = Array.from({ length: 8 }, (_, i) =>
    `<span class="celeb-sparkle s${i + 1}"></span>`
  ).join("");
  celebration.innerHTML = `
    <div class="celebration-content">
      <div class="celebration-scene">
        <div class="celeb-ring"></div>
        <div class="celeb-glow"></div>
        ${sparkleHTML}
        <img src="${data.icon}" alt="" class="${iconClass}">
        ${avatarHTML}
      </div>
      <div class="celebration-text">
        <p class="celebration-title">${celebTitle}</p>
        <p class="celebration-subtitle">${data.subtitle}</p>
      </div>
    </div>`;
}

function showCelebration(milestoneIndex) {
  loadCelebration(milestoneIndex);
  celebration.classList.remove("hiding");
  celebration.classList.add("visible");
  const ms = MILESTONES[milestoneIndex];

  setTimeout(() => {
    celebration.classList.add("hiding");
    celebration.classList.remove("visible");
    setTimeout(() => celebration.classList.remove("hiding"), 400);
    if (ms.giveaway) runGiveaway(ms.end - ms.start);
  }, 4000);
}

// ── Buyer Giveaway ───────────────────────────────

function launchGiveawayConfetti() {
  const existing = document.querySelector(".giveaway-confetti");
  if (existing) existing.remove();

  const container = document.createElement("div");
  container.className = "giveaway-confetti";
  const phoneFrame = document.querySelector(".phone-frame");
  const frameW = phoneFrame.offsetWidth;

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    const color = pick(CONFETTI_COLORS);
    const left = Math.random() * frameW;
    const w = 5 + Math.random() * 6;
    const h = 8 + Math.random() * 10;
    const dur = 1.8 + Math.random() * 1.5;
    const delay = Math.random() * 1.2;
    const rot = 360 + Math.random() * 720;
    piece.style.cssText = `left:${left}px;--c:${color};--w:${w}px;--h:${h}px;--dur:${dur}s;--delay:${delay}s;--rot:${rot}deg`;
    container.appendChild(piece);
  }
  phoneFrame.appendChild(container);
}

function runGiveaway(nameCount) {
  const names = [];
  for (let i = 0; i < nameCount; i++) {
    names.push(USERNAMES[i % USERNAMES.length]);
  }
  const winnerIdx = names.length - 1;
  const winnerName = names[winnerIdx];

  giveawayScroller.innerHTML = "";
  names.forEach(name => {
    const el = document.createElement("div");
    el.className = "giveaway-name";
    el.textContent = name;
    giveawayScroller.appendChild(el);
  });

  giveawayTitle.textContent = "Selecting Winner";
  giveawayScroller.style.transition = "none";
  giveawayScroller.style.transform = "translateY(0)";
  giveawayOverlay.classList.add("visible");

  const nameH = 36;
  const scrollDuration = 2000;
  const targetOffset = -winnerIdx * nameH;

  setTimeout(() => {
    giveawayScroller.style.transition = `transform ${scrollDuration}ms cubic-bezier(0.2, 0, 0.1, 1)`;
    giveawayScroller.style.transform = `translateY(${targetOffset}px)`;
  }, 1000);

  setTimeout(() => {
    giveawayTitle.textContent = "Giveaway Winner \u{1F389}";
    const winnerEl = giveawayScroller.children[winnerIdx];
    winnerEl.classList.add("winner");
    winnerEl.innerHTML = `${winnerName} <span class="won-text">Won The Giveaway!</span>`;
    launchGiveawayConfetti();
  }, 1000 + scrollDuration);

  setTimeout(() => {
    giveawayOverlay.classList.remove("visible");
    const confettiEl = document.querySelector(".giveaway-confetti");
    if (confettiEl) confettiEl.remove();
  }, 1000 + scrollDuration + 3000);
}

// ── Milestone UI ─────────────────────────────────

function updateMilestoneUI() {
  const ms = MILESTONES[currentMilestone];
  const goal = ms.end - ms.start;
  const progress = Math.max(0, Math.min(totalPurchases - ms.start, goal));
  const pct = (progress / goal) * 100;

  if (!titleSwapped) milestoneTitle.textContent = ms.label;
  milestoneCount.textContent = `${progress} of ${goal}`;
  progressFill.style.width = `${Math.max(pct, 2)}%`;
  progressFill.style.setProperty("--glow-intensity", (pct / 100).toFixed(2));
  giftIcon.src = ms.discount > 0 ? ICON_DISCOUNT : ICON_GIFT;

  if (pct >= 70) {
    const t = (pct - 70) / 30;
    giftIcon.classList.add("wiggling");
    giftIcon.style.animationDuration = `${0.6 - t * 0.4}s`;
  } else {
    giftIcon.classList.remove("wiggling");
    giftIcon.style.animationDuration = "";
  }
}

// ── Purchases ────────────────────────────────────

function updateStockColor() {
  if (stockLeft <= 20) productStock.style.color = "#ef233c";
  else if (stockLeft <= 50) productStock.style.color = "#ff9f43";
}

function showBuyerActivity(avatar, name) {
  const dot = currentMilestone < MILESTONES.length ? '<span class="buyer-dot"></span>' : '';
  buyerActivity.innerHTML =
    dot +
    `<img src="${avatar}" alt="" class="buyer-avatar">` +
    `<span class="buyer-name">${name}</span>` +
    `<span class="buyer-action">purchased</span>`;
  buyerActivity.classList.add("visible");
  clearTimeout(buyerFadeTimer);
  if (currentMilestone < MILESTONES.length) {
    buyerFadeTimer = setTimeout(() => buyerActivity.classList.remove("visible"), 2500);
  }
}

function advanceToNextMilestone() {
  currentMilestone++;
  scheduleTitleSwap(currentMilestone);
  transitioning = false;
  milestoneSection.classList.remove("milestone-complete");
  milestoneSection.classList.remove("glow-breathe");
  progressFill.style.transition = "none";
  progressFill.style.width = "2%";
  requestAnimationFrame(() => { progressFill.style.transition = ""; updateMilestoneUI(); });
}

function finishAllMilestones() {
  currentMilestone = MILESTONES.length;
  transitioning = false;
  milestoneSection.classList.remove("milestone-complete");
  celebration.classList.remove("visible");
  celebration.classList.add("hiding");
  setTimeout(() => celebration.classList.remove("hiding"), 400);
  clearTimeout(titleSwapTimer);
  titleSwapped = true;
  milestoneTitle.textContent = "Party Progress Complete!";
  milestoneCount.textContent = "";
  progressFill.style.width = "100%";
  giftIcon.classList.remove("wiggling");
  giftIcon.style.animationDuration = "";
  milestoneSection.classList.remove("glow-breathe");
  milestoneSection.classList.add("glow-pulse");
}

function completeMilestone(ms) {
  transitioning = true;

  if (ms.discount > 0) {
    activeDiscount += ms.discount;
    const newPrice = Math.round(BASE_PRICE * (1 - activeDiscount / 100));
    priceOriginal.classList.add("struck");
    priceDiscount.textContent = `$${newPrice}`;
    priceDiscount.classList.add("active");
  }

  milestoneSection.classList.add("milestone-complete");
  milestoneSection.classList.add("glow-breathe");
  showCelebration(currentMilestone);

  if (barEffectsToggle.checked) {
    emitBarStars();
    emitChargeParticles();
  }

  const hasNext = currentMilestone < MILESTONES.length - 1;
  setTimeout(() => hasNext ? advanceToNextMilestone() : finishAllMilestones(), 2000);
}

function recordPurchase(overrideAvatar, overrideName) {
  if (stockLeft <= 0) { stopAutoPurchases(); return; }

  totalPurchases++;
  stockLeft = Math.max(0, stockLeft - 1);
  productStock.textContent = `${stockLeft} Left`;
  if (stockLeft <= 0) stopAutoPurchases();

  const buyerAvatar = overrideAvatar || pick(AVATARS);
  const buyerName = overrideName || pick(USERNAMES);
  showBuyerActivity(buyerAvatar, buyerName);

  if (badgeToggle.checked) addBuyerBadge(buyerName, buyerAvatar);

  const now = Date.now();
  recentPurchaseTimes.push(now);
  recentPurchaseTimes = recentPurchaseTimes.filter(t => now - t < 1000);
  burstCounter++;
  const shouldFireEffects = recentPurchaseTimes.length < 3 || burstCounter % 5 === 0;

  if (barEffectsToggle.checked && currentMilestone < MILESTONES.length && shouldFireEffects) {
    milestoneSection.classList.add("pulse");
    setTimeout(() => milestoneSection.classList.remove("pulse"), 300);
  }

  if (currentMilestone >= MILESTONES.length) return;
  const ms = MILESTONES[currentMilestone];
  if (transitioning) return;

  updateMilestoneUI();
  if (barEffectsToggle.checked && shouldFireEffects) {
    requestAnimationFrame(() => triggerProgressBurst());
  }

  if (totalPurchases >= ms.end) completeMilestone(ms);

  updateStockColor();
}

// ── Auto-purchases ───────────────────────────────

function startAutoPurchases(intervalMs) {
  stopAutoPurchases();
  if (intervalMs <= 0) return;
  function scheduleNext() {
    const jitter = intervalMs * (0.5 + Math.random());
    purchaseTimer = setTimeout(() => { recordPurchase(); scheduleNext(); }, jitter);
  }
  scheduleNext();
}

function stopAutoPurchases() {
  clearTimeout(purchaseTimer);
  purchaseTimer = null;
}

purchaseSlider.addEventListener("input", () => {
  startAutoPurchases(PURCHASE_TIERS[parseInt(purchaseSlider.value, 10)]);
});

// ── Init ─────────────────────────────────────────

scheduleTitleSwap(0);
updateMilestoneUI();
startAutoPurchases(PURCHASE_TIERS[2]);

// ── Reset ────────────────────────────────────────

function resetPrototype() {
  MILESTONES = buildMilestonesFromConfig();
  totalPurchases = 0;
  currentMilestone = 0;
  transitioning = false;
  burstCounter = 0;
  recentPurchaseTimes = [];
  stockLeft = STARTING_STOCK;
  activeDiscount = 0;
  productStock.textContent = `${stockLeft} Left`;
  productStock.style.color = "";
  priceOriginal.classList.remove("struck");
  priceDiscount.classList.remove("active");
  priceDiscount.textContent = "";
  milestoneSection.classList.remove("glow-breathe");
  milestoneSection.classList.remove("glow-pulse");
  giftIcon.classList.remove("wiggling");
  giftIcon.style.animationDuration = "";
  buyerActivity.classList.remove("visible");
  celebration.classList.remove("visible", "hiding");
  countdownSeconds = 10 * 60;
  milestoneTimer.textContent = formatTime(countdownSeconds);
  scheduleTitleSwap(0);
  updateMilestoneUI();
  startAutoPurchases(PURCHASE_TIERS[parseInt(purchaseSlider.value, 10)]);
}

document.getElementById("reset-btn").addEventListener("click", resetPrototype);

document.getElementById("trigger-jumbotron").addEventListener("click", () => {
  showCelebration(currentMilestone < MILESTONES.length ? currentMilestone : 0);
});

// ── Milestone builder ────────────────────────────

let milestoneDirty = false;

function markDirty() {
  if (!milestoneDirty) {
    milestoneDirty = true;
    addMilestoneBtn.textContent = "Save";
  }
}

function commitAllChips() {
  milestoneListEl.querySelectorAll(".milestone-chip").forEach((row, i) => {
    const cfg = milestoneConfig[i];
    if (!cfg) return;
    cfg.type = row.querySelector(".chip-type").value;
    cfg.qty = parseInt(row.querySelector(".chip-qty").value, 10) || 20;
    const extra = row.querySelector(".chip-extra");
    if (cfg.type === "discount") cfg.discountPct = parseInt(extra.value, 10) || 0;
    else delete cfg.discountPct;
    if (cfg.type === "gift") cfg.giftName = extra.value.trim() || "Free Gift";
    else delete cfg.giftName;
  });
}

function renderMilestoneChips() {
  milestoneListEl.innerHTML = "";
  milestoneConfig.forEach((cfg, i) => {
    const row = document.createElement("div");
    row.className = "milestone-chip";

    const typeSelect = document.createElement("select");
    typeSelect.className = "controller-select chip-type";
    [["giveaway", "Giveaway"], ["discount", "Discount"], ["gift", "Gift"]].forEach(([val, text]) => {
      const opt = document.createElement("option");
      opt.value = val; opt.textContent = text;
      if (val === cfg.type) opt.selected = true;
      typeSelect.appendChild(opt);
    });

    const qtyInput = document.createElement("input");
    qtyInput.type = "number"; qtyInput.className = "builder-input chip-qty";
    qtyInput.value = cfg.qty; qtyInput.min = 1;

    const extraInput = document.createElement("input");
    extraInput.className = "builder-input chip-extra";
    if (cfg.type === "discount") {
      extraInput.type = "number"; extraInput.value = cfg.discountPct || 0;
      extraInput.min = 0; extraInput.max = 100; extraInput.placeholder = "0%";
    } else if (cfg.type === "gift") {
      extraInput.type = "text"; extraInput.value = cfg.giftName || "Free Gift";
      extraInput.classList.add("builder-text"); extraInput.placeholder = "Name";
    } else {
      extraInput.style.display = "none";
    }

    const removeBtn = document.createElement("button");
    removeBtn.className = "milestone-chip-remove";
    removeBtn.innerHTML = "&times;";

    typeSelect.addEventListener("change", () => {
      cfg.type = typeSelect.value;
      renderMilestoneChips();
      markDirty();
    });
    qtyInput.addEventListener("input", markDirty);
    extraInput.addEventListener("input", markDirty);
    removeBtn.addEventListener("click", () => {
      milestoneConfig.splice(i, 1);
      renderMilestoneChips();
      markDirty();
    });

    row.appendChild(typeSelect);
    row.appendChild(extraInput);
    row.appendChild(qtyInput);
    row.appendChild(removeBtn);
    milestoneListEl.appendChild(row);
  });
  if (typeof updateShowNotes === "function") updateShowNotes();
}

addMilestoneBtn.addEventListener("click", () => {
  if (milestoneDirty) {
    commitAllChips();
    milestoneDirty = false;
    addMilestoneBtn.textContent = "Add Milestone";
    renderMilestoneChips();
    resetPrototype();
    return;
  }
  milestoneConfig.push({ type: "giveaway", qty: 20 });
  renderMilestoneChips();
  resetPrototype();
});

renderMilestoneChips();

// ── Show Notes ───────────────────────────────────

function updateShowNotes() {
  showNotesList.innerHTML = "";
  let cumulative = 0;
  milestoneConfig.forEach((cfg) => {
    cumulative += cfg.qty;
    const line = document.createElement("div");
    if (cfg.type === "giveaway") line.textContent = `${cumulative} Purchases - Buyer Giveaway`;
    else if (cfg.type === "discount") line.textContent = `${cumulative} Purchases - ${cfg.discountPct || 0}% Discount`;
    else line.textContent = `${cumulative} Purchases - ${cfg.giftName || "Free Gift"}`;
    showNotesList.appendChild(line);
  });
}

showNotesToggle.addEventListener("click", () => {
  showNotesEl.classList.add("open");
});

showNotesClose.addEventListener("click", () => {
  showNotesEl.classList.remove("open");
});

updateShowNotes();

// ── Countdown timer ──────────────────────────────

function formatTime(s) {
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
}

setInterval(() => {
  if (countdownSeconds > 0) {
    countdownSeconds--;
    milestoneTimer.textContent = formatTime(countdownSeconds);
  }
}, 1000);

// ── Intro Sheet ──────────────────────────────────

const introSheet = document.getElementById("intro-sheet");
const introBackdrop = document.getElementById("intro-sheet-backdrop");
const introToggle = document.getElementById("intro-sheet-toggle");
const introStartWatching = document.getElementById("intro-start-watching");

function openIntroSheet() {
  introSheet.classList.add("visible");
  introBackdrop.classList.add("visible");
  introToggle.checked = true;
}

function closeIntroSheet() {
  introSheet.classList.remove("visible");
  introBackdrop.classList.remove("visible");
  introToggle.checked = false;
}

introToggle.addEventListener("change", () => {
  introToggle.checked ? openIntroSheet() : closeIntroSheet();
});

introStartWatching.addEventListener("click", closeIntroSheet);
introBackdrop.addEventListener("click", closeIntroSheet);

// ── Live indicator pulse ─────────────────────────

const bars = document.querySelectorAll(".bar");
setInterval(() => {
  bars.forEach(bar => {
    bar.style.height = `${4 + Math.random() * 8}px`;
    bar.style.transition = "height 0.3s ease";
  });
}, 600);
