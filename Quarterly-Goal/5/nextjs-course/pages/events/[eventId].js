import { Fragment } from "react";
import Head from "next/head";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import EventSummry from "../../components/event-detail/event-summary";
import EventLogisticis from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
function EventDetailPage(props) {
  const event = props.selectedEvent;
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
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
    revalidate: 30,
  };
}
export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default EventDetailPage;
