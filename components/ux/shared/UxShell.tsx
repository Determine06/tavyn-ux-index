import Link from "next/link";
import { TavynLogo } from "./TavynLogo";

type UxShellProps = {
  children: React.ReactNode;
};

export function UxShell({ children }: UxShellProps) {
  return (
    <main className="min-h-screen px-5 py-6 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between border-b border-line/80 pb-5">
          <Link href="/" aria-label="Tavyn UX home">
            <TavynLogo />
          </Link>
          <nav className="flex items-center gap-4 text-sm text-muted">
            <Link className="hover:text-ink" href="/ux">
              UX index
            </Link>
            <Link className="hover:text-ink" href="/ux/sign-up">
              Sign-up
            </Link>
          </nav>
        </header>
        <div className="py-10 sm:py-14">{children}</div>
      </div>
    </main>
  );
}
