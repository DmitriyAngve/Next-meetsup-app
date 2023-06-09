import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
      title="First Meetup"
      address="Street 5, Some City!"
      description="This is a first meetup!"
    />
  );
}

export default MeetupDetails;

// 350. Using Programmatic (Imperative) Navigation
//
// Now goal - "Show Details" button!
// First of all need a "<Link>".
// Look at MeetupItem.js -> there isn't "<Link>".
// 1.1
// Alternative approach: create a function here (MeetupItem.js), a fucntion which will then navigate us away. "function showDetailsHandler() {}"
// And now we connect this button with this function: "<button onClick={showDetailsHandler}>Show Details</button>"
// And inside this function we wanna navigate programatically by using "useRouter" hook.
// And call inside the Component, not inside the function (is a React hook) "const router = useRouter();"
// And this "router" object we can use in the "showDetailsHandler" function to navigate programatically.
// "router.query..." query here gives us access to all that data that might be part of the URL, for a dynamic page, but here we have methods to navigate programatically.
// "router.push()" - this "push" pushes a new page onto the stack of pages and it's a equvialent of using the "<Link>" Component.
// "router.push("/meetupId")" because "/meetupId" s something we get why via props because when we rendered that meetup list, we passed the ID prop into "MeetupItem". BUT we can pass dynamic by using "props.id"
// "router.push("/" + props.id)" "props.id" it's a "id={meetup.id}" from "MeetupList.js" where we use "<MeetupItem />" Component ("<MeetupItem   key={meetup.id} id={meetup.id}")
// This is lead us to "/ + specific ID" of this meetup item.
// After all that we could also render a <"Link>" and construct the link path as an alternative.
// 350. Using Programmatic (Imperative) Navigation

///////////////////////////////

// 351. Adding Custom Components & CSS Modules
//
// For now I'll add a new functional Component inside of that "[meetupId]" page.
// Create new Component MeetupDetail.js and grap this code to there.

// GO TO Meetupdetail.js --- >>>

// BACK
// 1.2
// Add "<Meetupdetail />"
// And now we just need to pass that data, which we expect in that component through props into that "MeetupDetail" Component.
// Add all props.
//
// 351. Adding Custom Components & CSS Modules
