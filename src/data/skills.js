export const hardSkillGroups = [
  {
    id: "networking",
    title: "1. Networking & Telekomunikasi",
    items: [
      {
        name: "IP Addressing, VLAN & OSPF Dasar",
        level: "Praktik Akademik",
        description:
          "Subnetting IPv4, konfigurasi Inter-VLAN Routing (dot1Q), dan OSPF Area 0 dasar pada simulasi Cisco CLI di praktikum jaringan.",
      },
      {
        name: "Jaringan Akses & FTTX",
        level: "Fundamental",
        description:
          "Pemahaman konsep dasar jaringan akses serat optik (FTTX) dan materi kursus Huawei HCIA-Access V2.5.",
      },
      {
        name: "Python Network Automation",
        level: "Sedang Dikembangkan",
        description:
          "Mempelajari dasar otomasi perangkat jaringan via SSH/API (Netmiko/Paramiko) sebagai kelanjutan dari dasar jaringan dan Python.",
      },
    ],
  },
  {
    id: "programming",
    title: "2. Programming & Backend",
    items: [
      {
        name: "Python & Flask REST API",
        level: "Hands-on Project",
        description:
          "Pembuatan endpoint HTTP, validasi payload JSON, dan verifikasi Bearer token dengan hmac.compare_digest pada proyek QuotaNode.",
      },
      {
        name: "SQLite & Dasar SQL",
        level: "Hands-on Project",
        description:
          "Koneksi SQLite read-only (?mode=ro), transaksi BEGIN IMMEDIATE, migrasi skema tabel, serta pengenalan dasar MySQL.",
      },
      {
        name: "Pengujian Kode & Web Dasar",
        level: "Hands-on Project",
        description:
          "Pengujian otomatis dengan unittest, linting dengan Ruff, serta pembuatan UI web dengan HTML5, CSS3, Bootstrap 5, dan JavaScript.",
      },
    ],
  },
  {
    id: "iot",
    title: "3. IoT & Embedded System",
    items: [
      {
        name: "ESP32 & Arduino (C/C++)",
        level: "Hands-on Project",
        description:
          "Pemrograman mikrokontroler untuk pembacaan sensor, modul RFID, input Keypad, aktuator kunci, dan integrasi dasar dengan Blynk.",
      },
      {
        name: "Integrasi UART Modul A7670E",
        level: "Sedang Dikembangkan",
        description:
          "Pengembangan komunikasi serial ESP32 dengan modul LTE A7670E menggunakan AT Command dan USSD untuk proyek Tugas Akhir.",
      },
    ],
  },
  {
    id: "cloud-devops",
    title: "4. Cloud & DevOps",
    items: [
      {
        name: "Git & GitHub",
        level: "Hands-on Project",
        description:
          "Pengelolaan versi kode sumber dan penulisan dokumentasi teknis proyek kuliah pada repositori GitHub.",
      },
      {
        name: "Docker Dasar & Bash Script",
        level: "Praktik Akademik",
        description:
          "Penyusunan Dockerfile dan script Bash sederhana (build-cv.sh, sample-app.sh) untuk container Nginx dan Flask.",
      },
      {
        name: "Konsep Dasar Cloud & Cybersecurity",
        level: "Fundamental",
        description:
          "Pengenalan konsep layanan cloud (AWS Academy, HCIA-Cloud) dan dasar keamanan siber (Cisco Networking Academy).",
      },
    ],
  },
];

export const softSkills = [
  {
    number: "1",
    name: "Problem Solving",
    description:
      "Mengisolasi dan memperbaiki kendala teknis secara bertahap pada logika program, skema database, maupun rangkaian mikrokontroler.",
  },
  {
    number: "2",
    name: "Teamwork",
    description:
      "Bekerja sama dalam tim saat menyelesaikan tugas besar perkuliahan dan praktikum laboratorium telekomunikasi.",
  },
  {
    number: "3",
    name: "Communication",
    description:
      "Menyusun dokumentasi sistem (README, spesifikasi API) dan menyampaikan progres pengerjaan proyek secara terstruktur.",
  },
  {
    number: "4",
    name: "Adaptability",
    description:
      "Menyesuaikan diri dengan kebutuhan teknologi yang berbeda di tiap mata kuliah, mulai dari jaringan, web backend, hingga pengolahan citra.",
  },
  {
    number: "5",
    name: "Time Management",
    description:
      "Membagi waktu antara jadwal kuliah, laporan praktikum, dan tahapan pengerjaan proyek Tugas Akhir.",
  },
  {
    number: "6",
    name: "Self-Learning",
    description:
      "Mempelajari dokumentasi teknis secara mandiri serta mengikuti kursus sertifikasi di luar jam perkuliahan.",
  },
  {
    number: "7",
    name: "Analytical Thinking",
    description:
      "Menganalisis alur data sistem, memvalidasi batas input API, dan merancang skenario pengujian sebelum implementasi.",
  },
];
