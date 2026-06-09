import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="mt-2 font-display text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-secondary"
      >
        Back home
      </Link>
    </div>
  );
}
