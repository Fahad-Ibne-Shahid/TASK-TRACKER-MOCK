import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  Clapperboard,
  Flame,
  Layers3,
  Mail,
  Menu,
  MessageSquareText,
  Play,
  Sparkles,
  Star,
  Target,
  WandSparkles,
  X,
  Zap
} from "lucide-react";

const accent = "#FF6B35";

const services = [
  {
    icon: Clapperboard,
    title: "AI Video Ads",
    description: "Scroll-stopping ads that convert viewers into customers"
  },
  {
    icon: Sparkles,
    title: "Brand Storytelling",
    description: "Cinematic narratives powered by AI"
  },
  {
    icon: Layers3,
    title: "Product Demos",
    description: "Show, don't tell with AI-generated demos"
  },
  {
    icon: MessageSquareText,
    title: "Social Content",
    description: "Endless content variations for every platform"
  }
];

const stats = [
  ["500K+", "Views Generated"],
  ["3.2x", "Average CTR Increase"],
  ["50+", "Brands Cooked For"],
  ["24-48hr", "Turnaround"]
];

const work = [
  {
    brand: "GlowLab",
    metric: "+218% CTR",
    gradient: "from-[#ff6b35] via-[#ff9a3d] to-[#2b1110]",
    title: "AI beauty launch film"
  },
  {
    brand: "NexaFit",
    metric: "1.8M impressions",
    gradient: "from-[#ff6b35] via-[#f43f5e] to-[#0f172a]",
    title: "Performance wear social cuts"
  },
  {
    brand: "OrbitPay",
    metric: "-42% CPA",
    gradient: "from-[#ff6b35] via-[#22d3ee] to-[#111827]",
    title: "Fintech product demo"
  }
];

const testimonials = [
  {
    quote:
      "Let's Cook AI gave us a campaign that looked expensive, tested fast, and beat our studio ads in the first week.",
    name: "Maya Chen",
    company: "CMO, GlowLab"
  },
  {
    quote:
      "The speed was unreal. We went from idea to polished creative variations in two days and finally had content our buyers stopped for.",
    name: "Andre James",
    company: "Founder, NexaFit"
  },
  {
    quote:
      "They understand performance and story. That combination is rare, and it showed in our conversion numbers.",
    name: "Sofia Rahman",
    company: "Growth Lead, OrbitPay"
  }
];

const pricing = [
  {
    name: "Starter",
    price: "$1,500",
    copy: "For launches, tests, and single-offer campaigns.",
    features: ["1 AI video ad", "3 aspect ratios", "Hook and script strategy", "48hr delivery"]
  },
  {
    name: "Growth",
    price: "$4,500",
    copy: "For brands scaling paid social creative.",
    features: ["4 AI video ads", "12 platform-ready cuts", "A/B hook variations", "Priority 24-48hr delivery"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    copy: "For high-volume creative engines and teams.",
    features: ["Monthly creative pipeline", "Dedicated AI art direction", "Custom reporting", "Team workflow support"]
  }
];

const navItems = ["Services", "Portfolio", "Process", "Pricing"];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 19) % 100}%`,
        delay: `${(index % 9) * 0.35}s`,
        size: `${4 + (index % 5) * 2}px`
      })),
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTestimonialIndex(current => (current + 1) % testimonials.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-coal text-white selection:bg-flame selection:text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,107,53,.24),transparent_30%),linear-gradient(180deg,#0A0A0A,#111,#0A0A0A)]" />
      <div className="noise pointer-events-none fixed inset-0 z-0 opacity-40" />

      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-white/10 bg-coal/70 shadow-2xl backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Let's Cook AI home">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-flame text-white shadow-glow">
              <Flame size={22} fill="white" />
            </span>
            <span className="leading-none">
              <span className="block text-lg font-black tracking-tight">Let's Cook AI</span>
              <span className="text-xs font-semibold uppercase tracking-[0.26em] text-white/40">Prompt. Cook. Convert.</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-white/70 transition hover:text-flame"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#pricing"
            className="hidden rounded-full bg-white px-5 py-3 text-sm font-black text-black transition hover:scale-105 hover:bg-flame hover:text-white hover:shadow-glow md:inline-flex"
          >
            Book a Cook
          </a>

          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
            onClick={() => setMenuOpen(value => !value)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="mx-5 mb-4 rounded-[24px] border border-white/10 bg-black/80 p-4 backdrop-blur-xl md:hidden">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 font-bold text-white/75 hover:bg-white/10 hover:text-flame"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="relative z-10 flex min-h-screen items-center px-5 pb-20 pt-32 md:px-8">
        <div className="absolute inset-0 overflow-hidden">
          {particles.map(particle => (
            <span
              key={particle.id}
              className="absolute rounded-full bg-flame/40 blur-[1px]"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                animation: `float 7s ease-in-out ${particle.delay} infinite`
              }}
            />
          ))}
        </div>

        <div className="mx-auto max-w-6xl text-center">
          <div className="reveal mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-flame/30 bg-flame/10 px-4 py-2 text-sm font-bold text-orange-100 shadow-glow">
            <BadgeCheck size={18} color={accent} />
            Trusted by 50+ brands
          </div>

          <h1 className="reveal text-balance mx-auto max-w-6xl text-6xl font-black leading-[0.9] tracking-normal sm:text-7xl md:text-8xl lg:text-[112px]">
            AI Video Ads That Actually <span className="text-flame">Convert</span>
          </h1>
          <p className="reveal mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl md:text-2xl">
            We cook up scroll-stopping video ads using generative AI. No actors. No cameras. Just results.
          </p>

          <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-flame px-8 py-4 text-base font-black text-white shadow-glow transition hover:scale-105 sm:w-auto"
            >
              Get Started
              <ArrowRight className="transition group-hover:translate-x-1" size={20} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-black text-white backdrop-blur transition hover:scale-105 hover:border-flame hover:text-flame sm:w-auto"
            >
              <Play size={18} fill="currentColor" />
              View Our Work
            </a>
          </div>
        </div>
      </section>

      <Section id="services" eyebrow="Services" title="What We Cook">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="reveal group rounded-[24px] border border-white/10 bg-white/[0.055] p-7 shadow-card backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-flame/50 hover:bg-[linear-gradient(135deg,rgba(255,107,53,.24),rgba(255,255,255,.06))] hover:shadow-glow"
            >
              <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-flame/10 text-flame ring-1 ring-flame/20 transition group-hover:bg-flame group-hover:text-white">
                <Icon size={25} />
              </div>
              <h3 className="text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-white/60">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="process" eyebrow="Process" title="Our Recipe">
        <div className="relative grid gap-6 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-transparent via-flame to-transparent md:block" />
          {[
            ["PROMPT", "We strategize your message", WandSparkles],
            ["COOK", "AI generates your video", Flame],
            ["CONVERT", "You get results", Target]
          ].map(([title, copy, Icon], index) => (
            <div key={title} className="reveal relative rounded-[24px] border border-white/10 bg-black/30 p-7 text-center backdrop-blur">
              <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-flame text-2xl font-black text-white shadow-glow">
                {index + 1}
              </div>
              <Icon className="mx-auto mb-5 text-flame" size={30} />
              <h3 className="text-3xl font-black tracking-wide">{title}</h3>
              <p className="mt-3 text-white/60">{copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="relative z-10 px-5 py-16 md:px-8">
        <div className="reveal mx-auto max-w-7xl rounded-[28px] bg-gradient-to-br from-flame via-white/15 to-white/0 p-px shadow-glow">
          <div className="rounded-[28px] bg-[#0d0d0d]/95 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-4">
              {stats.map(([number, label]) => (
                <div key={label} className="text-center">
                  <div className="text-4xl font-black text-white md:text-5xl">{number}</div>
                  <div className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-flame">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section id="portfolio" eyebrow="Portfolio" title="Fresh Out The Kitchen">
        <div className="grid gap-5 md:grid-cols-3">
          {work.map(item => (
            <article key={item.brand} className="reveal group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.055] shadow-card transition hover:-translate-y-2 hover:border-flame/40 hover:shadow-glow">
              <div className={`relative aspect-video bg-gradient-to-br ${item.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.35),transparent_22%),linear-gradient(135deg,transparent,rgba(0,0,0,.65))]" />
                <div className="absolute left-5 top-5 rounded-full bg-black/40 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                  {item.metric}
                </div>
                <button className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-black shadow-2xl transition group-hover:scale-110 group-hover:bg-flame group-hover:text-white" aria-label={`Play ${item.brand} case study`}>
                  <Play fill="currentColor" size={24} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black">{item.brand}</h3>
                <p className="mt-2 text-white/60">{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="testimonials" eyebrow="Testimonials" title="Proof It Sizzles">
        <div className="grid gap-5 lg:grid-cols-[1fr_420px]">
          <div className="reveal rounded-[24px] border border-white/10 bg-white/[0.055] p-8 shadow-card backdrop-blur md:p-10">
            <div className="mb-8 flex gap-2 text-flame">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="text-2xl font-bold leading-snug text-white md:text-4xl">"{testimonials[testimonialIndex].quote}"</p>
            <div className="mt-10 flex items-center gap-4">
              <Avatar name={testimonials[testimonialIndex].name} />
              <div>
                <div className="font-black">{testimonials[testimonialIndex].name}</div>
                <div className="text-sm text-white/60">{testimonials[testimonialIndex].company}</div>
              </div>
            </div>
          </div>
          <div className="reveal grid gap-4">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setTestimonialIndex(index)}
                className={`rounded-[20px] border p-5 text-left transition hover:border-flame/50 ${
                  testimonialIndex === index ? "border-flame/60 bg-flame/10" : "border-white/10 bg-white/[0.035]"
                }`}
              >
                <div className="font-black">{item.name}</div>
                <div className="mt-1 text-sm text-white/60">{item.company}</div>
              </button>
            ))}
          </div>
        </div>
      </Section>

      <Section id="pricing" eyebrow="Pricing" title="Ready to Cook?">
        <div className="grid gap-5 lg:grid-cols-3">
          {pricing.map(plan => (
            <article
              key={plan.name}
              className={`reveal relative rounded-[24px] border p-7 shadow-card transition hover:-translate-y-2 hover:shadow-glow ${
                plan.popular ? "border-flame/60 bg-flame/10" : "border-white/10 bg-white/[0.055]"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-5 top-5 rounded-full bg-flame px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">
                  Popular
                </div>
              )}
              <h3 className="text-2xl font-black">{plan.name}</h3>
              <div className="mt-5 text-5xl font-black">{plan.price}</div>
              <p className="mt-4 min-h-14 leading-7 text-white/60">{plan.copy}</p>
              <ul className="mt-7 space-y-4">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-white/80">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-flame text-white">
                      <Check size={15} strokeWidth={4} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="mailto:contact@letscookai.com" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-flame px-6 py-4 font-black text-white transition hover:scale-105 hover:shadow-glow">
                Get Started <ArrowRight size={18} />
              </a>
            </article>
          ))}
        </div>
      </Section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-flame text-white shadow-glow">
                <Flame size={24} fill="white" />
              </span>
              <div>
                <div className="text-xl font-black">Let's Cook AI</div>
                <div className="text-sm text-white/60">Prompt. Cook. Convert.</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm leading-7 text-white/60">
              AI-native creative for brands that need faster testing, stronger hooks, and video ads built to perform.
            </p>
          </div>
          <div>
            <h4 className="font-black">Quick Links</h4>
            <div className="mt-4 grid gap-3 text-white/60">
              {["Services", "Portfolio", "About", "Contact"].map(item => (
                <a
                  key={item}
                  href={item === "Contact" ? "mailto:contact@letscookai.com" : item === "About" ? "#process" : `#${item.toLowerCase()}`}
                  className="transition hover:text-flame"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-black">Contact</h4>
            <a href="mailto:contact@letscookai.com" className="mt-4 flex items-center gap-3 text-white/60 transition hover:text-flame">
              <Mail size={18} /> contact@letscookai.com
            </a>
            <div className="mt-6 flex gap-3">
              {["in", "x", "ig"].map(item => (
                <a key={item} href="#home" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-sm font-black text-white/70 transition hover:border-flame hover:bg-flame hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl text-sm text-white/40">© 2026 Let's Cook AI. All rights reserved.</div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate3d(0, 0, 0); opacity: .22; }
          50% { transform: translate3d(14px, -22px, 0); opacity: .82; }
        }
      `}</style>
    </main>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative z-10 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-12 max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-flame/25 bg-flame/10 px-3 py-1 text-xs font-black uppercase tracking-[0.24em] text-flame">
            {eyebrow}
          </div>
          <h2 className="text-balance text-4xl font-black tracking-normal md:text-6xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map(part => part[0])
    .join("");

  return (
    <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-flame to-white/20 text-sm font-black shadow-glow">
      {initials}
    </div>
  );
}

export default App;
