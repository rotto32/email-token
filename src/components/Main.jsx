import React from 'react';


class Main extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      email: '',
      token: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  render () {
    return (
      <div>
        <h1>Generate Email Token</h1>
        <form>
          Enter email: <br />
          <input type="email" name="email" className="email" onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default Main;
