import Link from "next/link";
import { UxCard } from "./UxCard";

type Version = {
  label: string;
  href: string;
  description: string;
};

type UxVersionNavProps = {
  versions: Version[];
};

export function UxVersionNav({ versions }: UxVersionNavProps) {
  return (
    <div className="grid gap-3">
      {versions.map((version) => (
        <UxCard key={version.href} className="transition hover:border-ink/20">
          <Link
            href={version.href}
            className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-base font-medium text-ink">{version.label}</p>
              <p className="mt-1 text-sm leading-6 text-muted">
                {version.description}
              </p>
            </div>
            <span className="text-sm font-medium text-ink">Open</span>
          </Link>
        </UxCard>
      ))}
    </div>
  );
}
