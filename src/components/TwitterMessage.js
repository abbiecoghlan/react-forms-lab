import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: "",

    };
  }

  handleChange = (e) => { 


    this.setState({
        tweet: e.target.value,

    
})}


  render() {
    let characterCount = this.props.maxChars
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} type="text" name="message" id="message" value={this.state.tweet} />
        <p>Remaining Characters = {characterCount - this.state.tweet.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
