import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProjectRow({ project, isFirst = false }) {
  return (
    <article
      className={`group relative py-7 transition-colors ${
        isFirst
          ? "pt-0"
          : "border-t border-[#1f2937] hover:border-t-[#20d3ee]/60"
      }`}
    >
      {/* Subtle animated signal highlight line on top when hovered */}
      {!isFirst && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-[#20d3ee] via-[#3b82f6] to-transparent transition-all duration-300 group-hover:w-2/3"
        />
      )}

      <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-mono-tech text-xs text-[#9ca3af]">
            {project.number} / {project.category}
          </span>
          {project.domainTag && (
            <span
              className="font-mono-tech rounded-xs border px-1.5 py-0.5 text-[10px] tracking-wider uppercase"
              style={{
                borderColor: `${project.accentHex || "#20d3ee"}45`,
                color: project.accentHex || "#20d3ee",
                backgroundColor: `${project.accentHex || "#20d3ee"}10`,
              }}
            >
              {project.domainTag}
            </span>
          )}
        </div>
        <span className="font-mono-tech text-xs text-[#20d3ee]">
          {project.shortStatus}
        </span>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-[#f3f4f6] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#20d3ee]">
        <Link to={`/projects?case=${project.id}`}>{project.title}</Link>
      </h3>

      <p className="mb-3.5 text-sm leading-relaxed text-[#9ca3af]">
        {project.summary}
      </p>

      {/* Always-visible compact architecture flow (mobile & desktop friendly without requiring hover) */}
      {project.architectureFlow && (
        <div
          aria-label={`Alur sistem ${project.title}`}
          className="mb-4 flex flex-wrap items-center gap-y-1.5 rounded-md border border-[#1f2937] bg-[#111827]/85 px-3 py-2 transition-colors group-hover:border-[#374151]"
        >
          {project.architectureFlow.map((step, idx) => (
            <React.Fragment key={step.node}>
              <div className="inline-flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: project.accentHex || "#20d3ee" }}
                />
                <span className="font-mono-tech text-xs font-medium text-[#f3f4f6]">
                  {step.node}
                </span>
              </div>
              {idx < project.architectureFlow.length - 1 && (
                <span className="font-mono-tech mx-2 text-xs text-[#20d3ee]">
                  &rarr;
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono-tech text-xs text-[#9ca3af]">
          {project.techLine}
        </span>
        <Link
          to={`/projects?case=${project.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#20d3ee] transition-colors hover:text-[#f3f4f6]"
        >
          <span>Detail Proyek</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
