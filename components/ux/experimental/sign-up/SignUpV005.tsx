"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const gradient =
  "linear-gradient(135deg, rgb(255, 154, 0) 0%, rgb(255, 103, 0) 50%, rgb(255, 0, 0) 100%)";

const steps = [
  "Create your account",
  "Learn your company",
  "Validate your GitHub snapshot",
  "Preview your first blog"
];

export function SignUpV005() {
  const [loading, setLoading] = useState(false);

  function handleGoogleClick() {
    setLoading(true);
    window.setTimeout(() => setLoading(false), 900);
  }

  return (
    <main className="min-h-screen bg-white font-['Montserrat',ui-sans-serif,system-ui,sans-serif] text-[#101014]">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[0.98fr_1.02fr]">
        <motion.section
          className="flex min-h-screen items-center justify-center bg-white px-6 py-8 sm:px-10 lg:py-8"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full max-w-[460px]">
            <div className="mb-10">
              <BrandMark />
            </div>

            <div className="text-center">
              <h1 className="text-[30px] font-semibold leading-9 tracking-[-0.02em] text-[#0f1014]">
                Sign Up Account
              </h1>
              <p className="mx-auto mt-3 max-w-[420px] text-[14px] font-normal leading-6 text-[#5d6677]">
                Create your Tavyn account to start a controlled blog publishing
                workflow.
              </p>
            </div>

            <div className="mt-8">
              <button
                className="flex h-[54px] w-full items-center justify-center gap-3 rounded-[14px] border border-[#2b2b2b] bg-white text-[16px] font-semibold leading-6 text-[#171717] transition duration-200 hover:-translate-y-px hover:border-[#f05a22] hover:shadow-[0_16px_36px_rgba(240,90,34,0.1)] active:translate-y-0 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-80"
                disabled={loading}
                type="button"
                onClick={handleGoogleClick}
              >
                {loading ? <SpinnerIcon /> : <GoogleIcon />}
                <span>{loading ? "Connecting..." : "Continue with Google"}</span>
              </button>
            </div>

            <div className="my-6 flex items-center gap-5">
              <div className="h-px flex-1 bg-[#d8d8d8]" />
              <span className="text-[13px] font-medium text-[#6b7280]">Or</span>
              <div className="h-px flex-1 bg-[#d8d8d8]" />
            </div>

            <div className="grid gap-4">
              <LabelledInput label="Company website" placeholder="eg. tavyn.ai" />
              <LabelledInput label="Work email" placeholder="eg. founder@company.com" />
            </div>

            <button
              className="mt-6 flex h-[54px] w-full items-center justify-center rounded-[14px] bg-[#111111] text-[15px] font-semibold text-white shadow-[0_14px_32px_rgba(17,17,17,0.14)] transition hover:bg-black active:scale-[0.99]"
              type="button"
            >
              Sign Up
            </button>

            <p className="mt-5 text-center text-[12px] leading-5 text-[#6b7280]">
              No GitHub access yet. Tavyn only asks for repo permissions when
              you&apos;re ready to generate a real publishing preview.
            </p>

            <p className="mt-5 text-center text-[12px] leading-5 text-[#737b8c]">
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

            <p className="mt-5 text-center text-[13px] leading-5 text-[#5d6677]">
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
          className="relative min-h-[560px] overflow-hidden bg-[#ff7a00] px-6 py-8 text-white sm:px-10 lg:flex lg:min-h-screen lg:items-center lg:px-12"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.12, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.55), transparent 22rem), radial-gradient(circle at 86% 16%, rgba(255,46,0,0.75), transparent 24rem), linear-gradient(180deg, #ff9a00 0%, #ff5d00 45%, #190b12 100%)"
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,0,0,0.72),transparent_38%),linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.42))]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:6px_6px]" />

          <div className="relative mx-auto flex w-full max-w-[460px] flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 text-[15px] font-semibold text-white">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[12px] text-[#ff5d00]">
                T
              </span>
              Tavyn
            </div>

            <div className="mt-8 sm:mt-10">
              <h2 className="text-[34px] font-semibold leading-[40px] tracking-[-0.02em] sm:text-[42px] sm:leading-[48px]">
                Get started with Tavyn
              </h2>
              <p className="mx-auto mt-4 max-w-[380px] text-[14px] leading-6 text-white/82">
                Complete these steps to turn your site and GitHub repo into a
                safe publishing preview.
              </p>
            </div>

            <div className="mt-8 grid w-full max-w-[380px] gap-3 sm:mt-9">
              {steps.map((step, index) => (
                <motion.div
                  className={
                    index === 0
                        ? "flex items-center gap-4 rounded-[14px] bg-white px-5 py-4 text-left text-[#101014] shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
                      : "flex items-center gap-4 rounded-[14px] bg-black/26 px-5 py-4 text-left text-white backdrop-blur-md"
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
                        ? "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-[12px] font-semibold text-white"
                        : "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/16 text-[12px] font-semibold text-white/82"
                    }
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p
                      className={
                        index === 0
                          ? "text-[14px] font-semibold leading-5 text-[#101014]"
                          : "text-[14px] font-semibold leading-5 text-white"
                      }
                    >
                      {step}
                    </p>
                    <p
                      className={
                        index === 0
                          ? "mt-0.5 text-[12px] leading-5 text-[#5d6677]"
                          : "mt-0.5 text-[12px] leading-5 text-white/62"
                      }
                    >
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

function LabelledInput({
  label,
  placeholder
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="text-[14px] font-semibold leading-5 text-[#171717]">
        {label}
      </span>
      <input
        className="mt-2 h-[54px] w-full rounded-[14px] border border-[#e5e2de] bg-[#f5f3f0] px-4 text-[15px] text-[#171717] outline-none transition placeholder:text-[#7c7c7c] focus:border-[#f05a22] focus:bg-white"
        placeholder={placeholder}
        type="text"
      />
    </label>
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
      <circle cx="10" cy="10" r="7.1" stroke="#344054" strokeWidth="1.6" />
      <path
        d="M10.2 6.45c1 0 1.75.33 2.33.86l-1.02 1.02c-.31-.3-.75-.51-1.31-.51-1.1 0-2 .92-2 2.06 0 1.15.9 2.07 2 2.07.96 0 1.55-.45 1.78-1.18h-1.92V9.43h3.42c.04.22.07.45.07.73 0 1.99-1.33 3.39-3.35 3.39a3.67 3.67 0 0 1-3.7-3.67 3.67 3.67 0 0 1 3.7-3.43Z"
        fill="#344054"
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
