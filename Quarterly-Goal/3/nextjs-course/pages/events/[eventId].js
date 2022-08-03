import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import EventSummry from "../../components/event-detail/event-summary";
import EventLogisticis from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <p>No Event Found!</p>;
  }

  return (
    <Fragment>
      <EventSummry title={event.title} />
      <EventLogisticis
        date={event.date}
        image={event.image}
        address={event.location}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
export default EventDetailPage;
