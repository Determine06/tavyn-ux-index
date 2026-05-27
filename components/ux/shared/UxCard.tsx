import { cn } from "@/lib/utils";

type UxCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function UxCard({ children, className }: UxCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-line/90 bg-white/88 p-5 shadow-soft",
        className
      )}
    >
      {children}
    </div>
  );
}
