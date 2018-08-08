import React from 'react';

class SessionForm extends React.Component {
  constructor {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
}

export default SessionForm;
