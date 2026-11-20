import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Printer, ExternalLink } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { profileData, assetUrl } from "../data/profile.js";
import { hardSkillGroups, softSkills } from "../data/skills.js";
import { projectsData } from "../data/projects.js";

export default function About() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Preload photo for print
  useEffect(() => {
    const img = new Image();
    img.src = assetUrl(profileData.photo);
  }, []);

  const triggerSafePrint = (onDone) => {
    const img = new Image();
    img.src = assetUrl(profileData.photo);
    const runPrint = () => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          window.print();
          if (onDone) onDone();
        }, 120);
      });
    };
    if (img.complete) {
      runPrint();
    } else {
      img.onload = runPrint;
      img.onerror = runPrint;
    }
  };

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      const target = document.getElementById(section);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
      }
    }

    if (searchParams.get("print") === "1") {
      triggerSafePrint(() => {
        const nextParams = new URLSearchParams(searchParams);
        nextParams.delete("print");
        setSearchParams(nextParams, { replace: true });
      });
    }
  }, [searchParams, setSearchParams]);

  const handlePrint = () => {
    triggerSafePrint();
  };

  const isPrint = searchParams.get("print") === "1";

  return (
    <PageTransition title="Tentang Saya & CV — Ariel Maulana">
      {isPrint ? (
        // ----- PRINT ONLY CV -----
        <div className="print-only mx-auto max-w-6xl px-4">
          <div className="print-header-layout mb-3 border-b-2 border-[#111827] pb-2.5">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-[#111827]">{profileData.name}</h1>
              <p className="text-xs font-semibold text-[#111827]">{profileData.tagline}</p>
              <p className="mt-1 text-xs text-[#374151]">
                Email: arielmaulana4906@gmail.com | WhatsApp: +62 813-8319-9163 | GitHub: github.com/rxl-Tech01 | LinkedIn: linkedin.com/in/ariel-maulana-352223333
              </p>
            </div>
            <div className="shrink-0">
              <img
                src={assetUrl(profileData.photo)}
                alt={profileData.photoAlt}
                className="print-photo aspect-4/5"
              />
            </div>
          </div>

          {/* Professional Summary */}
          <section className="print-section border-b border-[#1f2937] py-8">
            <SectionHeading label="01 / Ringkasan" title="Professional Summary" />
            <p className="mt-2 text-sm text-[#111827]">
              Saya Ariel Maulana, mahasiswa aktif program studi <strong>D3 Teknologi Telekomunikasi</strong> di Fakultas Ilmu Terapan, <strong>Telkom University</strong> (2024–Sekarang). Minat teknis saya berfokus pada irisan antara jaringan telekomunikasi, pemrograman backend berbasis Python, dan sistem Internet of Things (IoT).
            </p>
            <p className="mt-2 text-sm text-[#111827]">
              Praktikum laboratorium dan proyek kuliah memberi pengalaman pada konfigurasi routing & switching, pembuatan REST API (Flask) & SQLite, prototipe <em>Smart Door Lock</em> (ESP32) serta klasifikasi citra <em>LeafSense AI</em>. Kini fokus memperkuat otomasi jaringan untuk peran <strong>Network Automation Engineer</strong>.
            </p>
          </section>

          {/* Education */}
          <section className="print-section border-b border-[#1f2937] py-8">
            <SectionHeading label="02 / Pendidikan" title="Riwayat Pendidikan" />
            <h3 className="mt-2 text-lg font-semibold text-[#111827]">{profileData.education.institution}</h3>
            <p className="text-xs text-[#111827]">{profileData.education.period}</p>
            <p className="mt-1 text-sm text-[#111827]"><strong>{profileData.education.degree}</strong> ({profileData.education.status})</p>
            <p className="text-sm text-[#111827]">{profileData.education.focusNote}</p>
          </section>

          {/* Hard Skills */}
          <section className="print-section border-b border-[#1f2937] py-8">
            <SectionHeading label="03 / Kompetensi Teknis" title="Hard Skills" />
            {hardSkillGroups.map((group) => (
              <div key={group.id} className="mt-2">
                <h4 className="text-base font-medium text-[#111827] mb-1">{group.title}</h4>
                <ul className="list-disc pl-5 text-xs text-[#111827] space-y-1">
                  {group.items.map((skill) => (
                    <li key={skill.name}><strong>{skill.name}</strong> — {skill.level}: {skill.description}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Soft Skills */}
          <section className="print-section border-b border-[#1f2937] py-8">
            <SectionHeading label="04 / Kompetensi Non-Teknis" title="Soft Skills" />
            <ul className="list-disc pl-5 text-xs text-[#111827] space-y-1">
              {softSkills.map((skill) => (
                <li key={skill.name}><strong>{skill.name}</strong> — {skill.description}</li>
              ))}
            </ul>
          </section>

          {/* Projects */}
          <section className="print-section border-b border-[#1f2937] py-8">
            <h2 className="text-base font-bold text-[#111827] mb-2">Pengalaman Proyek Akademik</h2>
            <ul className="list-disc pl-5 text-xs text-[#111827] space-y-1">
              {projectsData.map((project) => (
                <li key={project.id}><strong>{project.title}</strong> ({project.shortStatus}): {project.printSummary}</li>
              ))}
            </ul>
          </section>

          {/* Certificates */}
          <section className="print-section py-8">
            <h2 className="text-base font-bold text-[#111827] mb-2">Sertifikat &amp; Pelatihan</h2>
            <ul className="list-disc pl-5 text-xs text-[#111827] space-y-1">
              {profileData.certificates.map((cert) => (
                <li key={cert.title}>{cert.printLine}</li>
              ))}
            </ul>
          </section>
        </div>
      ) : (
        // ----- SCREEN VIEW -----
        <>
          {/* Print-Only Compact CV Header with Profile Photo on Right */}
          <div className="print-only mx-auto max-w-6xl px-4">
            <div className="print-header-layout mb-3 flex items-start justify-between gap-4 border-b-2 border-[#111827] pb-2.5">
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-[#111827]">{profileData.name}</h1>
                <p className="text-xs font-semibold text-[#111827]">{profileData.tagline}</p>
                <p className="mt-1 text-xs text-[#374151]">
                  Email: arielmaulana4906@gmail.com | WhatsApp: +62 813-8319-9163 | GitHub: github.com/rxl-Tech01 | LinkedIn: linkedin.com/in/ariel-maulana-352223333
                </p>
              </div>
              <div className="shrink-0">
                <img
                  src={assetUrl(profileData.photo)}
                  alt={profileData.photoAlt}
                  className="print-photo aspect-4/5 w-20 rounded-xs border border-[#9ca3af] object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Page Header (Screen Only) */}
          <header className="no-print border-b border-[#1f2937] pt-32 pb-14">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="font-mono-tech mb-2.5 inline-block text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
                    Profil, Keahlian &amp; Sertifikasi
                  </span>
                  <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#f3f4f6] sm:text-4xl">
                    Tentang Saya
                  </h1>
                  <p className="max-w-2xl text-sm text-[#9ca3af] sm:text-base">
                    Ringkasan latar belakang akademik, kompetensi teknis berdasarkan pengalaman proyek dan praktikum, daftar sertifikat, serta surat pengantar lamaran.
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-[#20d3ee] bg-[#20d3ee] px-4.5 py-2.5 text-sm font-semibold text-[#090b13] transition-colors hover:bg-transparent hover:text-[#20d3ee]"
                  >
                    <Printer className="h-4 w-4" />
                    <span>Cetak / Simpan CV (PDF)</span>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* 01 / Ringkasan & 02 / Pendidikan */}
          <section className="print-section border-b border-[#1f2937] py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <ScrollReveal className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <SectionHeading label="01 / Ringkasan" title="Professional Summary" />
                </div>
                <div className="space-y-3.5 text-sm leading-relaxed text-[#f3f4f6] sm:text-base lg:col-span-8">
                  <p>
                    Saya Ariel Maulana, mahasiswa aktif program studi{" "}
                    <strong>D3 Teknologi Telekomunikasi</strong> di Fakultas Ilmu Terapan,{" "}
                    <strong>Telkom University</strong> (2024–Sekarang). Minat teknis saya berfokus pada irisan antara jaringan telekomunikasi, pemrograman backend berbasis Python, dan sistem Internet of Things (IoT).
                  </p>
                  <p>
                    Melalui praktikum laboratorium dan pengerjaan proyek kuliah, saya telah mempelajari konfigurasi routing dan switching dasar, membangun layanan REST API menggunakan Python Flask dan SQLite pada prototipe Tugas Akhir{" "}
                    <em>QuotaNode</em>, merakit prototipe <em>Smart Door Lock</em> berbasis ESP32, serta mengimplementasikan klasifikasi citra pada{" "}
                    <em>LeafSense AI</em>. Saat ini saya fokus memperkuat dasar-dasar otomasi jaringan untuk berkembang menuju peran{" "}
                    <strong>Network Automation Engineer</strong>.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal className="grid grid-cols-1 gap-6 border-t border-[#1f2937] pt-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <SectionHeading label="02 / Pendidikan" title="Riwayat Pendidikan" />
                </div>
                <div className="lg:col-span-8">
                  <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-[#f3f4f6]">
                      {profileData.education.institution}
                    </h3>
                    <span className="font-mono-tech text-xs text-[#20d3ee]">
                      {profileData.education.period}
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-[#f3f4f6]">
                    <strong>{profileData.education.degree}</strong> ({profileData.education.status})
                  </p>
                  <p className="text-sm text-[#9ca3af]">{profileData.education.focusNote}</p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* 03 / Hard Skills (4 Kelompok) */}
          <section className="print-section border-b border-[#1f2937] py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                <ScrollReveal className="lg:col-span-4">
                  <SectionHeading
                    label="03 / Kompetensi Teknis"
                    title="Hard Skills"
                    note="Dikelompokkan dalam empat bidang dengan penanda level berdasarkan pengalaman nyata: Hands-on Project, Praktik Akademik, Fundamental, dan Sedang Dikembangkan."
                  />
                </ScrollReveal>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-8">
                  {hardSkillGroups.map((group, idx) => (
                    <ScrollReveal key={group.id} delay={idx * 0.05}>
                      <div className="print-card-reset h-full rounded-lg border border-[#1f2937] bg-[#111827]/90 p-6 transition-colors hover:border-[#374151]">
                        <h3 className="mb-4 border-b border-[#1f2937] pb-3 text-base font-semibold text-[#f3f4f6]">
                          {group.title}
                        </h3>
                        <div className="divide-y divide-[#1f2937]">
                          {group.items.map((skill) => (
                            <div key={skill.name} className="py-3 first:pt-0 last:pb-0">
                              <div className="mb-1 flex items-baseline justify-between gap-3">
                                <span className="text-sm font-semibold text-[#f3f4f6]">
                                  {skill.name}
                                </span>
                                <span className="font-mono-tech shrink-0 text-xs text-[#20d3ee]">
                                  {skill.level}
                                </span>
                              </div>
                              <p className="text-xs leading-relaxed text-[#9ca3af]">
                                {skill.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 04 / Soft Skills (7 Item) */}
          <section className="print-section border-b border-[#1f2937] py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                <ScrollReveal className="lg:col-span-4">
                  <SectionHeading
                    label="04 / Kompetensi Non-Teknis"
                    title="Soft Skills"
                    note="Kebiasaan kerja yang dilatih selama pengerjaan tugas proyek, praktikum laboratorium, dan pembelajaran mandiri."
                  />
                </ScrollReveal>

                <div className="grid grid-cols-1 gap-x-7 gap-y-4 md:grid-cols-2 lg:col-span-8">
                  {softSkills.map((skill, idx) => (
                    <ScrollReveal key={skill.name} delay={idx * 0.04}>
                      <div className="border-b border-[#1f2937] pb-3.5">
                        <h4 className="mb-1 text-sm font-semibold text-[#f3f4f6]">
                          {skill.number}. {skill.name}
                        </h4>
                        <p className="text-xs leading-relaxed text-[#9ca3af]">
                          {skill.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Print-Only Project Experience Summary */}
          <section className="print-only print-section mx-auto max-w-6xl px-4">
            <h2 className="mb-1.5 text-base font-bold text-[#111827]">
              Pengalaman Proyek Akademik
            </h2>
            <ul className="list-disc space-y-1 pl-4 text-xs">
              {projectsData.map((project) => (
                <li key={project.id}>
                  <strong>
                    {project.title} ({project.shortStatus}):
                  </strong>{" "}
                  {project.printSummary}
                </li>
              ))}
            </ul>
          </section>

          {/* Print-Only Certificate List */}
          <section className="print-only print-section mx-auto max-w-6xl px-4">
            <h2 className="mb-1.5 text-base font-bold text-[#111827]">
              Sertifikat &amp; Pelatihan
            </h2>
            <ul className="list-disc space-y-0.5 pl-4 text-xs">
              {profileData.certificates.map((cert) => (
                <li key={cert.title}>{cert.printLine}</li>
              ))}
            </ul>
          </section>

          {/* 05 / Gallery 10 Sertifikat Asli (Screen Only) */}
          <section id="certificates" className="no-print border-b border-[#1f2937] py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                <ScrollReveal className="lg:col-span-4">
                  <SectionHeading
                    label="05 / Sertifikasi"
                    title="Sepuluh Sertifikat Kursus &amp; Akademi"
                    note="Seluruh dokumen sertifikat tersimpan secara lokal pada folder certificates/ dan dapat dibuka langsung."
                  />
                </ScrollReveal>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-8">
                  {profileData.certificates.map((cert, idx) => (
                    <ScrollReveal key={cert.title} delay={idx * 0.04}>
                      <article className="flex h-full flex-col rounded-lg border border-[#1f2937] bg-[#111827]/90 p-5 transition-colors hover:border-[#20d3ee]/50">
                        <div className="font-mono-tech mb-2.5 flex items-center justify-between text-xs">
                          <span className="text-[#20d3ee]">{cert.category}</span>
                          <span className="text-[#9ca3af]">{cert.format}</span>
                        </div>
                        <h3 className="mb-2 text-base font-semibold text-[#f3f4f6]">
                          {cert.title}
                        </h3>
                        <p className="mb-4 flex-1 text-xs leading-relaxed text-[#9ca3af]">
                          {cert.description}
                        </p>
                        <a
                          href={assetUrl(cert.file)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#20d3ee] transition-colors hover:text-[#f3f4f6]"
                        >
                          <span>Buka Sertifikat</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </article>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </PageTransition>
  );
}
