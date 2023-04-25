import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
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

/////////////////////////////////

// 349. The "_app.js" File & Layout Wrapper
//
// Components in "layout" folder gves us a general layout and also a main navigation bar, which holds some list items with links, let's use that!
// "Layout" component is built such that we can wrap it around other components, so that we can wrap it around our content that should be framed by that layout because layout, this component uses props children to take what's between the openiing and closing layout text and wrap this component around that content.
// That means we can wrap "meetup" list with "Layout" Component. "return <Layout><MeetupList meetups={DUMMY_MEETUPS} /></Layout>;"
// If we do that, we get an error! ("Link is not defined")
// This error because in that "MainNavigation.js" Component, I'm using "Link" Component but I'm not importing it deliberately. Let's fix it!
// 1.1
// import and add "href", coz "Next.js" wants this ref prop
// Now we want to have this NAVIGATION menu on "NewMeetup" page as well
// For that we can also wrap "Layout" around our content on a NewMeetup Page! But this is cumbersome for big applications!~
// And that's now where "_app.js" files become important!!!

// GO TO _app.js --- >>>
// 349. The "_app.js" File & Layout Wrapper
