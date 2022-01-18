import React from 'react';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //state needs to keep track of attendeeList.
      firstName : '',
      lastName : '',
      email : '',
      shirtSize : '',
      experience : ''
    };

    this.setFirstName = this.setFirstName.bind(this);
  }
  setFirstName(target) {
    this.setState({firstName : target.value})
    console.log('Name change detected. New first name is: ' + this.state.firstName)
  }

  render() {
    return (
      <div className = "attendee-form">
        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text" onChange = {this.setFirstName} value={this.firstName}></input>
        </label>
        <label>Last Name:
          <input type="text"></input>
        </label>
        <label>Email Address:
          <input type="text"></input>
        </label>
        <label>Shirt Size: &nbsp;
        <select>
            <option value = "XS">XS</option>
            <option value = "S">S</option>
            <option value = "M">M</option>
            <option value = "L">L</option>
            <option value = "XL">XL</option>
            <option value = "XXL">XXL</option>
          </select>
        </label>
        <label>Experience Level: &nbsp;
          <select>
            <option value = "beginner">Beginner</option>
            <option value = "intermediate">Intermediate</option>
            <option value = "expert">Expert</option>
          </select>
        </label>
        <button>REGISTER</button>
      </div>
      )
    }
  }

export default RegisterForm;