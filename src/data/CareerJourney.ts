export interface CareerJourneyItem {
  image: string;
  category: string;
  title: string;
  desc: string;
  tech: string[];
  team?: string[];
  comp?: string[];
}

export const careerJourneyData: CareerJourneyItem[] = [
  {
    image: "/career_journey/Levelearn_thumb.png",
    category: "Web Development",
    title: "Levelearn Administrator",
    desc: "From January 2025 to June 2025, I worked as a Full-Stack Developer on Levelearn, a mobile-first learning application designed to apply gamification principles for evaluating student engagement and learning outcomes. This project was part of my Final Research and Development Thesis. Collaborating in a team of three students, I was responsible for both the frontend development of the admin dashboard and the backend development of the Restful API.",
    tech: [
      "JavaScript",
      "ReactJs (Vite)",
      "NodeJs (Express)",
      "Tailadmin",
      "MySQL",
      "Prisma",
    ],
    team: ["Archico", "Benhard"],
    comp: ["/career_journey/Levelearn.png", "/career_journey/Levelearn-2.png"],
  },
  {
    image: "/career_journey/Sisakty_thumb.png",
    category: "Web Development",
    title: "MIP Sisakty (Sistem Aplikasi Safety)",
    desc: "From August 2024 to December 2024, I worked as a Full-Stack Developer on Sisakty, a web-based operational management system for a mining field. The system covered functionalities such as permit requests, visitor management, and on-site driving card issuance for administrators. I also developed a mobile app (web view) to provide workers with access to Hazard Reports, monthly updates, and company news. My role involved end-to-end development, including backend, frontend, and mobile web view integration. Working in a team of two intern students and one mentor, I collaborated closely with stakeholders to gather requirements and ensure the system’s usability for field operations.",
    tech: ["PHP", "Laravel", "Spattie", "Laravel Module", "JQuery", "MySQL"],
    team: ["Boy"],
    comp: ["/career_journey/SisaktyV2.png", "/career_journey/SisaktyV2-2.png"],
  },
  {
    image: "/career_journey/Kospin_thumb.png",
    category: "Web Development",
    title: "Savings and Loan Aplication",
    desc: "Developed Kospin Dana Arta Mandiri Admin, a web-based system designed to manage cooperative savings and loan operations, including member management, loan applications, transaction tracking, and administrative reporting. Involved in end-to-end development, covering backend, frontend, and mobile web view integration. Worked as part of a team consisting of two intern students and one mentor, collaborating with stakeholders to gather requirements and ensure the system’s usability for field operations.",
    tech: ["PHP", "CodeIgniter", "JQuery", "jEasyUI", "MySQL"],
    team: ["Boy"],
    comp: [
      "/career_journey/Kospin.png",
      "/career_journey/KospinDashboardCensored.png",
    ],
  },
  {
    image: "/career_journey/SPM_thumb.png",
    category: "Web Development",
    title: "IT Del SPM Web Application",
    desc: "From February 2024 to May 2024, I worked as a Full-Stack Developer, developing modules for Dashboard and News Management as part of the Higher Education Quality Assurance System (SPM) at IT Del. The system was designed to ensure continuous improvement and compliance with educational standards. I contributed within a Scrum team, handling both frontend and backend tasks for the assigned modules, and collaborated closely with other groups to ensure smooth integration and consistency across various parts of the system.",
    tech: ["PHP", "Laravel", "AdminLTE", "MySQL", "Agile", "Coda"],
    team: ["Informatics'21"],
    comp: ["/career_journey/SPM.png", "/career_journey/SPMDashboard.png"],
  },
  {
    image: "/career_journey/Himasti_thumb.png",
    category: "Web Development",
    title: "HIMASTI Web Application",
    desc: "From October to December 2023, I served as a programmer and Scrum leader for the HIMASTI Website project (GitHub Repository), developing a website to support the needs of the association. I led the Scrum process, coordinated the development team, and contributed to both frontend and backend tasks.",
    tech: ["PHP", "Laravel", "MySQL", "Prisma", "Agile", "Coda"],
    team: ["Boy", "Riskia", "Itha", "Syalom"],
    comp: [
      "/career_journey/Himasti.png",
      "/career_journey/HimastiDashboard.png",
    ],
  },
  {
    image: "/career_journey/mybiodata_thumb.png",
    category: "Android Development",
    title: "MyBiodata Mobile App",
    desc: "I participated in the VSGA training program with the topic of Android Development organized by my university. As part of the graduation requirements, I designed the MyBiodata application, which is intended to store basic student data. The purpose of developing this application was to implement the knowledge and skills acquired during the training.",
    tech: ["Java Maven", "SQLite"],
    comp: ["/career_journey/mybio.png"],
  },
  {
    image: "/career_journey/socket_thumb.png",
    category: "Java Socket",
    title: "Chat Application",
    desc: "I developed this Chat Application as the final project for the Computer Networks course. The application implements the principles of socket programming, which allows two applications to establish a direct connection over a network to send and receive messages in real time. As the developer of my team, I was responsible for designing, coding, and ensuring the communication between clients was seamless and efficient.",
    tech: ["Java", "Java Socket Programming", "Netbeans", "JDBC", "MySQL"],
    team: ["Wilona", "Itha", "Salwa", "Dea"],
    comp: ["/career_journey/socket.png", "/career_journey/socket-2.png"],
  },
  {
    image: "/career_journey/oldporto_thumb.png",
    category: "Web Development",
    title: "Portfolio Website",
    desc: "This is my personal project, a portfolio website that serves as a platform to showcase my skills, projects, and professional experiences. It is designed to provide potential employers, clients, or collaborators with an overview of my capabilities, style of work, and achievements, all in one accessible place.",
    tech: ["HTML", "CSS", "JavaScript"],
    comp: ["/career_journey/Portfolio.png", "/career_journey/Portfolio-2.png"],
  },
  {
    image: "/career_journey/gimeit_thumb.png",
    category: "Java Application",
    title: "GimeIt",
    desc: "Projek ini merupakan projek akhir mata kuliah Object-Oriented Programming (OOP). GimeIt adalah aplikasi yang digunakan untuk mengelola stok penjualan barang pada sebuah toko. Tujuan dibuatnya aplikasi ini adalah untuk menerapkan konsep OOP pada kasus ini, seperti encapsulation (untuk melindungi dan mengontrol akses terhadap data stok), inheritance (untuk membuat class yang dapat digunakan kembali dan diperluas untuk berbagai jenis produk), serta polymorphism (untuk memungkinkan berbagai jenis produk atau operasi ditangani melalui antarmuka yang sama).",
    tech: ["Java", "MySQL", "JDBC", "Netbeans"],
    team: ["Rio", "Nicholas"],
    comp: ["/career_journey/gimeit1.png"],
  },
];
