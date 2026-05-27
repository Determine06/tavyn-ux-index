import { cn } from "@/lib/utils";

type UxButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function UxButton({
  className,
  variant = "primary",
  ...props
}: UxButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-ember/30",
        variant === "primary" &&
          "bg-ink text-white shadow-sm hover:bg-black/85",
        variant === "secondary" &&
          "border border-line bg-white text-ink hover:border-ink/20",
        variant === "ghost" && "text-muted hover:bg-black/[0.03] hover:text-ink",
        className
      )}
      {...props}
    />
  );
}
