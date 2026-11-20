import React from "react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { careerData } from "../data/career.js";

export default function Career() {
  return (
    <PageTransition title="Karier & Kompetensi — Ariel Maulana">
      {/* Page Header */}
      <header className="border-b border-[#1f2937] pt-32 pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="font-mono-tech mb-2.5 inline-block text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
            Portofolio Kompetensi &amp; Perencanaan Karier
          </span>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#f3f4f6] sm:text-4xl">
            Arah Karier &amp; Peta Kompetensi
          </h1>
          <p className="max-w-2xl text-sm text-[#9ca3af] sm:text-base">
            Evaluasi kemampuan aktual saat ini, pemetaan kekuatan dan kelemahan (SWOT), alasan pemilihan profesi Network Automation Engineer, analisis kesenjangan kompetensi, serta rencana pengembangan 3–5 tahun ke depan.
          </p>
        </div>
      </header>

      {/* 01 / Analisis Kompetensi Saat Ini */}
      <section className="border-b border-[#1f2937] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-4">
              <SectionHeading
                label="01 / Evaluasi Diri"
                title="Analisis Kompetensi Saat Ini"
                note="Pemetaan objektif berdasarkan praktikum, proyek kuliah yang sudah dikerjakan, dan kursus sertifikasi yang telah diselesaikan."
              />
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-8">
              <p className="mb-4 text-sm leading-relaxed text-[#f3f4f6] sm:text-base">
                {careerData.competencyAnalysis.intro}
              </p>
              <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-[#9ca3af]">
                {careerData.competencyAnalysis.pillars.map((pillar) => (
                  <li key={pillar.title}>
                    <strong className="text-[#f3f4f6]">{pillar.title}</strong>{" "}
                    {pillar.text}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 02 / Analisis SWOT */}
      <section className="border-b border-[#1f2937] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-4">
              <SectionHeading
                label="02 / Pemetaan SWOT"
                title="Analisis SWOT"
                note="Identifikasi kondisi internal (kekuatan & kelemahan) dan faktor eksternal (peluang & tantangan) dalam mempersiapkan karier."
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-8">
              {careerData.swot.map((quadrant, idx) => (
                <ScrollReveal key={quadrant.letter} delay={idx * 0.05}>
                  <div className="h-full rounded-lg border border-[#1f2937] bg-[#111827]/90 p-6 transition-colors hover:border-[#374151]">
                    <h3 className="mb-3 border-b border-[#1f2937] pb-2.5 text-base font-semibold text-[#f3f4f6]">
                      <span className="font-mono-tech mr-2 text-[#20d3ee]">
                        {quadrant.letter}
                      </span>
                      {quadrant.title}
                    </h3>
                    <ul className="list-disc space-y-2 pl-5 text-xs leading-relaxed text-[#9ca3af] sm:text-sm">
                      {quadrant.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 / Tiga Opsi Karier & Alasan Pemilihan */}
      <section className="border-b border-[#1f2937] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-4">
              <SectionHeading
                label="03 / Target Profesi"
                title="Tiga Opsi Karier & Alasan Pemilihan"
                note="Penentuan fokus profesi utama beserta dua jalur karier alternatif yang selaras dengan latar belakang studi D3 Teknologi Telekomunikasi."
              />
            </ScrollReveal>

            <div className="lg:col-span-8">
              <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                {careerData.careerOptions.map((option, idx) => (
                  <ScrollReveal key={option.title} delay={idx * 0.05}>
                    <div
                      className={`h-full rounded-lg border bg-[#111827] p-5 ${
                        option.primary ? "border-[#20d3ee]" : "border-[#1f2937]"
                      }`}
                    >
                      <span
                        className={`font-mono-tech mb-2 inline-block text-xs font-semibold uppercase ${
                          option.primary ? "text-[#20d3ee]" : "text-[#9ca3af]"
                        }`}
                      >
                        {option.badge}
                      </span>
                      <h3 className="mb-2 text-base font-semibold text-[#f3f4f6]">
                        {option.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-[#9ca3af] sm:text-sm">
                        {option.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <div className="rounded-lg border border-[#1f2937] bg-[#111827] p-6">
                  <h3 className="mb-2 text-base font-semibold text-[#f3f4f6]">
                    Alasan Memilih Network Automation Engineer sebagai Profesi Utama
                  </h3>
                  <p className="text-sm leading-relaxed text-[#9ca3af]">
                    {careerData.primaryCareerReason}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / Competency Gap Analysis */}
      <section className="border-b border-[#1f2937] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-4">
              <SectionHeading
                label="04 / Kesenjangan Kompetensi"
                title="Competency Gap Analysis"
                note="Perbandingan antara kemampuan yang sudah saya miliki saat ini dengan standar kompetensi industri untuk posisi Network Automation Engineer."
              />
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-8">
              <div className="overflow-x-auto rounded-lg border border-[#1f2937] bg-[#090b13]/90">
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#111827]">
                      <th className="font-mono-tech border border-[#1f2937] px-4 py-3 text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
                        Area Kompetensi
                      </th>
                      <th className="font-mono-tech border border-[#1f2937] px-4 py-3 text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
                        Kemampuan Saat Ini (Aktual)
                      </th>
                      <th className="font-mono-tech border border-[#1f2937] px-4 py-3 text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
                        Kebutuhan Industri (Target)
                      </th>
                      <th className="font-mono-tech border border-[#1f2937] px-4 py-3 text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
                        Kesenjangan &amp; Langkah Penutupan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {careerData.gapAnalysis.map((row) => (
                      <tr key={row.area} className="align-top">
                        <td className="border border-[#1f2937] px-4 py-3.5 font-semibold text-[#f3f4f6]">
                          {row.area}
                        </td>
                        <td className="border border-[#1f2937] px-4 py-3.5 text-[#9ca3af]">
                          {row.current}
                        </td>
                        <td className="border border-[#1f2937] px-4 py-3.5 text-[#9ca3af]">
                          {row.target}
                        </td>
                        <td className="border border-[#1f2937] px-4 py-3.5 text-[#9ca3af]">
                          {row.action}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 05 / Career Roadmap 3-5 Tahun */}
      <section className="border-b border-[#1f2937] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-4">
              <SectionHeading
                label="05 / Peta Jalan"
                title="Career Roadmap 3–5 Tahun"
                note="Tahapan realistis dari penyelesaian studi vokasi hingga mencapai peran Network Automation Engineer."
              />
            </ScrollReveal>

            <div className="lg:col-span-8">
              <div className="ml-2 border-l border-[#374151] pl-6">
                {careerData.roadmap.map((step, idx) => (
                  <ScrollReveal
                    key={step.period}
                    delay={idx * 0.05}
                    className="relative pb-8 last:pb-0"
                  >
                    <span className="absolute top-1 -left-[31px] flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#20d3ee] bg-[#090b13]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#20d3ee]" />
                    </span>
                    <span className="font-mono-tech mb-1 block text-xs text-[#20d3ee]">
                      {step.period}
                    </span>
                    <h3 className="mb-1.5 text-base font-semibold text-[#f3f4f6]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#9ca3af]">
                      {step.description}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 / Action Plan */}
      <section className="border-b border-[#1f2937] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-4">
              <SectionHeading
                label="06 / Rencana Tindakan"
                title="Action Plan"
                note="Daftar aktivitas konkret, target waktu pengerjaan, dan indikator keberhasilan yang dapat diverifikasi."
              />
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-8">
              <div className="overflow-x-auto rounded-lg border border-[#1f2937] bg-[#090b13]/90">
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#111827]">
                      <th className="font-mono-tech border border-[#1f2937] px-4 py-3 text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
                        Target Waktu
                      </th>
                      <th className="font-mono-tech border border-[#1f2937] px-4 py-3 text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
                        Fokus Pengembangan
                      </th>
                      <th className="font-mono-tech border border-[#1f2937] px-4 py-3 text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
                        Aktivitas Spesifik
                      </th>
                      <th className="font-mono-tech border border-[#1f2937] px-4 py-3 text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
                        Indikator Keberhasilan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {careerData.actionPlan.map((item, idx) => (
                      <tr key={idx} className="align-top">
                        <td className="border border-[#1f2937] px-4 py-3.5 font-semibold text-[#f3f4f6]">
                          {item.timeframe}
                        </td>
                        <td className="border border-[#1f2937] px-4 py-3.5 text-[#f3f4f6]">
                          {item.focus}
                        </td>
                        <td className="border border-[#1f2937] px-4 py-3.5 text-[#9ca3af]">
                          {item.activity}
                        </td>
                        <td className="border border-[#1f2937] px-4 py-3.5 text-[#9ca3af]">
                          {item.indicator}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 07 / Strategi Pengembangan & Evaluasi Berkala */}
      <section className="border-b border-[#1f2937] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-4">
              <SectionHeading
                label="07 / Strategi & Evaluasi"
                title="Strategi Pengembangan & Evaluasi Berkala"
                note="Metode belajar yang diterapkan secara konsisten beserta jadwal peninjauan progres bulanan, semesteran, dan tahunan."
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-8">
              <ScrollReveal>
                <div className="h-full rounded-lg border border-[#1f2937] bg-[#111827] p-6">
                  <h3 className="mb-3 text-base font-semibold text-[#f3f4f6]">
                    Strategi Pengembangan Kompetensi
                  </h3>
                  <ul className="list-disc space-y-2.5 pl-5 text-xs leading-relaxed text-[#9ca3af] sm:text-sm">
                    {careerData.developmentStrategies.map((strategy) => (
                      <li key={strategy.title}>
                        <strong className="text-[#f3f4f6]">{strategy.title}</strong>{" "}
                        {strategy.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.06}>
                <div className="h-full rounded-lg border border-[#1f2937] bg-[#111827] p-6">
                  <h3 className="mb-3 text-base font-semibold text-[#f3f4f6]">
                    Evaluasi Karier Berkala
                  </h3>
                  <ul className="list-disc space-y-2.5 pl-5 text-xs leading-relaxed text-[#9ca3af] sm:text-sm">
                    {careerData.periodicEvaluation.map((evaluation) => (
                      <li key={evaluation.title}>
                        <strong className="text-[#f3f4f6]">{evaluation.title}</strong>{" "}
                        {evaluation.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
