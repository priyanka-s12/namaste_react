import React from 'react';
import User from './User';
// import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

//making About as class based component

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log('Parent Constructor');
  }

  componentDidMount() {
    // console.log('Parent component did mount');
  }
  render() {
    // console.log('Parent Render');
    return (
      <>
        <h1>This is namaste react web series</h1>
        {/* below is not hook, its component */}
        <div>
          Logged in user:
          <UserContext.Consumer>
            {/* {(data) => console.log(data)} */}
            {({ loggedInUser }) => (
              <h2 className="font-bold">{loggedInUser}</h2>
            )}
          </UserContext.Consumer>
        </div>
        <div>
          Logged in user:
          <UserContext.Consumer>
            {/* {(data) => console.log(data)} */}
            {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
          </UserContext.Consumer>
        </div>
        {/* <UserClass name="Priyanka class" location="Pune" /> */}
        {/* <UserClass name="Child1 class " location="Pune" /> */}
        {/* <UserClass name="Child2 class " location="Mumbai" /> */}
        <User name="Priyanka function" location="Pune" />
      </>
    );
  }
}

// function About() {
//   return (
//     <>
//       <h1>This is namaste react web series</h1>
//       {/* <User name="Priyanka function" location="Pune" /> */}
//       <UserClass name="Priyanka class" location="Pune" />
//     </>
//   );
// }

export default About;
