import { useRouter } from "next/router";
import { Fragment } from "react/cjs/react.production.min";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import { getEventById } from "../../dummy-data";
import ErrorAlert from "../../components/ui/error-alert";

function EventDetailPage() {
  const router = useRouter();
  const event = getEventById(router.query.eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>Invalid filter. Please adjust your values!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
