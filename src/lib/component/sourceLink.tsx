"use client";

import { ExternalLink } from "lucide-react";
import { sources, type SourceKey } from "../translation";

/**
 * Renders one or more small clickable "source" chips that open the backing
 * evidence for a claim in a new tab. Drop this right under (or beside) any
 * heading, stat, or paragraph that needs a citation.
 *
 * Usage:
 *   <SourceLink keys={["traffic", "transport"]} />
 *   <SourceLink keys={sourceRefs.summary_problem} tone="dark" />
 */
export function SourceLink({
  keys,
  className = "",
  tone = "light",
}: {
  keys?: SourceKey[];
  className?: string;
  tone?: "light" | "dark";
}) {
  if (!keys || keys.length === 0) return null;

  const chipClasses =
    tone === "dark"
      ? "text-teal-300 bg-white/10 hover:bg-white/20 border-white/20"
      : "text-teal-700 bg-teal-50 hover:bg-teal-100 border-teal-200";

  return (
    <span className={`inline-flex flex-wrap items-center gap-1.5 ${className}`}>
      {keys.map((key) => {
        const source = sources[key];
        if (!source) return null;
        return (
          <a
            key={key}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Source: ${source.name}`}
            className={`inline-flex items-center gap-1 text-[10px] font-medium leading-none border rounded-full px-2 py-1 no-underline transition-colors ${chipClasses}`}
          >
            <ExternalLink className="w-2.5 h-2.5 shrink-0" />
            <span className="truncate max-w-[160px]">{source.name}</span>
          </a>
        );
      })}
    </span>
  );
}
