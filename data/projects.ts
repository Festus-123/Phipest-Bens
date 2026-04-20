
export type PROJECTS = {
  slug: string;
  id: number;
  name: string;
  images: string[];
  description: string;
  longDescription?: string;
  details: string[];
  rating: number;
  serviceType: string;
};

export const projects: PROJECTS[] = [
  {
    id: 1,
    slug: "modern-office-renovation",
    name: "Modern Office Renovation",
    images: ["/project1.jpg", "/project1-1.jpg"],
    description:
      "A complete renovation of a modern office space designed for productivity and collaboration.",
    longDescription:
      "This project focused on transforming an outdated office into a modern workspace with improved layout, lighting, and furniture to enhance productivity and team collaboration.",
    details: [
      "Full interior redesign and structural adjustments",
      "Optimized workspace layout for better workflow",
      "Installation of modern lighting systems and fittings",
      "Selection and placement of ergonomic office furniture",
      "Integration of collaborative workspaces and meeting areas",
      "Completed within 8 months under strict supervision",
      "Total project cost: ₦5,000,000",
    ],
    rating: 4.5,
    serviceType: "Office Renovation",
  },

  {
    id: 2,
    slug: "residential-hostel",
    name: "Residential Hostel",
    images: ["/project2.jpg", "/project2-2.jpg"],
    description:
      "A modern residential hostel designed for comfort and efficient shared living.",
    longDescription:
      "Construction of a well-structured residential hostel with shared amenities, ensuring comfort, durability, and efficient use of space.",
    details: [
      "Construction of multi-room residential hostel facility",
      "Well-ventilated rooms with durable finishing",
      "Shared kitchens, bathrooms, and common areas",
      "Designed for high occupancy and easy maintenance",
      "Use of cost-effective and long-lasting materials",
      "Completed within 6 months timeline",
      "Total project cost: ₦3,000,000",
    ],
    rating: 4.0,
    serviceType: "Residential Construction",
  },

  {
    id: 3,
    slug: "residential-estate",
    name: "Residential Estate",
    images: ["/project3.jpg", "/project3-3.jpg"],
    description:
      "A large-scale residential estate with modern housing and shared amenities.",
    longDescription:
      "Development of a residential estate featuring multiple housing units, road networks, and landscaped environments designed for community living.",
    details: [
      "Development of multiple residential units (houses & townhouses)",
      "Construction of internal road networks and drainage systems",
      "Landscaping of green areas and shared community spaces",
      "Integration of basic infrastructure and utilities",
      "Designed for long-term residential comfort and value",
      "Executed over a 12-month period",
      "Total project cost: ₦10,000,000",
    ],
    rating: 4.8,
    serviceType: "Residential Construction",
  },

  {
    id: 4,
    slug: "campus-hostel",
    name: "Campus Hostel",
    images: ["/project4.jpg", "/project4-4.jpg"],
    description:
      "A modern campus hostel built for student comfort and convenience.",
    longDescription:
      "Construction of a student-focused hostel designed to provide safe, affordable, and comfortable accommodation with shared facilities.",
    details: [
      "Purpose-built student accommodation facility",
      "Efficient room layouts for maximum occupancy",
      "Shared amenities including bathrooms and study areas",
      "Focus on safety, ventilation, and accessibility",
      "Use of durable materials for long-term usage",
      "Completed within 8 months",
      "Total project cost: ₦4,000,000",
    ],
    rating: 4.2,
    serviceType: "Residential Construction",
  },

  {
    id: 5,
    slug: "residential-building",
    name: "Residential Building",
    images: ["/project5.jpg", "/project5-5.jpg"],
    description:
      "A modern residential building with apartments and sustainable features.",
    longDescription:
      "Construction of a multi-unit residential building designed with modern amenities and sustainable construction practices.",
    details: [
      "Construction of apartment and condominium units",
      "Integration of modern utilities and services",
      "Energy-efficient and sustainable design approach",
      "High-quality finishing and structural durability",
      "Designed for both comfort and investment purposes",
      "Completed within 10 months",
      "Total project cost: ₦8,000,000",
    ],
    rating: 4.6,
    serviceType: "Residential Construction",
  },

  {
    id: 6,
    slug: "family-house-construction",
    name: "Modern Family House Construction",
    images: ["/project6.jpg", "/project6-6.jpg"],
    description:
      "A modern family home with stylish design and efficient space usage.",
    longDescription:
      "Construction of a contemporary family home featuring open spaces, energy-efficient design, and high-quality materials for comfortable living.",
    details: [
      "Custom-built residential home tailored for family living",
      "Open-plan layout for space optimization",
      "Energy-efficient design and construction materials",
      "Modern interior finishing and exterior aesthetics",
      "Focus on comfort, ventilation, and durability",
      "Completed within 9 months",
      "Total project cost: ₦6,000,000",
    ],
    rating: 4.7,
    serviceType: "Residential Construction",
  },

  {
    id: 7,
    slug: "modern-duplex-construction",
    name: "Modern Duplex Construction",
    images: ["/project7.jpg", "/project7-7.jpg"],
    description:
      "A contemporary duplex with two living units and modern design.",
    longDescription:
      "Construction of a modern duplex designed for dual occupancy with shared and private living spaces.",
    details: [
      "Construction of a two-unit residential duplex",
      "Contemporary architectural design and finishing",
      "Efficient use of shared and private amenities",
      "Durable structure with modern building techniques",
      "Suitable for family living or rental investment",
      "Completed within 7 months",
      "Total project cost: ₦5,000,000",
    ],
    rating: 4.3,
    serviceType: "Residential Construction",
  },

  {
    id: 8,
    slug: "executive-duplex-mansion",
    name: "Executive Duplex Mansion",
    images: ["/project8.jpg", "/project8-8.jpg"],
    description:
      "A luxury duplex mansion with premium finishes and spacious design.",
    longDescription:
      "Construction of a high-end duplex mansion featuring luxury interiors, expansive living areas, and top-tier finishing.",
    details: [
      "Construction of luxury residential duplex mansion",
      "High-end finishes and premium building materials",
      "Spacious rooms with modern luxury design",
      "Advanced architectural detailing and aesthetics",
      "Designed for elite residential comfort",
      "Completed within 15 months",
      "Total project cost: ₦15,000,000",
    ],
    rating: 4.9,
    serviceType: "Residential Construction",
  },
  {
    id: 9,
    slug: "family-house",
    name: "Family House",
    images: ["/project9.jpg", "/project9-9.jpg"],
    description:
      "A traditional family home enhanced with modern amenities for comfortable living.",
    longDescription:
      "Construction of a family house blending traditional design with modern features, offering both comfort and functionality for everyday living.",
    details: [
      "Construction of a standard residential family home",
      "Combination of traditional architecture with modern upgrades",
      "Spacious interior layout with functional room distribution",
      "Inclusion of outdoor space and backyard design",
      "Use of durable and cost-effective materials",
      "Completed within 9 months",
      "Total project cost: ₦6,000,000",
    ],
    rating: 4.4,
    serviceType: "Residential Construction",
  },

  {
    id: 10,
    slug: "4-bedroom-family-flat",
    name: "4-Bedroom Family Flat",
    images: ["/project10.jpg", "/project10-10.jpg"],
    description:
      "A modern 4-bedroom flat with functional design and quality finishing.",
    longDescription:
      "This project involved constructing a spacious 4-bedroom flat designed for family comfort, featuring efficient layout planning and modern interior finishing.",
    details: [
      "Construction of a 4-bedroom residential flat",
      "Functional layout design for optimal space usage",
      "Modern finishing and interior detailing",
      "Installation of essential utilities and fittings",
      "Designed for comfort, durability, and practicality",
      "Completed within 8 months",
      "Total project cost: ₦7,000,000",
    ],
    rating: 4.5,
    serviceType: "Residential Construction",
  },

  {
    id: 11,
    slug: "family-deluxe-house",
    name: "Family Deluxe House",
    images: ["/project11.jpg", "/project11-11.jpg"],
    description:
      "A deluxe family home featuring luxury finishes and modern living spaces.",
    longDescription:
      "Construction of a premium family house designed with spacious interiors, high-end finishes, and enhanced outdoor living features.",
    details: [
      "Construction of a deluxe residential home",
      "High-end interior and exterior finishing",
      "Spacious layout with luxury design elements",
      "Inclusion of outdoor relaxation and living areas",
      "Use of premium materials for durability and style",
      "Completed within 12 months",
      "Total project cost: ₦12,000,000",
    ],
    rating: 4.8,
    serviceType: "Residential Construction",
  },

  {
    id: 12,
    slug: "modern-goverment-hospital",
    name: "Modern Government Hospital",
    images: ["/project12.jpg", "/project12-12.jpg"],
    description:
      "A modern healthcare facility designed for efficient and patient-centered care.",
    longDescription:
      "Construction of a government hospital equipped with modern medical infrastructure, focusing on functionality, efficiency, and patient comfort.",
    details: [
      "Construction of a full-scale healthcare facility",
      "Integration of modern medical infrastructure",
      "Energy-efficient design and ventilation systems",
      "Patient-centered layout for improved healthcare delivery",
      "Compliance with safety and healthcare standards",
      "Completed within 18 months",
      "Total project cost: ₦18,000,000",
    ],
    rating: 4.7,
    serviceType: "Healthcare Construction",
  },

  {
    id: 13,
    slug: "car-sales-business",
    name: "Car Sales Business",
    images: ["/project15.jpg",],
    description:
      "A vehicle sales and refurbishment business focused on quality and customer satisfaction.",
    longDescription:
      "This project involved buying, refurbishing, and selling vehicles with a focus on quality assurance, quick turnaround, and profitability.",
    details: [
      "Procurement and resale of new and used vehicles",
      "Vehicle inspection, repair, and refurbishment process",
      "Quick turnaround sales strategy after repairs",
      "Focus on customer satisfaction and competitive pricing",
      "Generated strong revenue within early months of operation",
      "Estimated revenue exceeded ₦10,000,000 within 6 months",
    ],
    rating: 4.6,
    serviceType: "Automotive Sales",
  },

  {
    id: 14,
    slug: "government-paper-contract",
    name: "Government Paper Contract",
    images: ["/project14.jpg",],
    description:
      "Procurement and supply services for government and public sector needs.",
    longDescription:
      "Execution of multiple government contracts involving the supply of paper and related materials, ensuring reliability and compliance.",
    details: [
      "Procurement and supply of materials to government agencies",
      "Execution of multiple public sector contracts",
      "Maintained quality assurance and timely delivery",
      "Built strong relationships with government institutions",
      "Generated significant revenue and repeat contracts",
      "Expanded opportunities into private sector engagements",
    ],
    rating: 4.5,
    serviceType: "Government Contracts",
  },

  {
    id: 15,
    slug: "autocad-stadium-design",
    name: "Stadium AutoCAD Design",
    images: ["/project16.jpg",],
    description:
      "Architectural design and visualization of a modern stadium using AutoCAD.",
    longDescription:
      "This project focused on producing detailed architectural drawings and 3D visualizations for a large-scale stadium design.",
    details: [
      "Creation of detailed AutoCAD architectural drawings",
      "Design of seating layouts, structure, and facilities",
      "Integration of safety and crowd management systems",
      "Development of 3D visualizations for presentations",
      "Collaboration with engineers for feasibility alignment",
      "Supported interest from both public and private sectors",
    ],
    rating: 4.7,
    serviceType: "Architectural Design",
  },

  {
    id: 16,
    slug: "drafted-building-sketches",
    name: "Drafted Building Sketches",
    images: ["/project17.jpg", ],
    description:
      "Detailed architectural drafting for residential and commercial projects.",
    longDescription:
      "Focused on creating accurate and detailed building sketches to support planning, approvals, and construction processes.",
    details: [
      "Drafting of residential and commercial building plans",
      "Accurate dimensioning and structural detailing",
      "Clear visual documentation for contractors and engineers",
      "Improved communication across project stakeholders",
      "Supported faster approval and execution processes",
      "Contributed to successful delivery of multiple projects",
    ],
    rating: 4.6,
    serviceType: "Architectural Drafting",
  },
];
