import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList(props) {
  const { items } = props;
  return (
    <div className={classes.list}>
      <ul>
        {items.map((event) => (
          <EventItem
            key={event.id}
            title={event.title}
            date={event.date}
            image={event.image}
            location={event.location}
            id={event.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default EventList;
