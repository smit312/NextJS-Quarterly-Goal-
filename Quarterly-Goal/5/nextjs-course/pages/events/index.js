import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";
function AllEventsPage(props) {
  const router = useRouter();
  const { events } = props;
  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
