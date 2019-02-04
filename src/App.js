import React, { Component } from 'react';
import { Container } from 'reactstrap';

import NYTTracker from "./components/NYTTracker";

class App extends Component {
  render() {
    return (
      <Container>
		  <NYTTracker/>
	  </Container>
    );
  }
}

export default App;
