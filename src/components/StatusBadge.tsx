import { statusMeta, type Status } from '@/lib/venues';

export default function StatusBadge({ status, className = '' }: { status: Status; className?: string }) {
  const meta = statusMeta[status];
  return (
    <span
      className={`inline-flex items-center gap-2 font-body text-xs font-semibold px-3 py-1.5 rounded-full ${meta.className} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {meta.label}
    </span>
  );
}
