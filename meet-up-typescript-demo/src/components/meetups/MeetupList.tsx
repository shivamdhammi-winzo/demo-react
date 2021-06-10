import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

interface Meetups {
  image: string;
  title: string;
  address: string;
  description: string;
  id: number;
}

interface Props {
  meetups: Meetups[];
}

const MeetupList: React.FC<Props> = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
