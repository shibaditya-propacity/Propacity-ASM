import type { ReactNode } from "react";

const TABS = [
  { label: "This Client", key: "this-client" },
  { label: "All Clients", key: "all-clients" },
  { label: "Platform Services", key: "platform" },
] as const;

interface IntegrationsLayoutProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (key: string) => void;
}

export function IntegrationsLayout({
  children,
  activeTab,
  onTabChange,
}: IntegrationsLayoutProps) {
  return (
    <div className="flex flex-col flex-1 overflow-auto bg-[#F4F6FB]">
      {/* Tab bar */}
      <div className="border-b border-slate-200 bg-white px-6">
        <div className="flex gap-0">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`px-5 py-3.5 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === tab.key
                  ? "border-brand-500 text-brand-600"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
