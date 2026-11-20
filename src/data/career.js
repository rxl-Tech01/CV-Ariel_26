export const careerData = {
  competencyAnalysis: {
    intro:
      "Sebagai mahasiswa aktif D3 Teknologi Telekomunikasi di Telkom University (angkatan 2024), kompetensi teknis yang saya miliki saat ini berada pada tahap fondasi akademik dan proyek prototipe, yang terbagi ke dalam tiga area utama:",
    pillars: [
      {
        title: "Jaringan & Telekomunikasi (Praktik Akademik & Fundamental):",
        text: "Telah mempraktikkan pengalamatan IPv4, subnetting, konfigurasi Inter-VLAN Routing (dot1Q), dan OSPF Area 0 dasar menggunakan Cisco CLI pada praktikum laboratorium, serta memahami konsep dasar jaringan akses serat optik (FTTX) dan materi kursus HCIA-Access V2.5.",
      },
      {
        title: "Pemrograman Python & Layanan Backend (Hands-on Project):",
        text: "Telah mengimplementasikan REST API menggunakan Python Flask, manajemen transaksi dan migrasi skema SQLite, verifikasi autentikasi Bearer token dengan hmac.compare_digest, simulator pengujian HTTP terisolasi (simulator.py), serta pengujian unit otomatis (unittest dan Ruff) pada proyek Tugas Akhir QuotaNode.",
      },
      {
        title: "Sistem IoT & Pengolahan Citra (Hands-on Project & Sedang Dikembangkan):",
        text: "Memiliki pengalaman memprogram mikrokontroler ESP32 (integrasi RFID, Keypad, dan Blynk pada Smart Door Lock), mengimplementasikan aplikasi klasifikasi citra LeafSense AI (MobileNetV2 & Flask), serta saat ini sedang mempelajari komunikasi serial UART AT Command dan USSD pada modul LTE A7670E.",
      },
    ],
  },
  swot: [
    {
      letter: "S",
      title: "Strengths (Kekuatan)",
      items: [
        "Memiliki kombinasi dasar jaringan telekomunikasi dengan pengalaman praktik membangun backend Python (Flask, SQLite, REST API).",
        "Terbiasa menyusun pengujian kode otomatis (unittest) dan dokumentasi teknis repositori.",
        "Memiliki 10 sertifikat pelatihan dasar di bidang jaringan akses, FTTX, keamanan siber (Cisco, Google), cloud computing, dan kecerdasan buatan.",
      ],
    },
    {
      letter: "W",
      title: "Weaknesses (Kelemahan)",
      items: [
        "Belum memiliki pengalaman magang atau kerja di lingkungan operasional jaringan skala produksi.",
        "Belum menguasai secara praktis pustaka spesifik otomasi jaringan seperti Netmiko, NAPALM, dan Ansible.",
        "Integrasi perangkat keras ESP32 dengan modem A7670E pada Tugas Akhir masih dalam proses penyelesaian.",
      ],
    },
    {
      letter: "O",
      title: "Opportunities (Peluang)",
      items: [
        "Meningkatnya kebutuhan industri telekomunikasi, ISP, dan data center terhadap otomasi konfigurasi serta pemantauan jaringan.",
        "Ketersediaan simulator jaringan dan container (Packet Tracer, GNS3, PNETLab, Docker) untuk membangun laboratorium mandiri tanpa perangkat fisik mahal.",
        "Adanya program magang industri pada kurikulum vokasi Fakultas Ilmu Terapan, Telkom University.",
      ],
    },
    {
      letter: "T",
      title: "Threats (Tantangan)",
      items: [
        "Persaingan ketat antar lulusan baru di bidang teknik jaringan dan teknologi informasi.",
        "Banyak posisi jaringan tingkat lanjut yang mensyaratkan sertifikasi profesional (seperti CCNA atau HCIA-Datacom) dan pengalaman praktis.",
        "Perkembangan cepat teknologi infrastruktur cloud dan perkakas NetDevOps yang menuntut pembaruan kompetensi terus-menerus.",
      ],
    },
  ],
  careerOptions: [
    {
      badge: "Profesi Utama",
      primary: true,
      title: "1. Network Automation Engineer",
      description:
        "Mengembangkan script Python, integrasi API, dan alur kerja otomatis untuk konfigurasi, pemeliharaan, serta pemantauan perangkat jaringan.",
    },
    {
      badge: "Opsi Karier 2",
      primary: false,
      title: "2. Network Operations / Network Engineer",
      description:
        "Menangani operasional infrastruktur routing, switching, jaringan akses FTTX, pemantauan NOC, serta pemecahan masalah konektivitas.",
    },
    {
      badge: "Opsi Karier 3",
      primary: false,
      title: "3. IoT & Telemetry System Engineer",
      description:
        "Merancang sistem gateway mikrokontroler, komunikasi data seluler/sensor, dan layanan backend untuk dashboard telemetri IoT.",
    },
  ],
  primaryCareerReason:
    "Profesi Network Automation Engineer dipilih karena berada tepat di titik temu tiga bidang yang saya pelajari: (1) kurikulum inti jaringan dan infrastruktur di D3 Teknologi Telekomunikasi, (2) pengalaman nyata membangun layanan backend, REST API, dan pengujian otomatis menggunakan bahasa Python pada proyek QuotaNode, serta (3) ketertarikan pada sistem pemantauan telemetri perangkat. Jalur ini memungkinkan saya memanfaatkan kemampuan pemrograman Python untuk meningkatkan efisiensi operasional jaringan tanpa meninggalkan latar belakang pendidikan telekomunikasi saya.",
  gapAnalysis: [
    {
      area: "Routing, Switching & Protokol Jaringan",
      current:
        "Subnetting IPv4, Inter-VLAN (dot1Q), OSPF Area 0 dasar pada lab Cisco CLI, dan dasar FTTX.",
      target:
        "Topologi multi-area OSPF, BGP dasar, STP, ACL, NAT, SNMP, serta pemahaman perangkat multi-vendor.",
      action:
        "Memperbanyak latihan topologi jaringan menengah di simulator dan mempelajari materi kurikulum setara CCNA / HCIA-Datacom.",
    },
    {
      area: "Otomasi Jaringan dengan Python",
      current:
        "Python untuk pengembangan REST API (Flask), pengelolaan SQLite, dan pengujian unittest.",
      target:
        "Otomasi konfigurasi perangkat melalui SSH dan protokol jaringan menggunakan Netmiko, Paramiko, NAPALM, RESTCONF/NETCONF.",
      action:
        "Membangun proyek laboratorium Python untuk mengotomasi backup konfigurasi dan pembuatan VLAN/OSPF pada router virtual.",
    },
    {
      area: "Configuration Management & Linux",
      current:
        "Penggunaan Dockerfile dasar, container Nginx/Flask, dan Bash script sederhana.",
      target:
        "Administrasi sistem Linux, penulisan Ansible Playbook untuk perangkat jaringan, dan alur Git CI/CD.",
      action:
        "Mempelajari manajemen konfigurasi multi-node dengan Ansible pada lingkungan laboratorium berbasis Docker/VM.",
    },
    {
      area: "Integrasi Hardware Telemetri",
      current:
        "Backend Flask, SQLite, dan simulator HTTP QuotaNode sudah berjalan; koneksi ke modem A7670E belum selesai.",
      target:
        "Pengiriman data telemetri end-to-end yang stabil dari perangkat keras menuju server pemantauan.",
      action:
        "Menyelesaikan pemrograman komunikasi UART ESP32 dengan modul A7670E (AT Command & USSD) pada proyek Tugas Akhir.",
    },
    {
      area: "Pengalaman Operasional Industri",
      current:
        "Pengalaman terbatas pada praktikum laboratorium dan proyek akademik kuliah.",
      target:
        "Pemahaman prosedur operasional standar (SOP) pengelolaan jaringan produksi dan penanganan insiden di tim NOC/Network.",
      action:
        "Mengikuti program magang industri di perusahaan telekomunikasi, ISP, atau system integrator.",
    },
  ],
  roadmap: [
    {
      period: "Tahun 1 (2026 – 2027) · Penyelesaian Studi & Magang Industri",
      title: "Menuntaskan Tugas Akhir, Lulus D3, dan Memasuki Peran Entry-Level",
      description:
        "Menyelesaikan integrasi perangkat keras ESP32 dan modul A7670E pada Tugas Akhir QuotaNode, membangun proyek portofolio awal otomasi jaringan berbasis Python (Netmiko/Paramiko), menjalani magang industri, dan memulai karier pada posisi Junior Network Engineer atau NOC Engineer.",
    },
    {
      period: "Tahun 2 (2027 – 2028) · Penguatan Operasional & Scripting Jaringan",
      title: "Junior Network Engineer dengan Fokus Otomasi Operasional",
      description:
        "Memperdalam pengalaman operasional routing, switching, dan pemantauan jaringan produksi sambil menerapkan script Python untuk mengotomasi pekerjaan berulang seperti pencadangan konfigurasi dan pemeriksaan status perangkat. Mengambil sertifikasi jaringan tingkat asosiasi (CCNA atau HCIA-Datacom).",
    },
    {
      period: "Tahun 3 (2028 – 2029) · Transisi Peran Penuh Waktu",
      title: "Network Automation Engineer",
      description:
        "Beralih ke posisi khusus otomasi jaringan: merancang dan memelihara Ansible Playbook, mengintegrasikan API perangkat jaringan (RESTCONF/NETCONF), serta membangun dashboard observabilitas dan validasi perubahan jaringan otomatis.",
    },
    {
      period: "Tahun 4 – 5 (2029 – 2031) · Pengelolaan Skala Besar & NetDevOps",
      title: "Mid-Level Network Automation & Infrastructure Engineer",
      description:
        "Mengelola arsitektur otomasi jaringan berskala lebih luas dan lingkungan hybrid cloud, mengimplementasikan pipeline CI/CD untuk pengujian konfigurasi infrastruktur (Infrastructure as Code), serta berkontribusi dalam pengembangan standar teknis tim.",
    },
  ],
  actionPlan: [
    {
      timeframe: "1 – 3 Bulan",
      focus: "Integrasi Hardware Tugas Akhir (QuotaNode)",
      activity:
        "Memprogram komunikasi serial UART ESP32 dengan modul A7670E menggunakan AT Command dan USSD, lalu mengirim payload ke endpoint POST /api/node/update.",
      indicator:
        "Data kuota dan sinyal dari perangkat keras A7670E berhasil masuk ke database SQLite dan tampil di dashboard dengan status operasional non-simulasi.",
    },
    {
      timeframe: "3 – 6 Bulan",
      focus: "Portofolio Dasar Python Network Automation",
      activity:
        "Mempelajari pustaka Netmiko / Paramiko dan membuat script Python untuk otomasi konfigurasi VLAN, OSPF, serta backup konfigurasi pada router simulasi.",
      indicator:
        "Tersedianya minimal 1 repositori proyek lab otomasi jaringan baru yang terdokumentasi lengkap pada akun GitHub rxl-Tech01.",
    },
    {
      timeframe: "6 – 12 Bulan",
      focus: "Penguatan Jaringan, Linux, & Ansible Dasar",
      activity:
        "Latihan konfigurasi routing multi-area, penggunaan sistem operasi Linux untuk layanan jaringan, serta pembuatan playbook dasar Ansible.",
      indicator:
        "Mampu menjalankan otomasi konfigurasi pada topologi multi-router di laboratorium virtual dan menyelesaikan materi persiapan sertifikasi jaringan.",
    },
    {
      timeframe: "6 – 12 Bulan",
      focus: "Persiapan Magang & Rekrutmen Entry-Level",
      activity:
        "Memperbarui website portofolio ArielCV dan dokumen CV dengan hasil akhir Tugas Akhir serta mengirimkan lamaran magang atau kerja ke perusahaan telekomunikasi/IT.",
      indicator:
        "Mengikuti proses seleksi magang industri atau posisi entry-level di bidang jaringan, otomasi, atau IoT.",
    },
  ],
  developmentStrategies: [
    {
      title: "Pembelajaran Berbasis Proyek:",
      text: "Mengubah materi yang dipelajari menjadi proyek fungsional kecil dan menyimpannya di GitHub agar progres teknis tercatat dengan bukti kode.",
    },
    {
      title: "Pemanfaatan Laboratorium Virtual:",
      text: "Menggunakan simulator jaringan dan container Docker untuk mempraktikkan skenario konfigurasi tanpa bergantung pada ketersediaan perangkat fisik.",
    },
    {
      title: "Disiplin Pengujian & Dokumentasi:",
      text: "Menerapkan kebiasaan menulis unit test (unittest) dan panduan penggunaan pada setiap proyek yang dikerjakan.",
    },
    {
      title: "Pemanfaatan Modul Akademi Industri:",
      text: "Mengikuti materi terstruktur dari program kemitraan kampus seperti Cisco Networking Academy, Huawei ICT Academy, dan AWS Academy.",
    },
  ],
  periodicEvaluation: [
    {
      title: "Evaluasi Bulanan:",
      text: "Meninjau progres penyelesaian tahapan Tugas Akhir QuotaNode, memeriksa konsistensi latihan pemrograman/jaringan di GitHub, dan mencatat kendala teknis yang belum terpecahkan.",
    },
    {
      title: "Evaluasi Semesteran (Per 6 Bulan):",
      text: "Memperbarui tabel Competency Gap Analysis untuk menilai kompetensi mana yang sudah berpindah dari level Sedang Dikembangkan ke Hands-on Project, serta meninjau kesiapan CV untuk lamaran magang.",
    },
    {
      title: "Evaluasi Tahunan:",
      text: "Meninjau kesesuaian capaian akademik, sertifikasi, dan posisi magang/kerja terhadap tahapan pada Career Roadmap 3–5 Tahun, lalu menyesuaikan target tahun berikutnya.",
    },
  ],
};
