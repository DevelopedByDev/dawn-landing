"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const features = [
  {
    title: "voice to text",
    description: "speak your thoughts instantly, anywhere on your computer",
  },
  {
    title: "overlay notes",
    description: "capture ideas without leaving your current context",
  },
  {
    title: "ai chat",
    description: "consult multiple models in parallel, right where you work",
  },
  {
    title: "overlay browser",
    description: "search and browse without switching windows",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">
              dawn
            </h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            <p className="text-xl md:text-2xl text-[#a1a1aa] font-light mb-4">
              personal computing, reimagined
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeIn}
          >
            <p className="text-base text-[#71717a] max-w-md mx-auto mb-12">
              an os-level overlay that moves execution to where intent first appears.
              no more switching. no more searching. just flow.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#features"
              className="px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-[#e4e4e7] transition-colors"
            >
              learn more
            </a>
            <a
              href="#download"
              className="px-8 py-3 border border-[#27272a] rounded-full text-sm font-medium hover:bg-[#18181b] transition-colors"
            >
              download for mac
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-12"
        >
          <div className="w-5 h-8 border border-[#27272a] rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-[#71717a] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <p className="text-sm text-[#71717a] uppercase tracking-widest mb-4">
              the problem
            </p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              context switching is a silent killer
            </h2>
            <p className="text-[#a1a1aa] max-w-lg mx-auto">
              87 task switches per day. 60% of time spent coordinating, not creating.
              every switch interrupts flow and degrades attention.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-20"
          >
            <p className="text-sm text-[#71717a] uppercase tracking-widest mb-4">
              the solution
            </p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              overlay-first computing
            </h2>
            <p className="text-[#a1a1aa] max-w-lg mx-auto">
              dawn moves execution into overlays, where intent first appears.
              hotkey-activated. always available. never intrusive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 border border-[#27272a] rounded-2xl hover:border-[#3f3f46] transition-colors"
              >
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-[#71717a] text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 px-6 border-t border-[#27272a]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-[#71717a] uppercase tracking-widest mb-8">
              vision
            </p>
            <blockquote className="text-2xl md:text-3xl font-light text-[#a1a1aa] leading-relaxed mb-8">
              &ldquo;humans are forced to be{" "}
              <span className="text-white">operators</span> of software
              <br />
              when they should be{" "}
              <span className="text-white">orchestrators</span> of software&rdquo;
            </blockquote>
            <p className="text-[#71717a]">
              you decide what. dawn handles how.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-32 px-6 border-t border-[#27272a]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              the computer, at the speed of human thought
            </h2>
            <p className="text-[#71717a] mb-10">
              available now for macOS. windows coming soon.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-sm font-medium hover:bg-[#e4e4e7] transition-colors"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              download for mac
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#27272a]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-[#71717a]">
            © 2026 dawn. all rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="mailto:hello@getdawn.io"
              className="text-sm text-[#71717a] hover:text-white transition-colors"
            >
              contact
            </a>
            <a
              href="#"
              className="text-sm text-[#71717a] hover:text-white transition-colors"
            >
              twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
