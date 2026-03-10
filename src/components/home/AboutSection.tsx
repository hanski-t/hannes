"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = "experience" | "school" | "volunteering";

type TItem = {
  id: string;
  label: string;
  role?: string;
  period?: string;
  logo?: string;
  logoDark?: boolean;
  start: [number, number]; // [year, 0-indexed month]
  end: [number, number];
  category: Category;
  description?: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const ITEMS: TItem[] = [
  // Experience
  {
    id: "family", label: "Family Businesses", role: "Jack-Of-All-Trades", period: "2014 – 2021",
    logo: "/logos/family_businesses.jpg", start: [2014, 0], end: [2021, 5], category: "experience",
    description: "Forestry, construction, gardening, bioenergy — whatever the family companies needed. Where I learned that real work is messy and satisfying in equal measure.",
  },
  {
    id: "defence", label: "Finnish Defence Forces", role: "Medic / Military Police", period: "Jul 2020 – Mar 2021",
    logo: "/logos/finnish_defence_forces.png", start: [2020, 6], end: [2021, 2], category: "experience",
    description: "Completed military service as a Medic and Military Police officer.",
  },
  {
    id: "tier", label: "TIER Mobility", role: "Mechanic", period: "Apr – Sep 2022",
    logo: "/logos/tier.png", start: [2022, 3], end: [2022, 8], category: "experience",
    description: "Repairing and servicing electric scooters and bikes in Lappeenranta.",
  },
  {
    id: "stora", label: "Stora Enso", role: "Process Worker", period: "May – Aug 2022",
    logo: "/logos/stora_enso.jpg", start: [2022, 4], end: [2022, 7], category: "experience",
    description: "Operating a cardboard machine's length cutter at the Imatra mill.",
  },
  {
    id: "forward", label: "Forward Accelerator", role: "Head of Forward Accelerator", period: "Jan – Jun 2024",
    logo: "/logos/forward_accelerator.png", logoDark: true, start: [2024, 0], end: [2024, 5], category: "experience",
    description: "Building a leading student-run idea accelerator in Finland.",
  },
  {
    id: "antler", label: "Antler", role: "Residency & Scouting Intern", period: "Aug – Dec 2024",
    logo: "/logos/antler.png", start: [2024, 7], end: [2024, 11], category: "experience",
    description: "Helped Founder Residency teams build their startups. Supported with operational affairs and executed ad-hoc tasks.",
  },
  {
    id: "stealth", label: "Stealth Startup", role: "Founder", period: "Mar – Sep 2025",
    logo: "/logos/stealth_startup.jpg", start: [2025, 2], end: [2025, 8], category: "experience",
    description: "Built solutions to utilize used EV batteries.",
  },
  {
    id: "pukki", label: "PukkiLuuri.fi", role: "Founder", period: "Dec 2025",
    logo: "/logos/pukkiluuri.png", start: [2025, 11], end: [2026, 0], category: "experience",
    description: "Built a Finnish-speaking AI Santa phone line in three weeks. Featured in major media in Finland.",
  },
  {
    id: "site", label: "hannestayronen.com", role: "Building", period: "2026 →",
    start: [2026, 0], end: [2026, 2], category: "experience",
    description: "This site. Still figuring out what's next.",
  },

  // School
  {
    id: "kangasala", label: "Kangasala High School", role: "Secondary school graduate", period: "Aug 2017 – Mar 2020",
    logo: "/logos/kangasala_high_school.jpg", start: [2017, 7], end: [2020, 2], category: "school",
  },
  {
    id: "lut-bsc", label: "LUT — BScTech", role: "BScTech, Energy Technology", period: "Aug 2021 – May 2024",
    logo: "/logos/lut_university.png", start: [2021, 7], end: [2024, 4], category: "school",
  },
  {
    id: "lut-msc", label: "LUT — MSc", role: "MSc, Industrial Engineering and Management", period: "Aug 2024 – 2026",
    logo: "/logos/lut_university.png", start: [2024, 7], end: [2026, 5], category: "school",
  },

  // Volunteering
  {
    id: "slush-2021", label: "Slush", role: "Construction Volunteer", period: "Oct – Dec 2021",
    logo: "/logos/slush.png", start: [2021, 9], end: [2021, 11], category: "volunteering",
  },
  {
    id: "lutes-events", label: "LUTES", role: "Events Team Member", period: "Jan – Dec 2022",
    logo: "/logos/lutes.png", start: [2022, 0], end: [2022, 11], category: "volunteering",
  },
  {
    id: "armatuuri", label: "Armatuuri", role: "Business Relations Officer", period: "Jan – Dec 2022",
    logo: "/logos/armatuuri.png", start: [2022, 0], end: [2022, 11], category: "volunteering",
  },
  {
    id: "lut-invest", label: "LUT Invest", role: "Founding Contributor | Board Member", period: "Feb – Dec 2022",
    logo: "/logos/lut_invest.png", start: [2022, 1], end: [2022, 11], category: "volunteering",
  },
  {
    id: "slush-2022", label: "Slush", role: "Partner Buddy Volunteer, Nokia", period: "Sep – Nov 2022",
    logo: "/logos/slush.png", start: [2022, 8], end: [2022, 10], category: "volunteering",
  },
  {
    id: "lutes-vp", label: "LUTES VP", role: "Partnerships & Funds Manager | Vice President", period: "Jan – Dec 2023",
    logo: "/logos/lutes.png", start: [2023, 0], end: [2023, 11], category: "volunteering",
    description: "Securing funding and maintaining partner relations. Developing connections to the South Karelian and Finnish-wide startup ecosystem.",
  },
  {
    id: "arctic", label: "ArcticStartup", role: "Event Help Volunteer", period: "May – Jun 2023",
    logo: "/logos/arctic_startup.png", start: [2023, 4], end: [2023, 5], category: "volunteering",
  },
  {
    id: "mimir", label: "MIMIR Fellows", role: "Lappeenranta Batch Participant", period: "May 2023 – Feb 2024",
    logo: "/logos/mimir_fellows.webp", start: [2023, 4], end: [2024, 1], category: "volunteering",
    description: "Week-long intensive entrepreneurship course and a visit to the startup scene in Nairobi.",
  },
  {
    id: "junction", label: "Junction", role: "Event Help Team Lead", period: "Jul – Nov 2024",
    logo: "/logos/junction.png", start: [2024, 6], end: [2024, 10], category: "volunteering",
    description: "Helped to build the world's biggest hackathon.",
  },
  {
    id: "slush-2025", label: "Slush", role: "Speaker Buddy", period: "Nov 2025",
    logo: "/logos/slush.png", start: [2025, 10], end: [2025, 11], category: "volunteering",
  },
];

// ─── Layout constants ─────────────────────────────────────────────────────────

const START_YEAR    = 2014;
const TODAY_YEAR    = 2026;
const TODAY_MONTH   = 2;         // March 2026 (0-indexed)
const FUTURE_MONTHS = 4;         // buffer shown to the left of "now"
const PX_PER_MONTH  = 32;        // tighter scale
const LABEL_W       = 120;       // sticky left label column
const L_PAD         = 24;
const R_PAD         = 32;
const BAR_H         = 26;
const BAR_GAP       = 6;
const SECTION_V_PAD = 16;

const TODAY_OFFSET = (TODAY_YEAR - START_YEAR) * 12 + TODAY_MONTH; // 146
const TOTAL_DISP   = TODAY_OFFSET + FUTURE_MONTHS;                  // 150
const CONTENT_W    = TOTAL_DISP * PX_PER_MONTH + L_PAD + R_PAD;    // 4856
const TODAY_X      = L_PAD + FUTURE_MONTHS * PX_PER_MONTH;         // 152

const YEARS = Array.from({ length: TODAY_YEAR - START_YEAR + 1 }, (_, i) => TODAY_YEAR - i);

// ─── Coordinate helpers ───────────────────────────────────────────────────────

// x in bars area: left = present (now+buffer), right = past
function rX(year: number, month: number): number {
  const off = (year - START_YEAR) * 12 + month;
  return L_PAD + (TOTAL_DISP - off) * PX_PER_MONTH;
}

function barGeom(start: [number, number], end: [number, number]): { x: number; w: number } {
  const startOff = (start[0] - START_YEAR) * 12 + start[1];
  const endOff   = (end[0]   - START_YEAR) * 12 + end[1];
  const months   = endOff - startOff + 1;
  const w = Math.max(months * PX_PER_MONTH, 28);
  const x = L_PAD + (TOTAL_DISP - endOff - 1) * PX_PER_MONTH;
  return { x, w };
}

// ─── Colors ───────────────────────────────────────────────────────────────────

const COLORS: Record<Category, { bg: string; border: string; borderActive: string; text: string }> = {
  experience:   { bg: "rgba(249,115,22,0.1)",  border: "rgba(249,115,22,0.28)",  borderActive: "rgba(249,115,22,0.7)",  text: "#f97316" },
  school:       { bg: "rgba(167,139,250,0.1)", border: "rgba(167,139,250,0.28)", borderActive: "rgba(167,139,250,0.7)", text: "#a78bfa" },
  volunteering: { bg: "rgba(52,211,153,0.1)",  border: "rgba(52,211,153,0.28)",  borderActive: "rgba(52,211,153,0.7)",  text: "#34d399" },
};

const SECTION_LABELS: Record<Category, string> = {
  experience:   "Experience",
  school:       "School",
  volunteering: "Volunteering",
};

const CATEGORIES: Category[] = ["experience", "school", "volunteering"];

// ─── Lane assignment ──────────────────────────────────────────────────────────

type LanedItem = TItem & { lane: number };

function assignLanes(its: TItem[]): LanedItem[] {
  const sorted = [...its].sort(
    (a, b) => (a.start[0] * 12 + a.start[1]) - (b.start[0] * 12 + b.start[1])
  );
  const laneEnds: number[] = [];
  return sorted.map((item) => {
    const s = (item.start[0] - START_YEAR) * 12 + item.start[1];
    const e = (item.end[0]   - START_YEAR) * 12 + item.end[1];
    let lane = 0;
    while (lane < laneEnds.length && laneEnds[lane] > s) lane++;
    laneEnds[lane] = e;
    return { ...item, lane };
  });
}

// ─── Bar component ────────────────────────────────────────────────────────────

function Bar({
  item, color, delay, isSelected, onSelect,
}: {
  item: LanedItem;
  color: typeof COLORS[Category];
  delay: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const { x, w } = barGeom(item.start, item.end);
  const y = SECTION_V_PAD + item.lane * (BAR_H + BAR_GAP);
  const showLogo  = !!item.logo && w >= 36;
  const showLabel = w >= 60;

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.75 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.28, delay, ease: "easeOut" }}
      onClick={(e) => { e.stopPropagation(); onSelect(); }}
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: w,
        height: BAR_H,
        background: isSelected ? color.bg.replace("0.1", "0.18") : color.bg,
        border: `1px solid ${isSelected ? color.borderActive : color.border}`,
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        paddingLeft: 6,
        paddingRight: 6,
        gap: 5,
        overflow: "hidden",
        transformOrigin: "right center",
        cursor: "pointer",
        userSelect: "none",
        transition: "border-color 0.15s, background 0.15s",
      }}
    >
      {showLogo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.logo}
          alt=""
          style={{
            height: 16, width: "auto", maxWidth: 44, flexShrink: 0,
            borderRadius: 2, objectFit: "contain", opacity: 0.9,
          }}
        />
      )}
      {showLabel && (
        <span style={{
          fontSize: 11, color: color.text, whiteSpace: "nowrap",
          overflow: "hidden", textOverflow: "ellipsis",
          fontWeight: 500, lineHeight: 1, flexShrink: 1, minWidth: 0,
        }}>
          {item.label}
        </span>
      )}
    </motion.div>
  );
}

// ─── Year axis ────────────────────────────────────────────────────────────────

function YearAxis() {
  return (
    <div style={{ display: "flex", height: 44, flexShrink: 0 }}>
      {/* Sticky spacer */}
      <div style={{
        position: "sticky", left: 0, zIndex: 6, width: LABEL_W, flexShrink: 0,
        background: "#0a0a0a", borderRight: "1px solid #222",
      }} />
      {/* Axis track */}
      <div style={{ position: "relative", width: CONTENT_W, flexShrink: 0, height: 44, overflow: "visible" }}>
        {/* Year tick lines — extend visually downward via a very tall height */}
        {YEARS.map((year) => (
          <div key={year} style={{
            position: "absolute", left: rX(year, 0), top: 0,
            width: 1, height: 2000,
            background: "rgba(255,255,255,0.07)",
            pointerEvents: "none",
          }} />
        ))}
        {/* Today line */}
        <div style={{
          position: "absolute", left: TODAY_X, top: 0,
          width: 1, height: 2000,
          background: "rgba(249,115,22,0.4)",
          zIndex: 3, pointerEvents: "none",
        }} />
        {/* Year labels */}
        {YEARS.map((year) => (
          <span key={year} style={{
            position: "absolute", left: rX(year, 0) + 6, top: 14,
            fontSize: 11, fontFamily: "var(--font-mono)",
            color: "#585858", userSelect: "none",
          }}>
            {year}
          </span>
        ))}
        {/* "now" label */}
        <span style={{
          position: "absolute", left: TODAY_X + 6, top: 10,
          fontSize: 10, fontFamily: "var(--font-mono)", color: "#f97316", opacity: 0.85,
          userSelect: "none",
        }}>
          now
        </span>
      </div>
    </div>
  );
}

// ─── Section row ──────────────────────────────────────────────────────────────

function SectionRow({
  category, laned, itemDelay, selected, onSelect, onDismiss,
}: {
  category: Category;
  laned: LanedItem[];
  itemDelay: (item: LanedItem, idx: number) => number;
  selected: TItem | null;
  onSelect: (item: TItem) => void;
  onDismiss: () => void;
}) {
  const color   = COLORS[category];
  const maxLane = laned.reduce((m, i) => Math.max(m, i.lane), 0);
  const laneCount    = maxLane + 1;
  const contentMinH  = laneCount * (BAR_H + BAR_GAP) - BAR_GAP + SECTION_V_PAD * 2;

  return (
    <div style={{ display: "flex", flex: laneCount, minHeight: contentMinH }}>
      {/* Sticky label */}
      <div style={{
        position: "sticky", left: 0, zIndex: 5, width: LABEL_W, flexShrink: 0,
        background: "#0a0a0a", borderRight: "1px solid #222", borderTop: "1px solid #1e1e1e",
        display: "flex", alignItems: "flex-start",
        paddingTop: SECTION_V_PAD + 2, paddingLeft: 16, paddingRight: 12,
        height: "100%",
      }}>
        <span style={{
          fontSize: 10, fontFamily: "var(--font-mono)",
          color: color.text, opacity: 0.65,
          letterSpacing: "0.06em", textTransform: "uppercase",
        }}>
          {SECTION_LABELS[category]}
        </span>
      </div>

      {/* Bars area */}
      <div
        onClick={onDismiss}
        style={{
          position: "relative",
          width: CONTENT_W,
          flexShrink: 0,
          height: "100%",
          minHeight: contentMinH,
          borderTop: "1px solid #1e1e1e",
        }}
      >
        {/* "Future" tint */}
        <div style={{
          position: "absolute", left: 0, top: 0, width: TODAY_X, height: "100%",
          background: "rgba(249,115,22,0.025)", pointerEvents: "none",
        }} />
        {laned.map((item, idx) => (
          <Bar
            key={item.id}
            item={item}
            color={color}
            delay={itemDelay(item, idx)}
            isSelected={selected?.id === item.id}
            onSelect={() => onSelect(item)}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Detail card ──────────────────────────────────────────────────────────────

function DetailCard({ item, onClose }: { item: TItem; onClose: () => void }) {
  const color = COLORS[item.category];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={(e) => e.stopPropagation()}
      style={{
        position: "absolute",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        width: 360,
        maxWidth: "calc(100vw - 40px)",
        background: "#111111",
        border: "1px solid #2a2a2a",
        borderRadius: 8,
        padding: "14px 16px",
        zIndex: 15,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start", minWidth: 0 }}>
          {item.logo && (
            <div style={{
              flexShrink: 0,
              background: "rgba(255,255,255,0.07)",
              borderRadius: 8,
              padding: "6px 8px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.logo}
                alt=""
                style={{ height: 28, width: "auto", maxWidth: 72, objectFit: "contain" }}
              />
            </div>
          )}
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#fafafa", lineHeight: 1.3 }}>{item.label}</p>
            {item.role && (
              <p style={{ fontSize: 11, color: color.text, marginTop: 3, lineHeight: 1.3 }}>{item.role}</p>
            )}
            {item.period && (
              <p style={{ fontSize: 11, color: "#555", marginTop: 2, fontFamily: "var(--font-mono)" }}>{item.period}</p>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            flexShrink: 0, background: "none", border: "none", cursor: "pointer",
            color: "#444", fontSize: 16, lineHeight: 1, padding: "2px 4px",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#888"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "#444"; }}
        >
          ×
        </button>
      </div>
      {item.description && (
        <p style={{
          fontSize: 12, color: "#888", marginTop: 10,
          lineHeight: 1.55, borderTop: "1px solid #1e1e1e", paddingTop: 10,
        }}>
          {item.description}
        </p>
      )}
    </motion.div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function AboutSection() {
  const [timelineOpen, setTimelineOpen] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [selected, setSelected] = useState<TItem | null>(null);
  const scrollRef  = useRef<HTMLDivElement>(null);
  const hasScrolled = useRef(false);

  const categorized: Record<Category, LanedItem[]> = {
    experience:   assignLanes(ITEMS.filter((i) => i.category === "experience")),
    school:       assignLanes(ITEMS.filter((i) => i.category === "school")),
    volunteering: assignLanes(ITEMS.filter((i) => i.category === "volunteering")),
  };

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = timelineOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [timelineOpen]);

  // Wheel → horizontal scroll
  useEffect(() => {
    if (!timelineOpen) return;
    const el = scrollRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY + e.deltaX;
      if (!hasScrolled.current) {
        hasScrolled.current = true;
        setShowScrollHint(false);
      }
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, [timelineOpen]);

  // Escape key + reset state on open
  useEffect(() => {
    if (!timelineOpen) return;
    setShowScrollHint(true);
    setSelected(null);
    hasScrolled.current = false;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTimelineOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [timelineOpen]);

  // Stagger: items closest to present animate first
  function itemDelay(item: LanedItem, idx: number): number {
    const endOff = (item.end[0] - START_YEAR) * 12 + item.end[1];
    return 0.08 + (1 - endOff / TODAY_OFFSET) * 0.3 + idx * 0.015;
  }

  return (
    <>
      {/* ── Normal section ── */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.81 }}
        className="py-10 border-t border-border/30"
      >
        <h2 className="text-sm font-mono text-muted-foreground mb-6">About</h2>

        <div className="space-y-3 text-muted-foreground">
          <p>
            I&apos;m Hannes —{" "}
            <span className="text-foreground font-medium">a builder</span>,{" "}
            <span className="text-foreground font-medium">startup founder</span>, and{" "}
            <span className="text-foreground font-medium">explorer</span>{" "}
            based in Finland. I&apos;m passionate about creating things that make the world a little better.
          </p>
          <p>
            My journey has taken me through startups, side projects, and adventures around the world. I believe in{" "}
            <span className="text-foreground font-medium">learning by doing</span>,
            staying curious, and embracing the chaos of building something new.
          </p>
        </div>

        <button
          onClick={() => setTimelineOpen(true)}
          className="mt-6 flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors cursor-pointer"
        >
          <span>Tell me more about yourself</span>
          <span>→</span>
        </button>
      </motion.section>

      {/* ── Fullscreen timeline overlay ── */}
      <AnimatePresence>
        {timelineOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 50,
              background: "#0a0a0a", overflow: "hidden",
              display: "flex", flexDirection: "column",
              height: "100dvh",
            }}
          >
            {/* Back button */}
            <motion.button
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              onClick={(e) => { e.stopPropagation(); setTimelineOpen(false); }}
              className="absolute top-5 left-5 z-20 flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              ← back
            </motion.button>

            {/* Horizontal scroll container — stretches to fill overlay height */}
            <div
              ref={scrollRef}
              style={{
                flex: 1,
                overflowX: "auto",
                overflowY: "hidden",
                display: "flex",
                alignItems: "stretch",
              }}
            >
              {/* Timeline column — fills scroll container height */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                flexShrink: 0,
                height: "100%",
                paddingTop: 48,
              }}>
                <YearAxis />

                {/* Sections — fill remaining height proportionally */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
                  {CATEGORIES.map((cat) => (
                    <SectionRow
                      key={cat}
                      category={cat}
                      laned={categorized[cat]}
                      itemDelay={itemDelay}
                      selected={selected}
                      onSelect={(item) => setSelected((prev) => prev?.id === item.id ? null : item)}
                      onDismiss={() => setSelected(null)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Detail card */}
            <AnimatePresence>
              {selected && (
                <DetailCard
                  key={selected.id}
                  item={selected}
                  onClose={() => setSelected(null)}
                />
              )}
            </AnimatePresence>

            {/* Scroll hint */}
            <AnimatePresence>
              {showScrollHint && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute bottom-7 right-8 text-xs font-mono text-muted-foreground/35 pointer-events-none"
                >
                  scroll → past
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
