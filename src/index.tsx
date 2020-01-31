import React from 'react';

import { AppRegistry, Box } from '../react-sfml';

class App extends React.Component {
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
