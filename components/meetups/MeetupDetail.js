import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;

// 351. Adding Custom Components & CSS Modules
//
// CAME FROM pages/[meetupId]/index.js
// 1.1
// Add props into Meetupdetail and "src={props}"
// "{props.title}" and others...

// COME BACK
// 351. Adding Custom Components & CSS Modules
