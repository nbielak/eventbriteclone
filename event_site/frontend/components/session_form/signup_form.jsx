import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
        this.setState({['field']: e.target.value})
    };
  }

  handleSubmit(e) {
    this.state.signup(this.state)
  }

  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}

export default SignupForm;
