import React from "react";
import Count1 from "./classcomp/Count";
import Form1 from "./classcomp/Form";
import Count2 from "./funccomp/Count";
import "./styles.css";
class App extends React.Component {
  render() {
    return (
      <>
        <Count1 start={0} />
        <Form1 />
        <Count2 start={0} />
      </>
    );
  }
}
export default App;
