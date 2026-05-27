"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const gradient =
  "linear-gradient(90deg, rgb(255, 154, 0) 0%, rgb(255, 147, 0) 7.1429%, rgb(255, 140, 0) 14.286%, rgb(255, 133, 0) 21.429%, rgb(255, 126, 0) 28.571%, rgb(255, 119, 0) 35.714%, rgb(255, 111, 0) 42.857%, rgb(255, 103, 0) 50%, rgb(255, 95, 0) 57.143%, rgb(255, 86, 0) 64.286%, rgb(255, 76, 0) 71.429%, rgb(255, 65, 0) 78.571%, rgb(255, 52, 0) 85.714%, rgb(255, 35, 0) 92.857%, rgb(255, 0, 0) 100%)";

const spring = {
  type: "spring",
  stiffness: 360,
  damping: 34,
  mass: 0.8
} as const;

export function SignUpV003() {
  const [emailMode, setEmailMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  const hasEmail = email.trim().length > 0;
  const cardHeight = useMemo(() => {
    if (hasEmail) return 676;
    if (emailMode) return 626;
    return 498;
  }, [emailMode, hasEmail]);

  function handleGoogleClick() {
    setGoogleLoading(true);
    window.setTimeout(() => setGoogleLoading(false), 900);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-6 font-['Montserrat',ui-sans-serif,system-ui,sans-serif] text-black">
      <section className="flex w-full max-w-[448px] flex-col items-center">
        <BrandMark />

        <motion.div
          className="mt-[17.75px] w-full rounded-[16px] border border-[#e5e7eb] bg-white shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]"
          animate={{ height: cardHeight }}
          transition={spring}
        >
          <div className="px-8 pt-8">
            <div className="text-center">
              <h1 className="text-[24px] font-semibold leading-8 tracking-normal">
                Create your Tavyn account
              </h1>
              <p className="mx-auto mt-2 w-[382px] max-w-full text-center text-[14px] font-normal leading-5 text-[#4a5565]">
                Start with a controlled preview workflow before Tavyn asks for
                GitHub repo access.
              </p>
            </div>

            <WorkflowPreview />

            <button
              className="mt-6 flex h-[60px] w-full items-center justify-center gap-3 rounded-[14px] text-[16px] font-semibold leading-6 text-white shadow-[0_14px_32px_rgba(255,72,0,0.18)] transition hover:-translate-y-px hover:shadow-[0_18px_40px_rgba(255,72,0,0.22)] disabled:cursor-not-allowed disabled:opacity-80"
              disabled={googleLoading}
              style={{ backgroundImage: gradient }}
              type="button"
              onClick={handleGoogleClick}
            >
              {googleLoading ? <SpinnerIcon /> : <GoogleIcon tone="light" />}
              <span>
                {googleLoading ? "Preparing Google sign-up" : "Continue with Google"}
              </span>
            </button>

            <AnimatePresence initial={false} mode="wait">
              {!emailMode ? (
                <motion.button
                  key="email-switch"
                  className="mt-3 flex h-11 w-full items-center justify-center gap-2 text-[14px] font-medium leading-5 text-[#4a5565] transition hover:text-[#101828]"
                  type="button"
                  onClick={() => setEmailMode(true)}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <span>Use work email instead</span>
                  <ArrowRightIcon />
                </motion.button>
              ) : (
                <motion.div
                  key="email-fields"
                  className="mt-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                >
                  <Divider />

                  <div className="mt-3 flex flex-col gap-3">
                    <input
                      className="h-[50px] w-full rounded-[14px] border border-[#d1d5dc] bg-white px-4 text-[16px] font-normal leading-normal text-[rgba(10,10,10,0.72)] outline-none transition placeholder:text-[rgba(10,10,10,0.5)] focus:border-[#b9c0cc]"
                      placeholder="name@company.com"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />

                    <AnimatePresence initial={false}>
                      {hasEmail ? (
                        <motion.input
                          key="password"
                          className="h-[50px] w-full rounded-[14px] border border-[#d1d5dc] bg-white px-4 text-[16px] font-normal leading-normal text-[rgba(10,10,10,0.72)] outline-none transition placeholder:text-[rgba(10,10,10,0.5)] focus:border-[#b9c0cc]"
                          placeholder="Create a password"
                          type="password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          initial={{ opacity: 0, height: 0, y: -8 }}
                          animate={{ opacity: 1, height: 50, y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -8 }}
                          transition={spring}
                        />
                      ) : null}
                    </AnimatePresence>

                    <motion.button
                      className="flex h-14 w-full items-center justify-center gap-2 rounded-[14px] border border-[#d1d5dc] bg-[#fbfbfa] text-[16px] font-medium leading-6 text-[#101828] shadow-[0_1px_1px_rgba(16,24,40,0.03)] transition hover:border-[#b8c0cc] hover:bg-white"
                      type="button"
                      layout
                      transition={spring}
                    >
                      {hasEmail ? <LockIcon /> : <MailIcon />}
                      <span>
                        {hasEmail ? "Make your account" : "Continue with Email"}
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="mt-6 border-t border-[#e5e7eb] pt-[25px]"
              layout
              transition={spring}
            >
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                  <ShieldIcon />
                </div>
                <p className="w-[350px] text-[12px] font-normal leading-[19.5px] text-[#4a5565]">
                  No GitHub access yet. Tavyn only asks for repo permissions
                  when you&apos;re ready to generate a real publishing preview.
                </p>
              </div>
            </motion.div>

            <p className="mt-[18.5px] text-center text-[12px] font-normal leading-4 text-[#6a7282]">
              By continuing, you agree to our{" "}
              <span className="text-[#364153] underline">Terms</span> and{" "}
              <span className="text-[#364153] underline">Privacy Policy</span>
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function BrandMark() {
  return (
    <div className="flex flex-col items-center">
      <div
        className="flex h-16 w-16 items-center justify-center rounded-[16px]"
        style={{ backgroundImage: gradient.replace("90deg", "135deg") }}
      >
        <span className="text-[24px] font-semibold leading-8 text-white">T</span>
      </div>
      <p className="mt-4 text-center text-[30px] font-semibold leading-9 text-black">
        Tavyn
      </p>
      <p className="mt-2 text-center text-[16px] font-normal leading-6 text-[#4a5565]">
        Blog operations for GitHub
      </p>
    </div>
  );
}

function WorkflowPreview() {
  const steps = ["Website URL", "Snapshot", "Blog preview", "PR"];

  return (
    <div className="mt-5 flex items-center justify-center gap-1.5">
      {steps.map((step, index) => (
        <div className="flex items-center gap-1.5" key={step}>
          <span className="rounded-full border border-[#ebeef3] bg-[#fbfbfa] px-2.5 py-1 text-[11px] font-medium leading-4 text-[#4a5565]">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <span className="h-px w-2 bg-[#e5e7eb]" />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function Divider() {
  return (
    <div className="flex h-8 items-center gap-3 px-4 py-2">
      <div className="h-px w-[156.828px] bg-[#e5e7eb]" />
      <span className="text-[12px] font-normal leading-4 text-[#6a7282]">
        or
      </span>
      <div className="h-px min-w-px flex-1 bg-[#e5e7eb]" />
    </div>
  );
}

function GoogleIcon({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "light" ? "white" : "#344054";

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 20 20"
    >
      <circle cx="10" cy="10" r="7.1" stroke={color} strokeWidth="1.6" />
      <path
        d="M10.2 6.45c1 0 1.75.33 2.33.86l-1.02 1.02c-.31-.3-.75-.51-1.31-.51-1.1 0-2 .92-2 2.06 0 1.15.9 2.07 2 2.07.96 0 1.55-.45 1.78-1.18h-1.92V9.43h3.42c.04.22.07.45.07.73 0 1.99-1.33 3.39-3.35 3.39a3.67 3.67 0 0 1-3.7-3.67 3.67 3.67 0 0 1 3.7-3.43Z"
        fill={color}
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M3.33 8h9.34m-4-4 4 4-4 4"
        stroke="#4a5565"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M3.33 5.83h13.34v8.34H3.33V5.83Z"
        stroke="#344054"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="m3.75 6.25 6.25 5 6.25-5"
        stroke="#344054"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M5 8.75h10v7.08H5V8.75Z"
        stroke="#344054"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M7.5 8.75V6.67a2.5 2.5 0 0 1 5 0v2.08"
        stroke="#344054"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 2.92 15.83 5v4.4c0 3.25-2.36 6.29-5.83 7.68-3.47-1.39-5.83-4.43-5.83-7.68V5L10 2.92Z"
        stroke="#9aa6bb"
        strokeLinejoin="round"
        strokeWidth="1.5"
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
