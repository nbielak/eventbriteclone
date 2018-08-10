import React from 'react';
import {withRouter} from 'react-router-dom';
import LookUpFormContainer from './look_up_form_container';

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
    e.preventDefault();
    this.props.lookUpUser(this.state.email).then(res => {
      if (res.found.found === "found") {
        return this.props.history.push("/signin/login");
      } else if (res.found.found === "not found") {
        return this.props.history.push("/signin/signup");
      } else {
        return (<LookUpFormContainer email={res.found.email} found={null}/>)
      }
    })
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

export default LookUpForm;
