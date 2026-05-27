import Link from "next/link";
import { TavynLogo } from "@/components/ux/shared/TavynLogo";
import { UxShell } from "@/components/ux/shared/UxShell";

export default function HomePage() {
  return (
    <UxShell>
      <div className="mx-auto flex min-h-[68vh] max-w-3xl flex-col items-center justify-center text-center">
        <TavynLogo />
        <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-muted">
          UX prototyping lab
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Premium GitHub-native blog operations for founder-led SaaS.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted">
          Explore isolated Tavyn onboarding and publishing prototypes before
          promoting validated patterns into the production app.
        </p>
        <div className="mt-8">
          <Link
            href="/ux"
            className="inline-flex h-10 items-center justify-center rounded-md bg-ink px-4 text-sm font-medium text-white shadow-sm transition hover:bg-black/85 focus:outline-none focus:ring-2 focus:ring-ember/30"
          >
            Open UX index
          </Link>
        </div>
      </div>
    </UxShell>
  );
}
