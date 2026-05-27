type UxPageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function UxPageHeader({
  eyebrow,
  title,
  description
}: UxPageHeaderProps) {
  return (
    <section className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted">{description}</p>
      ) : null}
    </section>
  );
}
