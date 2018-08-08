import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  render() {
    return(
      <h1>{this.props.formType}</h1>
    );
  }
}

export default SessionForm;
