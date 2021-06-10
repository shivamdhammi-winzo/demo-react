import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

interface MeetupData {
  tittle: string | undefined;
  image: string | undefined;
  address: string | undefined;
  description: string | undefined;
}

const NewMeetup = () => {
  const history = useHistory();
  function onAddMeetupHandler(meetupData: MeetupData) {
    fetch(
      "https://meet-up-demo-da528-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
