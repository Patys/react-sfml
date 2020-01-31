import "core-js/stable";
import "regenerator-runtime/runtime";
import './utils/setUpConsoleLog';
import renderer from './renderer';

export { default as Box } from './components/Box/Box';

export const AppRegistry = renderer;

export default {
  AppRegistry
}
