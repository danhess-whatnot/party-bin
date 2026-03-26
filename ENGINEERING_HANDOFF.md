# Party Purchase — Animation & Effects Engineering Handoff

**Live Prototype:** https://danhess-whatnot.github.io/party-bin/

---

## Purchase Rate & Animation Throttling

The rate of incoming purchases directly controls how frequently visual effects fire on the progress bar.

### Auto-Purchase Speed Tiers (ms between purchases)

| Tier | Interval |
|------|----------|
| Off | 0 (disabled) |
| Slow | 3000ms |
| Med | 1200ms |
| Fast | 500ms |
| Chaos | 150ms |

Each interval has random jitter: `delay = interval × (0.5 + random())`, producing 50–150% of the base interval.

### Effect Throttling Rules

A rolling 1-second window tracks recent purchase timestamps (`recentPurchaseTimes`).

**`shouldFireEffects`** determines if a purchase triggers visual effects:

```
shouldFireEffects = recentPurchaseTimes.length < 3 || burstCounter % 5 === 0
```

- **< 3 purchases/sec:** Effects fire on **every** purchase
- **3+ purchases/sec:** Effects fire only on **every 5th** purchase (via `burstCounter`)

### What Gets Throttled

| Effect | Throttled? |
|--------|-----------|
| Bar sweep (pulse glow) | Yes |
| Progress burst particles | Yes |
| Flame trigger | Yes |
| Milestone completion effects | No (always fires) |
| Progress bar fill update | No (always fires) |
| Buyer activity display | No (always fires) |

---

## Progress Bar Variants

### Single (V1)
- Individual milestone segments, resets per milestone
- Gift icon at the right edge
- Count shows per-segment progress: "X of Y"
- 2-second delay after milestone completion before advancing

### Segmented (V3) — Default
- Cumulative progress across all milestones
- Black dots mark milestone boundaries
- Gift icon at the far right
- Count shows cumulative: "X of totalGoal"
- No delay between milestone completions

### Numbered (V2)
- Cumulative progress with numbered bubbles per milestone
- Bubbles shrink to dots when reached
- Gift icon above final bubble
- Same cumulative count as Segmented
- No delay between milestone completions

---

## Effect Details

### 1. Bar Sweep

A gradient shine that sweeps across the progress fill.

| Property | Value |
|----------|-------|
| Trigger | `.pulse` class on `.milestone-section` |
| Duration | 0.9s ease-out |
| Start opacity | 0.65 |
| End opacity | 0 |
| Direction | Right to left (`translateX(100%)` → `translateX(0%)`) |
| Pulse class duration | 500ms (removed via JS) |

### 2. Glow Intensity

Dynamic brightness and box-shadow that scales with progress.

| Property | Value |
|----------|-------|
| CSS variable | `--glow-intensity` (V1), `--v2-glow-intensity`, `--v3-glow-intensity` |
| Range | 0.0 → 1.0 (maps to 0% → 100% fill) |
| Brightness multiplier | `1 + 0.35 × intensity` |
| Box-shadow blur | `14px × intensity` inner, `28px × intensity` outer |
| Box-shadow spread | `5px × intensity` inner, `10px × intensity` outer |
| Colors | `rgba(255, 185, 29, 0.6 × intensity)`, `rgba(239, 106, 31, 0.35 × intensity)` |

### 3. Flame

A flame image that appears at the leading edge of the progress fill, scaling with progress.

| Property | V1 | V2/V3 |
|----------|-----|-------|
| Progress source | Current segment % | Overall cumulative % |
| Appears at | ≥ 20% | ≥ 20% |
| Scale at 20% | 0.5 | 0.7 |
| Scale at 100% | 2.55 | 1.6 |
| Scale formula | `0.5 + 2.05 × ((pct - 20) / 80)` | `0.7 + 0.9 × ((pct - 20) / 80)` |
| Cooldown | 1200ms | 1200ms |
| Show transition | 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) | Same |
| Hide transition | 0.6s cubic-bezier(0.22, 1, 0.36, 1) | Same |
| Position | Behind progress bar (`z-index: -1`) | Behind bar |
| Tracking | `requestAnimationFrame` loop syncs position with fill width | Same |

### 4. Progress Burst

Sparkle particles at the leading edge of the fill on each (non-throttled) purchase.

| Property | Value |
|----------|-------|
| Sparkle count | 6 |
| Ring animation | `pbRing` 0.7s linear |
| Glow animation | `pbGlow` 0.7s ease-out |
| Sparkle animation | `pbSparkle` 0.55s ease-out |
| Sparkle stagger | 0.025s per sparkle |
| DOM removal | 800ms after spawn |

### 5. Star Particles (Milestone Completion)

Stars that float upward from the progress bar when a milestone completes.

| Property | Value |
|----------|-------|
| Count | 18 per burst |
| Animation | `barStarFloat` 1.5s ease-out |
| Float distance | `-(14 + random × 26)` px |
| Delay per star | Random 0–0.8s |
| DOM removal | 1800ms |
| Size | 3×3px white circle |
| Glow | `box-shadow: 0 0 4px rgba(255,228,20,0.8), 0 0 8px rgba(255,185,29,0.5)` |
| Distribution | Across filled portion of bar (V3) or full track width (V1) |

### 6. Completion Stars (Continuous)

After all milestones complete, a steady stream of stars continues.

| Property | Value |
|----------|-------|
| Frequency | 1 star every 150ms |
| Distribution | Random position across filled bar width |
| Same style | Uses `bar-star` class |
| Ends on | Prototype reset |

### 7. Charged Particles (Milestone Icon)

Particles that converge on the gift icon when a milestone completes.

| Property | Value |
|----------|-------|
| Particle count | 12 |
| Distribution | Radial, full 360° with ±0.5 rad jitter |
| Start distance | 40 + random × 30 px |
| Duration | 0.4 + random × 0.3 s |
| Delay | Random 0–0.25s |
| Icon charge animation | `iconCharge` 1.2s (scale to 1.3 + 8° rotation) |
| Ring burst | `iconRingBurst` 0.8s (expanding white → gold ring) |
| Charge delay | 350ms after particles start |

### 8. V3 Dot Burst (Milestone Boundary)

When progress crosses a milestone boundary in Segmented/Numbered bars.

| Property | Segmented (V3) | Numbered (V2) |
|----------|----------------|---------------|
| Pulse ring scale | 12× | 3× |
| Pulse duration | 0.8s | 1.0s |
| Class removal | 1000ms | 1200ms |
| Charged sprite | Yes (PNG sequence, 17 frames at 24fps, reversed) | No |
| Flash → reached | N/A | 300ms white flash → dot |

### 9. Gift Icon Wiggle

The gift icon wiggles as progress nears completion.

| Property | Value |
|----------|-------|
| Trigger | ≥ 70% of final milestone segment |
| Keyframes | 0°→8°→-8°→0° rotation |
| Duration formula | `0.6 - t × 0.4` seconds (t = 0→1 from 70%→100%) |
| Speed at 70% | 0.6s per cycle |
| Speed at 100% | 0.2s per cycle |

### 10. Glow States

| State | Trigger | Effect |
|-------|---------|--------|
| `glow-breathe` | Intermediate milestone complete | Static brightness 1.21, fixed box-shadow |
| `glow-pulse` | All milestones complete | `glowBreathe` 2s infinite animation (brightness + shadow pulse) |
| `milestone-complete` | Milestone complete / all complete | Gradient border stroke (yellow → orange) |

---

## Milestone Completion Sequence

1. **`completeMilestone`** fires when `totalPurchases >= milestone.end`
2. `transitioning = true` — blocks further completions
3. If discount: update price UI
4. Add `.milestone-complete` + `.glow-breathe` classes
5. **`showCelebration()`** — jumbotron overlay
6. If `barEffectsToggle` on: emit bar stars (18), charge particles (12), V3 stars (18)
7. If **last milestone**: also emit V3 charge particles to gift icon
8. After delay (2000ms V1 / 0ms V2,V3): advance or finish

### All Milestones Complete (`finishAllMilestones`)

1. Title → "Party Progress Complete!"
2. Fill → 100%
3. Remove `.glow-breathe`, add `.glow-pulse` + `.milestone-complete`
4. Stop purchases, show "Awaiting Next Item" button
5. Start continuous star particles (every 150ms)

---

## Jumbotron Timing

| Property | Non-Giveaway | Giveaway | Final Milestone |
|----------|-------------|----------|-----------------|
| Display duration | 4000ms | 2000ms | 4000ms |
| Subtitle | "Reward Unlocked!" | "Reward Unlocked!" | "Party Purchase Complete!" |
| Entry animation | `celebBurst` 0.6s | Same | Same |
| Exit animation | `celebFadeOut` 0.5s | Same | Same |
| Post-exit | Restore gems counter | Run giveaway selector | Continuous stars begin |

### Jumbotron Contents
- Radial glow (infinite pulse: `glowPulse` 2s)
- Expanding ring (`ringBurst` 0.6s)
- 8 sparkles (`sparkleTwinkle` 1.5s infinite, staggered delays)
- Main icon (gift/discount, `giftPop` 0.5s)
- 8 floating avatars (`avatarBurst` 0.6s → `floatBob` 3s infinite)
- Title (Title Case) + subtitle (`textFadeIn` 0.4s, delay 0.4s)

---

## Giveaway Selector Timing

| Step | Time |
|------|------|
| Overlay visible | 0ms |
| Start scrolling | 500ms |
| Scroll duration | 1000ms |
| Winner revealed | 1500ms |
| Confetti launched | 1500ms |
| Overlay dismissed | 4500ms |

---

## Show Modes

### Live
- All UI active, purchases running, timer counting down from 10:00

### Pre Show
- Disco ball GIF + "Help get the party started" text + "Invite Friends" button
- No purchases, no product, no progress bar

### Let's Party
- Jumbotron with disco ball, "Let's Party" title
- Progress bar visible with gradient outline, "Party Starting Soon" button
- Timer hidden, no purchases
- Subtitle hidden 3s → "Party Purchase begins in 3...2...1" countdown
- Auto-transitions to Live after countdown + 500ms
- On transition: confetti + gradient outline for 3s

---

## CSS Animation Keyframe Reference

| Name | Duration | Easing | Description |
|------|----------|--------|-------------|
| `barSweep` | 0.9s | ease-out | Gradient sweep across fill |
| `barStarFloat` | 1.5s | ease-out | Star float upward + fade |
| `glowBreathe` | 2s | ease-in-out | Brightness + shadow pulse (infinite) |
| `giftWiggle` | dynamic | ease-in-out | Rotation wobble (infinite) |
| `iconCharge` | 1.2s | ease | Scale up + rotate on milestone complete |
| `chargeConverge` | 0.4–0.7s | cubic-bezier(0.4,0,0.2,1) | Particles converge to center |
| `iconRingBurst` | 0.8s | linear | Expanding ring from icon |
| `bubblePulse` | 1.0s | ease-out | V2 bubble ring expand to 3× |
| `v3DotPulse` | 0.8s | ease-out | V3 dot ring expand to 12× |
| `celebBurst` | 0.6s | cubic-bezier(0.34,1.56,0.64,1) | Jumbotron entrance |
| `celebFadeOut` | 0.5s | ease | Jumbotron exit |
| `pbRing` | 0.7s | linear | Burst ring expansion |
| `pbGlow` | 0.7s | ease-out | Burst center glow |
| `pbSparkle` | 0.55s | ease-out | Burst sparkle fly-out |

---

## Key Colors

| Usage | Value |
|-------|-------|
| Progress fill gradient | `linear-gradient(to right, #ffe414, #ef6a1f)` |
| Gradient border stroke | `linear-gradient(to right, #ffe414, #ef6a1f)` |
| Glow inner | `rgba(255, 185, 29)` |
| Glow outer | `rgba(239, 106, 31)` |
| Star glow | `rgba(255, 228, 20, 0.8)` + `rgba(255, 185, 29, 0.5)` |
| Charged particle ring | `#FFB91D` |
| V3 dot | `#000000` (6×6px) |
| Empty track (V1/V3) | `rgba(255, 255, 255, 0.1)` |
| Empty track (V2) | `#565656` |
