import React from 'react';

function AttendeesList (props) {
  const data = props.data;
  let expert = []
  let intermediate = []
  let beginner = []
  for (let counter = 0; counter < props.data.length; counter++){
    if (data[counter].skillLevel === "expert") {
      expert.push((data[counter].firstName) + " " + data[counter].lastName)
      console.log(data[counter].firstName)
    }

    else if (data[counter].skillLevel === "intermediate") {
      intermediate.push((data[counter].firstName) + " " + data[counter].lastName)
      console.log(data[counter].firstName)
    }

    else if (data[counter].skillLevel === "beginner") {
      beginner.push((data[counter].firstName) + " " + data[counter].lastName)
      console.log(data[counter].firstName)
    }
  }
  return (
    <div class = "attendees">
      <h2>Attendees</h2>
      <h3>Beginner</h3>
      {
      beginner.map((listItem) =>
        <div>{listItem}</div>
        )
      }
      <h3>Intermediate</h3>
      {
      intermediate.map((listItem) =>
        <div>{listItem}</div>
        )
      }
      <h3>Expert</h3>
      {
      expert.map((listItem) =>
        <div>{listItem}</div>
        )
      }
  </div>
  )

}

export default AttendeesList;
