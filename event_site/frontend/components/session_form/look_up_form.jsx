import React from 'react';
import {withRouter} from 'react-router-dom';

class LookUpForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = this.props;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => {
      this.setState({ email: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.lookUpUser(this.state.email)
  }

  render () {
    return (
      <div>
        <h1>Let's get started</h1>
        <form className="look-up-form" onSubmit={this.handleSubmit}>
          <label>Email Address
            <input onChange={this.update()} value={this.state.email || ''} placeholder="email"/>
          </label>

          <input type="submit" value="Get Started" />
        </form>
      </div>
    );
  }
}

export default withRouter(LookUpForm);
