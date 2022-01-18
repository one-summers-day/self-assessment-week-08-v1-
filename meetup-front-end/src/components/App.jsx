import React from 'react';
import axios from 'axios';
import AttendeesList from './AttendeesList.jsx'
import RegisterForm from './RegisterForm.jsx'
// console.log(React.useState)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      //state needs to keep track of attendeeList.
      attendees : [],
    }
  }
  componentDidMount() {
    // GET all attendees by making a GET request to the JSON server.
    // console.log //small victory for mankind
    // store them in state
    // setState()
    axios.get("/attendees")
    .then((res) => {
      this.setState({attendees: res.data})
    }
    )
  }

  render(){
    return(
      <div className = "main">
        <RegisterForm />
        <AttendeesList data = {this.state.attendees} />
      </div>
    )
  }
}

export default App;
