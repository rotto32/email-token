import React from 'react';
import axios from "axios";
import sha1 from "sha1";

class Main extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      email: '',
      token: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value,
      token: ''
    })
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({
      email:''
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      token: sha1(this.state.email)
    }, () => {
      axios
        .post("/token", { email: this.state.email, token: this.state.token })
        .catch(err => {
          console.log(err);
        })
    })
  }

  render () {
    return (
      <div>
        <h1>Generate Email Token</h1>
        <form>
          Enter email: <br />
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/> 
          <button onClick={this.state.handleClear}>Clear</button>
          <br />
          <button type="button" id="submit" onClick={this.handleSubmit}>Generate Token</button>
        </form>
        Token:
        <div>
          {this.state.token}
        </div>
      </div>
    );
  }
}

export default Main;
