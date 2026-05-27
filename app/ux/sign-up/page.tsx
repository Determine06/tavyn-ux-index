import { UxPageHeader } from "@/components/ux/shared/UxPageHeader";
import { UxShell } from "@/components/ux/shared/UxShell";
import { UxVersionNav } from "@/components/ux/shared/UxVersionNav";
import { signUpVersions } from "@/lib/ux/uxRegistry";

export default function SignUpIndexPage() {
  return (
    <UxShell>
      <UxPageHeader
        eyebrow="Screen"
        title="Sign-up"
        description="Entry point for founder identity and account creation. New Figma imports should become the next untouched version."
      />
      <div className="mt-10">
        <UxVersionNav versions={signUpVersions} />
      </div>
    </UxShell>
  );
}
