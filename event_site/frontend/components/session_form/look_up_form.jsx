import React from 'react';
import {withRouter} from 'react-router-dom';

class LookUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => {
      this.setState({ email: e.target.value })
    };
  }

  handleSubmit(e) {
    this.props.lookUpUser(this.state.email)
  }

  render () {
    return (
      <div>
        <h1>LETS GET READY TO RUMBLE</h1>
        <form className="look-up-form" onSubmit={this.handleSubmit}>
          <label>Email Address
            <input onChange={this.update()} type="text" value={this.state.email} />
          </label>

          <input type="submit" value="Get Started" />
        </form>
      </div>
    )
  }
}

export default withRouter(LookUpForm);
