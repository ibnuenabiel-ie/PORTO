// js/data.js

const portfolioData = {
  // DATA PRIBADI
  personalInfo: {
    name: "Ibnu Nabil Kristanto",
    role: "Industrial Engineering Student & Data Analyst",
    university: "BINUS University",
    bio: "Mahasiswa Teknik Industri di BINUS University yang berfokus pada Supply Chain Management, Data Analysis, dan optimasi Excel. Berdedikasi untuk merancang dan membangun aplikasi yang efisien, terstruktur, serta aman.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "ibnu.kristanto@binus.ac.id"
  },

  // DATA KEAHLIAN / SKILLS
  skills: [
    { name: "Microsoft Excel", category: "Data & Analytics", icon: "file-spreadsheet" },
    { name: "Google Spreadsheet", category: "Data & Analytics", icon: "table" },
    { name: "Autodesk Inventor", category: "Engineering Design", icon: "box" },
    { name: "Supply Chain Forecasting", category: "Operations", icon: "trending-up" },
    { name: "Canva Design", category: "UI/UX & Media", icon: "palette" }
  ],

  // DATA PORTOFOLIO (Dukungan Slider Banyak Gambar per Proyek)
  projects: [
    {
      id: "secureme",
      title: "SecureMe (AmanPerempuan)",
      description: "Aplikasi mobile untuk pelaporan darurat dan jaringan perlindungan keamanan perempuan secara real-time.",
      tags: ["Mobile App", "UI/UX", "Safety Tech"],
      images: [
        "projects/secureme-1.jpg",
        "projects/secureme-2.jpg"
      ]
    },
    {
      id: "honkai-star-retail",
      title: "Honkai Star Retail",
      description: "Aplikasi mobile full-stack (Flutter, Node.js, MySQL) untuk mengelola transaksi dan inventaris ritel.",
      tags: ["Flutter", "Node.js", "MySQL", "Full-Stack"],
      images: [
        "projects/honkai-1.jpg",
        "projects/honkai-2.jpg"
      ]
    },
    {
      id: "devsecops-research",
      title: "DevSecOps & Security Research",
      description: "Analisis komprehensif vektor serangan siber, celah keamanan, dan otomatisasi CI/CD pipeline.",
      tags: ["DevSecOps", "Cyber Security", "Research"],
      images: [
        "projects/security-1.jpg",
        "projects/security-2.jpg"
      ]
    }
  ],

  // DATA BLOG / ARTIKEL
  blogs: [
    {
      title: "Penerapan Konsep Pemrograman Berbasis Objek (OOP) di Java",
      excerpt: "Memahami Encapsulation, Inheritance, dan Polymorphism dalam membangun arsitektur kode aplikasi enterprise.",
      date: "10 Sep 2026",
      category: "Java / Software",
      readTime: "5 min read"
    },
    {
      title: "State Management di Flutter: Provider vs Riverpod",
      excerpt: "Strategi pengelolaan state aplikasi skala besar agar performa UI tetap mulus dan bebas lag.",
      date: "25 Aug 2026",
      category: "Flutter / Mobile",
      readTime: "7 min read"
    },
    {
      title: "Otomatisasi Keamanan Pipeline CI/CD dengan GitHub Actions",
      excerpt: "Panduan praktis mengintegrasikan pemindaian celah keamanan secara otomatis di setiap commit.",
      date: "12 Jul 2026",
      category: "DevSecOps",
      readTime: "6 min read"
    }
  ]
};