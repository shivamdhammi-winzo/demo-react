import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

interface Meetups {
  image: string;
  title: string;
  address: string;
  description: string;
  id: number;
}

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [loadedMeetups, setLoadedMeetups] = useState<Meetups[]>([]);

  useEffect(() => {
    console.log("Going to fetch");
    setIsLoading(true);
    fetch("https://meet-up-demo-da528-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetUps = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetUps.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetUps);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetups;
