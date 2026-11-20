import React from "react";
import { profileData } from "../data/profile.js";

export default function Footer() {
  return (
    <footer id="contact" className="no-print bg-[#090b13] pt-16 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <span className="font-mono-tech mb-2.5 inline-block text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
          Kontak Profesional
        </span>
        <h2 className="mb-2 text-xl font-semibold tracking-tight text-[#f3f4f6]">
          Terbuka untuk Magang, Posisi Entry-Level, &amp; Diskusi Teknis
        </h2>
        <p className="text-sm text-[#9ca3af]">
          Silakan hubungi saya melalui salah satu saluran berikut untuk keperluan rekrutmen, magang industri, atau kolaborasi proyek akademik.
        </p>

        <div className="my-6 grid grid-cols-1 gap-4 border-y border-[#1f2937] py-6 sm:grid-cols-2 lg:grid-cols-5">
          {profileData.contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-0.5"
            >
              <span className="font-mono-tech text-xs text-[#9ca3af] uppercase">
                {contact.label}
              </span>
              <span className="text-sm font-medium break-words text-[#f3f4f6] transition-colors group-hover:text-[#20d3ee]">
                {contact.value}
              </span>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-between gap-3 text-xs text-[#9ca3af]">
          <span>
            &copy; 2026 {profileData.name}. D3 Teknologi Telekomunikasi, Telkom University.
          </span>
          <span>Minimalist Editorial Portfolio</span>
        </div>
      </div>
    </footer>
  );
}
