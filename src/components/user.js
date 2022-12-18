import React, { Component } from 'react';

class User extends Component {
  static defaultProps = {
    name: "Bilgi Yok",
    salary: "Bilgi Yok",
    department: "Bilgi Yok"
  }
  render() {
    //Destructing
    const {name, department, salary} = this.props;
    return (
      <div>
        <ul>
          <li>İsim : {name}</li>
          <li>Departman: {department}</li>
          <li>Maaş: {salary}</li>
        </ul>
      </div>
    )
  }
}

export default User;
