import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function onAddMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
}

export default NewMeetupPage;

// 348. Adding the New Meetup Form
//
// For this NewMeetup Component we again create a function here a component function
// In components folder in NewMeetupPage ReactComponent we call a function "onAddMeetup" which we expect to get on the "onAddMeetup" prop ("props.onAddMeetup(meetupData)"). And to that function we then pass the collected meetup data (object "meetupData" with all the colleted data)
// Let's use that ReactComponent here.
// 1.1
// import "NewMeetupForm"
// And hence we might want to prepare function "onAddMeetup" - add "function onAddMeetupHandler() {}"
// And then pass a pointer this function to the "onAddMeetup" prop: "return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;"
// This function should be executed eventually from inside that component, when the form is submitted as it turns out.
// Here, we then get our "enteredMeetupData".
// Now we can visit "http://localhost:3000/new-meetup" and see form for adding Meetup!
// 348. Adding the New Meetup Form
