import { Building2 } from "lucide-react";
import type { Client } from "../../types";

interface ClientCardProps {
  client: Client;
  onSelect: (client: Client) => void;
}

export function ClientCard({ client, onSelect }: ClientCardProps) {
  const initials = client.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <button
      onClick={() => onSelect(client)}
      className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 text-left hover:border-brand-400 hover:shadow-md transition-all group"
    >
      {/* Avatar */}
      <div className="flex items-center gap-3 mb-4">
        {client.avatarUrl ? (
          <img
            src={client.avatarUrl}
            alt={client.name}
            className="w-12 h-12 rounded-xl object-cover border border-slate-100"
          />
        ) : (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
            {initials || <Building2 className="w-5 h-5" />}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-900 truncate group-hover:text-brand-600 transition-colors">
            {client.name}
          </p>
          {client.industry && (
            <p className="text-[11px] text-slate-400 mt-0.5 truncate">
              {client.industry}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[11px] text-slate-400">
          Added {new Date(client.createdAt).toLocaleDateString()}
        </span>
        <span className="text-[11px] font-semibold text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity">
          View integrations →
        </span>
      </div>
    </button>
  );
}
