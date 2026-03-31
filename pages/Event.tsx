import EventCard from "@/component/EventCard";
import { events } from "@/data/events";

const Event = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Upcoming Events */}
      <section className="p-6 md:p-16">
        <h1 className="text-3xl md:text-5xl font-bold  border-b pb-4 mb-8">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.filter(event => event.category === "upcoming").map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              description={event.description}
              link={event.link}
            />
          ))}
        </div>
      </section>

      {/* Ongoing Events */}
      <section className="p-6 md:p-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 border-b pb-4 mb-8">
          Ongoing Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.filter(event => event.category === "ongoing").map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              description={event.description}
              link={event.link}
            />
          ))}
        </div>
      </section>

      {/* Concluded Events */}
      <section className="p-6 md:p-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 border-b pb-4 mb-8">
          Concluded Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.filter(event => event.category === "completed").map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              description={event.description}
              link={event.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Event;