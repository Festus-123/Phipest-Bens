export type EVENTS = {
  id: number;
  title: string;
  date: string;
  description: string;
  link: string;
  category: "upcoming" | "ongoing" | "completed";
};

export const events: EVENTS[] = [
  // --- Upcoming (6) ---
  {
    id: 1,
    title: "Networking Meetup",
    date: "April 10, 2026",
    description: "Connect with professionals and expand your network at our monthly networking meetup.",
    link: "/events/networking-meetup",
    category: "upcoming",
  },
  {
    id: 2,
    title: "Annual Workshop",
    date: "May 20, 2026",
    description: "Learn new skills and network with peers at our annual workshop.",
    link: "/events/annual-workshop",
    category: "upcoming",
  },
  {
    id: 3,
    title: "Webinar on Industry Trends",
    date: "July 5, 2026",
    description: "An insightful webinar discussing the latest trends in the industry.",
    link: "/events/webinar-industry-trends",
    category: "upcoming",
  },
  {
    id: 4,
    title: "Community Outreach Event",
    date: "August 30, 2026",
    description: "Giving back to the community through outreach and support initiatives.",
    link: "/events/community-outreach-event",
    category: "upcoming",
  },
  {
    id: 5,
    title: "Product Launch Event",
    date: "October 25, 2026",
    description: "Discover our latest product and its innovative features.",
    link: "/events/product-launch-event",
    category: "upcoming",
  },
  {
    id: 6,
    title: "Annual Gala",
    date: "December 15, 2026",
    description: "Celebrate achievements and network with peers at our annual gala.",
    link: "/events/annual-gala",
    category: "upcoming",
  },

  // --- Ongoing (3) ---
  {
    id: 7,
    title: "Tech Innovation Bootcamp",
    date: "March 1 – April 30, 2026",
    description: "A two‑month bootcamp helping startups and professionals sharpen their tech skills.",
    link: "/events/tech-bootcamp-2026",
    category: "ongoing",
  },
  {
    id: 8,
    title: "Construction Project Showcase",
    date: "February – June 2026",
    description: "Ongoing showcase of our latest architectural and construction projects.",
    link: "/events/construction-showcase-2026",
    category: "ongoing",
  },
  {
    id: 9,
    title: "Global Trade Partnership Program",
    date: "January – December 2026",
    description: "Year‑long initiative connecting businesses through import and export opportunities.",
    link: "/events/trade-partnership-2026",
    category: "ongoing",
  },

  // --- Completed (trimmed to 3 recent) ---
  {
    id: 10,
    title: "Business Innovation Summit",
    date: "November 15, 2025",
    description: "Shared insights on IT consulting and business growth strategies.",
    link: "/events/business-summit-2025",
    category: "completed",
  },
  {
    id: 11,
    title: "Government Partnership Forum",
    date: "September 10, 2025",
    description: "Focused on government contracts and compliance strategies.",
    link: "/events/government-forum-2025",
    category: "completed",
  },
  {
    id: 12,
    title: "Past Workshop",
    date: "January 10, 2023",
    description: "Highlights and key takeaways from our successful workshop.",
    link: "/events/past-workshop",
    category: "completed",
  },
];