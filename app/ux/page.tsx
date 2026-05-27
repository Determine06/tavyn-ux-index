import Link from "next/link";
import { UxCard } from "@/components/ux/shared/UxCard";
import { UxPageHeader } from "@/components/ux/shared/UxPageHeader";
import { UxShell } from "@/components/ux/shared/UxShell";
import { uxRegistry } from "@/lib/ux/uxRegistry";

export default function UxIndexPage() {
  return (
    <UxShell>
      <UxPageHeader
        eyebrow="Internal index"
        title="Tavyn UX prototypes"
        description="Versioned, isolated routes for reviewing Figma-driven product UX before production implementation."
      />
      <div className="mt-10 grid gap-4">
        {uxRegistry.map((screen) => (
          <UxCard key={screen.slug}>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-medium text-ink">{screen.name}</p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                  {screen.description}
                </p>
              </div>
              <Link
                href={screen.href}
                className="text-sm font-medium text-ink underline decoration-line underline-offset-4"
              >
                View versions
              </Link>
            </div>
          </UxCard>
        ))}
      </div>
    </UxShell>
  );
}
