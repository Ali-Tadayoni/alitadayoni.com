import type { Job } from "@/types";

export const experience: Job[] = [
  {
    company: "Acme Cloud",
    role: "Senior Software Engineer",
    url: "https://example.com",
    logo: "https://picsum.photos/seed/acme/80/80",
    startDate: "Jan 2023",
    endDate: "Present",
    description:
      "Leading the platform team. Designed the multi-tenant control plane, owned the migration to event-driven workers, and mentored two engineers from intermediate to senior.",
  },
  {
    company: "Northwind Labs",
    role: "Full-Stack Engineer",
    url: "https://example.com",
    logo: "https://picsum.photos/seed/northwind/80/80",
    startDate: "Mar 2020",
    endDate: "Dec 2022",
    description:
      "Built the customer-facing dashboard from zero to ten thousand weekly actives. Owned billing, auth, and most of the React component library.",
  },
  {
    company: "Globex Studio",
    role: "Software Engineer",
    url: "https://example.com",
    logo: "https://picsum.photos/seed/globex/80/80",
    startDate: "Jun 2018",
    endDate: "Feb 2020",
    description:
      "Worked across a handful of client projects in fintech and media. Wrote a lot of Node and learned how to ship under deadline pressure.",
  },
];
