import React from 'react';

import { AppRegistry, Box, Keyboard } from '../react-sfml';

class App extends React.Component {
  constructor(props: any) {
    super(props)
    Keyboard.subscribe('onKeyPress', this.onKeyPress, this);
  }

  onKeyPress(key: string) {
    console.log(key);
  }

  render() {
    return (
      <>
        <Box width={500} height={100} x={100} y={50} />
        <Box width={20} height={20} x={200} y={300} />
      </>
    );
  }
}

AppRegistry.render(<App />);
