import React, { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import { projectsData } from "../data/projects.js";

export default function Projects() {
  const [searchParams] = useSearchParams();
  const activeCase = searchParams.get("case");

  useEffect(() => {
    if (activeCase) {
      const targetEl = document.getElementById(activeCase);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
      }
    }
  }, [activeCase]);

  return (
    <PageTransition title="Studi Kasus Proyek — Ariel Maulana">
      {/* Page Header */}
      <header className="border-b border-[#1f2937] pt-32 pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="font-mono-tech mb-2.5 inline-block text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
            Dokumentasi Teknis
          </span>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#f3f4f6] sm:text-4xl">
            Proyek &amp; Studi Kasus
          </h1>
          <p className="mb-6 max-w-2xl text-sm text-[#9ca3af] sm:text-base">
            Rincian latar belakang masalah, tujuan, arsitektur teknis, proses pengerjaan, dan status pengembangan aktual dari tiga proyek akademik yang saya kerjakan.
          </p>

          {/* Quick Jump Index for the 3 Projects */}
          <div className="flex flex-wrap gap-2.5">
            {projectsData.map((project) => {
              const isSelected = activeCase === project.id;
              return (
                <Link
                  key={project.id}
                  to={`/projects?case=${project.id}`}
                  className={`font-mono-tech inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs transition-colors ${
                    isSelected
                      ? "border-[#20d3ee] bg-[#111827] text-[#20d3ee]"
                      : "border-[#1f2937] bg-[#111827]/80 text-[#9ca3af] hover:border-[#374151] hover:text-[#f3f4f6]"
                  }`}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: project.accentHex || "#20d3ee" }}
                  />
                  <span>
                    {project.number} · {project.title.split("—")[0].trim()}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* Case Studies */}
      {projectsData.map((project) => (
        <article
          key={project.id}
          id={project.id}
          className="group border-b border-[#1f2937] py-16"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Left Column: Metadata */}
              <ScrollReveal className="lg:col-span-4">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="font-mono-tech text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
                    {project.caseLabel}
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

                <h2 className="mb-4 text-xl font-semibold tracking-tight text-[#f3f4f6]">
                  {project.title}
                </h2>

                <div
                  className="divide-y divide-[#1f2937] rounded-lg border border-[#1f2937] bg-[#111827]/90 p-5 transition-colors group-hover:border-[#374151]"
                  style={{
                    borderTopWidth: "2px",
                    borderTopColor: project.accentHex || "#20d3ee",
                  }}
                >
                  <div className="pb-3">
                    <span className="font-mono-tech mb-1 block text-xs text-[#9ca3af] uppercase">
                      Status
                    </span>
                    <span className="text-sm text-[#f3f4f6]">{project.status}</span>
                  </div>

                  <div className="py-3">
                    <span className="font-mono-tech mb-1 block text-xs text-[#9ca3af] uppercase">
                      Teknologi
                    </span>
                    <span className="text-sm text-[#f3f4f6]">{project.technologies}</span>
                  </div>

                  <div className="pt-3">
                    <span className="font-mono-tech mb-1 block text-xs text-[#9ca3af] uppercase">
                      Repositori
                    </span>
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[#20d3ee] transition-colors hover:text-[#f3f4f6]"
                      >
                        <span className="break-all">{project.repoLabel}</span>
                        <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                      </a>
                    ) : (
                      <span className="text-sm text-[#9ca3af]">{project.repoLabel}</span>
                    )}
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Column: Technical Architecture Diagram + Case Study Content */}
              <ScrollReveal className="space-y-6 lg:col-span-8" delay={0.05}>
                {/* Always-visible Technical Signal Architecture Diagram (Readable on Mobile & Desktop) */}
                {project.architectureFlow && (
                  <div className="rounded-lg border border-[#1f2937] bg-[#111827]/90 p-5 transition-colors group-hover:border-[#374151]">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono-tech text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
                        Alur Arsitektur Teknis
                      </span>
                      <span className="font-mono-tech text-[11px] text-[#9ca3af]">
                        {project.shortStatus}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                      {project.architectureFlow.map((step, idx) => (
                        <div
                          key={step.node}
                          className="relative flex flex-col justify-between rounded-md border border-[#1f2937] bg-[#090b13]/90 p-3"
                        >
                          <div>
                            <div className="mb-1 flex items-center justify-between gap-2">
                              <span className="font-mono-tech text-[10px] text-[#9ca3af]">
                                STEP 0{idx + 1}
                              </span>
                              {idx < project.architectureFlow.length - 1 && (
                                <ArrowRight
                                  className="h-3.5 w-3.5 shrink-0"
                                  style={{ color: project.accentHex || "#20d3ee" }}
                                />
                              )}
                            </div>
                            <div className="text-xs font-semibold text-[#f3f4f6]">
                              {step.node}
                            </div>
                          </div>
                          <div className="mt-1.5 text-[11px] leading-snug text-[#9ca3af]">
                            {step.meta}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="mb-2 text-base font-semibold text-[#f3f4f6]">
                    Latar Belakang &amp; Masalah
                  </h3>
                  <p className="text-sm leading-relaxed text-[#9ca3af]">
                    {project.background}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-base font-semibold text-[#f3f4f6]">
                    Tujuan Proyek
                  </h3>
                  <p className="text-sm leading-relaxed text-[#9ca3af]">
                    {project.objective}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-base font-semibold text-[#f3f4f6]">
                    Proses Pengerjaan
                  </h3>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#9ca3af]">
                    {project.process.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-base font-semibold text-[#f3f4f6]">
                    Kontribusi
                  </h3>
                  <p className="text-sm leading-relaxed text-[#9ca3af]">
                    {project.contribution}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-base font-semibold text-[#f3f4f6]">
                    {project.outcomeHeading}
                  </h3>
                  {project.outcomeBullets ? (
                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#9ca3af]">
                      {project.outcomeBullets.map((item) => (
                        <li key={item.label}>
                          <strong className="text-[#f3f4f6]">{item.label}</strong>{" "}
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm leading-relaxed text-[#9ca3af]">
                      {project.outcomeParagraph}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </article>
      ))}
    </PageTransition>
  );
}
