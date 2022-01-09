import React from 'react';
import AttendeesList from './AttendeesList.jsx'
import RegisterForm from './RegisterForm.jsx'
const axios = require('axios');

let attendees = [];

function dataExtractor() {
  const dataPromise = axios.get('http://localhost:3000/attendees')
  const data = await dataPromise.then((res) => attendees = res.data)
  return data;
}

function App () {
  return (
  <div>
  <head>
    <title>JS Meetup</title>
  </head>
    <div class = "main">
      <RegisterForm />
      <AttendeesList attendees = {data.attendees}/>
    </div>
  </div>
  )

}

export default App;



