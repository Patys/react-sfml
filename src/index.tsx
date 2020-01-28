// @ts-nocheck
import React from 'react';

import { AppRegistry } from '../react-sfml/index';

class App extends React.Component {
  render() {
    return (
      <>
        <div width={500} height={100} x={100} y={50} />
        <div width={20} height={20} x={200} y={300} />
      </>
    );
  }
}

AppRegistry.render(<App />);
