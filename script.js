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
let STARTING_STOCK = 200;
const BASE_PRICE = 100;
const DAN_AVATAR = "https://www.figma.com/api/mcp/asset/3bf437ba-ebfe-4533-b203-6c8ceb7d207d";
const PARTY_HAT = "https://www.figma.com/api/mcp/asset/e7ead8f7-1dd3-4c7e-ab54-6761e23bbda1";
const CONFETTI_COLORS = ["#ffe414", "#ef6a1f", "#2dd4a8", "#ff4d6a", "#7c5cfc", "#00b4ff", "#fff"];
const ICON_GIFT = "https://www.figma.com/api/mcp/asset/6e54026c-7041-4cf2-9b8b-8e25106c9ed0";

const ICON_GIFT_3D = "https://www.figma.com/api/mcp/asset/ded37128-8934-45f5-8add-1a740a1b835d";
const ICON_DISCOUNT_3D = "https://www.figma.com/api/mcp/asset/fb4167fd-5181-4118-b62e-79095fbd420e";
const ICON_CHECK = "https://www.figma.com/api/mcp/asset/622bf03e-70dd-4dd3-9a6a-98beb1a5580a";

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
  { type: "giveaway", qty: 20 },
  { type: "discount", qty: 20, discountPct: 20 },
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
      badge = `${discount}% Off All Sales`;
    } else {
      giftName = cfg.giftName || "Free Gift";
      unlock = `Unlock for ${giftName}`;
      badge = giftName.toLowerCase();
    }

    const rawName = badge || unlock || "Party Purchase";
    const rewardName = rawName.replace(/\b\w/g, c => c.toUpperCase());
    const label = `Reward ${i + 1} – ${rewardName}`;

    return {
      label,
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
const progressV1 = document.getElementById("progress-v1");
const progressV2 = document.getElementById("progress-v2");
const progressV3 = document.getElementById("progress-v3");
const progressStyleSelect = document.getElementById("progress-style-select");
const ppExpanded = document.getElementById("pp-expanded");
const ppRewards = document.getElementById("pp-rewards");
const ppPreshow = document.getElementById("pp-preshow");
const ppPreshowRewards = document.getElementById("pp-preshow-rewards");
const ppPreshow2 = document.getElementById("pp-preshow2");
const showModeSelect = document.getElementById("show-mode-select");

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
STARTING_STOCK = MILESTONES[MILESTONES.length - 1]?.end || 200;
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
        <span class="badge-label">Joined the Party</span>
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
  if (showModeSelect.value === "live") milestoneTitle.textContent = ms.label;
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

function emitV3Stars() {
  const v3Fill = progressV3.querySelector(".v3-fill");
  if (!v3Fill) return;
  const fillWidth = v3Fill.offsetWidth;
  if (fillWidth <= 0) return;
  for (let i = 0; i < 18; i++) {
    const star = document.createElement("div");
    star.className = "bar-star";
    const x = Math.random() * fillWidth;
    const dy = -(14 + Math.random() * 26);
    star.style.cssText = `left:${x}px;--dy:${dy}px;animation-delay:${(Math.random() * 0.8).toFixed(2)}s`;
    progressV3.appendChild(star);
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

    const v2Gift = document.getElementById("v2-gift-icon");
    if (v2Gift) {
      v2Gift.classList.remove("wiggling");
    }
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

  triggerV2Burst();
  triggerV3Burst();
}

function triggerV2Burst() {
  const v2Fill = progressV2.querySelector(".v2-fill");
  const v2Track = progressV2.querySelector(".v2-track");
  if (!v2Fill || !v2Track) return;
  const fillW = v2Fill.offsetWidth;
  const trackLeft = v2Track.offsetLeft;
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
  progressV2.appendChild(burst);
  setTimeout(() => burst.remove(), 800);
}

function triggerV3Burst() {
  const v3Fill = progressV3.querySelector(".v3-fill");
  const v3Track = progressV3.querySelector(".v3-track");
  if (!v3Fill || !v3Track) return;
  const fillW = v3Fill.offsetWidth;
  const trackLeft = v3Track.offsetLeft;
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
  progressV3.appendChild(burst);
  setTimeout(() => burst.remove(), 800);
}

// ── Celebration / Jumbotron ──────────────────────

function loadCelebration(milestoneIndex) {
  const ms = MILESTONES[milestoneIndex];
  const data = CELEBRATIONS[ms.celebration];
  const iconClass = data.iconClass ? `gift-main ${data.iconClass}` : "gift-main";
  const rawTitle = ms.badge || data.title;
  const celebTitle = rawTitle.replace(/\b\w/g, c => c.toUpperCase());
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
  document.getElementById("gems-counter").classList.add("hidden");
  const ms = MILESTONES[milestoneIndex];
  const duration = ms.giveaway ? 2000 : 4000;

  setTimeout(() => {
    celebration.classList.add("hiding");
    celebration.classList.remove("visible");
    setTimeout(() => celebration.classList.remove("hiding"), 400);
    if (ms.giveaway) runGiveaway(ms.end - ms.start);
    else document.getElementById("gems-counter").classList.remove("hidden");
  }, duration);
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
  document.getElementById("gems-counter").classList.add("hidden");

  const nameH = 36;
  const scrollDuration = 1000;
  const targetOffset = -winnerIdx * nameH;

  setTimeout(() => {
    giveawayScroller.style.transition = `transform ${scrollDuration}ms cubic-bezier(0.2, 0, 0.1, 1)`;
    giveawayScroller.style.transform = `translateY(${targetOffset}px)`;
  }, 500);

  setTimeout(() => {
    giveawayTitle.textContent = "Giveaway Winner \u{1F389}";
    const winnerEl = giveawayScroller.children[winnerIdx];
    winnerEl.classList.add("winner");
    winnerEl.innerHTML = `${winnerName} <span class="won-text">Won The Giveaway!</span>`;
    launchGiveawayConfetti();
  }, 500 + scrollDuration);

  setTimeout(() => {
    giveawayOverlay.classList.remove("visible");
    document.getElementById("gems-counter").classList.remove("hidden");
    const confettiEl = document.querySelector(".giveaway-confetti");
    if (confettiEl) confettiEl.remove();
  }, 500 + scrollDuration + 3000);
}

// ── Milestone UI ─────────────────────────────────

function updateMilestoneUI() {
  const ms = MILESTONES[currentMilestone];
  const goal = ms.end - ms.start;
  const progress = Math.max(0, Math.min(totalPurchases - ms.start, goal));
  const pct = (progress / goal) * 100;

  if (!titleSwapped && showModeSelect.value === "live") milestoneTitle.textContent = ms.label;
  if (progressStyleSelect.value !== "v1") {
    const totalGoal = MILESTONES[MILESTONES.length - 1]?.end || 0;
    milestoneCount.textContent = `${Math.min(totalPurchases, totalGoal)} of ${totalGoal}`;
  } else {
    milestoneCount.textContent = `${progress} of ${goal}`;
  }
  progressFill.style.width = `${Math.max(pct, 2)}%`;
  progressFill.style.setProperty("--glow-intensity", (pct / 100).toFixed(2));
  giftIcon.src = ICON_GIFT;

  if (pct >= 70) {
    const t = (pct - 70) / 30;
    giftIcon.classList.add("wiggling");
    giftIcon.style.animationDuration = `${0.6 - t * 0.4}s`;
  } else {
    giftIcon.classList.remove("wiggling");
    giftIcon.style.animationDuration = "";
  }

  updateProgressV2();
  updateProgressV3();
}

// ── Segmented Progress Bar (V2) ──────────────────

function renderProgressV2() {
  progressV2.innerHTML = "";
  const track = document.createElement("div");
  track.className = "v2-track";
  const fill = document.createElement("div");
  fill.className = "v2-fill";
  track.appendChild(fill);
  const v2Flame = document.createElement("div");
  v2Flame.className = "v2-flame-wrap";
  v2Flame.id = "v2-flame-wrap";
  const v2FlameImg = document.createElement("img");
  v2FlameImg.src = "flame.png";
  v2FlameImg.alt = "";
  v2Flame.appendChild(v2FlameImg);
  track.appendChild(v2Flame);
  progressV2.appendChild(track);

  const totalGoal = MILESTONES[MILESTONES.length - 1]?.end || 1;
  const bubbles = document.createElement("div");
  bubbles.className = "v2-bubbles";
  let cumulative = 0;
  milestoneConfig.forEach((cfg, idx) => {
    cumulative += cfg.qty;
    const pct = (cumulative / totalGoal) * 100;
    const bubble = document.createElement("div");
    bubble.className = "v2-bubble";
    bubble.textContent = cumulative;
    bubble.dataset.target = cumulative;
    if (idx === milestoneConfig.length - 1) {
      bubble.style.right = "1px";
    } else {
      bubble.style.left = `calc(${pct}% - 1px)`;
    }
    if (idx === milestoneConfig.length - 1) {
      const icon = document.createElement("img");
      icon.className = "v2-gift-icon";
      icon.id = "v2-gift-icon";
      icon.src = ICON_GIFT;
      icon.alt = "";
      bubble.appendChild(icon);
    }
    bubbles.appendChild(bubble);
  });
  progressV2.appendChild(bubbles);
}

function updateProgressV2() {
  const fill = progressV2.querySelector(".v2-fill");
  const bubbleEls = progressV2.querySelectorAll(".v2-bubble");
  if (!fill || !bubbleEls.length) return;

  const totalGoal = MILESTONES[MILESTONES.length - 1]?.end || 0;
  if (totalGoal <= 0) return;

  const fillPct = Math.min(totalPurchases / totalGoal, 1) * 100;
  fill.style.setProperty("--v2-glow-intensity", (fillPct / 100).toFixed(2));

  bubbleEls.forEach((bubble, i) => {
    const segEnd = MILESTONES[i].end;
    if (totalPurchases >= segEnd) {
      if (!bubble.classList.contains("reached")) {
        animateBubbleReached(bubble);
      }
      bubble.classList.remove("active");
    } else if (totalPurchases > (i === 0 ? 0 : MILESTONES[i].start)) {
      bubble.classList.add("active");
      bubble.classList.remove("reached");
    } else {
      bubble.classList.remove("reached", "active");
    }
  });

  const v2Gift = document.getElementById("v2-gift-icon");
  if (v2Gift) {
    const lastMs = MILESTONES[MILESTONES.length - 1];
    const lastStart = lastMs.start;
    const lastEnd = lastMs.end;
    const lastPct = totalPurchases <= lastStart ? 0
      : Math.min((totalPurchases - lastStart) / (lastEnd - lastStart) * 100, 100);
    if (lastPct >= 70 && totalPurchases < lastEnd) {
      const t = (lastPct - 70) / 30;
      v2Gift.classList.add("wiggling");
      v2Gift.style.animationDuration = `${0.6 - t * 0.4}s`;
    } else {
      v2Gift.classList.remove("wiggling");
      v2Gift.style.animationDuration = "";
    }
  }

  fill.style.width = `${fillPct}%`;
}

function animateBubbleReached(bubble) {
  bubble.classList.add("flash");
  bubble.classList.add("pulse-ring");

  setTimeout(() => {
    bubble.classList.remove("flash");
    bubble.classList.add("reached");
    bubble.textContent = "";
  }, 300);

  setTimeout(() => {
    bubble.classList.remove("pulse-ring");
  }, 1200);
}

// ── Simple Segmented Bar (V3) ────────────────────

function renderProgressV3() {
  progressV3.innerHTML = "";
  const track = document.createElement("div");
  track.className = "v3-track";
  const fill = document.createElement("div");
  fill.className = "v3-fill";
  track.appendChild(fill);
  const v3Flame = document.createElement("div");
  v3Flame.className = "v3-flame-wrap";
  v3Flame.id = "v3-flame-wrap";
  const v3FlameImg = document.createElement("img");
  v3FlameImg.src = "flame.png";
  v3FlameImg.alt = "";
  v3Flame.appendChild(v3FlameImg);
  track.appendChild(v3Flame);
  progressV3.appendChild(track);

  const totalGoal = MILESTONES[MILESTONES.length - 1]?.end || 1;
  const dots = document.createElement("div");
  dots.className = "v3-dots";
  let cumulative = 0;
  milestoneConfig.forEach((cfg, idx) => {
    cumulative += cfg.qty;
    if (idx === milestoneConfig.length - 1) return;
    const pct = (cumulative / totalGoal) * 100;
    const dot = document.createElement("div");
    dot.className = "v3-dot";
    dot.style.left = `calc(${pct}% - 3px)`;
    dot.dataset.end = cumulative;
    dots.appendChild(dot);
  });
  progressV3.appendChild(dots);

  const iconWrap = document.createElement("div");
  iconWrap.className = "v3-icon-wrap";
  const icon = document.createElement("img");
  icon.className = "v3-gift-icon";
  icon.id = "v3-gift-icon";
  icon.src = ICON_GIFT;
  icon.alt = "";
  iconWrap.appendChild(icon);
  progressV3.appendChild(iconWrap);
}

function updateProgressV3() {
  const fill = progressV3.querySelector(".v3-fill");
  if (!fill) return;

  const totalGoal = MILESTONES[MILESTONES.length - 1]?.end || 0;
  if (totalGoal <= 0) return;

  const fillPct = Math.min(totalPurchases / totalGoal, 1) * 100;
  fill.style.setProperty("--v3-glow-intensity", (fillPct / 100).toFixed(2));
  fill.style.width = `${fillPct}%`;

  const dotEls = progressV3.querySelectorAll(".v3-dot");
  dotEls.forEach((dot, i) => {
    const segEnd = parseInt(dot.dataset.end, 10);
    if (totalPurchases >= segEnd && !dot.classList.contains("reached")) {
      dot.classList.add("reached");
      animateV3DotBurst(dot);
    }
  });

  const v3Gift = document.getElementById("v3-gift-icon");
  if (v3Gift) {
    const lastMs = MILESTONES[MILESTONES.length - 1];
    const lastStart = lastMs.start;
    const lastEnd = lastMs.end;
    const lastPct = totalPurchases <= lastStart ? 0
      : Math.min((totalPurchases - lastStart) / (lastEnd - lastStart) * 100, 100);
    if (lastPct >= 70 && totalPurchases < lastEnd) {
      const t = (lastPct - 70) / 30;
      v3Gift.classList.add("wiggling");
      v3Gift.style.animationDuration = `${0.6 - t * 0.4}s`;
    } else {
      v3Gift.classList.remove("wiggling");
      v3Gift.style.animationDuration = "";
    }
  }
}

const CHARGED_FRAMES = [];
for (let i = 41; i >= 25; i--) CHARGED_FRAMES.push(`charged/${i}.png`);
CHARGED_FRAMES.forEach(src => { const img = new Image(); img.src = src; });

function animateV3DotBurst(dot) {
  dot.classList.add("pulse-ring");
  setTimeout(() => dot.classList.remove("pulse-ring"), 1000);

  const sprite = document.createElement("img");
  sprite.className = "charged-sprite";
  sprite.style.left = dot.style.left.replace("- 3px", "- 24px");
  sprite.style.top = "50%";
  sprite.src = CHARGED_FRAMES[0];
  const dotsContainer = progressV3.querySelector(".v3-dots");
  (dotsContainer || progressV3).appendChild(sprite);

  let frame = 0;
  const fps = 24;
  const interval = setInterval(() => {
    frame++;
    if (frame >= CHARGED_FRAMES.length) {
      clearInterval(interval);
      sprite.remove();
      return;
    }
    sprite.src = CHARGED_FRAMES[frame];
  }, 1000 / fps);
}

function emitV3ChargeParticles() {
  const iconWrap = progressV3.querySelector(".v3-icon-wrap");
  if (!iconWrap) return;
  const iconRect = iconWrap.getBoundingClientRect();
  const v3Rect = progressV3.getBoundingClientRect();
  const cx = iconRect.left - v3Rect.left + iconRect.width / 2;
  const cy = iconRect.top - v3Rect.top + iconRect.height / 2;

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
    progressV3.appendChild(particle);
    setTimeout(() => particle.remove(), (dur + delay) * 1000 + 100);
  }

  setTimeout(() => {
    const v3Gift = document.getElementById("v3-gift-icon");
    if (v3Gift) {
      v3Gift.classList.remove("wiggling");
      v3Gift.classList.add("charged");
      setTimeout(() => v3Gift.classList.remove("charged"), 1200);
    }
    const ring = document.createElement("div");
    ring.className = "icon-ring-burst";
    ring.style.cssText = `left:${cx}px;top:${cy}px`;
    progressV3.appendChild(ring);
    setTimeout(() => ring.remove(), 1000);
  }, 350);
}

// ── Purchases ────────────────────────────────────

function updateStockColor() {
  if (stockLeft <= 20) productStock.style.color = "#ef233c";
  else if (stockLeft <= 50) productStock.style.color = "#ff9f43";
}

function showBuyerActivity(avatar, name) {
  const dot = '<span class="buyer-dot"></span>';
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
  clearTimeout(titleSwapTimer);
  titleSwapped = true;
  if (showModeSelect.value === "live") milestoneTitle.textContent = "Party Progress Complete!";
  const lastMs = MILESTONES[MILESTONES.length - 1];
  if (progressStyleSelect.value !== "v1") {
    const totalGoal = lastMs?.end || 0;
    milestoneCount.textContent = `${totalGoal} of ${totalGoal}`;
  } else {
    const goal = lastMs.end - lastMs.start;
    milestoneCount.textContent = `${goal} of ${goal}`;
  }
  progressFill.style.width = "100%";
  giftIcon.classList.remove("wiggling");
  giftIcon.style.animationDuration = "";
  milestoneSection.classList.remove("glow-breathe");
  milestoneSection.classList.add("glow-pulse");
  milestoneSection.classList.add("milestone-complete");
  stopAutoPurchases();
  setAwaitingButton("Awaiting Next Item");
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
    emitV3Stars();
    if (currentMilestone >= MILESTONES.length - 1) emitV3ChargeParticles();
  }

  const hasNext = currentMilestone < MILESTONES.length - 1;
  const delay = progressStyleSelect.value === "v1" ? 2000 : 0;
  setTimeout(() => hasNext ? advanceToNextMilestone() : finishAllMilestones(), delay);
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
    setTimeout(() => milestoneSection.classList.remove("pulse"), 500);
  }

  if (currentMilestone >= MILESTONES.length) return;
  const ms = MILESTONES[currentMilestone];
  if (transitioning) return;

  updateMilestoneUI();
  if (barEffectsToggle.checked && shouldFireEffects) {
    requestAnimationFrame(() => triggerProgressBurst());
    triggerFlame();
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

renderProgressV2();
renderProgressV3();
scheduleTitleSwap(0);
updateMilestoneUI();
startAutoPurchases(PURCHASE_TIERS[2]);

// ── Reset ────────────────────────────────────────

function resetPrototype() {
  clearAwaitingButton();
  MILESTONES = buildMilestonesFromConfig();
  STARTING_STOCK = MILESTONES[MILESTONES.length - 1]?.end || 200;
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
  flameWrap.classList.remove("active");
  clearTimeout(flameCooldownTimer);
  const v2Flame = document.getElementById("v2-flame-wrap");
  if (v2Flame) v2Flame.classList.remove("active");
  clearTimeout(v2FlameCooldownTimer);
  const v3FlameEl = document.getElementById("v3-flame-wrap");
  if (v3FlameEl) v3FlameEl.classList.remove("active");
  clearTimeout(v3FlameCooldownTimer);
  countdownSeconds = 10 * 60;
  milestoneTimer.textContent = formatTime(countdownSeconds);
  renderProgressV2();
  renderProgressV3();
  if (showModeSelect.value === "preshow") renderPreshowRewards();
  scheduleTitleSwap(0);
  updateMilestoneUI();
  startAutoPurchases(PURCHASE_TIERS[parseInt(purchaseSlider.value, 10)]);
}

document.getElementById("reset-btn").addEventListener("click", resetPrototype);

document.getElementById("trigger-jumbotron").addEventListener("click", () => {
  showCelebration(currentMilestone < MILESTONES.length ? currentMilestone : 0);
});

// ── Progress style toggle ────────────────────────

function switchProgressBar(style) {
  progressV1.classList.add("hidden");
  progressV2.classList.add("hidden");
  progressV3.classList.add("hidden");
  ppExpanded.classList.add("hidden");
  expandedVisible = false;
  stopPPAutoScroll();
  clearTimeout(expandedAutoCloseTimer);
  if (style === "v1") progressV1.classList.remove("hidden");
  else if (style === "v2") progressV2.classList.remove("hidden");
  else if (style === "v3") progressV3.classList.remove("hidden");
  updateMilestoneUI();
}

progressStyleSelect.addEventListener("change", () => {
  switchProgressBar(progressStyleSelect.value);
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
  if (showModeSelect.value === "preshow") renderPreshowRewards();
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

const showNotesDebugToggle = document.getElementById("show-notes-debug-toggle");
showNotesDebugToggle.addEventListener("change", () => {
  if (showNotesDebugToggle.checked) {
    showNotesEl.classList.remove("hidden");
  } else {
    showNotesEl.classList.add("hidden");
  }
});

const gemsToggle = document.getElementById("gems-toggle");
const gemsCounter = document.getElementById("gems-counter");
gemsToggle.addEventListener("change", () => {
  if (gemsToggle.checked) {
    gemsCounter.classList.remove("hidden");
  } else {
    gemsCounter.classList.add("hidden");
  }
});

updateShowNotes();

// ── Countdown timer ──────────────────────────────

function formatTime(s) {
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
}

setInterval(() => {
  if (countdownSeconds > 0 && showModeSelect.value === "live") {
    countdownSeconds--;
    milestoneTimer.textContent = formatTime(countdownSeconds);
  }
}, 1000);

// ── Gems Counter ─────────────────────────────────

const gemsTimerEl = document.getElementById("gems-timer");
const gemsFill = document.getElementById("gems-progress-fill");
const GEMS_TOTAL_SECONDS = 10 * 60;
let gemsElapsed = 0;

function formatGemsTime(s) {
  return `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;
}

setInterval(() => {
  if (gemsElapsed < GEMS_TOTAL_SECONDS) {
    gemsElapsed++;
    gemsTimerEl.textContent = formatGemsTime(gemsElapsed);
    gemsFill.style.width = `${(gemsElapsed / GEMS_TOTAL_SECONDS) * 100}%`;
  }
}, 1000);

// ── Intro Sheet ──────────────────────────────────

const introSheet = document.getElementById("intro-sheet");
const introBackdrop = document.getElementById("intro-sheet-backdrop");
const introStartWatching = document.getElementById("intro-start-watching");

function closeIntroSheet() {
  introSheet.classList.remove("visible");
  introBackdrop.classList.remove("visible");
}

introStartWatching.addEventListener("click", closeIntroSheet);
introBackdrop.addEventListener("click", closeIntroSheet);

// ── Expanded Party Purchase Panel ────────────────

function getRewardIcon(type) {
  return type === "discount" ? ICON_DISCOUNT_3D : ICON_GIFT_3D;
}

function getRewardLabel(cfg) {
  if (cfg.type === "discount") return `${cfg.discountPct || 0}% Off`;
  if (cfg.type === "giveaway") return "Buyer Giveaway";
  return cfg.giftName || "Free Gift";
}

let ppAutoScrollId = null;
let ppScrollDir = 1;
let ppScrollAccum = 0;
let ppDragging = false;
let ppDragMoved = false;
let ppDragStartX = 0;
let ppDragScrollLeft = 0;

function renderExpandedPanel() {
  ppRewards.innerHTML = "";
  let cumulative = 0;
  milestoneConfig.forEach((cfg, i) => {
    cumulative += cfg.qty;
    const completed = MILESTONES[i] && totalPurchases >= MILESTONES[i].end;
    const qtyText = completed ? "Completed" : `${cumulative} Purchases`;
    const reward = document.createElement("div");
    reward.className = "pp-reward";
    reward.innerHTML =
      `<div class="pp-reward-icon-wrap"><img src="${getRewardIcon(cfg.type)}" alt="" class="pp-reward-icon"></div>` +
      `<div class="pp-reward-copy">` +
        `<span class="pp-reward-name">${getRewardLabel(cfg)}</span>` +
        `<span class="pp-reward-qty${completed ? " pp-reward-completed" : ""}">${qtyText}</span>` +
      `</div>`;
    ppRewards.appendChild(reward);
  });
}

function startPPAutoScroll() {
  stopPPAutoScroll();
  ppScrollDir = 1;
  ppScrollAccum = 0;
  ppAutoScrollId = setInterval(() => {
    if (ppDragging) return;
    const maxScroll = ppRewards.scrollWidth - ppRewards.clientWidth;
    if (maxScroll <= 0) return;
    ppScrollAccum += ppScrollDir * 0.25;
    const step = Math.trunc(ppScrollAccum);
    if (step !== 0) {
      ppRewards.scrollLeft += step;
      ppScrollAccum -= step;
    }
    if (ppRewards.scrollLeft >= maxScroll) ppScrollDir = -1;
    else if (ppRewards.scrollLeft <= 0) ppScrollDir = 1;
  }, 16);
}

function stopPPAutoScroll() {
  if (ppAutoScrollId) { clearInterval(ppAutoScrollId); ppAutoScrollId = null; }
}

ppRewards.addEventListener("mousedown", (e) => {
  ppDragging = true;
  ppDragMoved = false;
  ppDragStartX = e.clientX;
  ppDragScrollLeft = ppRewards.scrollLeft;
  ppRewards.style.cursor = "grabbing";
  resetExpandedAutoClose();
  e.preventDefault();
  e.stopPropagation();
});

ppRewards.addEventListener("click", (e) => {
  if (ppDragMoved) {
    e.stopPropagation();
  }
});

ppRewards.addEventListener("touchstart", (e) => {
  ppDragging = true;
  ppDragMoved = false;
  ppDragStartX = e.touches[0].clientX;
  ppDragScrollLeft = ppRewards.scrollLeft;
  resetExpandedAutoClose();
}, { passive: true });

document.addEventListener("mousemove", (e) => {
  if (!ppDragging) return;
  ppDragMoved = true;
  ppRewards.scrollLeft = ppDragScrollLeft - (e.clientX - ppDragStartX);
});

document.addEventListener("touchmove", (e) => {
  if (!ppDragging) return;
  ppDragMoved = true;
  ppRewards.scrollLeft = ppDragScrollLeft - (e.touches[0].clientX - ppDragStartX);
}, { passive: true });

document.addEventListener("mouseup", () => {
  if (ppDragging) { ppDragging = false; ppRewards.style.cursor = ""; }
});

document.addEventListener("touchend", () => {
  ppDragging = false;
});

let expandedVisible = false;
let expandedAutoCloseTimer = null;

function getActiveProgressEl() {
  const style = progressStyleSelect.value;
  if (style === "v1") return progressV1;
  if (style === "v2") return progressV2;
  return progressV3;
}

function closeExpandedPanel() {
  if (!expandedVisible) return;
  expandedVisible = false;
  ppExpanded.classList.add("hidden");
  stopPPAutoScroll();
  clearTimeout(expandedAutoCloseTimer);
  getActiveProgressEl().classList.remove("hidden");
  buyersEl.classList.remove("hidden");
  if (currentMilestone < MILESTONES.length) {
    scheduleTitleSwap(currentMilestone);
  } else {
    milestoneTitle.textContent = "Party Progress Complete!";
  }
  updateMilestoneUI();
}

function resetExpandedAutoClose() {
  clearTimeout(expandedAutoCloseTimer);
  if (expandedVisible) {
    expandedAutoCloseTimer = setTimeout(closeExpandedPanel, 5000);
  }
}

function toggleExpandedPanel() {
  if (showModeSelect.value !== "live") return;
  if (ppDragMoved) { ppDragMoved = false; return; }
  if (expandedVisible) {
    closeExpandedPanel();
  } else {
    expandedVisible = true;
    renderExpandedPanel();
    getActiveProgressEl().classList.add("hidden");
    buyersEl.classList.add("hidden");
    ppExpanded.classList.remove("hidden");
    milestoneTitle.textContent = "Milestones";
    milestoneCount.textContent = "";
    startPPAutoScroll();
    resetExpandedAutoClose();
  }
}

milestoneSection.style.cursor = "pointer";
milestoneSection.addEventListener("click", toggleExpandedPanel);

// ── Pre Show Toggle ──────────────────────────────

let preshowAutoScrollId = null;
let preshowScrollDir = 1;
let preshowScrollAccum = 0;
let preshowPaused = false;
let preshowPauseTimer = null;
let preshowDragging = false;
let preshowDragStartX = 0;
let preshowDragScrollLeft = 0;

function renderPreshowRewards() {
  ppPreshowRewards.innerHTML = "";
  let cumulative = 0;
  milestoneConfig.forEach(cfg => {
    cumulative += cfg.qty;
    const reward = document.createElement("div");
    reward.className = "pp-reward";
    reward.innerHTML =
      `<div class="pp-reward-icon-wrap"><img src="${getRewardIcon(cfg.type)}" alt="" class="pp-reward-icon"></div>` +
      `<div class="pp-reward-copy">` +
        `<span class="pp-reward-name">${getRewardLabel(cfg)}</span>` +
        `<span class="pp-reward-qty">${cumulative} Purchases</span>` +
      `</div>`;
    ppPreshowRewards.appendChild(reward);
  });
}

function startPreshowAutoScroll() {
  stopPreshowAutoScroll();
  preshowScrollDir = 1;
  preshowScrollAccum = 0;
  preshowPaused = false;
  clearTimeout(preshowPauseTimer);
  preshowAutoScrollId = setInterval(() => {
    if (preshowDragging || preshowPaused) return;
    const maxScroll = ppPreshowRewards.scrollWidth - ppPreshowRewards.clientWidth;
    if (maxScroll <= 0) return;
    preshowScrollAccum += preshowScrollDir * 0.25;
    const step = Math.trunc(preshowScrollAccum);
    if (step !== 0) {
      ppPreshowRewards.scrollLeft += step;
      preshowScrollAccum -= step;
    }
    if (ppPreshowRewards.scrollLeft >= maxScroll && preshowScrollDir === 1) {
      preshowPaused = true;
      preshowPauseTimer = setTimeout(() => { preshowPaused = false; preshowScrollDir = -1; }, 2000);
    } else if (ppPreshowRewards.scrollLeft <= 0 && preshowScrollDir === -1) {
      preshowPaused = true;
      preshowPauseTimer = setTimeout(() => { preshowPaused = false; preshowScrollDir = 1; }, 2000);
    }
  }, 16);
}

function stopPreshowAutoScroll() {
  if (preshowAutoScrollId) { clearInterval(preshowAutoScrollId); preshowAutoScrollId = null; }
  clearTimeout(preshowPauseTimer);
  preshowPaused = false;
}

ppPreshowRewards.addEventListener("mousedown", (e) => {
  preshowDragging = true;
  preshowDragStartX = e.clientX;
  preshowDragScrollLeft = ppPreshowRewards.scrollLeft;
  ppPreshowRewards.style.cursor = "grabbing";
  e.preventDefault();
});

ppPreshowRewards.addEventListener("touchstart", (e) => {
  preshowDragging = true;
  preshowDragStartX = e.touches[0].clientX;
  preshowDragScrollLeft = ppPreshowRewards.scrollLeft;
}, { passive: true });

document.addEventListener("mousemove", (e) => {
  if (preshowDragging) {
    ppPreshowRewards.scrollLeft = preshowDragScrollLeft - (e.clientX - preshowDragStartX);
  }
});

document.addEventListener("touchmove", (e) => {
  if (preshowDragging) {
    ppPreshowRewards.scrollLeft = preshowDragScrollLeft - (e.touches[0].clientX - preshowDragStartX);
  }
}, { passive: true });

document.addEventListener("mouseup", () => {
  if (preshowDragging) { preshowDragging = false; ppPreshowRewards.style.cursor = ""; }
});

document.addEventListener("touchend", () => { preshowDragging = false; });

const pinnedProduct = document.querySelector(".pinned-product");
const buyersEl = document.querySelector(".milestone-buyers");

function setAwaitingButton(text) {
  const swipeTrack = document.getElementById("swipe-track");
  swipeTrack.classList.add("awaiting");
  swipeTrack.querySelector(".swipe-thumb").classList.add("hidden");
  if (!swipeTrack.querySelector(".awaiting-label")) {
    const label = document.createElement("span");
    label.className = "awaiting-label";
    label.textContent = text;
    swipeTrack.appendChild(label);
  } else {
    swipeTrack.querySelector(".awaiting-label").textContent = text;
  }
}

function clearAwaitingButton() {
  const swipeTrack = document.getElementById("swipe-track");
  swipeTrack.classList.remove("awaiting");
  swipeTrack.querySelector(".swipe-thumb").classList.remove("hidden");
  const awaitLabel = swipeTrack.querySelector(".awaiting-label");
  if (awaitLabel) awaitLabel.remove();
}

function enterLiveMode() {
  closeIntroSheet();
  ppPreshow.classList.add("hidden");
  ppPreshow2.classList.add("hidden");
  stopPreshowAutoScroll();
  pinnedProduct.classList.remove("hidden");
  milestoneTimer.classList.remove("hidden");
  milestoneSection.style.marginBottom = "";
  countdownSeconds = 10 * 60;
  milestoneTimer.textContent = formatTime(countdownSeconds);
  switchProgressBar(progressStyleSelect.value);
  buyersEl.classList.remove("hidden");
  clearAwaitingButton();
  startAutoPurchases(PURCHASE_TIERS[parseInt(purchaseSlider.value, 10)]);
  updateMilestoneUI();
}

function enterPreshowMode() {
  closeIntroSheet();
  ppPreshow2.classList.add("hidden");
  progressV1.classList.add("hidden");
  progressV2.classList.add("hidden");
  progressV3.classList.add("hidden");
  buyersEl.classList.add("hidden");
  pinnedProduct.classList.add("hidden");
  milestoneTimer.classList.add("hidden");
  milestoneSection.style.marginBottom = "16px";
  stopAutoPurchases();
  renderPreshowRewards();
  ppPreshow.classList.remove("hidden");
  milestoneTitle.textContent = "Party Purchase Starting Soon";
  milestoneCount.textContent = "";
  startPreshowAutoScroll();
}

function enterPreshow2Mode() {
  closeIntroSheet();
  ppPreshow.classList.add("hidden");
  stopPreshowAutoScroll();
  progressV1.classList.add("hidden");
  progressV2.classList.add("hidden");
  progressV3.classList.add("hidden");
  buyersEl.classList.add("hidden");
  pinnedProduct.classList.add("hidden");
  milestoneTimer.classList.add("hidden");
  milestoneSection.style.marginBottom = "16px";
  stopAutoPurchases();
  ppPreshow2.classList.remove("hidden");
  milestoneTitle.textContent = "";
  milestoneCount.textContent = "";
}

function enterLetsPartyMode() {
  closeIntroSheet();
  ppPreshow.classList.add("hidden");
  ppPreshow2.classList.add("hidden");
  stopPreshowAutoScroll();
  stopAutoPurchases();
  resetPrototype();
  stopAutoPurchases();
  milestoneSection.classList.remove("hidden");
  milestoneSection.classList.remove("milestone-complete");
  milestoneSection.style.marginBottom = "";
  switchProgressBar(progressStyleSelect.value);
  buyersEl.classList.remove("hidden");
  pinnedProduct.classList.remove("hidden");
  milestoneTimer.classList.add("hidden");

  setAwaitingButton("Party Starting Soon");

  const lastMsName = MILESTONES[MILESTONES.length - 1];
  const finalName = (lastMsName.badge || lastMsName.unlock || "Party Purchase").replace(/\b\w/g, c => c.toUpperCase());
  milestoneTitle.textContent = `Party Purchase – ${finalName}`;

  const sparkleHTML = Array.from({ length: 8 }, (_, i) =>
    `<span class="celeb-sparkle s${i + 1}"></span>`
  ).join("");
  celebration.innerHTML = `
    <div class="celebration-content">
      <div class="celebration-scene">
        <div class="celeb-ring"></div>
        <div class="celeb-glow"></div>
        ${sparkleHTML}
        <img src="disco.gif" alt="" class="gift-main" style="width:204px;height:204px;object-fit:contain;">
      </div>
      <div class="celebration-text">
        <p class="celebration-title">Let's Party</p>
        <p class="celebration-subtitle" id="letsparty-subtitle">Show starts in 3</p>
      </div>
    </div>`;
  celebration.classList.remove("hiding");
  celebration.classList.add("visible");
  document.getElementById("gems-counter").classList.add("hidden");

  let countdown = 3;
  clearInterval(letsPartyCountdownId);
  clearTimeout(letsPartyDelayId);
  letsPartyDelayId = setTimeout(() => {
    letsPartyCountdownId = setInterval(() => {
      countdown--;
      const sub = document.getElementById("letsparty-subtitle");
      if (!sub || countdown <= 0) {
        clearInterval(letsPartyCountdownId);
        setTimeout(() => {
          showModeSelect.value = "live";
          exitLetsPartyMode();
          enterLiveMode();
        }, 500);
        return;
      }
      sub.textContent = `Show starts in ${countdown}`;
    }, 1000);
  }, 2000);
}

let letsPartyCountdownId = null;
let letsPartyDelayId = null;

function exitLetsPartyMode() {
  clearInterval(letsPartyCountdownId);
  clearTimeout(letsPartyDelayId);
  clearAwaitingButton();
  celebration.classList.remove("visible");
  celebration.classList.add("hiding");
  setTimeout(() => celebration.classList.remove("hiding"), 400);
  milestoneSection.classList.remove("hidden");
  document.getElementById("gems-counter").classList.remove("hidden");
}

showModeSelect.addEventListener("change", () => {
  const mode = showModeSelect.value;
  if (showModeSelect.dataset.prev === "letsparty") exitLetsPartyMode();
  showModeSelect.dataset.prev = mode;
  if (mode === "live") enterLiveMode();
  else if (mode === "preshow") enterPreshowMode();
  else if (mode === "preshow2") enterPreshow2Mode();
  else if (mode === "letsparty") enterLetsPartyMode();
});

// ── Flame Effect ─────────────────────────────────

const flameWrap = document.getElementById("flame-wrap");
let flameCooldownTimer = null;
let v2FlameCooldownTimer = null;
let v3FlameCooldownTimer = null;

function getFlameProgress() {
  if (currentMilestone >= MILESTONES.length) return 100;
  const ms = MILESTONES[currentMilestone];
  const goal = ms.end - ms.start;
  return (Math.max(0, Math.min(totalPurchases - ms.start, goal)) / goal) * 100;
}

function getV2FlameProgress() {
  const totalGoal = MILESTONES[MILESTONES.length - 1]?.end || 0;
  if (totalGoal <= 0) return 0;
  return Math.min(totalPurchases / totalGoal, 1) * 100;
}

function triggerFlame() {
  if (!barEffectsToggle.checked) return;

  const pct = getFlameProgress();
  if (pct >= 20) {
    const scale = 0.5 + 2.05 * ((pct - 20) / 80);
    flameWrap.style.setProperty("--flame-scale", scale.toFixed(2));
    flameWrap.style.left = `${progressFill.offsetWidth - 40}px`;
    flameWrap.classList.add("active");
    clearTimeout(flameCooldownTimer);
    flameCooldownTimer = setTimeout(() => {
      flameWrap.classList.remove("active");
    }, 1200);
  }

  const segPct = getV2FlameProgress();

  const v2Flame = document.getElementById("v2-flame-wrap");
  if (v2Flame && segPct >= 20) {
    const v2Scale = 0.7 + 0.9 * ((segPct - 20) / 80);
    v2Flame.style.setProperty("--flame-scale", v2Scale.toFixed(2));
    const v2Fill = progressV2.querySelector(".v2-fill");
    if (v2Fill) v2Flame.style.left = `${v2Fill.offsetWidth - 32}px`;
    v2Flame.classList.add("active");
    clearTimeout(v2FlameCooldownTimer);
    v2FlameCooldownTimer = setTimeout(() => {
      v2Flame.classList.remove("active");
    }, 1200);
  }

  const v3Flame = document.getElementById("v3-flame-wrap");
  if (v3Flame && segPct >= 20) {
    const v3Scale = 0.7 + 0.9 * ((segPct - 20) / 80);
    v3Flame.style.setProperty("--flame-scale", v3Scale.toFixed(2));
    const v3Fill = progressV3.querySelector(".v3-fill");
    if (v3Fill) v3Flame.style.left = `${v3Fill.offsetWidth - 40}px`;
    v3Flame.classList.add("active");
    clearTimeout(v3FlameCooldownTimer);
    v3FlameCooldownTimer = setTimeout(() => {
      v3Flame.classList.remove("active");
    }, 1200);
  }
}

let flameTrackingId = null;

function startFlameTracking() {
  if (flameTrackingId) return;
  function track() {
    if (flameWrap.classList.contains("active")) {
      flameWrap.style.left = `${progressFill.offsetWidth - 40}px`;
    }
    const v2Flame = document.getElementById("v2-flame-wrap");
    if (v2Flame && v2Flame.classList.contains("active")) {
      const v2Fill = progressV2.querySelector(".v2-fill");
      if (v2Fill) v2Flame.style.left = `${v2Fill.offsetWidth - 32}px`;
    }
    const v3Flame = document.getElementById("v3-flame-wrap");
    if (v3Flame && v3Flame.classList.contains("active")) {
      const v3Fill = progressV3.querySelector(".v3-fill");
      if (v3Fill) v3Flame.style.left = `${v3Fill.offsetWidth - 40}px`;
    }
    flameTrackingId = requestAnimationFrame(track);
  }
  flameTrackingId = requestAnimationFrame(track);
}

startFlameTracking();

// ── Debug panel collapse ─────────────────────────

const debugCollapseBtn = document.getElementById("debug-collapse-btn");
const controllersPanel = document.getElementById("controllers-panel");

debugCollapseBtn.addEventListener("click", () => {
  controllersPanel.classList.toggle("collapsed");
});

// ── Live indicator pulse ─────────────────────────

const bars = document.querySelectorAll(".bar");
setInterval(() => {
  bars.forEach(bar => {
    bar.style.height = `${4 + Math.random() * 8}px`;
    bar.style.transition = "height 0.3s ease";
  });
}, 600);
