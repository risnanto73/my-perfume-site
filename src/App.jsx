import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Star, Menu, X, FlaskConical, BarChart3, Lightbulb, Cpu, Settings, Headphones, Instagram, Linkedin,
  Scale,
  ShieldCheck,
} from "lucide-react";
import construc from "./assets/construct.png";
import collect from "./assets/collect.png";
import capture from "./assets/capture.png";
import reveal from "./assets/reveal.png";
import report from "./assets/report.png";
import heroBottle from "./assets/vendii-bg.png";
import logo from "./assets/vendii-logo.png";
import challengeIcon from "./assets/the-challange.svg";
import answerIcon from "./assets/our-answer.svg";
import joKajal from "./assets/jo-kajal.avif"


// Monochrome Perfume Landing Page (Black & White Theme)

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Nav() {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-md"
      name="Navbar"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Vendii Logo"
            className="h-8 w-auto object-contain"
          />
        </a>

        {/* Menu desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#about-us" className="text-sm uppercase tracking-widest hover:opacity-70">
            ABOUT US
          </a>
          <a href="#how-it-works" className="text-sm uppercase tracking-widest hover:opacity-70">
            HOW IT WORKS
          </a>
          <a href="#why-vendii" className="text-sm uppercase tracking-widest hover:opacity-70">
            WHY VENDII
          </a>
          {/* <a href="#contact">
            <button className="rounded-2xl border border-black bg-black px-5 py-2 text-white hover:bg-white hover:text-black">
              GET IN TOUCH
            </button>
          </a> */}
        </div>

        {/* Menu mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-black/10 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <div className="grid gap-4">
              {[
                ["ABOUT US", "#about-us"],
                ["HOW IT WORKS", "#how-it-works"],
                ["WHY VENDII", "#why-vendii"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm uppercase tracking-widest"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
            {/* Button Get In Touch */}
            <div className="mt-4">
              <a href="#contact">
                <button className="w-full rounded-2xl border border-black bg-black px-5 py-2 text-white hover:bg-white hover:text-black">
                  GET IN TOUCH
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Hero() {
  const [offsetTop, setOffsetTop] = useState(0);

  const items = [
    { title: "Bias-free testing", icon: FlaskConical },
    { title: "Impactful data reports", icon: BarChart3 },
    { title: "Smarter fragrance evaluations", icon: Lightbulb },
  ];

  // Ambil tinggi navbar secara dinamis
  useLayoutEffect(() => {
    const nav = document.querySelector("div[name='Navbar']");
    if (nav) setOffsetTop(nav.offsetHeight);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white transition-all duration-300"
      style={{
        paddingTop: `${offsetTop + 32}px`,
        paddingBottom: "2rem", // dikurangi supaya rapat ke bagian bawah
      }}
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.06),transparent_40%)]" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
        {/* Text Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-[15px] uppercase tracking-[0.2em]">
            Uncover tomorrow's winning fragrances, today
          </p>

          <h1 className="font-mono text-5xl leading-[1.1] md:text-6xl">
            Data & AI-driven fragrance evaluation for modern{" "}
            <span className="inline-block rounded-xl bg-black px-3 py-1 text-white">
              Perfumery
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-black/70">
            Test unreleased scents with real consumers. Get unbiased, AI-powered insights to guide development and launches.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact">
              <button className="rounded-2xl border border-black bg-black px-6 py-2 text-white hover:bg-white hover:text-black transition-all duration-300">
                GET IN TOUCH
              </button>
            </a>
          </div>

          <p className="mt-6 text-md italic text-black/60">
            “Vendii’s evaluation platform was elegant, effortless, and exceeded
            all expectations.”{" "}
            <span className="font-medium italic text-black">
              — Kajal Perfumes Paris
            </span>
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="relative flex justify-center"
        >
          <img
            src={heroBottle}
            alt="Vendii Perfume Bottle"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid gap-12 text-center sm:grid-cols-3 pt-12"
      >
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-black/10 bg-white transition-all duration-500 group-hover:bg-black group-hover:scale-105">
                <Icon className="h-8 w-8 text-black transition-colors duration-500 group-hover:text-white" />
              </div>
              <h3 className="font-mono text-xl tracking-wide transition-all duration-300 group-hover:text-black/80">
                {item.title}
              </h3>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

function StorySection() {
  const fade = {
    hidden: { opacity: 0, y: 60 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
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

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Title */}
        <motion.h2
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="font-mono text-4xl md:text-5xl mb-16"
        >
          FROM <span className="italic font-mono text-black/80">GUESSWORK</span> TO{" "}
          <span className="font-semibold font-mono">CLARITY</span>
        </motion.h2>

        {/* Two Columns */}
        <div className="grid gap-20 md:grid-cols-2">
          {/* Left */}
          <motion.div
            variants={fade}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <img
              src={challengeIcon}
              alt="The Challenge"
              className="h-50 w-50 mb-8 object-contain transition-transform duration-500 hover:scale-105"
            />
            <p className="text-black/70 leading-relaxed max-w-md">
              Fragrance houses create dozens of trial blends, but decisions often rely on instinct
              or brand perception. Without structured consumer insight, it’s hard to know which
              creations will truly resonate.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={fade}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <img
              src={answerIcon}
              alt="Our Answer"
              className="h-52 w-52 mb-8 object-contain transition-transform duration-500 hover:scale-105"
            />
            <p className="text-black/70 leading-relaxed max-w-md">
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
  return (
    <section
      id="about-us"
      className="relative bg-white border-y border-black/10 py-28"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-4xl md:text-5xl mb-8"
        >
          ABOUT US
        </motion.h2>

        {/* Single Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-black/70 leading-relaxed text-lg md:text-xl max-w-3xl mx-auto"
        >
          Vendii is a fragrance technology company bridging the gap between
          perfumery creativity and consumer insight. We combine data science
          and AI with immersive sampling to help fragrance houses and brands
          bring their best creations to market.
        </motion.p>
      </div>
    </section>
  );
}

function ReviewsShowcase() {
  const reviews = [
    {
      quote:
        "We enlisted Vendii for our fragrance evaluation, and it was exceptional from start to finish. The bespoke web-app was elegant in design and effortless to use, it brought a real sense of refinement and ease to the entire process. The Vendii team were a pleasure to work with — thoughtful, accommodating, and meticulous in ensuring every detail was aligned with our needs. The final data report was insightful, beautifully presented, and beyond expectations — a first-class experience.",
      name: "Jo Khalaf",
      title: "",
      company: "Kajal Perfumes Paris",
      image: joKajal, // pastikan ini benar-benar terimport
    },
  ];

  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 7000);
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
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-4xl md:text-5xl text-center mb-4"
        >
          WHAT OUR CLIENTS SAY
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-black/60 mb-12 text-center max-w-2xl mx-auto"
        >
          Real feedback from teams who turned intuition into evidence.
        </motion.p>

        {/* Review display */}
        <div
          className="relative rounded-3xl overflow-hidden border border-black/10 bg-white shadow-sm transition-all duration-500"
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
              className="grid md:grid-cols-2"
            >
              {/* LEFT: text */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <p className="text-sm md:text-sm-lg lg:text-sm font-normal text-black leading-relaxed mb-8">
                  “{reviews[index].quote}”
                </p>

                <div className="mt-6 border-t border-black/10 pt-4">
                  <p className="font-semibold text-base md:text-lg text-black">
                    {reviews[index].name}
                  </p>
                  {reviews[index].title ? (
                    <p className="text-black/60 text-sm">{reviews[index].title}</p>
                  ) : null}
                  <p className="text-black/60 text-sm">{reviews[index].company}</p>
                </div>
              </div>

              {/* RIGHT: image (logo/foto) */}
              <div className="relative flex items-center justify-center bg-white p-8 md:p-10">
                <img
                  src={reviews[index].image}
                  alt={reviews[index].name}
                  // object-contain agar tidak terpotong, max size responsif
                  className="max-h-64 md:max-h-80 lg:max-h-96 w-auto object-contain"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${i === index ? "bg-black w-4" : "bg-black/20"}`}
            />
          ))}
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
      {/* */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 px-4"
      >
        <h2 className="font-mono text-2xl md:text-2xl lg:text-4xl mb-4 tracking-wide uppercase">
          HOW IT WORKS
        </h2>

        <p className="text-black/70 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          A structured, data-driven approach to fragrance evaluation — combining targeted consumer panels,
          seamless digital testing, and AI-powered insights.
        </p>
      </motion.div>
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
                    <h3 className="text-xl font-mono mb-2">
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
                      className={`font-semibold font-mono tracking-wide ${active === step.id ? "text-white" : "text-black"
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
    offset: ["start end", "end start"],
  });

  // Parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const y4 = useTransform(scrollYProgress, [0, 1], [60, 10]);
  const y5 = useTransform(scrollYProgress, [0, 1], [80, 20]);

  const features = [
    {
      title: "Bias-free testing",
      text: "Cut through brand perception and gut feel with structured, unbiased consumer feedback.",
      icon: FlaskConical,
      y: y1,
    },
    {
      title: "Evidence-based decisions",
      text: "Know which creations resonate and why, with confidence grounded in real data.",
      icon: BarChart3,
      y: y2,
    },
    {
      title: "Impactful reports",
      text: "Clear, compelling insights designed to guide R&D teams and strengthen client presentations.",
      icon: Lightbulb,
      y: y3,
    },
    {
      title: "Smarter evaluations",
      text: "Refine, compare, and select fragrances more effectively.",
      icon: Scale,
      y: y4,
    },
    {
      title: "Standards & ethics",
      text: "We prioritise data integrity, participant privacy, and unbiased reporting. Our methods align with industry best practice (ESOMAR principles; ISO 20252 research quality mindset).",
      icon: ShieldCheck,
      y: y5,
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
          className="font-mono text-4xl md:text-5xl mb-4"
        >
          Why Vendii
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-black/60 max-w-2xl mx-auto mb-16"
        >
          The smarter way to deliver fragrance experiences — powered by data, guided by integrity.
        </motion.p>

        {/* Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
                style={{ y: item.y }}
                className="group rounded-3xl border border-black/10 bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="flex flex-col items-center text-center space-y-5">
                  <div className="h-16 w-16 rounded-full border border-black/10 bg-black/5 flex items-center justify-center group-hover:bg-black transition-all duration-500">
                    <Icon className="h-7 w-7 text-black group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-mono text-xl">{item.title}</h3>
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
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative bg-white py-28 border-y border-black/10 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        {/* ===== LEFT TEXT SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="font-mono text-5xl md:text-6xl leading-tight">
            Data <span className="italic font-mono">applied</span>.<br />
            <span className="text-black/70 font-mono">Fragrance amplified.</span>
          </h2>
        </motion.div>

        {/* ===== RIGHT FORM SECTION ===== */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
          className="grid gap-6"
        >
          {/* Email */}
          <div>
            <label className="text-sm uppercase tracking-widest text-black/60 block mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder=" “ “"
              required
              className="w-full rounded-2xl border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
            />
          </div>

          {/* Name */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm uppercase tracking-widest text-black/60 block mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder=" “ “"
                required
                className="w-full rounded-2xl border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
              />
            </div>
            <div>
              <label className="text-sm uppercase tracking-widest text-black/60 block mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder=" “ “"
                required
                className="w-full rounded-2xl border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="text-sm uppercase tracking-widest text-black/60 block mb-2">
              Company Name
            </label>
            <input
              type="text"
              placeholder=" “ “"
              className="w-full rounded-2xl border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm uppercase tracking-widest text-black/60 block mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder=" “ “"
              required
              className="w-full rounded-2xl border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-right">
            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center rounded-2xl border border-black bg-black px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Submit
            </button>
          </div>
        </motion.form>
      </div>

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
    </section>
  );
}

function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="relative border-t border-black/10 bg-white py-10 text-center text-sm text-black/60">
      {/* Social Media */}
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://www.instagram.com/vendii.global/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram page"
          className="p-2 border border-black/10 rounded-full hover:border-black transition-all hover:scale-105"
        >
          <Instagram className="h-5 w-5 text-black hover:text-black/80" />
          <span className="sr-only">Instagram</span>
        </a>
        <a
          href="https://www.linkedin.com/company/vendii-ltd/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our LinkedIn page"
          className="p-2 border border-black/10 rounded-full hover:border-black transition-all hover:scale-105"
        >
          <Linkedin className="h-5 w-5 text-black hover:text-black/80" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>

      {/* Copyright & Privacy */}
      <p>
        © {new Date().getFullYear()} Vendii Global —{" "}
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
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative mx-4 max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-black/10 bg-white p-8 shadow-2xl"
            >
              <h2 className="text-2xl font-serif mb-4">Privacy Policy</h2>
              <p className="text-xs text-black/50 mb-6">
                Effective Date: 1st January 2025
              </p>

              <div className="text-left text-black/80 space-y-5 text-sm leading-relaxed">
                <p>
                  This Privacy Policy describes how <strong>Vendii Ltd</strong>{" "}
                  ("we," "us," or "our") collects, uses, and shares personal
                  information when you visit or use our website{" "}
                  <strong>www.vendii.global</strong> (the "Site").
                </p>

                <h3 className="font-semibold mt-6">1. Information We Collect</h3>
                <p>
                  We collect personal information that you voluntarily provide,
                  including your email or mobile number when contacting us.
                </p>

                <h3 className="font-semibold mt-6">2. How We Use Your Information</h3>
                <ul className="list-disc list-inside">
                  <li>To operate and improve our services.</li>
                  <li>To respond to inquiries and communicate with you.</li>
                  <li>To analyze trends and enhance user experience.</li>
                </ul>

                <h3 className="font-semibold mt-6">3. Data Security</h3>
                <p>
                  We use encryption, access controls, and secure environments to
                  protect your information, but no system is entirely secure.
                </p>

                <h3 className="font-semibold mt-6">4. Contact Us</h3>
                <p>
                  If you have any questions, please contact us at{" "}
                  <strong>hello@vendii.global</strong>.
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
      <StorySection />
      <AboutUs />
      <ReviewsShowcase />
      <HowItWorks />
      <WhyChooseVendii />
      <GetInTouch />
      <Footer />
    </main>
  );
}
