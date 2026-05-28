"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const gradient =
  "linear-gradient(135deg, rgb(255, 154, 0) 0%, rgb(255, 103, 0) 50%, rgb(255, 0, 0) 100%)";

const steps = [
  "Create your account",
  "Learn your company",
  "Validate your GitHub snapshot",
  "Preview your first blog",
  "Open a pull request"
];

export function SignUpV005() {
  const [loading, setLoading] = useState(false);

  function handleGoogleClick() {
    setLoading(true);
    window.setTimeout(() => setLoading(false), 900);
  }

  return (
    <main className="min-h-screen bg-[#fbfaf8] font-['Montserrat',ui-sans-serif,system-ui,sans-serif] text-[#101014]">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.section
          className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-10 lg:py-14"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full max-w-[420px]">
            <BrandMark />

            <div className="mt-20 sm:mt-24 lg:mt-28">
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#f05a22]">
                Founder-controlled publishing
              </p>
              <h1 className="mt-4 text-[40px] font-semibold leading-[48px] tracking-[-0.02em] text-[#0f1014] sm:text-[48px] sm:leading-[56px]">
                Create your Tavyn account
              </h1>
              <p className="mt-4 max-w-[340px] text-[15px] font-normal leading-6 text-[#5d6677]">
                Start with a preview before connecting GitHub.
              </p>
            </div>

            <div className="mt-10 rounded-[18px] border border-[#e8e2dc] bg-white p-2 shadow-[0_1px_0_rgba(255,255,255,0.95)_inset,0_18px_48px_rgba(17,24,39,0.08)]">
              <button
                className="flex h-14 w-full items-center justify-center gap-3 rounded-[14px] bg-[#111111] text-[15px] font-semibold leading-6 text-white shadow-[0_12px_28px_rgba(17,17,17,0.18)] transition duration-200 hover:-translate-y-px hover:bg-black active:translate-y-0 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-80"
                disabled={loading}
                type="button"
                onClick={handleGoogleClick}
              >
                {loading ? <SpinnerIcon /> : <GoogleIcon />}
                <span>{loading ? "Connecting..." : "Continue with Google"}</span>
              </button>
            </div>

            <p className="mt-5 text-[12px] leading-5 text-[#6b7280]">
              No GitHub access yet. Tavyn only asks for repo permissions when
              you&apos;re ready to generate a real publishing preview.
            </p>

            <p className="mt-8 text-[12px] leading-5 text-[#737b8c]">
              By continuing, you agree to our{" "}
              <span className="font-medium text-[#3f4654] underline underline-offset-2">
                Terms
              </span>{" "}
              and{" "}
              <span className="font-medium text-[#3f4654] underline underline-offset-2">
                Privacy Policy
              </span>
              .
            </p>

            <p className="mt-4 text-[13px] leading-5 text-[#5d6677]">
              Already have an account?{" "}
              <button
                className="font-semibold text-[#15171c] underline-offset-4 transition hover:underline"
                type="button"
              >
                Log in
              </button>
            </p>
          </div>
        </motion.section>

        <motion.aside
          className="relative m-4 overflow-hidden rounded-[28px] border border-white/10 bg-[#101114] px-5 py-8 text-white shadow-[0_28px_80px_rgba(17,24,39,0.24)] sm:m-6 sm:px-8 lg:m-8 lg:flex lg:items-center lg:px-12"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.12, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute -right-28 -top-28 h-72 w-72 rounded-full opacity-35 blur-3xl"
            style={{ backgroundImage: gradient }}
          />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#ff4b1f]/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-[12px] font-medium text-white/78">
              <span
                className="h-5 w-5 rounded-md"
                style={{ backgroundImage: gradient }}
              />
              GitHub-native setup
            </div>

            <div className="mt-10 lg:mt-16">
              <h2 className="text-[38px] font-semibold leading-[46px] tracking-[-0.02em] sm:text-[48px] sm:leading-[56px]">
                Get started with Tavyn
              </h2>
              <p className="mt-4 max-w-[450px] text-[15px] leading-7 text-white/66">
                Complete the setup once. Tavyn handles the repetitive blog work
                after that.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-10">
              {steps.map((step, index) => (
                <motion.div
                  className={
                    index === 0
                      ? "flex items-center gap-4 rounded-[16px] border border-white/16 bg-white/[0.12] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
                      : "flex items-center gap-4 rounded-[16px] border border-white/[0.08] bg-white/[0.045] p-4"
                  }
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.06,
                    duration: 0.34,
                    ease: "easeOut"
                  }}
                >
                  <span
                    className={
                      index === 0
                        ? "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(255,72,0,0.25)]"
                        : "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[13px] font-semibold text-white/58"
                    }
                    style={index === 0 ? { backgroundImage: gradient } : undefined}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold leading-5 text-white">
                      {step}
                    </p>
                    <p className="mt-1 text-[12px] leading-5 text-white/50">
                      {index === 0
                        ? "Current step"
                        : "Unlocked after account creation"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </main>
  );
}

function BrandMark() {
  return (
    <div className="inline-flex items-center gap-3">
      <div
        className="flex h-9 w-9 items-center justify-center rounded-[10px]"
        style={{ backgroundImage: gradient }}
      >
        <span className="text-[15px] font-semibold leading-5 text-white">T</span>
      </div>
      <span className="text-[20px] font-semibold leading-6 text-[#111111]">
        Tavyn
      </span>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 20 20"
    >
      <circle cx="10" cy="10" r="7.1" stroke="white" strokeWidth="1.6" />
      <path
        d="M10.2 6.45c1 0 1.75.33 2.33.86l-1.02 1.02c-.31-.3-.75-.51-1.31-.51-1.1 0-2 .92-2 2.06 0 1.15.9 2.07 2 2.07.96 0 1.55-.45 1.78-1.18h-1.92V9.43h3.42c.04.22.07.45.07.73 0 1.99-1.33 3.39-3.35 3.39a3.67 3.67 0 0 1-3.7-3.67 3.67 3.67 0 0 1 3.7-3.43Z"
        fill="white"
      />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 animate-spin"
      fill="none"
      viewBox="0 0 20 20"
    >
      <circle
        className="opacity-25"
        cx="10"
        cy="10"
        r="7"
        stroke="white"
        strokeWidth="2"
      />
      <path
        className="opacity-90"
        d="M17 10a7 7 0 0 0-7-7"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}
