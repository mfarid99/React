import React from "react";
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.start
    };
  }
  addOne() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  }

  render() {
    console.log(this.props);
    const above = <h1> It is 10 or above </h1>;
    const below = <h1> it is below 10 </h1>;

    return (
      <>
        {this.state.count < 10 ? below : above}
        <h1>{this.state.count}</h1>
        <button onClick={() => this.addOne()}>Add One</button>
      </>
    );
  }
}
export default Count;
