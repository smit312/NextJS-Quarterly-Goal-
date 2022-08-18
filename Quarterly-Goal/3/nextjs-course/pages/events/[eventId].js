import { Fragment } from "react";
import { getEventById, getAllEvents } from "../../helpers/api-util";
import EventSummry from "../../components/event-detail/event-summary";
import EventLogisticis from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
function EventDetailPage(props) {
  const event = props.selectedEvent;
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

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
  };
}
export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default EventDetailPage;
