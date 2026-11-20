export const projectsData = [
  {
    id: "quotanode",
    number: "01",
    category: "Tugas Akhir",
    caseLabel: "Studi Kasus 01",
    domainTag: "CELLULAR TELEMETRY & REST API",
    accentHex: "#20d3ee",
    architectureFlow: [
      { node: "ESP32 + A7670E", meta: "Target UART/USSD (Masih Dikembangkan)" },
      { node: "Koneksi Jaringan", meta: "HTTP Bearer Token / Simulator Phase 1" },
      { node: "Flask API", meta: "GET & POST /api/node/*" },
      { node: "SQLite", meta: "?mode=ro & BEGIN IMMEDIATE" },
      { node: "Dashboard", meta: "Web Monitoring (DEMO_MODE)" },
    ],
    shortStatus: "Sedang Dikembangkan (Phase 1)",
    status: "Proyek Tugas Akhir — Sedang Dikembangkan (Phase 1)",
    title: "QuotaNode — IoT Gateway & Dashboard Monitoring A7670E",
    summary:
      "Prototipe sistem pemantauan kuota data dan sinyal seluler dengan backend Flask REST API, database SQLite transaksional, simulator HTTP terisolasi, serta rancangan integrasi ESP32 dan modul LTE A7670E.",
    techLine: "Python · Flask · SQLite · Unittest · Target: ESP32 & A7670E",
    technologies:
      "Python 3, Flask, SQLite, REST API, Unittest, Ruff, HTML/CSS/JS, Target Hardware: ESP32 & A7670E",
    repoUrl: "https://github.com/rxl-Tech01/Ariel_Progres-TA",
    repoLabel: "github.com/rxl-Tech01/Ariel_Progres-TA",
    background:
      "Perangkat gateway IoT yang menggunakan koneksi seluler membutuhkan pemantauan sisa kuota paket data, masa aktif kartu, dan kekuatan sinyal (dBm) secara berkala. Pemeriksaan kartu SIM secara manual di lokasi perangkat tidak efisien, sehingga dibutuhkan mekanisme pengiriman telemetri ke dashboard pemantauan terpusat.",
    objective:
      "Membangun sistem pemantauan node IoT yang terdiri dari backend REST API, penyimpanan riwayat pembacaan di database SQLite, simulator pengujian terisolasi, dashboard web responsif, serta rencana integrasi dengan mikrokontroler ESP32 dan modul LTE A7670E berbasis AT Command dan USSD.",
    process: [
      "Merancang tiga endpoint kontrak API pada app.py: GET /api/node/latest, GET /api/node/history (batas limit 1–100), dan POST /api/node/update.",
      "Mengimplementasikan verifikasi autentikasi pada endpoint POST /api/node/update menggunakan header Authorization: Bearer <NODE_API_TOKEN> yang diperiksa dengan fungsi waktu-konstan hmac.compare_digest.",
      "Mengatur pengelolaan database SQLite: pembacaan menggunakan URI read-only (?mode=ro) tanpa membuat file database baru, sedangkan penulisan menggunakan transaksi BEGIN IMMEDIATE disertai migrasi skema otomatis dari tabel readings_phase1 ke readings.",
      "Membangun simulator.py untuk menjalankan server pengujian lokal terpisah (default port 5001) menggunakan direktori sementara (TemporaryDirectory), database terisolasi simulation.sqlite3, dan token acak di memori untuk menguji skenario heartbeat, success, zero, failed, dan demo.",
      "Menyusun pengujian otomatis menggunakan unittest (test_app.py, test_simulator.py), skrip uji UI (test_dashboard.cjs), dan pemeriksaan standar kode Python dengan Ruff (ruff.toml).",
    ],
    contribution:
      "Merancang arsitektur backend Flask, menyusun logika transaksi dan migrasi SQLite, membuat simulator pengujian terisolasi, menyesuaikan antarmuka dashboard monitoring, serta menulis unit test dan dokumentasi teknis proyek.",
    outcomeHeading: "Status Pengembangan Saat Ini (Pemisahan Fitur)",
    outcomeBullets: [
      {
        label: "Sudah Berjalan (Phase 1):",
        text: "Aplikasi backend Flask, penyimpanan dan migrasi SQLite, autentikasi Bearer token, perhitungan status Online/Offline berdasarkan umur heartbeat_at (batas 180 detik), serta tampilan dashboard web dengan penanda konfigurasi DEMO_MODE = True.",
      },
      {
        label: "Fitur Simulasi:",
        text: "Pengiriman payload sintetis melalui simulator.py pada proses dan file database sementara yang terpisah sepenuhnya dari database operasional monitoring.sqlite3.",
      },
      {
        label: "Masih Dikembangkan (Integrasi Hardware):",
        text: "Pemrograman firmware ESP32 untuk berkomunikasi dengan modul seluler A7670E melalui UART AT Command, ekstraksi respons USSD operator, dan pengiriman data langsung dari perangkat keras ke server belum selesai dan sedang dalam tahap pengerjaan.",
      },
    ],
    printSummary:
      "Membangun Phase 1 berupa backend Flask REST API, SQLite transaksional dengan koneksi read-only/write, verifikasi Bearer token (hmac.compare_digest), simulator HTTP terisolasi (simulator.py), pengujian unittest & Ruff, serta dashboard monitoring. Integrasi hardware UART ESP32–A7670E (AT Command & USSD) masih dikembangkan. (github.com/rxl-Tech01/Ariel_Progres-TA)",
  },
  {
    id: "smart-door-lock",
    number: "02",
    category: "Sistem IoT",
    caseLabel: "Studi Kasus 02",
    domainTag: "EMBEDDED ACCESS & IOT SECURITY",
    accentHex: "#3b82f6",
    architectureFlow: [
      { node: "RFID / Keypad", meta: "Input UID Kartu & Kode PIN" },
      { node: "ESP32", meta: "Verifikasi Logika GPIO (C/C++)" },
      { node: "Mekanisme Akses & Integrasi Blynk", meta: "Aktuator Kunci & Koneksi Aplikasi Blynk" },
    ],
    shortStatus: "Proyek Akademik",
    status: "Proyek Akademik Sistem IoT",
    title: "Smart Door Lock Berbasis ESP32, RFID, Keypad, dan Blynk",
    summary:
      "Prototipe pengunci pintu berbasis mikrokontroler ESP32 yang menggabungkan pembaca kartu RFID, input kode PIN melalui Keypad, dan integrasi dasar dengan platform aplikasi Blynk.",
    techLine: "ESP32 · C/C++ · RFID · Keypad · Blynk",
    technologies:
      "ESP32, C/C++ (Arduino IDE), Modul RFID, Keypad, Aktuator Kunci, Blynk",
    repoUrl: null,
    repoLabel: "Proyek perangkat keras akademik (tidak memiliki repositori publik)",
    background:
      "Sistem kunci pintu manual hanya mengandalkan anak kunci fisik, sehingga dalam pembelajaran sistem Internet of Things diperlukan prototipe yang memperlihatkan bagaimana mikrokontroler dapat mengelola akses pintu secara elektronik melalui lebih dari satu metode input.",
    objective:
      "Merancang bangun prototipe pengunci pintu berbasis mikrokontroler ESP32 yang mengintegrasikan pembaca kartu/tag RFID, input PIN menggunakan Keypad, serta koneksi ke aplikasi Blynk.",
    process: [
      "Menyusun pemetaan pin GPIO pada mikrokontroler ESP32 agar dapat terhubung secara bersamaan dengan modul pembaca RFID, matriks Keypad, dan rangkaian penggerak kunci pintu.",
      "Menulis kode program dalam bahasa C/C++ menggunakan Arduino IDE untuk membaca UID kartu RFID dan memeriksa kesesuaian kombinasi input karakter dari Keypad.",
      "Mengonfigurasi pustaka dan token perangkat Blynk pada kode ESP32 untuk menghubungkan prototipe dengan antarmuka aplikasi Blynk melalui jaringan WiFi.",
    ],
    contribution:
      "Merakit rangkaian komponen pada mikrokontroler ESP32, menulis logika pembacaan input RFID dan Keypad pada Arduino IDE, serta mengintegrasikan konfigurasi dasar aplikasi Blynk.",
    outcomeHeading: "Hasil & Ruang Lingkup Implementasi",
    outcomeParagraph:
      "Menghasilkan prototipe skala proyek akademik yang mengombinasikan verifikasi identitas kartu RFID, input PIN Keypad, dan integrasi aplikasi Blynk pada papan pengembangan ESP32 sebagai bagian dari praktik penerapan sistem embedded dan IoT.",
    printSummary:
      "Merancang prototipe sistem kunci pintu menggunakan mikrokontroler ESP32 dengan pembaca RFID, input PIN Keypad, dan integrasi dasar aplikasi Blynk.",
  },
  {
    id: "leafsense-ai",
    number: "03",
    category: "Pengolahan Sinyal Informasi",
    caseLabel: "Studi Kasus 03",
    domainTag: "IMAGE PROCESSING & TRANSFER LEARNING",
    accentHex: "#14b8a6",
    architectureFlow: [
      { node: "Input Citra Daun", meta: "Citra Daun Ketapang (CLI / Web Flask)" },
      { node: "MobileNetV2", meta: "Transfer Learning 2-Tahap (TensorFlow/Keras)" },
      { node: "Klasifikasi Muda / Sedang / Tua", meta: "Prediksi Kelas & Evaluasi Confusion Matrix" },
    ],
    shortStatus: "Tugas Besar Kuliah",
    status: "Tugas Besar Pengolahan Sinyal Informasi (PSI)",
    title: "LeafSense AI — Klasifikasi Kematangan Daun Ketapang",
    summary:
      "Aplikasi klasifikasi citra daun Ketapang ke dalam kelas Muda, Sedang, dan Tua menggunakan Transfer Learning MobileNetV2 (TensorFlow/Keras) dengan antarmuka prediksi berbasis web Flask.",
    techLine: "Python · TensorFlow/Keras · MobileNetV2 · Flask · scikit-learn",
    technologies:
      "Python, TensorFlow / Keras, MobileNetV2, Flask, scikit-learn, Matplotlib, Seaborn",
    repoUrl: "https://github.com/rxl-Tech01/TubesPSI",
    repoLabel: "github.com/rxl-Tech01/TubesPSI",
    background:
      "Daun Ketapang (Terminalia catappa) mengalami perubahan karakteristik warna dan tekstur seiring tingkat kematangannya. Penilaian visual secara manual sering kali kurang konsisten, sehingga diperlukan pendekatan pengolahan citra digital untuk mengklasifikasikan tingkat kematangan daun secara terukur.",
    objective:
      "Membangun sistem klasifikasi citra yang dapat membedakan tingkat kematangan daun Ketapang ke dalam tiga kelas—Muda, Sedang, dan Tua—menggunakan metode Transfer Learning serta menyediakan antarmuka web untuk pengujian gambar.",
    process: [
      "Menyiapkan struktur direktori dataset terpisah (train, val, test) untuk tiga label kelas: muda, sedang, dan tua.",
      "Mengimplementasikan pipeline pelatihan model/train.py menggunakan arsitektur dasar MobileNetV2 dalam dua tahap: tahap pertama melatih classification head dengan bobot dasar dibekukan (frozen base), diikuti tahap kedua berupa fine-tuning pada lapisan atas model.",
      "Menyusun skrip evaluasi model/evaluate.py menggunakan scikit-learn, matplotlib, dan seaborn untuk menghasilkan classification report serta visualisasi confusion matrix.",
      "Membuat skrip inferensi CLI (model/predict.py) dan aplikasi web berbasis Python Flask (web/app.py) untuk menerima unggahan foto daun dan menampilkan hasil prediksi kelas kematangan.",
    ],
    contribution:
      "Mengerjakan pipeline pemrosesan citra, konfigurasi pelatihan model MobileNetV2, pengujian evaluasi model, dan pengintegrasian file model (.h5) ke dalam aplikasi web Flask untuk kebutuhan Tugas Besar mata kuliah Pengolahan Sinyal Informasi.",
    outcomeHeading: "Hasil Pengembangan",
    outcomeParagraph:
      "Proyek menghasilkan kode pelatihan dua tahap, modul evaluasi metrik klasifikasi tiga kelas kematangan daun (Muda, Sedang, Tua), serta antarmuka web Flask lokal yang dapat memproses citra daun Ketapang dan menampilkan prediksi tingkat kematangannya.",
    printSummary:
      "Implementasi klasifikasi citra daun Ketapang ke kelas Muda, Sedang, dan Tua menggunakan Transfer Learning MobileNetV2 (TensorFlow/Keras), evaluasi scikit-learn, dan aplikasi web Flask. (github.com/rxl-Tech01/TubesPSI)",
  },
];
