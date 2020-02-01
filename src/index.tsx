import React from 'react';

import { AppRegistry, Box, Keyboard } from '../react-sfml';

class App extends React.Component {
  constructor(props: any) {
    super(props)
    Keyboard.subscribe('onKeyPress', this.onKeyPress.bind(this));

    this.state = {
      boxWidth: 10,
      boxHeight: 10,
    }
  }

  onKeyPress(key: string) {
    console.log(key);
    if (key === 'D') {
      this.setState({ boxWidth: this.state.boxWidth + 10 });
    }
    if (key === 'A') {
      this.setState({ boxWidth: this.state.boxWidth - 10 });
    }
    if (key === 'W') {
      this.setState({ boxHeight: this.state.boxHeight + 10 });
    }
    if (key === 'S') {
      this.setState({ boxHeight: this.state.boxHeight - 10 });
    }
  }

  render() {
    return (
      <>
        <Box width={500} height={100} x={100} y={50} />
        <Box width={this.state.boxWidth} height={this.state.boxHeight} x={200} y={300} />
      </>
    );
  }
}

AppRegistry.render(<App />);
