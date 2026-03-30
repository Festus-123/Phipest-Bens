import EventCard from "@/component/EventCard";
import { events } from "@/data/events";

const Event = () => {
    return (
        <div>
            {/* Event content goes here */}
            <div className="p-8 md:p-16 flex flex-col gap-4">
            <h1 className="text-3xl md:text-7xl border-b pb-4 border-gray-300 font-bold ">
                Upcoming Events
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {events.filter(event => event.category === "upcoming").map((event, index) => (
                    <EventCard
                        key={index}
                        title={event.title}
                        date={event.date}
                        description={event.description}
                        link={event.link}
                    />
                )) }
            </div>
            </div>


            {/*Concluded Events */}
            <div className="p-8 md:p-16 flex flex-col gap-4">
                <h1 className="text-3xl md:text-7xl font-bold border-b border-gray-200 pb-4 ">Concluded Events</h1>
                <div className="grid grid0-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.filter(event => event.category === "completed").map((event, index) => (
                        <EventCard
                            key={index}
                            title={event.title}
                            date={event.date}
                            description={event.description}
                            link={event.link}
                        />
                    )) }
                </div>
            </div>
        </div>
    );
}

export default Event;