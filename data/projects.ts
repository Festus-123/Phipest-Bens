export type PROJECTS = {
  slug: string;
  id: number;
  name: string;
  image: string;
  description: string;
  longDescription?: string;
  details?: string[];
  rating: number;
  serviceType: string;
};

export const projects: PROJECTS[] = [
  {
    id: 1,
    slug: "modern-office-renovation",
    name: "Modern Office Renovation",
    image: "/project1.jpg",
    description:
      "A complete renovation of a modern office space, including new furniture, lighting, and optiised layout for productivity and collaboration.",
    longDescription:
      "This project involved a comprehensive renovation of a modern office space, focusing on enhancing productivity and collaboration through strategic layout optimization, new furniture selection, and improved lighting solutions.",
    details: [
      "Complete renovation of a modern office space",
      "New furniture, lighting, and optimized layout",
      "Enhanced productivity and collaboration",
      "completed withing the space of 8 months",
      "Project cost: #5000,000",
    ],
    rating: 4.5,
    serviceType: "Office Renovation",
  },
  {
    id: 2,
    slug: "residential-hostel",
    name: "Residential Hostel",
    image: "/project2.jpg",
    description:
      "A modern residential hostel designed for comfort and convenience, featuring well-appointed rooms and shared facilities.",
    longDescription:
      "This project involved the construction of a modern residential hostel designed for comfort and convenience, featuring well-appointed rooms and shared facilities.",
    details: [
      "Construction of a modern residential hostel",
      "Well-appointed rooms and shared facilities",
      "Designed for comfort and convenience",
      "completed within the space of 6 months",
      "Project cost: #3000,000",
    ],
    rating: 4.0,
    serviceType: "Residential Construction",
  },
  {
    id: 3,
    slug: "residential-estate",
    name: "Residential Estate",
    image: "/project3.jpg",
    description:
      "A residential estate development project, featuring a mix of single-family homes and townhouses, with landscaped common areas and amenities.",
    longDescription:
      "This project involved the development of a residential estate, featuring a mix of single-family homes and townhouses, with landscaped common areas and amenities.",
    details: [
      "Development of a residential estate",
      "Mix of single-family homes and townhouses",
      "Landscaped common areas and amenities",
      "completed within the space of 12 months",
      "Project cost: #10,000,000",
    ],
    rating: 4.8,
    serviceType: "Residential Construction",
  },
  {
    id: 4,
    slug: "campus-hostel",
    name: "campus Hostel",
    image: "/project4.jpg",
    description:
      "A modern campus hostel designed to provide comfortable and convenient accommodation for students, with shared facilities and communal spaces.",
    longDescription:
      "This project involved the construction of a modern campus hostel designed to provide comfortable and convenient accommodation for students, with shared facilities and communal spaces.",
    details: [
      "Construction of a modern campus hostel",
      "Comfortable and convenient accommodation for students",
      "Shared facilities and communal spaces",
      "completed within the space of 8 months",
      "Project cost: #4000,000",
    ],
    rating: 4.2,
    serviceType: "Residential Construction",
  },
  {
    id: 5,
    slug: "residential-building",
    name: "Residential Building",
    image: "/project5.jpg",
    description:
      "A residential building project, featuring a mix of apartments and condominiums, with modern amenities and sustainable design features.",
    longDescription:
      "This project involved the construction of a residential building, featuring a mix of apartments and condominiums, with modern amenities and sustainable design features.",
    details: [
      "Construction of a residential building",
      "Mix of apartments and condominiums",
      "Modern amenities and sustainable design features",
      "completed within the space of 10 months",
      "Project cost: #8,000,000",
    ],
    rating: 4.6,
    serviceType: "Residential Construction",
  },
  {
    id: 6,
    slug: "family-house-construction",
    name: "Modern Family House construction",
    image: "/project6.jpg",
    description:
      "A modern family house construction project, featuring an open floor plan, energy-efficient design, and high-quality materials for a comfortable and stylish living space.",
    longDescription:
      "This project involved the construction of a modern family house, featuring an open floor plan, energy-efficient design, and high-quality materials for a comfortable and stylish living space.",
    details: [
      "Construction of a modern family house",
      "Open floor plan, energy-efficient design, and high-quality materials",
      "Comfortable and stylish living space",
      "completed within the space of 9 months",
      "Project cost: #6,000,000",
    ],
    rating: 4.7,
    serviceType: "Residential Construction",
  },
  {
    id: 7,
    slug: "modern-duplex-construction",
    name: "Modern Duplex Construction",
    image: "/project7.jpg",
    description:
      "A modern duplex construction project, featuring two separate living units with shared amenities and a contemporary design aesthetic.",
    longDescription:
      "This project involved the construction of a modern duplex, featuring two separate living units with shared amenities and a contemporary design aesthetic.",
    details: [
      "Construction of a modern duplex",
      "Two separate living units with shared amenities",
      "Contemporary design aesthetic",
      "completed within the space of 7 months",
      "Project cost: #5,000,000",
    ],
    rating: 4.3,
    serviceType: "Residential Construction",
  },
  {
    id: 8,
    slug: "executive-duplex-mansion",
    name: "Executive Duplex Mansion",
    image: "/project8.jpg",
    description:
      "An executive duplex mansion construction project, featuring luxurious design elements, high-end finishes, and spacious living areas for a sophisticated lifestyle.",
    longDescription:
      "This project involved the construction of an executive duplex mansion, featuring luxurious design elements, high-end finishes, and spacious living areas for a sophisticated lifestyle.",
    details: [
      "Construction of an executive duplex mansion",
      "Luxurious design elements, high-end finishes, and spacious living areas",
      "Sophisticated lifestyle for discerning clients",
      "completed within the space of 15 months",
      "Project cost: #15,000,000",
    ],
    rating: 4.9,
    serviceType: "Residential Construction",
  },
  {
    id: 9,
    slug: "family-house",
    name: "Family House",
    image: "/project9.jpg",
    description:
      "A family house construction project, featuring a traditional design with modern amenities, including a spacious backyard and a cozy interior for comfortable family living.",
    longDescription:
      "This project involved the construction of a family house, featuring a traditional design with modern amenities, including a spacious backyard and a cozy interior for comfortable family living.",
    details: [
      "Construction of a family house",
      "Traditional design with modern amenities",
      "Spacious backyard and cozy interior",
      "completed within the space of 9 months",
      "Project cost: #6,000,000",
    ],
    rating: 4.4,
    serviceType: "Residential Construction",
  },
  {
    id: 10,
    slug: "4-bedroom-family-flat",
    name: "4-Bedroom Family Flat",
    image: "/project10.jpg",
    description:
      "A 4-bedroom family flat construction project, featuring a functional layout, modern design elements, and high-quality materials for a comfortable and stylish living space.",
    longDescription:
      "This project involved the construction of a 4-bedroom family flat, featuring a functional layout, modern design elements, and high-quality materials for a comfortable and stylish living space.",
    details: [
      "Construction of a 4-bedroom family flat",
      "Functional layout, modern design elements, and high-quality materials",
      "Comfortable and stylish living space",
      "completed within the space of 8 months",
      "Project cost: #7,000,000",
    ],
    rating: 4.5,
    serviceType: "Residential Construction",
  },
  {
    id: 11,
    slug: "family-deluxe-house",
    name: "Family Deluxe House",
    image: "/project11.jpg",
    description:
      "A family deluxe house construction project, featuring a spacious and luxurious design with high-end finishes, modern amenities, and a beautiful outdoor living area for a comfortable and stylish lifestyle.",
    longDescription:
      "This project involved the construction of a family deluxe house, featuring a spacious and luxurious design with high-end finishes, modern amenities, and a beautiful outdoor living area for a comfortable and stylish lifestyle.",
    details: [
      "Construction of a family deluxe house",
      "Spacious and luxurious design with high-end finishes",
      "Modern amenities and beautiful outdoor living area",
      "completed within the space of 12 months",
      "Project cost: #12,000,000",
    ],
    rating: 4.8,
    serviceType: "Residential Construction",
  },
  {
    id: 12,
    slug: "modern-goverment-hospital",
    name: "Modern Goverment Hospital",
    image: "/project12.jpg",
    description:
      "A modern government hospital construction project, featuring state-of-the-art medical facilities, energy-efficient design, and a patient-centered layout for optimal healthcare delivery.",
    longDescription:
      "This project involved the construction of a modern government hospital, featuring state-of-the-art medical facilities, energy-efficient design, and a patient-centered layout for optimal healthcare delivery.",
    details: [
      "Construction of a modern government hospital",
      "State-of-the-art medical facilities",
      "Energy-efficient design",
      "Patient-centered layout for optimal healthcare delivery",
      "completed within the space of 18 months",
      "Project cost: #18,000,000",
    ],
    rating: 4.7,
    serviceType: "Healthcare Construction",
  },
  {
    id: 13,
    slug: "car-sales-business",
    name: "Car Sales Business",
    image: "/project15.jpg",
    description:
      "Buying and selling of cars, including new and used vehicles, with a focus on providing high-quality customer service and competitive pricing.",
    longDescription:
      "This project involved the operation of a car sales business, focusing on providing high-quality customer service and competitive pricing for both new and used vehicles.",
    details: [
      "Buying and selling of cars, including new and used vehicles",
      "Focus on providing high-quality customer service and competitive pricing",
      "Bought and repaired over 1 vehicles in the space of 4 months",
      "Each car was sold within a week after repair",
      "car sales business generated over #10,000,000 in revenue within the first 6 months of operation",
    ],
    rating: 4.6,
    serviceType: "Automotive Sales",
  },
  {
    id: 14,
    slug: "government-paper-contract",
    name: "Government Paper Contract",
    image: "/project14.jpg",
    description:
      "A government paper contract project, involving the procurement of various supplies and services for public sector organizations.",
    longDescription:
      "This project involved the procurement of various supplies and services for public sector organizations.",
    details: [
      "Procurement of various supplies and services for public sector organizations",
      "Successfully secured multiple government contracts for paper supply and related services",
      "Provided high-quality products and services to government agencies, resulting in repeat business and positive feedback",
      "Generated over #10,000,000 in revenue from government contracts within the first year of operation",
      "eligibility of this contract help secure more contracts in the private sector, leading to a significant increase in overall business revenue and growth",
    ],
    rating: 4.5,
    serviceType: "Government Contracts",
  },
  {
    id: 15,
    slug: "autocad-stadium-design",
    name: "Stadium Autocad Design",
    image: "/project16.jpg",
    description:
      "A large-scale architectural project focused on the design and visualization of a modern stadium using Autocad software.",
    longDescription:
      "This project involved creating detailed architectural drawings and 3D visualizations for a general stadium design. The work emphasized precision, functionality, and aesthetics, ensuring the stadium met international standards for safety, capacity, and user experience.",
    details: [
      "Produced comprehensive Autocad drawings covering structural, seating, and facility layouts",
      "Integrated modern design principles to enhance crowd flow and safety",
      "Delivered high-quality 3D visualizations for client presentations and approvals",
      "Collaborated with engineers and contractors to align design with construction feasibility",
      "Helped secure government and private sector interest in large-scale infrastructure projects",
    ],
    rating: 4.7,
    serviceType: "Architectural Design",
  },
  {
    id: 16,
    slug: "drafted-building-sketches",
    name: "Drafted Building Sketches",
    image: "/project17.jpg",
    description:
      "An architectural drafting project involving the creation of building sketches and layouts using Autocad.",
    longDescription:
      "This project focused on drafting precise building sketches that served as the foundation for construction planning. The Autocad designs provided clarity on structural dimensions, spatial arrangements, and aesthetic considerations, ensuring smooth communication between architects, engineers, and contractors.",
    details: [
      "Created detailed Autocad sketches for residential and commercial building projects",
      "Ensured accuracy in dimensions and alignment with construction standards",
      "Provided clear visual references for contractors and project stakeholders",
      "Enhanced efficiency in project approvals and construction workflows",
      "Contributed to successful completion of multiple building projects with positive client feedback",
    ],
    rating: 4.6,
    serviceType: "Architectural Drafting",
  },
];
