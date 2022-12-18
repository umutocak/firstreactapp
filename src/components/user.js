import React, { Component } from 'react';

class User extends Component {
  static defaultProps = {
    name: "Bilgi Yok",
    salary: "Bilgi Yok",
    department: "Bilgi Yok"
  }
  state = {
    isVisible: false
  }
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     isVisible : false
  //   }
  // }
  render() {
    //Destructing
    const {name, department, salary} = this.props;
    const {isVisible} = this.state;
    return (
      <div>
        {
          isVisible ? <ul>
          <li>İsim : {name}</li>
          <li>Departman: {department}</li>
          <li>Maaş: {salary}</li>
        </ul> : null
        }
      </div>
    )
  }
}

export default User;
