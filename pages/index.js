import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/San_Francisco_Collage_Av9.jpg/800px-San_Francisco_Collage_Av9.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/San_Francisco_Collage_Av9.jpg/800px-San_Francisco_Collage_Av9.jpg",
    address: "Some address 6, 123456 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;

// 347. Outputting a List of Meetups
//
// We need to outputting regular ReactComponent ("MeetupList.js") stored in a component folder!
// 1.1
// Those compoennt stored in component folder will not be loaded as pages automatically. Instead, we can simply use them in the JSX code of other components, including page components. So to say, we can include this "MeetupList" on our main page, the "HomePage"
// First we need: "import MeetupList from "../components/meetups/MeetupList""
// Use it here with "meetups" prop.
// Now we can then construct some "DUMMY_MEETSUP" here (later from database)
// Then we pass it "DUMMY_MEETSUP" to prop.
//
// 347. Outputting a List of Meetups
