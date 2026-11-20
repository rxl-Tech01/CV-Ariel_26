export function assetUrl(relativePath) {
  const base = import.meta.env.BASE_URL || "./";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${encodeURI(relativePath)}`;
}

export const profileData = {
  name: "Ariel Maulana",
  tagline: "Mahasiswa D3 Teknologi Telekomunikasi | Aspiring Network Automation Engineer",
  heroLabel: "Portofolio Pribadi",
  heroLead:
    "Mahasiswa aktif Fakultas Ilmu Terapan, Telkom University yang mempelajari infrastruktur jaringan telekomunikasi, pemrograman Python untuk layanan backend, dan pengembangan sistem Internet of Things (IoT). Fokus membangun fondasi teknis secara bertahap menuju peran otomasi jaringan.",
  photo: "certificates/Foto ariel.png",
  photoAlt: "Foto profil Ariel Maulana",
  photoCaptionLeft: "Telkom University",
  photoCaptionRight: "Networking · Python · IoT",
  summaryParagraphs: [
    "Saya Ariel Maulana, mahasiswa aktif program studi D3 Teknologi Telekomunikasi di Fakultas Ilmu Terapan, Telkom University (2024–Sekarang). Minat teknis saya berfokus pada irisan antara jaringan telekomunikasi, pemrograman backend berbasis Python, dan sistem Internet of Things (IoT).",
    "Melalui praktikum laboratorium dan pengerjaan proyek kuliah, saya telah mempelajari konfigurasi routing dan switching dasar, membangun layanan REST API menggunakan Python Flask dan SQLite pada prototipe Tugas Akhir QuotaNode, merakit prototipe Smart Door Lock berbasis ESP32, serta mengimplementasikan klasifikasi citra pada LeafSense AI. Saat ini saya fokus memperkuat dasar-dasar otomasi jaringan untuk berkembang menuju peran Network Automation Engineer.",
  ],
  education: {
    institution: "Telkom University — Fakultas Ilmu Terapan",
    degree: "D3 Teknologi Telekomunikasi",
    status: "Mahasiswa Aktif",
    period: "2024 – Sekarang",
    description:
      "Mempelajari jaringan komunikasi data, konfigurasi routing dan switching, sistem jaringan akses serat optik (FTTX), pemrograman komputer, mikrokontroler, serta pengolahan sinyal informasi.",
    focusNote:
      "Fokus perkuliahan dan praktikum meliputi jaringan komunikasi data, konfigurasi routing dan switching, jaringan akses serat optik (FTTX), pemrograman Python, sistem embedded & IoT, serta pengolahan sinyal informasi.",
  },
  coverLetter: {
    salutation: "Yth. Tim Rekrutmen / HR Perusahaan Teknologi & Telekomunikasi,",
    paragraphs: [
      "Saya Ariel Maulana, mahasiswa D3 Teknologi Telekomunikasi di Fakultas Ilmu Terapan, Telkom University. Melalui portofolio ini, saya menyampaikan ketertarikan untuk mengikuti program magang atau mengisi posisi entry-level pada bidang Network Engineering, Network Automation, atau IoT System Development.",
      "Selama masa studi, saya memadukan pemahaman jaringan telekomunikasi dengan praktik pemrograman Python dan mikrokontroler. Pada pengembangan tahap pertama proyek Tugas Akhir QuotaNode, saya merancang backend REST API menggunakan Flask, skema SQLite transaksional, simulator HTTP terisolasi, serta pengujian otomatis menggunakan unittest. Saya juga pernah membangun prototipe Smart Door Lock berbasis ESP32 (RFID, Keypad, Blynk) dan aplikasi klasifikasi citra LeafSense AI berbasis MobileNetV2 serta Flask.",
      "Saya terbiasa mendokumentasikan pekerjaan teknis secara rapi, terbuka terhadap masukan, dan siap mempelajari standar operasional jaringan di lingkungan industri. Terima kasih atas waktu dan kesempatan yang Bapak/Ibu berikan untuk meninjau profil saya.",
    ],
  },
  contacts: [
    {
      label: "GitHub",
      value: "github.com/rxl-Tech01",
      href: "https://github.com/rxl-Tech01",
      external: true,
    },
    {
      label: "Email",
      value: "arielmaulana4906@gmail.com",
      href: "mailto:arielmaulana4906@gmail.com",
      external: false,
    },
    {
      label: "LinkedIn",
      value: "Ariel Maulana",
      printValue: "linkedin.com/in/ariel-maulana-352223333",
      href: "https://www.linkedin.com/in/ariel-maulana-352223333/",
      external: true,
    },
    {
      label: "WhatsApp",
      value: "+62 813-8319-9163",
      href: "https://wa.me/6281383199163",
      external: true,
    },
    {
      label: "Instagram",
      value: "@rieel_aa",
      href: "https://www.instagram.com/rieel_aa",
      external: true,
    },
  ],
  certificates: [
    {
      title: "AI Fundamentals",
      issuer: "Google (via Coursera)",
      category: "Artificial Intelligence",
      format: "PDF",
      file: "certificates/Google_AI_Fundamentals.pdf",
      description:
        "Sertifikat kursus konsep generative AI, prompt engineering terstruktur, serta evaluasi etika dan dampak AI dari Google.",
      printLine: "AI Fundamentals — Google via Coursera (Artificial Intelligence)",
      verificationUrl: "https://coursera.org/verify/0PHLI4BCJ33Z",
    },
    {
      title: "Foundations of Cybersecurity",
      issuer: "Google (via Coursera)",
      category: "Cybersecurity",
      format: "PDF",
      file: "certificates/Google_Foundations_of_Cybersecurity.pdf",
      description:
        "Sertifikat kursus fondasi keamanan siber, identifikasi serangan siber, kontrol keamanan, dan perkakas analis keamanan siber dari Google.",
      printLine: "Foundations of Cybersecurity — Google via Coursera (Cybersecurity)",
      verificationUrl: "https://coursera.org/verify/IWYDV9ENW28I",
    },
    {
      title: "Introduction to AI",
      issuer: "Google (via Coursera)",
      category: "Artificial Intelligence",
      format: "PDF",
      file: "certificates/Google_Introduction_to_AI.pdf",
      description:
        "Sertifikat kursus pengenalan pembelajaran mesin (machine learning), kapabilitas dan batasan model AI, serta pengawasan manusia dari Google.",
      printLine: "Introduction to AI — Google via Coursera (Artificial Intelligence)",
      verificationUrl: "https://coursera.org/verify/HWWX9BTSDA5M",
    },
    {
      title: "HCIA-Access V2.5 Course",
      issuer: "Huawei ICT Academy",
      category: "Networking",
      format: "PNG",
      file: "certificates/HCIA-Access V2.5 Course.png",
      description:
        "Materi dasar arsitektur jaringan akses dan komunikasi data dari Huawei ICT Academy.",
      printLine: "HCIA-Access V2.5 Course — Huawei ICT Academy (Networking / Access Network)",
    },
    {
      title: "Fiber to the X - FTTX",
      issuer: "Pelatihan Jaringan Akses Serat Optik",
      category: "Telecommunication",
      format: "PNG",
      file: "certificates/Fiber to the X - FTTX.png",
      description:
        "Pelatihan konsep jaringan distribusi serat optik dan pengenalan komponen infrastruktur FTTX.",
      printLine: "Fiber to the X - FTTX — Pelatihan Jaringan Akses Serat Optik (Telecommunication)",
    },
    {
      title: "Introduction to Cybersecurity - Cisco",
      issuer: "Cisco Networking Academy",
      category: "Cybersecurity",
      format: "PDF",
      file: "certificates/Introduction Cyber_Cisco.pdf",
      description:
        "Kursus pengenalan ancaman siber, prinsip kerahasiaan data, dan dasar perlindungan jaringan dari Cisco.",
      printLine: "Introduction to Cybersecurity — Cisco Networking Academy (Cybersecurity)",
    },
    {
      title: "HCIA-Cloud Computing",
      issuer: "Huawei ICT Academy",
      category: "Cloud Computing",
      format: "PNG",
      file: "certificates/HCIA-Cloud Computing.png",
      description:
        "Pengenalan konsep komputasi awan, virtualisasi sumber daya server, dan arsitektur cloud dasar.",
      printLine: "HCIA-Cloud Computing — Huawei ICT Academy (Cloud Infrastructure)",
    },
    {
      title: "HCIA-Cloud Service V3.5",
      issuer: "Huawei ICT Academy",
      category: "Cloud Service",
      format: "PNG",
      file: "certificates/HCIA-Cloud Service V3.5.png",
      description:
        "Kursus pengenalan model layanan cloud, manajemen instance, dan layanan penyimpanan berbasis cloud.",
      printLine: "HCIA-Cloud Service V3.5 — Huawei ICT Academy (Cloud Services)",
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "AWS Academy",
      category: "Cloud Computing",
      format: "PDF",
      file: "certificates/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge.pdf",
      description:
        "Kurikulum dasar AWS Academy mengenai layanan inti komputasi, jaringan, penyimpanan, dan keamanan AWS.",
      printLine: "AWS Academy Graduate - Cloud Foundations — AWS Academy (Cloud Computing)",
    },
    {
      title: "Course for Azure AI Fundamentals",
      issuer: "Microsoft Azure Training",
      category: "Artificial Intelligence",
      format: "PDF",
      file: "certificates/Course for Azure AI Fundamentals.pdf",
      description:
        "Pelatihan konsep dasar pembelajaran mesin, visi komputer, dan pengenalan layanan AI pada Microsoft Azure.",
      printLine: "Course for Azure AI Fundamentals — Microsoft Azure Training (Artificial Intelligence)",
    },
  ],
};
