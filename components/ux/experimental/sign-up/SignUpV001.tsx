import { MotionWrapper } from "@/components/ux/shared/MotionWrapper";
import { TavynLogo } from "@/components/ux/shared/TavynLogo";
import { UxButton } from "@/components/ux/shared/UxButton";
import { UxCard } from "@/components/ux/shared/UxCard";
import { UxInput } from "@/components/ux/shared/UxInput";
import { UxShell } from "@/components/ux/shared/UxShell";
import { WorkflowPreview } from "@/components/ux/shared/WorkflowPreview";

export function SignUpV001() {
  return (
    <UxShell>
      <MotionWrapper className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
        <section className="max-w-xl">
          <TavynLogo />
          <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-ember">
            Version v001
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Start with the workflow founders already trust.
          </h1>
          <p className="mt-5 text-base leading-7 text-muted">
            Tavyn drafts, previews, revises, and opens GitHub pull requests so
            you stay in control of every blog operation.
          </p>
          <div className="mt-8">
            <WorkflowPreview />
          </div>
        </section>

        <UxCard className="p-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              Create your Tavyn workspace
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Use a work account. GitHub access comes later, after Tavyn shows
              what it found.
            </p>
          </div>

          <div className="mt-6 grid gap-3">
            <UxButton className="w-full" type="button">
              Continue with Google
            </UxButton>
            <UxInput placeholder="founder@company.com" type="email" />
            <UxButton className="w-full" type="button" variant="secondary">
              Continue with email
            </UxButton>
          </div>

          <p className="mt-5 text-xs leading-5 text-muted">
            No GitHub permissions are requested during sign-up. You choose the
            repository and review scopes before Tavyn can prepare a pull request.
          </p>
          <p className="mt-4 text-xs leading-5 text-muted/80">
            By continuing, you agree to Tavyn&apos;s Terms and Privacy Policy.
          </p>
        </UxCard>
      </MotionWrapper>
    </UxShell>
  );
}
