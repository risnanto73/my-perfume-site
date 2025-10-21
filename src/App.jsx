import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ShoppingBag, Star, ArrowRight, Menu, X, Leaf, FlaskConical, BarChart3, Lightbulb, Cpu, Settings, Headphones } from "lucide-react";
import { useRef } from "react";
import aiInsight from "./assets/ai-insight.png";
import collaboration from "./assets/collaboration.png";
import scent from "./assets/scent.png";
import construc from "./assets/construct.png";
import collect from "./assets/collect.png";
import capture from "./assets/capture.png";
import reveal from "./assets/reveal.png";
import report from "./assets/report.png";
import heroBottle from "./assets/vendii-machine.png";


// Monochrome Perfume Landing Page (Black & White Theme)

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

function Nav() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="font-serif text-2xl tracking-wide">VENDII</a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#about-us" className="text-sm uppercase tracking-widest hover:opacity-70">ABOUT US</a>
          <a href="#how-it-works" className="text-sm uppercase tracking-widest hover:opacity-70">HOW IT WORKS</a>
          <a href="#why-vendii" className="text-sm uppercase tracking-widest hover:opacity-70">WHY VENDII</a>
          <a href="#contact" className="text-sm uppercase tracking-widest hover:opacity-70">Contact</a>
          <button className="rounded-2xl border border-black bg-black px-5 py-2 text-white hover:bg-white hover:text-black">
            GET IN TOUCH
          </button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-black/10 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <div className="grid gap-4">
              {[
                ["ABOUT US", "#about-us"],
                ["HOW IT WORKS", "#how-it-works"],
                ["WHY VENDII", "#why-vendii"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="text-sm uppercase tracking-widest" onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
              <button className="w-full rounded-2xl border border-black bg-black py-2 text-white hover:bg-white hover:text-black">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28" id="home">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.06),transparent_40%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-24 pt-10 sm:px-6 md:grid-cols-2 md:items-center">
        {/* Text Section */}
        <motion.div variants={fadeIn} initial="hidden" animate="show" className="relative">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em]">
            Uncover tomorrow's winning fragrances, today <span className="h-1 w-1 rounded-full bg-black" />
          </p>
          <h1 className="font-serif text-5xl leading-[1.1] md:text-6xl">
            Data & AI-driven fragrance evaluation for modern{" "}
            <span className="mx-4 inline-block rotate-2 rounded bg-black px-3 pb-1 pt-2 font-sans text-4xl uppercase tracking-widest text-white md:text-5xl">
              perfumery
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-black/70">
            The fragrance evaluation platform that helps fragrance houses discover tomorrow’s winning creations, today — combining structured consumer testing, digital feedback, and AI-powered insights.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="rounded-2xl border border-black bg-black px-6 py-2 text-white hover:bg-white hover:text-black">
              GET IN TOUCH
            </button>
          </div>
          <p className="mt-6 text-sm text-black/60">
            “Vendii’s evaluation platform was elegant, effortless, and exceeded all expectations.” {" "}
            <span className="font-medium text-black"></span>{""} — <span className="font-medium text-black">Kajal Perfumes Paris</span>
          </p>
        </motion.div>

        {/* Image Box */}
        <motion.div variants={fadeIn} initial="hidden" animate="show" className="relative">
          <div className="relative mx-auto aspect-[4/5] w-80 max-w-full rounded-3xl border border-black/10 bg-gradient-to-b from-white to-black/5 shadow-2xl overflow-hidden">
            {/* Inner Glass Layer */}
            <div className="absolute inset-4 rounded-2xl border border-black/10 bg-white/80 backdrop-blur-sm" />

            {/* Label Top */}
            <div className="absolute inset-x-8 top-8 rounded-md border border-black/20 bg-white/90 py-2 text-center font-serif text-xl tracking-wide z-10">
              VENDII GLOBAL
            </div>

            {/* Gambar di Tengah */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <img
                src={heroBottle}
                alt="Vendii Perfume Bottle"
                className="h-[70%] w-auto object-contain opacity-90 transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Label Bottom */}
            <div className="absolute inset-x-10 bottom-10 flex flex-col items-center z-10">
              <div className="mb-2 h-6 w-12 rounded-sm border border-black/30 bg-white/80" />
              <p className="text-xs uppercase tracking-[0.25em] text-black/70">Eau de Parfum</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Badges() {
  const items = [
    { title: "Bias-free testing", icon: FlaskConical },
    { title: "Impactful data reports", icon: BarChart3 },
    { title: "Smarter fragrance evaluations", icon: Lightbulb },
  ];

  return (
    <section className="bg-white py-24 border-y border-black/10">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* ✨ Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-serif text-4xl md:text-5xl mb-14 leading-tight"
        >
          Trust the{" "}
          <span className="italic font-thin text-black/90">Power</span>{" "}
          of Vendii
        </motion.h2>

        {/* Badge Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 text-center sm:grid-cols-3"
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-4 group"
              >
                {/* Circle Icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-black/10 bg-white transition-all duration-500 group-hover:bg-black group-hover:scale-105">
                  <Icon className="h-8 w-8 text-black transition-colors duration-500 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl tracking-wide transition-all duration-300 group-hover:text-black/80">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  const fade = {
    hidden: { opacity: 0, y: 60, rotateZ: 5 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      rotateZ: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section
      id="story"
      className="relative bg-white py-24 border-y border-black/10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Title */}
        <motion.h2
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center font-serif text-4xl md:text-5xl mb-16"
        >
          From <span className="italic text-black/80">Guesswork</span> to{" "}
          <span className="font-semibold">Clarity</span>
        </motion.h2>

        {/* Puzzle Container */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Puzzle Left */}
          <motion.div
            variants={fade}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotateZ: -1 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative p-10 rounded-[3rem_3rem_6rem_3rem] border border-black/10 bg-white shadow-sm 
                       hover:shadow-xl transition-all duration-500"
          >
            {/* Puzzle notch on right side (desktop) */}
            <div className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white border border-black/10 shadow-sm" />

            {/* Puzzle notch on bottom (mobile) */}
            <div className="md:hidden absolute bottom-[-0.75rem] left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-white border border-black/10 shadow-sm" />

            <h3 className="text-lg font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
              The Challenge 🧩
            </h3>
            <p className="text-black/70 leading-relaxed">
              Fragrance houses create dozens of trial blends, but decisions often rely on instinct
              or brand perception. Without structured consumer insight, it’s hard to know which
              creations will truly resonate.
            </p>
          </motion.div>

          {/* Puzzle Right */}
          <motion.div
            variants={fade}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotateZ: 1 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative p-10 rounded-[3rem_6rem_3rem_3rem] border border-black/10 bg-white shadow-sm 
                       hover:shadow-xl transition-all duration-500"
          >
            {/* Puzzle notch on left (desktop) */}
            <div className="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white border border-black/10 shadow-sm" />

            {/* Puzzle notch on top (mobile) */}
            <div className="md:hidden absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-white border border-black/10 shadow-sm" />

            <h3 className="text-lg font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
              Our Answer 💡
            </h3>
            <p className="text-black/70 leading-relaxed">
              Vendii provides a clear, evidence-based way to evaluate fragrances — helping houses
              identify strengths, uncover weaknesses, and refine creations through structured testing
              and data science.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Slide opacity berdasarkan progress scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.4], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.55, 0.7], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.65, 0.9, 1], [0, 1, 1]);

  // Indikator aktif
  const active1 = useTransform(scrollYProgress, [0, 0.25, 0.45], [1, 1, 0.4]);
  const active2 = useTransform(scrollYProgress, [0.35, 0.6, 0.75], [0.4, 1, 0.4]);
  const active3 = useTransform(scrollYProgress, [0.7, 0.9, 1], [0.4, 1, 1]);

  const slides = [
    {
      title: "AI-Powered Insight",
      text: "We harness machine learning to decode scent preferences and empower confident, data-driven fragrance creation.",
      image: aiInsight,
    },
    {
      title: "Creative Collaboration",
      text: "We blend artistic innovation and analytical precision to support perfumers through every creative stage.",
      image:
        collaboration,
    },
    {
      title: "Scent Experience",
      text: "We deliver personalized, immersive scent journeys that connect brands with genuine human emotion.",
      image:
        scent,
    },
  ];

  return (
    <section ref={ref} id="about-us" className="relative bg-white border-y border-black/10">
      {/* Tinggi total scroll area */}
      <div className="h-[300vh] relative">
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-6">
          {/* ✨ Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl mb-16"
          >
            About Us
          </motion.h2>

          {/* Main container */}
          <div className="max-w-7xl w-full flex gap-10 md:gap-16 items-center justify-center">
            {/* Left indicator */}
            <div className="hidden md:flex flex-col items-center justify-center gap-4">
              {[active1, active2, active3].map((opacity, i) => (
                <motion.div
                  key={i}
                  style={{ opacity }}
                  className="flex flex-col items-center text-sm font-mono"
                >
                  <motion.div
                    style={{
                      scale: opacity,
                      backgroundColor: `rgba(0,0,0,${opacity.get()})`,
                    }}
                    className="h-4 w-4 rounded-full border border-black/50 mb-1"
                  />
                  <span className="text-xs text-black/70">{i + 1}</span>
                </motion.div>
              ))}
            </div>

            {/* Slide container */}
            <div className="relative flex-1 h-[70vh] flex items-center justify-center">
              {/* Slide 1 */}
              <motion.div
                style={{ opacity: opacity1 }}
                className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-10"
              >
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-serif mb-4">{slides[0].title}</h3>
                  <p className="text-black/70 leading-relaxed">{slides[0].text}</p>
                </div>
                <img
                  src={slides[0].image}
                  alt={slides[0].title}
                  className="md:w-1/2 w-full h-64 md:h-[28rem] object-cover rounded-3xl shadow-md border border-black/10"
                />
              </motion.div>

              {/* Slide 2 */}
              <motion.div
                style={{ opacity: opacity2 }}
                className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-10"
              >
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-serif mb-4">{slides[1].title}</h3>
                  <p className="text-black/70 leading-relaxed">{slides[1].text}</p>
                </div>
                <img
                  src={slides[1].image}
                  alt={slides[1].title}
                  className="md:w-1/2 w-full h-64 md:h-[28rem] object-cover rounded-3xl shadow-md border border-black/10"
                />
              </motion.div>

              {/* Slide 3 */}
              <motion.div
                style={{ opacity: opacity3 }}
                className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-10"
              >
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-serif mb-4">{slides[2].title}</h3>
                  <p className="text-black/70 leading-relaxed">{slides[2].text}</p>
                </div>
                <img
                  src={slides[2].image}
                  alt={slides[2].title}
                  className="md:w-1/2 w-full h-64 md:h-[28rem] object-cover rounded-3xl shadow-md border border-black/10"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsCarousel() {
  const reviews = [
    {
      name: "Amira L.",
      company: "Creative Perfumes Lab",
      quote:
        "Vendii transformed the way we evaluate fragrances. The platform provided clarity and data we never had before.",
      rating: 5,
    },
    {
      name: "Julien R.",
      company: "Maison de Parfum Paris",
      quote:
        "For years, we relied purely on instinct. Vendii turned that intuition into measurable insights — simply remarkable.",
      rating: 5,
    },
    {
      name: "Sophia T.",
      company: "Natura Essence",
      quote:
        "The process felt intuitive yet powerful. Our creative team finally had data that spoke our artistic language.",
      rating: 4,
    },
  ];

  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  // Auto-scroll
  React.useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000); // ganti setiap 6 detik
    return () => clearInterval(timer);
  }, [paused, reviews.length]);

  const variants = {
    enter: { opacity: 0, y: 40 },
    center: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="reviews"
      className="relative bg-white py-28 border-y border-black/10 overflow-hidden"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-black/60 mb-12 max-w-2xl mx-auto"
        >
          Real feedback from teams who turned intuition into evidence.
        </motion.p>

        {/* Review Carousel */}
        <div
          className="relative min-h-[300px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="rounded-3xl border border-black/10 bg-white shadow-lg p-10 md:p-12 mx-auto max-w-3xl"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(reviews[index].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-black text-black" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-black/80 italic leading-relaxed mb-8 text-lg md:text-xl">
                “{reviews[index].quote}”
              </p>

              {/* Name */}
              <div className="text-sm text-black/70">
                <p className="font-medium">{reviews[index].name}</p>
                <p className="text-black/50">{reviews[index].company}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${i === index ? "bg-black w-4" : "bg-black/20"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "CONSTRUCT",
      subtitle: "Design the right panel",
      desc: "We design the right panel with you — defining size and demographics (age, gender, geography, and more) to ensure results reflect your target market. Every panel is built from targeted, engaged consumers who represent your audience profile.",
      image:
        construc,
    },
    {
      id: 2,
      title: "COLLECT",
      subtitle: "Deliver and test samples",
      desc: "Unreleased fragrance samples (including a benchmark) are shipped directly to participants, ensuring consistent and controlled testing conditions.",
      image:
        collect,
    },
    {
      id: 3,
      title: "CAPTURE",
      subtitle: "Gather structured feedback",
      desc: "Participants share their impressions through a seamless digital experience — ratings, preferences, perceptions, and purchase intent — giving you structured, unbiased feedback at scale.",
      image:
        capture,
    },
    {
      id: 4,
      title: "REVEAL",
      subtitle: "Uncover insights with AI",
      desc: "Responses are rigorously cleaned, structured, and quality-checked, then enriched with AI-driven analysis and data science to uncover strengths, weaknesses, and patterns in consumer response.",
      image:
        reveal,
    },
    {
      id: 5,
      title: "REPORT",
      subtitle: "Deliver actionable results",
      desc: "We deliver polished, insight-rich reports that distill results into clear comparisons and actionable guidance — giving your team the evidence it needs to move forward with confidence.",
      image:
        report,
    },
  ];

  const [active, setActive] = useState(1);

  return (
    <section id="how-it-works" className="bg-white py-28 border-y border-black/10">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT: Tabs */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {steps
              .filter((step) => step.id === active)
              .map((step) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* ✅ FIXED IMAGE BLOCK */}
                  <div className="overflow-hidden rounded-3xl border border-black/10 shadow-lg bg-white">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-[26rem] md:h-[28rem] object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-serif mb-2">
                      Step {step.id}: {step.title}
                    </h3>
                    <p className="text-black/70 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* RIGHT: Image + Description */}
        <div className="space-y-3">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">HOW IT WORKS</h2>
          <p className="text-black/60 mb-10">
            A structured, data-driven approach to fragrance evaluation — combining targeted consumer panels, seamless digital testing, and AI-powered insights.
          </p>

          <div className="flex flex-col space-y-2">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActive(step.id)}
                className={`text-left px-4 py-3 rounded-2xl border transition-all duration-300 ${active === step.id
                  ? "border-black bg-black text-white"
                  : "border-black/10 hover:border-black/40"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm opacity-70">
                    {String(step.id).padStart(2, "0")}.
                  </span>
                  <div>
                    <p
                      className={`font-semibold tracking-wide ${active === step.id ? "text-white" : "text-black"
                        }`}
                    >
                      {step.title}
                    </p>
                    <p
                      className={`text-xs ${active === step.id ? "text-white/80" : "text-black/50"
                        }`}
                    >
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function WhyChooseVendii() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // aktif saat mulai & selesai scroll section
  });

  // Parallax transform
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]); // card 1
  const y2 = useTransform(scrollYProgress, [0, 1], [20, -20]); // card 2
  const y3 = useTransform(scrollYProgress, [0, 1], [40, 0]);   // card 3

  const features = [
    {
      title: "Innovative Technology",
      text: "Our vending machines are equipped with the latest technology to ensure a seamless user experience.",
      icon: Cpu,
      y: y1,
    },
    {
      title: "Customizable Solutions",
      text: "We tailor our vending solutions to meet the unique needs of your business and location.",
      icon: Settings,
      y: y2,
    },
    {
      title: "Exceptional Support",
      text: "Our dedicated support team is always ready to assist you with any questions or issues.",
      icon: Headphones,
      y: y3,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      ref={ref}
      id="why-vendii"
      className="bg-white py-28 border-y border-black/10 relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl mb-4"
        >
          Why Choose Vendii
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-black/60 max-w-2xl mx-auto mb-16"
        >
          The smarter way to deliver fragrance experiences — powered by innovation, crafted with precision.
        </motion.p>

        {/* Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true, amount: 0.3 }}
                style={{ y: item.y }} // 🎯 Parallax movement
                className="group rounded-3xl border border-black/10 bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="flex flex-col items-center text-center space-y-5">
                  <div className="h-16 w-16 rounded-full border border-black/10 bg-black/5 flex items-center justify-center group-hover:bg-black transition-all duration-500">
                    <Icon className="h-7 w-7 text-black group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-serif text-xl">{item.title}</h3>
                  <p className="text-black/70 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent_60%)]" />
    </section>
  );
}

function GetInTouch() {
  const [success, setSuccess] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
    }),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    // Auto-hide toast after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative bg-white py-28 border-y border-black/10 overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 relative z-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl text-center mb-4"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-black/60 text-center mb-16 max-w-2xl mx-auto"
        >
          Interested in learning more about how Vendii can transform your fragrance evaluation process?{" "}
          <span className="text-black font-medium">Reach out to us today!</span>
        </motion.p>

        {/* Form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 sm:grid-cols-2"
          onSubmit={handleSubmit}
        >
          {/* Email */}
          <div className="sm:col-span-2">
            <label className="text-sm uppercase tracking-widest text-black/60 block mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-2xl border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
            />
          </div>

          {/* First Name */}
          <div>
            <label className="text-sm uppercase tracking-widest text-black/60 block mb-2">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              required
              className="w-full rounded-2xl border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm uppercase tracking-widest text-black/60 block mb-2">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              required
              className="w-full rounded-2xl border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
            />
          </div>

          {/* Company Name */}
          <div className="sm:col-span-2">
            <label className="text-sm uppercase tracking-widest text-black/60 block mb-2">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Vendii Labs"
              className="w-full rounded-2xl border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="text-sm uppercase tracking-widest text-black/60 block mb-2">
              Message
            </label>
            <textarea
              placeholder="Tell us how we can help..."
              rows="5"
              required
              className="w-full rounded-2xl border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="sm:col-span-2 text-center">
            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center rounded-2xl border border-black bg-black px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Send Message
            </button>
          </div>
        </motion.form>

        {/* Success Toast */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-2xl shadow-lg text-sm tracking-wide"
            >
              ✅ Message sent successfully!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-black/60 uppercase tracking-widest text-sm">
            Data applied.<br />
            <span className="font-serif text-lg text-black">Fragrance amplified.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="relative border-t border-black/10 bg-white py-10 text-center text-sm text-black/60">
      <p>
        © {new Date().getFullYear()} Atelier Fragrances —{" "}
        <button
          onClick={() => setOpen(true)}
          className="underline hover:text-black transition-colors"
        >
          Privacy Policy
        </button>
      </p>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative mx-4 max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-black/10 bg-white p-8 shadow-2xl"
            >
              <h2 className="text-2xl font-serif mb-4">Privacy Policy</h2>
              <p className="text-xs text-black/50 mb-6">Effective Date: 1st January 2025</p>

              <div className="text-left text-black/80 space-y-5 text-sm leading-relaxed">
                <p>
                  This Privacy Policy describes how <strong>Vendii Ltd</strong> ("we," "us," or "our")
                  collects, uses, and shares personal information when you visit or use our website
                  <strong> www.vendii.global</strong> (the "Site").
                </p>

                <h3 className="font-semibold mt-6">1. Information We Collect</h3>
                <p>
                  We collect personal information that you voluntarily provide to us. This may include:
                </p>
                <ul className="list-disc list-inside">
                  <li>Email address: If you choose to provide it in order to be contacted by us.</li>
                  <li>Mobile number: If you choose to provide it when requesting to be contacted.</li>
                </ul>
                <p>
                  We may also automatically collect information such as your IP address, browser type,
                  referring site, and interactions with the Site.
                </p>

                <h3 className="font-semibold mt-6">2. How We Use Your Information</h3>
                <p>
                  We use your information to:
                  <ul className="list-disc list-inside">
                    <li>Provide and improve our Site and services.</li>
                    <li>Communicate with you about updates or inquiries.</li>
                    <li>Analyse trends to enhance user experience.</li>
                    <li>Comply with applicable legal obligations.</li>
                  </ul>
                </p>

                <h3 className="font-semibold mt-6">3. Sharing Your Information</h3>
                <p>
                  We may share your data with trusted service providers (hosting, analytics) or legal
                  authorities where required by law.
                </p>

                <h3 className="font-semibold mt-6">4. Data Security</h3>
                <p>
                  We take reasonable measures — including encryption, access controls, and physical
                  safeguards — to protect your information, though no method is 100% secure.
                </p>

                <h3 className="font-semibold mt-6">5. Your Choices</h3>
                <p>
                  You can request data removal, opt out of communications, or disable cookies in your
                  browser. Contact us at <strong>hello@vendii.com</strong>.
                </p>

                <h3 className="font-semibold mt-6">6. Data Retention</h3>
                <p>
                  We retain data only as long as necessary to fulfil our purposes or as required by law.
                </p>

                <h3 className="font-semibold mt-6">7. Children's Privacy</h3>
                <p>
                  The Site is not intended for children under 16. We do not knowingly collect their data.
                </p>

                <h3 className="font-semibold mt-6">8. Changes to This Policy</h3>
                <p>
                  Updates may be made periodically and posted here. Please review this policy regularly.
                </p>

                <h3 className="font-semibold mt-6">9. Contact Us</h3>
                <p>
                  For questions, please contact us at <strong>hello@vendii.com</strong>.
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-6 text-black/60 hover:text-black text-lg font-medium"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Nav />
      <Hero />
      <Badges />
      <StorySection />
      <AboutUs />
      <ReviewsCarousel />
      <HowItWorks />
      <WhyChooseVendii />
      <GetInTouch />
      <Footer />
    </main>
  );
}
