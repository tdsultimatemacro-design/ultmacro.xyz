import {
  ArrowRight,
  Check,
  ChevronDown,
  Coins,
  Download,
  Gauge,
  Gem,
  GitBranch as Github,
  Image as ImageSearch,
  Map,
  MessageCircle,
  Monitor,
  MousePointer2,
  Play,
  RefreshCw,
  RotateCw,
  ShieldCheck,
  Sparkles,
  Swords,
  TowerControl,
  Webhook,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DOWNLOAD_URL =
  "https://github.com/DarksenDev/tds-macro/releases/latest";

const DISCORD_URL = "https://discord.gg/DQnc2JDJtr";

const features = [
  {
    icon: MousePointer2,
    title: "Record complete strategies",
    description:
      "Record tower placements, upgrades, sells, movement, DJ tracks and special tower actions into reusable strategy files.",
    iconClassName: "bg-purple-500/10 text-purple-400",
  },
  {
    icon: ImageSearch,
    title: "Smart visual detection",
    description:
      "Image recognition and OCR detect maps, menus, rewards, triumphs, losses and other important match states.",
    iconClassName: "bg-violet-500/10 text-violet-400",
  },
  {
    icon: RefreshCw,
    title: "Automatic recovery",
    description:
      "The watchdog detects Roblox crashes and disconnects, then automatically relaunches and resumes the macro.",
    iconClassName: "bg-cyan-500/10 text-cyan-400",
  },
  {
    icon: Webhook,
    title: "Discord reporting",
    description:
      "Receive live logs, result screenshots, currency rewards, win rate, hourly income and average run times.",
    iconClassName: "bg-amber-500/10 text-amber-400",
  },
];

const automationFeatures = [
  "Automatic tower equipping",
  "Strategy rotation by runs or minutes",
  "Automatic wave skipping",
  "Call of Arms chaining",
  "Support Caravan automation",
  "Drop the Beat automation",
  "Ability spamming",
  "Playtime reward collection",
  "Timescale support",
  "VIP server support",
  "Map verification",
  "Potato mode",
];

const modes = [
  {
    number: "01",
    label: "Hardcore & Voidcore",
    title: "Gem farming",
    description:
      "Run short Hardcore or Voidcore strategies repeatedly to farm gems and tower experience.",
    icon: Gem,
    glowClassName:
      "bg-[radial-gradient(circle_at_80%_12%,rgba(168,85,247,0.32),transparent_36%)]",
    iconClassName:
      "border-violet-300/20 bg-violet-400/10 text-violet-300",
  },
  {
    number: "02",
    label: "Easy through Frost",
    title: "Coins and XP",
    description:
      "Automate Easy, Casual, Intermediate, Molten, Fallen and Frost strategies while you are away.",
    icon: Coins,
    glowClassName:
      "bg-[radial-gradient(circle_at_80%_12%,rgba(245,158,11,0.28),transparent_36%)]",
    iconClassName:
      "border-amber-300/20 bg-amber-400/10 text-amber-300",
  },
  {
    number: "03",
    label: "Special modes",
    title: "Challenge maps",
    description:
      "Supports Pizza Party, Badlands II and Polluted Wasteland II strategy configurations.",
    icon: Map,
    glowClassName:
      "bg-[radial-gradient(circle_at_80%_12%,rgba(56,189,248,0.3),transparent_36%)]",
    iconClassName:
      "border-sky-300/20 bg-sky-400/10 text-sky-300",
  },
];

const recordingSteps = [
  {
    time: "00:02",
    action: "SpawnTower",
    detail: "Minigunner1 · Slot 1",
    icon: TowerControl,
  },
  {
    time: "00:11",
    action: "UpgradeTower",
    detail: "Minigunner1 · Path 2",
    icon: Zap,
  },
  {
    time: "00:19",
    action: "Change DJ track",
    detail: "DJ · Track 2",
    icon: Gauge,
  },
  {
    time: "00:33",
    action: "Use ability",
    detail: "Commander · Call of Arms",
    icon: Sparkles,
  },
];

const setupSteps = [
  {
    number: "01",
    title: "Choose a strategy",
    description:
      "Load a community strategy or record your own tower sequence.",
  },
  {
    number: "02",
    title: "Configure the run",
    description:
      "Set the mode, map, modifiers, timescale, towers and abilities.",
  },
  {
    number: "03",
    title: "Press F1",
    description:
      "The macro equips, joins, plays, reports and begins the next run.",
  },
];

const requirements = [
  "Windows 10 or Windows 11",
  "1920×1080 screen resolution",
  "100% Windows display scaling",
  "Visible Windows taskbar",
  "TDS UI Scale set to Large",
  "Screen shake disabled",
  "Chat closed while running",
];

const faqs = [
  {
    question: "What can Ultimate Macro automate?",
    answer:
      "It records tower placements, upgrades, sells, movement, DJ tracks, Hologram and Raise the Dead actions. It can also automate Call of Arms, Support Caravan, Drop the Beat, abilities and wave skipping.",
  },
  {
    question: "Do I need to write strategies manually?",
    answer:
      "No. Play normally and use the configurable recording hotkeys to capture your actions. Ultimate Macro saves the resulting steps into a reusable strategy file.",
  },
  {
    question: "Can it recover from a disconnect?",
    answer:
      "Yes. Its watchdog detects Roblox crashes, disconnect screens, triumphs and losses, sends an optional screenshot to Discord and restarts the macro.",
  },
  {
    question: "What statistics can the webhook send?",
    answer:
      "The webhook can report coins, gems, XP, total matches, wins, losses, win rate, hourly income, average completion time and result screenshots.",
  },
  {
    question: "Is this affiliated with Roblox or TDS?",
    answer:
      "No. Ultimate Macro is an independent third-party project and is not endorsed by Roblox Corporation or Paradoxum Games.",
  },
];

const Brand = () => {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl bg-linear-to-br from-indigo-300 via-purple-500 to-purple-700 shadow-[inset_0_1px_rgba(255,255,255,0.5),0_8px_20px_rgba(126,34,206,0.35)]">
        <Zap className="size-[18px] fill-white text-white" />
      </span>

      <span className="font-semibold tracking-[-0.035em] text-white">
        Ultimate <span className="text-indigo-300">Macro</span>
      </span>
    </span>
  );
};

const Page = () => {
  return (
    <main className="overflow-hidden bg-[#05070b] text-white">
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#7c3aed] px-5"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#24075f_0%,#5420b8_30%,#9b3fe5_66%,#ead8ff_100%)]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_31%,rgba(209,142,255,0.62),transparent_68%)]" />

        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_190px_rgba(255,255,255,0.22)]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-[radial-gradient(ellipse_at_bottom,rgba(249,242,255,0.96),rgba(222,185,255,0.52)_43%,transparent_76%)]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,transparent,black_45%,transparent)]" />

        <header className="absolute inset-x-0 top-0 z-50 flex justify-center px-7">
          <nav
            className="
              relative flex h-[66px] items-center gap-8 rounded-b-[22px]
              bg-[#05070a] px-3 pl-4 text-sm shadow-xl shadow-purple-950/20

              before:absolute before:-left-6 before:top-0 before:size-6
              before:bg-[radial-gradient(circle_at_bottom_left,transparent_24px,#05070a_25px)]

              after:absolute after:-right-6 after:top-0 after:size-6
              after:bg-[radial-gradient(circle_at_bottom_right,transparent_24px,#05070a_25px)]
            "
          >
            <Link href="#home" aria-label="Ultimate Macro home">
              <Brand />
            </Link>

            <div className="hidden items-center gap-7 text-white/45 md:flex">
              <Link
                href="#features"
                className="transition-colors hover:text-white"
              >
                Features
              </Link>

              <Link
                href="#how-it-works"
                className="transition-colors hover:text-white"
              >
                How it works
              </Link>

              <Link
                href="#modes"
                className="transition-colors hover:text-white"
              >
                Strategies
              </Link>

              <Link href="#faq" className="transition-colors hover:text-white">
                FAQ
              </Link>
            </div>

            <Link
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              className="ml-1 flex h-10 items-center gap-2 rounded-xl bg-white px-4 font-semibold text-[#07111f] transition hover:bg-purple-50"
            >
              Download
              <Download className="size-4" />
            </Link>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-2 pt-32 text-center sm:px-6 sm:pt-40">
          <div className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 sm:text-base">
            <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_0_5px_rgba(110,231,183,0.14)]" />
            Built for Tower Defense Simulator
          </div>

          <h1 className="max-w-5xl text-[clamp(3.6rem,7.3vw,7.4rem)] font-bold leading-[0.84] tracking-[-0.075em]">
            Your grind.
            <span className="mt-3 block font-serif font-normal italic tracking-[-0.055em]">
              Fully automated.
            </span>
          </h1>

          <p className="mt-8 max-w-[690px] text-base leading-7 text-white/75 sm:text-xl sm:leading-8">
            Record and replay complete TDS strategies, rotate farms, auto-equip
            towers, collect rewards and recover from crashes—all while
            you&apos;re away.
          </p>

          <div className="mt-7 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row">
            <Link
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#05070a] px-6 font-semibold shadow-xl shadow-purple-950/25 transition hover:-translate-y-0.5 hover:bg-zinc-900"
            >
              <Download className="size-5" />
              Download for Windows
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#how-it-works"
              className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/15 px-6 font-semibold backdrop-blur-md transition hover:bg-white/25"
            >
              <span className="grid size-7 place-items-center rounded-full bg-white/15">
                <Play className="size-3.5 fill-white" />
              </span>
              See how it works
            </Link>
          </div>

          <div className="mt-5 hidden flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-purple-950/55 sm:flex">
            <span className="flex items-center gap-1.5">
              <Check className="size-3.5" />
              Free and open source
            </span>

            <span className="flex items-center gap-1.5">
              <Check className="size-3.5" />
              Community strategies
            </span>

            <span className="flex items-center gap-1.5">
              <Check className="size-3.5" />
              Automatic recovery
            </span>
          </div>

          <div className="relative mt-14 w-full max-w-[1180px] rounded-t-[36px] border border-white/55 bg-white/20 p-2 pb-0 shadow-[0_35px_100px_rgba(73,20,130,0.3)] backdrop-blur-xl sm:p-4 sm:pb-0 lg:p-6 lg:pb-0">
            <div className="pointer-events-none absolute inset-x-[10%] -top-10 h-24 bg-white/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-t-[25px] border border-white/15 bg-[#080b0f] shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-video w-full">
                <Image
                  src="/ultimate-macro.png"
                  alt="Ultimate Macro application showing available TDS strategies"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1280px) 90vw, 1180px"
                  className="select-none object-cover object-top"
                />

                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_35px_rgba(0,0,0,0.35)]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080b10]">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-6 md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="flex items-center gap-4 py-7 md:px-8">
            <RotateCw className="size-6 text-purple-400" />

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">
                Strategy rotation
              </p>
              <p className="mt-1 font-semibold text-white/85">
                Swap by runs or minutes
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-7 md:px-8">
            <ShieldCheck className="size-6 text-purple-400" />

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">
                Watchdog recovery
              </p>
              <p className="mt-1 font-semibold text-white/85">
                Crash and disconnect aware
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-7 md:px-8">
            <Swords className="size-6 text-purple-400" />

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">
                Community strategies
              </p>
              <p className="mt-1 font-semibold text-white/85">
                Browse, load and farm
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="relative border-b border-white/10 bg-[#080b10] px-6 py-24 sm:py-32"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-3/4 -translate-x-1/2 rounded-full bg-purple-600/[0.07] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
              Everything the grind needs
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
              More wins. Less watching.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
              Designed around actual TDS menus, towers and match states—not
              generic mouse recording.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-[22px] border border-white/10 bg-[#0d121a] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-[#101620] hover:shadow-[0_22px_60px_rgba(0,0,0,0.3)]"
              >
                <span
                  className={`grid size-12 place-items-center rounded-2xl ${feature.iconClassName}`}
                >
                  <feature.icon className="size-6" />
                </span>

                <h3 className="mt-7 text-lg font-semibold tracking-tight text-white/90">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {feature.description}
                </p>

                <span className="mt-6 flex items-center gap-2 text-xs font-bold text-purple-400">
                  Explore feature
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="relative bg-[#06090e] px-6 py-24 sm:py-32"
      >
        <div className="pointer-events-none absolute right-0 top-1/3 size-[420px] rounded-full bg-purple-700/[0.06] blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
              From loadout to loot
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl">
              Start farming in three simple steps.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-white/40">
              No scripting or coordinate spreadsheets. Build a strategy while
              you play, save it and let Ultimate Macro repeat it.
            </p>

            <div className="mt-9 border-t border-white/10">
              {setupSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[42px_1fr] gap-4 border-b border-white/10 py-5"
                >
                  <span
                    className={`grid size-9 place-items-center rounded-xl text-[10px] font-bold ${
                      index === 0
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-950/30"
                        : "border border-white/10 bg-white/[0.025] text-white/30"
                    }`}
                  >
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-semibold text-white/90">
                      {step.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-white/40">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-purple-400"
            >
              Build your first strategy
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#0a0e15] text-white shadow-[0_35px_90px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0e131c] px-6 py-5">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
                  Strategy recorder
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Hardcore · Wretched Front
                </p>
              </div>

              <span className="rounded-lg border border-purple-400/20 bg-purple-400/[0.07] px-3 py-1.5 text-[9px] text-purple-300">
                Recording
              </span>
            </div>

            <div className="px-6 py-5">
              <div className="flex items-center justify-between pb-3 text-[10px] text-white/30">
                <span>Recorded actions</span>
                <span className="font-mono">00:04:21</span>
              </div>

              {recordingSteps.map((step) => (
                <div
                  key={`${step.time}-${step.action}`}
                  className="grid grid-cols-[42px_34px_1fr_auto] items-center gap-3 border-t border-white/10 py-3"
                >
                  <span className="font-mono text-[10px] text-white/30">
                    {step.time}
                  </span>

                  <span className="grid size-8 place-items-center rounded-lg bg-purple-500/10 text-purple-400">
                    <step.icon className="size-4" />
                  </span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/30">
                      {step.action}
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white/75">
                      {step.detail}
                    </p>
                  </div>

                  <span className="text-xs tracking-widest text-white/20">
                    •••
                  </span>
                </div>
              ))}

              <button
                type="button"
                className="mt-3 h-10 w-full rounded-xl border border-dashed border-white/10 text-xs text-white/30 transition hover:border-purple-400/25 hover:text-purple-300"
              >
                + Record another action
              </button>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 bg-[#0e131c] px-6 py-4">
              <span className="flex items-center gap-2 text-[10px] text-white/30">
                <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                Recorder ready
              </span>

              <button
                type="button"
                className="flex h-9 items-center gap-2 rounded-lg bg-purple-600 px-4 text-[10px] font-bold shadow-lg shadow-purple-950/20 transition hover:bg-purple-500"
              >
                <Play className="size-3 fill-white" />
                Save strategy
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080b10] px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
              Built-in automation
            </p>

            <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl">
              More than a strategy player.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-white/40">
              Ultimate Macro handles the surrounding work too—from preparing
              your loadout to collecting rewards and joining the next match.
            </p>
          </div>

          <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
            {automationFeatures.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-3 border-b border-r border-white/10 p-5 transition hover:bg-white/[0.025] sm:p-6"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-purple-500/10 text-purple-400">
                  <Check className="size-4" />
                </span>

                <span className="text-sm font-medium text-white/65">
                  {feature}
                </span>

                <span className="ml-auto font-mono text-[9px] text-white/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="modes"
        className="bg-[#080b10] px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
                Eleven supported modes
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
                Farm what matters to you.
              </h2>
            </div>

            <p className="max-w-lg leading-7 text-white/40 lg:justify-self-end">
              From Easy and Molten through Fallen, Frost, Hardcore, Voidcore and
              the major special modes.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {modes.map((mode) => (
              <article
                key={mode.title}
                className="group relative min-h-[370px] overflow-hidden rounded-[26px] border border-white/10 bg-[#0e131c] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-[#111722]"
              >
                <div
                  className={`pointer-events-none absolute inset-0 ${mode.glowClassName}`}
                />

                <div className="relative flex h-full min-h-[315px] flex-col">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] text-white/20">
                      {mode.number}
                    </span>

                    <span
                      className={`grid size-20 place-items-center rounded-full border ${mode.iconClassName}`}
                    >
                      <mode.icon className="size-9" />
                    </span>
                  </div>

                  <div className="mt-auto">
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
                      {mode.label}
                    </p>

                    <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                      {mode.title}
                    </h3>

                    <p className="mt-4 max-w-xs text-sm leading-6 text-white/40">
                      {mode.description}
                    </p>
                  </div>

                  <span className="absolute bottom-0 right-0 grid size-10 place-items-center rounded-full border border-white/10 text-white/30 transition group-hover:border-purple-400/30 group-hover:text-purple-300">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080b10] px-5 pb-24">
        <div className="relative mx-auto grid min-h-[410px] max-w-7xl place-items-center overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(147,51,234,0.22),transparent_44%),linear-gradient(145deg,#171022,#0b0d13)] px-6 text-center">
          <div>
            <span className="font-serif text-7xl leading-none text-purple-400">
              “
            </span>

            <blockquote className="mt-2 text-3xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-5xl">
              Spend your time building strategies.
              <span className="block font-serif font-normal italic text-white/75">
                Not replaying them.
              </span>
            </blockquote>

            <p className="mt-6 text-sm text-white/35">
              Ultimate Macro turns a good run into a repeatable one.
            </p>
          </div>
        </div>
      </section>

      <section
        id="requirements"
        className="relative border-t border-white/10 bg-[#06090e] px-6 py-24 sm:py-32"
      >
        <div className="pointer-events-none absolute left-0 top-1/4 size-96 rounded-full bg-purple-700/[0.06] blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
              Before you begin
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl">
              A consistent setup keeps every run accurate.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-white/40">
              The current macro uses fixed interface positions and visual
              detection, so these settings are required for reliable playback.
            </p>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-[#0d121a] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:p-8">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <span className="grid size-12 place-items-center rounded-2xl bg-purple-500/10 text-purple-400">
                <Monitor className="size-6" />
              </span>

              <div>
                <h3 className="font-semibold text-white/90">
                  System requirements
                </h3>

                <p className="mt-1 text-sm text-white/35">
                  Configure these before starting the macro.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {requirements.map((requirement) => (
                <div
                  key={requirement}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3.5"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <Check className="size-3.5" />
                  </span>

                  <span className="text-sm font-medium text-white/55">
                    {requirement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="border-t border-white/10 bg-[#080b10] px-6 py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
              Questions, answered
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl">
              Before you press start.
            </h2>

            <p className="mt-6 max-w-sm leading-7 text-white/40">
              Still unsure? Join the community and ask anything about setup,
              recording or strategies.
            </p>

            <Link
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-purple-400"
            >
              Join the Discord
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="border-t border-white/10">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group border-b border-white/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 font-semibold text-white/85 transition hover:text-white">
                  {faq.question}

                  <ChevronDown className="size-5 shrink-0 text-white/30 transition-transform group-open:rotate-180 group-open:text-purple-400" />
                </summary>

                <p className="max-w-2xl pb-6 text-sm leading-7 text-white/40">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="download"
        className="relative overflow-hidden bg-[linear-gradient(145deg,#160524,#3b1267_52%,#6d28d9)] px-6 py-24 text-center sm:py-32"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(216,180,254,0.24),transparent_48%)]" />

        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_rgba(11,2,26,0.58)]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,transparent,black)]" />

        <div className="relative mx-auto max-w-4xl">
          <span className="mx-auto grid size-16 place-items-center rounded-[20px] border border-white/20 bg-white/10 shadow-inner shadow-white/10">
            <Zap className="size-7 fill-white" />
          </span>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-purple-200/55">
            Ready when you are
          </p>

          <h2 className="mt-5 text-5xl font-semibold leading-[0.94] tracking-[-0.065em] sm:text-7xl">
            Turn downtime into progress.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/60">
            Download Ultimate Macro and make your next strategy run itself.
          </p>

          <div className="mx-auto mt-9 flex max-w-sm flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
            <Link
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#05070a] px-6 font-semibold shadow-xl shadow-purple-950/30 transition hover:-translate-y-0.5 hover:bg-zinc-900"
            >
              <Download className="size-5" />
              Download for Windows
            </Link>

            <Link
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              <MessageCircle className="size-5" />
              Join our Discord
            </Link>
          </div>

          <p className="mt-5 text-[11px] text-white/35">
            Windows 10/11 · 1920×1080 and 100% scaling required · Use
            responsibly
          </p>
        </div>
      </section>

      <footer className="bg-[#05070b]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-9 sm:flex-row">
          <Brand />

          <p className="text-center text-xs text-white/30">
            Built for people who love TDS, but not the endless grind.
          </p>

          <div className="flex items-center gap-1">
            <Link
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid size-9 place-items-center rounded-full text-white/40 transition hover:bg-white/10 hover:text-white"
            >
              <Github className="size-4" />
            </Link>

            <Link
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              className="grid size-9 place-items-center rounded-full text-white/40 transition hover:bg-white/10 hover:text-white"
            >
              <MessageCircle className="size-4" />
            </Link>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-white/10 px-6 py-5 text-center text-[10px] text-white/25 sm:flex-row">
          <span>© {new Date().getFullYear()} Ultimate Macro</span>
          <span>
            Not affiliated with Roblox Corporation or Paradoxum Games.
          </span>
        </div>
      </footer>
    </main>
  );
};

export default Page;