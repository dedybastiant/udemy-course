import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventshandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventshandler} />
      <EventList items={events} />
    </div>
  );
}

export default EventsPage;
