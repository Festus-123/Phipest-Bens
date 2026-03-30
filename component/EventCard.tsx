import Link from "next/link";

export type EventCardProps = {
    title: string;
    date: string;
    description: string;
    link: string;
}

const EventCard = ({ title, date, description, link }: EventCardProps) => {
    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-sm text-gray-600 mb-4">{date}</p>
            <p className="text-gray-800 mb-4">{description}</p>
            <Link href={link} className="text-blue-500 hover:underline">
                Learn More
            </Link>
        </div>
    );
}



export default EventCard;