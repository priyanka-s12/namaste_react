import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    // this.state = {
    //   count: 0,
    //   count2: 1,
    // };

    this.state = {
      userInfo: {
        name: 'Dummy User',
        email: 'dummy@example.com',
        role: 'Dummy Role',
      },
    };

    console.log(this.props.name + 'Child Constructor');
  }

  //   componentDidMount() {
  //     console.log(this.props.name + 'Child component did mount');
  //   }

  async componentDidMount() {
    console.log(this.props.name + 'Child component did mount');

    //api call
    const data = await fetch('https://api.escuelajs.co/api/v1/users/1');
    const json = await data.json();
    console.log(json);

    this.setState({ userInfo: json });

    // this.timer = setInterval(() => {
    //   console.log('Namaste React');
    // }, 1000);
  }

  componentDidUpdate() {
    console.log('Component did update');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    // clearInterval(this.timer);
  }

  render() {
    console.log(this.props.name + 'Child Render');
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;

    const { name, email, role } = this.state.userInfo;

    // debugger;
    return (
      <div className="user-card">
        <p>From Class based component</p>
        {/* <h1>Count: {count}</h1>
        <h1>Count2: {count2}</h1> */}
        {/* <button
          onClick={() =>
            this.setState({ count: count + 1, count2: count2 + 1 })
          }
        >
          Increment Counter
        </button> */}
        {/* <h2>Name: {name}</h2>
        <h3>Address: {location}</h3>
        <h4>Contact: priyanka.ss1</h4>
        <hr /> */}
        <h2>API data</h2>
        <h4>User name: {name}</h4>
        <h5>Email: {email}</h5>
        <h5>Role: {role}</h5>
      </div>
    );
  }
}

export default UserClass;
