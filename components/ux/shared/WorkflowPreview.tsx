import { workflowSteps } from "@/lib/ux/mockData";

export function WorkflowPreview() {
  return (
    <div className="rounded-lg border border-line bg-paper p-4">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <p className="text-sm font-medium text-ink">Publishing workflow</p>
        <span className="rounded-full border border-line bg-white px-2 py-1 text-xs text-muted">
          Preview
        </span>
      </div>
      <div className="mt-4 grid gap-3">
        {workflowSteps.map((step) => (
          <div key={step.label} className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-ember/80" />
            <div>
              <p className="text-sm font-medium text-ink">{step.label}</p>
              <p className="mt-1 text-xs leading-5 text-muted">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
