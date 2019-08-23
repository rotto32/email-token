import React from 'react';
import axios from "axios";

class Main extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      email: '',
      token: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/token', {email: this.state.email})
      .catch((err)=>{
        console.log(err);
      })
      .then((res) => {
        console.log(res.body);
        this.setState({
          token: res.body,
        })
      })

  }

  render () {
    return (
      <div>
        <h1>Generate Email Token</h1>
        <form>
          Enter email: <br />
          <input type="email" name="email" onChange={this.handleChange}/>
          <br />
          <button onClick={this.handleSubmit}>Generate Token</button>
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
