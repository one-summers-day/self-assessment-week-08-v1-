import React from 'react';

function AttendeesList (props) {
  return (
    <div class="attendee-form">
      <h2>Register Attendee</h2>
      <label>First Name:
        <input type="text"></input>
      </label>
      <label>Last Name:
        <input type="text"></input>
      </label>
      <button>REGISTER</button>
    </div>
  )

}

export default AttendeesList;

// <!DOCTYPE html>
// <html>
// <head>
//   <title>JS Meetup</title>
//   <link rel="stylesheet" href="style.css">
// </head>
// <body>
//   <h1>JS MEETUP</h1>
//   <div id="app">
//     <div class="main">
//       <div class="attendee-form">
//         <!-- NOTE: This does not contain all required fields. -->
//         <h2>Register Attendee</h2>
//         <label>First Name:
//           <input type="text"></input>
//         </label>
//         <label>Last Name:
//           <input type="text"></input>
//         </label>
//         <button>REGISTER</button>
//       </div>
//       <div class="attendees">
//         <h2>Attendees</h2>
//         <h3>Beginner</h3>
//         <div>Hoban Washburn</div>
//         <div>Jayne Cobb</div>
//         <h3>Intermediate</h3>
//         <div>Zoe Washburn</div>
//         <h3>Expert</h3>
//         <div>Malcom Reyolds</div>
//         <div>Kaylee Frye</div>
//       </div>
//     </div>
//   </div>
//   <script type="text/javascript" src="bundle.js"></script>
// </body>
// </html>

