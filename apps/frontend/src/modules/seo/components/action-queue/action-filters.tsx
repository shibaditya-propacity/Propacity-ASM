import type {
  ActionsFilters,
  ActionStatus,
  ImpactLevel,
  EffortLevel,
  ActionCategory,
} from "../../types";

interface ActionFiltersProps {
  filters: ActionsFilters;
  onChange: (f: ActionsFilters) => void;
}

function FilterSelect<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T | undefined;
  options: { value: T; label: string }[];
  onChange: (v: T | undefined) => void;
}) {
  return (
    <select
      value={value ?? ""}
      onChange={(e) => onChange((e.target.value as T) || undefined)}
      className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-400 min-w-[130px]"
    >
      <option value="">{label}: All</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function ActionFilters({ filters, onChange }: ActionFiltersProps) {
  const hasFilters = !!(
    filters.status ||
    filters.impact ||
    filters.effort ||
    filters.category
  );

  return (
    <div className="flex flex-wrap items-center gap-2">
      <FilterSelect<ActionStatus>
        label="Status"
        value={filters.status}
        options={[
          { value: "PENDING", label: "Pending" },
          { value: "IN_PROGRESS", label: "In Progress" },
          { value: "COMPLETED", label: "Completed" },
        ]}
        onChange={(v) => onChange({ ...filters, status: v })}
      />
      <FilterSelect<ImpactLevel>
        label="Impact"
        value={filters.impact}
        options={[
          { value: "HIGH", label: "High" },
          { value: "MEDIUM", label: "Medium" },
          { value: "LOW", label: "Low" },
        ]}
        onChange={(v) => onChange({ ...filters, impact: v })}
      />
      <FilterSelect<EffortLevel>
        label="Effort"
        value={filters.effort}
        options={[
          { value: "QUICK", label: "Quick" },
          { value: "MEDIUM", label: "Medium" },
          { value: "HEAVY", label: "Heavy" },
        ]}
        onChange={(v) => onChange({ ...filters, effort: v })}
      />
      <FilterSelect<ActionCategory>
        label="Category"
        value={filters.category}
        options={[
          { value: "CONTENT", label: "Content" },
          { value: "TECHNICAL", label: "Technical" },
          { value: "SCHEMA", label: "Schema" },
          { value: "BACKLINKS", label: "Backlinks" },
        ]}
        onChange={(v) => onChange({ ...filters, category: v })}
      />
      {hasFilters && (
        <button
          onClick={() => onChange({})}
          className="text-xs text-slate-400 hover:text-slate-700 px-2 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
