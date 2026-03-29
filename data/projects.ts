
export type PROJECTS = {
    slug: string;
    id?: number
    name: string;
    image: string;
    description: string;
    rating: number;
    serviceType: string
}

export const projects: PROJECTS[] = [
    {
        id: 1,
        slug: "modern-office-renovation",
        name: "Modern Office Renovation",
        image: "/project1.jpg",
        description: "A complete renovation of a modern office space, including new furniture, lighting, and optiised layout for productivity and collaboration.",
        rating: 4.5,
        serviceType: "Office Renovation"
    }, 
    {
        id: 2,
        slug: "residential-hostel",
        name: "Residential Hostel",
        image: "/project2.jpg",
        description: "A modern residential hostel designed for comfort and convenience, featuring well-appointed rooms and shared facilities.",
        rating: 4.0,
        serviceType: "Residential Construction"
    }, 
    {
        id: 3,
        slug: "residential-estate",
        name: "Residential Estate",
        image: "/project3.jpg",
        description: "A residential estate development project, featuring a mix of single-family homes and townhouses, with landscaped common areas and amenities.",
        rating: 4.8,
        serviceType: "Residential Construction"
    },
    {
        id: 4,
        slug: "campus-hostel",
        name: "campus Hostel",
        image: "/project4.jpg",
        description: "A modern campus hostel designed to provide comfortable and convenient accommodation for students, with shared facilities and communal spaces.",
        rating: 4.2,
        serviceType: "Residential Construction"
    },
    {
        id: 5,
        slug: "residential-building",
        name: "Residential Building",
        image: "/project5.jpg",
        description: "A residential building project, featuring a mix of apartments and condominiums, with modern amenities and sustainable design features.",
        rating: 4.6,
        serviceType: "Residential Construction"
    }, 
    {
        id: 6,
        slug: "family-house-construction",
        name: "Modern Family House construction",
        image: "/project6.jpg",
        description: "A modern family house construction project, featuring an open floor plan, energy-efficient design, and high-quality materials for a comfortable and stylish living space.",
        rating: 4.7,
        serviceType: "Residential Construction"
    }, 
    {
        id: 7,
        slug: "modern-duplex-construction",
        name: "Modern Duplex Construction",
        image: "/project7.jpg",
        description: "A modern duplex construction project, featuring two separate living units with shared amenities and a contemporary design aesthetic.",
        rating: 4.3,
        serviceType: "Residential Construction"
    },
    {
        id: 8,
        slug: "executive-duplex-mansion",
        name: "Executive Duplex Mansion",
        image: "/project8.jpg",
        description: "An executive duplex mansion construction project, featuring luxurious design elements, high-end finishes, and spacious living areas for a sophisticated lifestyle.",
        rating: 4.9,
        serviceType: "Residential Construction"
    },
    {
        id: 9,
        slug: "family-house",
        name: "Family House",
        image: "/project9.jpg",
        description: "A family house construction project, featuring a traditional design with modern amenities, including a spacious backyard and a cozy interior for comfortable family living.",
        rating: 4.4,
        serviceType: "Residential Construction"
    },
    {
        id: 10,
        slug: "4-bedroom-family-flat",
        name: "4-Bedroom Family Flat",
        image: "/project10.jpg",
        description: "A 4-bedroom family flat construction project, featuring a functional layout, modern design elements, and high-quality materials for a comfortable and stylish living space.",
        rating: 4.5,
        serviceType: "Residential Construction"
    },
    {
        id: 11,
        slug: "family-deluxe-house",
        name: "Family Deluxe House",
        image: "/project11.jpg",
        description: "A family deluxe house construction project, featuring a spacious and luxurious design with high-end finishes, modern amenities, and a beautiful outdoor living area for a comfortable and stylish lifestyle.",
        rating: 4.8,
        serviceType: "Residential Construction"
    },
    {
        id: 12,
        slug: "modern-goverment-hospital",
        name: "Modern Goverment Hospital",
        image: "/project12.jpg",
        description: "A modern government hospital construction project, featuring state-of-the-art medical facilities, energy-efficient design, and a patient-centered layout for optimal healthcare delivery.",
        rating: 4.7,
        serviceType: "Healthcare Construction"
    }, 
    {
        id: 13,
        slug: "car-sales-business",
        name: "Car Sales Business",
        image: "/project13.jpg",
        description: "Buying and selling of cars, including new and used vehicles, with a focus on providing high-quality customer service and competitive pricing.",
        rating: 4.6,
        serviceType: "Automotive Sales"
    },
    {
        id: 14,
        slug: "government-paper-contract",
        name: "Government Paper Contract",
        image: "/project14.jpg",
        description: "A government paper contract project, involving the procurement of various supplies and services for public sector organizations.",
        rating: 4.5,
        serviceType: "Government Contracts"
    }
]