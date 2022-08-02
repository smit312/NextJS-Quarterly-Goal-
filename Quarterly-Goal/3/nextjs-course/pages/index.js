import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
  const FeaturedEvents = getFeaturedEvents;
  return (
    <div>
      <h1> Home Page </h1>
      <EventList items={FeaturedEvents} />
    </div>
  );
}

export default HomePage;
