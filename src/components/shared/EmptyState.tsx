import { Inbox, type LucideIcon } from "lucide-react";

type EmptyStateProps = {
  title?: string;
  message: string;
  icon?: LucideIcon;
};

export function EmptyState({ title, message, icon: Icon = Inbox }: EmptyStateProps) {
  return (
    <div className="w-full flex flex-col items-center text-center dark:bg-primary-bg bg-zinc-100 border border-dashed dark:border-zinc-700 border-zinc-200 rounded-md px-6 py-8">
      <div className="mb-6 text-4xl text-zinc-500">
        <Icon className="h-12 w-12" />
      </div>
      {title && <h3 className="font-bold tracking-tight text-xl mb-3">{title}</h3>}
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 ml-4 max-w-sm">{message}</p>
    </div>
  );
}
