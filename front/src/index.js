import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Client from './client';
  
class IOwnThis extends React.Component {
  
  constructor(props) {
    super(props);
    this.client = new Client();
    this.state = {
      ownData: "",
      lastClaimResult: "..."
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ownData: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.client.sendClaim(this.state.ownData, (err, res) => {
      if(err) {
        this.setState({lastClaimResult: "failed: " + err});
      } else if(res) {
        this.setState({lastClaimResult: this.state.ownData});  
      } else {
        this.setState({lastClaimResult: "Already owned :( '" + this.state.ownData + "'"});
      }
    });
  }

  render() {
    return (
      <div className="iownthis">
        <div>i own this</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.ownData} onChange={this.handleChange}></input>
          <input type="submit" value="Claim"></input>
        </form>
        <div>Last claim: {this.state.lastClaimResult}</div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <IOwnThis />,
  document.getElementById('root')
);
