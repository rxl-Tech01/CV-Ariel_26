import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Printer } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectRow from "../components/ProjectRow.jsx";
import { profileData, assetUrl } from "../data/profile.js";
import { projectsData } from "../data/projects.js";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const heroContainer = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const heroItem = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <PageTransition title="Ariel Maulana — Portofolio Digital & Perencanaan Karier">
      {/* Hero Section */}
      <header className="border-b border-[#1f2937] pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <motion.div
              variants={heroContainer}
              initial="hidden"
              animate="visible"
              className="order-2 lg:order-1 lg:col-span-7"
            >
              <motion.div
                variants={heroItem}
                className="mb-3 inline-flex items-center gap-2 rounded-xs border border-[#1f2937] bg-[#111827]/85 px-2.5 py-1"
              >
                <span className="h-2 w-2 rounded-full bg-[#20d3ee]" />
                <span className="font-mono-tech text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
                  {profileData.heroLabel} · NETWORK &amp; TELEMETRY
                </span>
              </motion.div>

              <motion.h1
                variants={heroItem}
                className="mb-3.5 text-4xl font-bold tracking-tight text-[#f3f4f6] sm:text-5xl"
              >
                {profileData.name}
              </motion.h1>

              <motion.p
                variants={heroItem}
                className="mb-4 text-base font-medium text-[#f3f4f6] sm:text-lg"
              >
                {profileData.tagline}
              </motion.p>

              <motion.p
                variants={heroItem}
                className="mb-7 max-w-2xl text-sm leading-relaxed text-[#9ca3af] sm:text-base"
              >
                {profileData.heroLead}
              </motion.p>

              <motion.div
                variants={heroItem}
                className="flex flex-wrap items-center gap-3"
              >
                <Link
                  to="/projects"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#20d3ee] bg-[#20d3ee] px-4.5 py-2.5 text-sm font-semibold text-[#090b13] transition-colors hover:bg-transparent hover:text-[#20d3ee] sm:w-auto"
                >
                  <span>Lihat Proyek</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#374151] bg-[#090b13]/80 px-4.5 py-2.5 text-sm font-semibold text-[#f3f4f6] transition-colors hover:border-[#20d3ee] hover:text-[#20d3ee] sm:w-auto"
                >
                  Tentang Saya
                </Link>

                <Link
                  to="/about?print=1"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#374151] bg-[#090b13]/80 px-4.5 py-2.5 text-sm font-semibold text-[#f3f4f6] transition-colors hover:border-[#20d3ee] hover:text-[#20d3ee] sm:w-auto"
                >
                  <Printer className="h-4 w-4" />
                  <span>Cetak / Simpan CV</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Portrait + Cinematic Network Node Frame */}
            <div className="order-1 lg:order-2 lg:col-span-5">
              <div className="relative mx-auto max-w-[310px] lg:mr-0 lg:ml-auto">
                {/* Subtle Network Node SVG Background */}
                <svg
                  className="pointer-events-none absolute -top-6 -right-6 -bottom-6 -left-6 -z-10 h-[calc(100%+3rem)] w-[calc(100%+3rem)] opacity-55"
                  viewBox="0 0 360 440"
                  fill="none"
                  aria-hidden="true"
                >
                  <line x1="24" y1="36" x2="140" y2="20" stroke="#1f2937" strokeWidth="1" />
                  <line x1="140" y1="20" x2="332" y2="48" stroke="#1f2937" strokeWidth="1" />
                  <line x1="332" y1="48" x2="342" y2="210" stroke="#1f2937" strokeWidth="1" />
                  <line x1="20" y1="390" x2="180" y2="420" stroke="#1f2937" strokeWidth="1" />
                  <motion.path
                    d="M 24 36 L 332 48 L 342 396 L 20 390 Z"
                    stroke="#20d3ee"
                    strokeOpacity="0.28"
                    strokeWidth="1"
                    initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                  />
                  <circle cx="24" cy="36" r="3" fill="#20d3ee" fillOpacity="0.75" />
                  <circle cx="140" cy="20" r="2.5" fill="#3b82f6" fillOpacity="0.55" />
                  <circle cx="332" cy="48" r="3" fill="#20d3ee" fillOpacity="0.75" />
                  <circle cx="342" cy="210" r="2.5" fill="#3b82f6" fillOpacity="0.55" />
                  <circle cx="342" cy="396" r="3" fill="#20d3ee" fillOpacity="0.65" />
                  <circle cx="20" cy="390" r="2.5" fill="#3b82f6" fillOpacity="0.55" />
                </svg>

                <div className="relative rounded-lg border border-[#1f2937] bg-[#111827]/90 p-2.5">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-px -left-px h-3 w-3 border-t-2 border-l-2 border-[#20d3ee]"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-px -bottom-px h-3 w-3 border-r-2 border-b-2 border-[#3b82f6]"
                  />
                  <img
                    src={assetUrl(profileData.photo)}
                    alt={profileData.photoAlt}
                    className="aspect-4/5 w-full rounded-sm object-cover object-top"
                  />
                </div>
                <div className="font-mono-tech mt-2.5 flex justify-between text-xs text-[#9ca3af]">
                  <span>{profileData.photoCaptionLeft}</span>
                  <span>{profileData.photoCaptionRight}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Preview Tiga Proyek Unggulan */}
      <section className="border-b border-[#1f2937] py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-4">
              <SectionHeading
                label="Proyek Pilihan"
                title="Tiga Proyek Utama"
                note="Dokumentasi proyek tugas akhir, sistem mikrokontroler IoT, dan tugas besar pengolahan sinyal informasi."
              >
                <Link
                  to="/projects"
                  className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#20d3ee] transition-colors hover:text-[#f3f4f6]"
                >
                  <span>Lihat seluruh studi kasus</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </SectionHeading>
            </ScrollReveal>

            <div className="lg:col-span-8">
              {projectsData.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.06}>
                  <ProjectRow project={project} isFirst={index === 0} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ringkasan Pendidikan & Sertifikasi */}
      <section className="border-b border-[#1f2937] py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <div className="h-full rounded-lg border border-[#1f2937] bg-[#111827]/90 p-7">
                <span className="font-mono-tech mb-2.5 inline-block text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
                  Pendidikan
                </span>
                <h2 className="mb-2 text-xl font-semibold tracking-tight text-[#f3f4f6]">
                  {profileData.education.degree}
                </h2>
                <p className="mb-2 text-sm text-[#f3f4f6]">
                  <strong>Telkom University</strong> — Fakultas Ilmu Terapan ({profileData.education.period})
                </p>
                <p className="mb-4 text-sm text-[#9ca3af]">
                  {profileData.education.description}
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#20d3ee] transition-colors hover:text-[#f3f4f6]"
                >
                  <span>Lihat profil &amp; keahlian lengkap</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="h-full rounded-lg border border-[#1f2937] bg-[#111827]/90 p-7">
                <span className="font-mono-tech mb-2.5 inline-block text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
                  Sertifikasi &amp; Perencanaan Karier
                </span>
                <h2 className="mb-2 text-xl font-semibold tracking-tight text-[#f3f4f6]">
                  10 Sertifikat &amp; Peta Jalan Karier
                </h2>
                <p className="mb-4 text-sm text-[#9ca3af]">
                  Telah menyelesaikan 10 pelatihan dasar di bidang jaringan akses (Huawei HCIA-Access, FTTX), keamanan siber (Cisco, Google), cloud computing (AWS, Huawei Cloud), dan kecerdasan buatan (Google, Microsoft Azure), disertai pemetaan kompetensi menuju peran Network Automation Engineer.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link
                    to="/about?section=certificates"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#20d3ee] transition-colors hover:text-[#f3f4f6]"
                  >
                    <span>Lihat 10 sertifikat</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/career"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#20d3ee] transition-colors hover:text-[#f3f4f6]"
                  >
                    <span>Baca rencana karier</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
