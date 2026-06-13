import type { Project } from "@/types";
import wildOasisWebsite from "@/assets/projects/wild-oasis-customer-website.png";
import bonmano from "@/assets/projects/bonmano-coffee.png";
import wildOasisDashboard from "@/assets/projects/wild-oasis-dashboard.png";
import pizza from "@/assets/projects/react-pizza.png";
import natours from "@/assets/projects/natours.png";
import pacman from "@/assets/projects/pac-man.png";
import forkify from "@/assets/projects/forkify.png";
import privateSite from "@/assets/projects/personal-website.png";
import camping from "@/assets/projects/camping-web.png";

export const projects: Project[] = [
  {
    slug: "the-wild-oasis-website",
    name: "The Wild Oasis Website",
    description:
      "Hotel booking platform where guests can browse accommodations, manage reservations, and access their accounts. Reservation updates are synchronized in real time with the hotel management system.",
    image: wildOasisWebsite,
    bgColor: "#0f766e",
    liveUrl: "https://wild-oasis.alitadayoni.com",
    repoUrl: "https://github.com/Ali-Tadayoni/the-wild-oasis-website",
    tags: ["Next.js", "Supabase", "Tailwind"],
  },
  {
    slug: "bonmano-coffee-shop",
    name: "Bonmano Coffee Shop",
    description:
      "Responsive landing page featuring dark mode and interactive sections that create an engaging user experience.",
    image: bonmano,
    bgColor: "#6b4423",
    liveUrl: "https://bonmano.alitadayoni.com",
    repoUrl: "https://github.com/Ali-Tadayoni/Coffee-Shop",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    slug: "the-wild-oasis-admin-dashboard",
    name: "The Wild Oasis Admin Dashboard",
    description:
      "Hotel management platform featuring reservation management, analytics dashboards, filtering, pagination, role-based workflows, and dark mode support.",
    image: wildOasisDashboard,
    bgColor: "#1e3a8a",
    liveUrl: "https://admin.wild-oasis.alitadayoni.com",
    repoUrl: "https://github.com/Ali-Tadayoni/The-Wild-Oasis",
    tags: ["React", "Supabase", "Styled Components"],
  },
  {
    slug: "pizza-app",
    name: "Pizza App",
    description:
      "Online restaurant application featuring menu browsing, cart management, order tracking, and geolocation support within a responsive user experience.",
    image: pizza,
    bgColor: "#b91c1c",
    liveUrl: "https://pizza-demo.alitadayoni.com",
    repoUrl: "https://github.com/Ali-Tadayoni/pizza-app",
    tags: ["React", "Redux", "Tailwind"],
  },
  {
    slug: "natours",
    name: "Natours",
    description:
      "Nature tours landing page featuring a responsive layout, smooth modern animations, and a modern visual design focused on user experience.",
    image: natours,
    bgColor: "#15803d",
    liveUrl: "https://natours.alitadayoni.com",
    repoUrl: "https://github.com/Ali-Tadayoni/Natours",
    tags: ["HTML", "SCSS"],
  },
  {
    slug: "pacman-game",
    name: "Pacman Game",
    description:
      "Browser-based recreation of the classic arcade game built as a personal challenge, focusing on gameplay logic and interactive experience.",
    image: pacman,
    bgColor: "#1e1b4b",
    liveUrl: "https://pacman-ali-tadayoni.netlify.app/",
    repoUrl: "https://github.com/Ali-Tadayoni/PacMan",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    slug: "forkify",
    name: "Forkify",
    description:
      "Recipe discovery application built using MVC architecture, featuring recipe search, bookmarking, and adjustable serving sizes for a streamlined cooking experience.",
    image: forkify,
    bgColor: "#c2410c",
    liveUrl: "https://forkify.alitadayoni.com",
    repoUrl: "https://github.com/Ali-Tadayoni/forkify",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    slug: "private-site",
    name: "Private Site",
    description:
      "Personal website featuring a fully responsive layout, dark mode support, and interactive components for an engaging browsing experience.",
    image: privateSite,
    bgColor: "#4338ca",
    liveUrl: "https://private-site-demo.netlify.app/",
    repoUrl: "https://github.com/Ali-Tadayoni/Private-Site",
    tags: ["HTML", "CSS", "JavaScript", "Swiper"],
  },
  {
    slug: "camping-web",
    name: "Camping Web",
    description:
      "Responsive landing page designed for a smooth cross-device experience with a clean and minimal layout.",
    image: camping,
    bgColor: "#047857",
    liveUrl: "https://camping-web-company.netlify.app/",
    repoUrl: "https://github.com/Ali-Tadayoni/Camping-Web",
    tags: ["HTML", "CSS"],
  },
];
