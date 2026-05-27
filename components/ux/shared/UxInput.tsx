import { cn } from "@/lib/utils";

type UxInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function UxInput({ className, ...props }: UxInputProps) {
  return (
    <input
      className={cn(
        "h-10 w-full rounded-md border border-line bg-white px-3 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-ink/30 focus:ring-2 focus:ring-ember/15",
        className
      )}
      {...props}
    />
  );
}
