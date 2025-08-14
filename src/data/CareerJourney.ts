export interface CareerJourneyItem {
  image: string;
  category: string;
  title: string;
  tech: string[]; 
  team?: string[];
  comp?: string[];
}

export const careerJourneyData: CareerJourneyItem[] = [
  {
    image: "/career_journey/Levelearn_thumb.png",
    category: "Web Development",
    title: "Levelearn Administrator",
    tech: ["JavaScript", "ReactJs (Vite)", "NodeJs (Express)", "Tailadmin", "MySQL", "Prisma"],
    team: ["Archico", "Benhard"],
    comp: ["/career_journey/Levelearn.png", "/career_journey/Levelearn-2.png"],
  },
  {
    image: "/career_journey/Sisakty_thumb.png",
    category: "Web Development",
    title: "MIP Sisakty (Sistem Aplikasi Safety)",
    tech: ["PHP", "Laravel", "Spattie", "Laravel Module", "JQuery", "MySQL"],
    team: ["Boy"],
    comp: ["/career_journey/SisaktyV2.png", "/career_journey/SisaktyV2-2.png"],
  },
  {
    image: "/career_journey/Kospin_thumb.png",
    category: "Web Development",
    title: "Savings and Loan Aplication",
    tech: ["PHP", "CodeIgniter", "JQuery", "jEasyUI", "MySQL"],
    team: ["Boy"],
    comp: ["/career_journey/Kospin.png", "/career_journey/KospinDashboardCensored.png"],
  },
  {
    image: "/career_journey/SPM_thumb.png",
    category: "Web Development",
    title: "IT Del SPM Web Application",
    tech: ["PHP", "Laravel", "AdminLTE", "MySQL", "Agile", "Coda"],
    team: ["Informatics'21"],
    comp: ["/career_journey/SPM.png", "/career_journey/SPMDashboard.png"],
  },
  {
    image: "/career_journey/Himasti_thumb.png",
    category: "Web Development",
    title: "HIMASTI Web Application",
    tech: ["PHP", "Laravel", "MySQL", "Prisma", "Agile", "Coda"],
    team: ["Boy", "Riskia", "Itha", "Syalom"],
    comp: ["/career_journey/Himasti.png", "/career_journey/HimastiDashboard.png"],
  },
  {
    image: "/career_journey/mybiodata_thumb.png",
    category: "Android Development",
    tech: ["Java Maven", "SQLite"],
    title: "MyBiodata Mobile App",
    comp: ["/career_journey/mybio.png"],
  },
  {
    image: "/career_journey/socket_thumb.png",
    category: "Java Socket",
    title: "Chat Application",
    tech: ["Java", "Java Socket Programming", "Netbeans", "JDBC", "MySQL"],
    team: ["Wilona", "Itha", "Salwa", "Dea"],
    comp: ["/career_journey/socket.png", "/career_journey/socket-2.png"],
  },
  {
    image: "/career_journey/oldporto_thumb.png",
    category: "Web Development",
    title: "Portfolio Website",
    tech: ["HTML", "CSS", "JavaScript"],
    comp: ["/career_journey/Portfolio.png", "/career_journey/Portfolio-2.png"],
  },
  {
    image: "/career_journey/gimeit_thumb.png",
    category: "Java Application",
    title: "GimeIt",
    tech: ["Java", "MySQL", "JDBC", "Netbeans"],
    team: ["Rio", "Nicholas"],
    comp: ["/career_journey/gimeit1.png"],
  },
];
