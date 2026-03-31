export type SERVICES = {
    slug?: string;
    id: number;
    title: string;
    description: string;
    imageUrl: string;
};

export const services: SERVICES[] = [
    {
        slug: "building-construction",
        id: 1,
        title: "Building Construction",
        description: "We provide high-quality building construction services for residential and commercial projects.",
        imageUrl: "/construction.jpg"
    },
    { 
        slug: "wholesales-retails",
        id: 2,
        title: "Wholesales & Retails",
        description: "We offer a wide range of products for wholesale and retail customers, ensuring competitive prices and excellent service.",
        imageUrl: "/wholesale.jpg"
    },
    {
        slug: "import-export",
        id: 3,
        title: "import & export",
        description: "We facilitate import and export services, connecting businesses globally and ensuring smooth transactions.",
        imageUrl: "/import_export.jpg"
    },
    {
        slug: "business-consulting",
        id: 4,
        title: "Business Consulting",
        description: "Our consulting services help businesses optimize their operations and achieve their goals.",
        imageUrl: "/consulting.jpg"
    },
    {
        slug: "it-consulting",
        id: 5,
        title: "IT consulting",
        description: "We provide IT consulting services to help businesses leverage technology for growth and efficiency.",
        imageUrl: "/it_consulting.jpg"
    }, 
    {
        slug: "government-contracts",
        id: 6,
        title: "Goverment contracts",
        description: "We assist businesses in securing government contracts, providing expertise in proposal development and compliance.",
        imageUrl: "/government_contracts.jpg"
    },
    {
        slug: "Architectural-design",
        id: 7,
        title: "Architectural design",
        description: "Our architectural design services create innovative and functional spaces that meet our clients' needs.",
        imageUrl: "/architectural_design.jpg"
    },
    {
        slug:"car sales",
        id: 8,
        title: "Car sales",
        description: "We offer a wide selection of vehicles for sale, providing quality and value to our customers.",
        imageUrl: "/car_sales.jpg"
    }
]