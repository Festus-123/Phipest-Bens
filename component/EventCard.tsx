import Link from "next/link";

export type EventCardProps = {
  title: string;
  date: string;
  description: string;
  link: string;
};

const EventCard = ({ title, date, description, link }: EventCardProps) => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-xl h-60 max-h-65">
      <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-500 mb-4">{date}</p>
      <p className="text-gray-700 mb-6 line-clamp-3">{description}</p>
      <Link 
        href={link} 
        className="absolute right-5 bottom-5 px-4 py-2 rounded-md bg-linear-to-r from-blue-400 to-blue-500 text-white font-medium hover:bg-amber-700 transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
};

export default EventCard;