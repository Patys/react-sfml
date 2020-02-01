// @ts-nocheck
import ReactReconciler from 'react-reconciler';
import { traceWrap } from './utils/traceWrap';

const rootHostContext = {};
const childHostContext = {};

const hostConfig = {
  now: Date.now,
  getRootHostContext: () => {
    return rootHostContext;
  },
  prepareForCommit: () => {},
  resetAfterCommit: () => {},
  getChildHostContext: () => {
    return childHostContext;
  },
  shouldSetTextContent: (type, props) => {
    return false;
  },
  /**
   This is where react-reconciler wants to create an instance of UI element in terms of the target. Since our target here is the DOM, we will create document.createElement and type is the argument that contains the type string like div or img or h1 etc. The initial values of domElement attributes can be set in this function from the newProps argument
   */
  createInstance: (type, newProps, rootContainerInstance, _currentHostContext, workInProgress) => {
    // Here we add elements to the app
    const element = { type };

    if (type === 'Box') {
      const id = SFML_CREATE_ELEMENT(newProps.width, newProps.height, newProps.x, newProps.y);
      console.log(id);
    }

    return element;
  },
  createTextInstance: text => {
    // TODO: create SFML text
    return null;
  },
  appendInitialChild: (parent, child) => {
    // parent.appendChild(child);
  },
  appendChild(parent, child) {
    // parent.appendChild(child);
  },
  finalizeInitialChildren: (element, type, props) => {},
  supportsMutation: false,
  appendChildToContainer: (parent, child) => {
    // parent.appendChild(child);
  },
  prepareUpdate(element, oldProps, newProps) {
    return true;
  },
  commitUpdate(element, updatePayload, type, oldProps, newProps) {
    // TODO: upodate SFML views

    // Object.keys(newProps).forEach(propName => {
    //   const propValue = newProps[propName];
    //   if (propName === 'children') {
    //     if (typeof propValue === 'string' || typeof propValue === 'number') {
    //       domElement.textContent = propValue;
    //     }
    //   } else {
    //     const propValue = newProps[propName];
    //     domElement.setAttribute(propName, propValue);
    //   }
    // });
  },
  commitTextUpdate(textInstance, oldText, newText) {
    // TODO: upodate SFML text
    // textInstance.text = newText;
  },
  removeChild(parentInstance, child) {
    // parentInstance.removeChild(child);
  }
};

const ReactReconcilerInst = ReactReconciler(traceWrap(hostConfig));

export default {
  render: (reactElement) => {
    try {
      // Create a root Container if it doesnt exist

      const isAsync = false;
      const element = ReactReconcilerInst.createContainer({}, isAsync, false);

      // update the root Container
      return ReactReconcilerInst.updateContainer(reactElement, element, null, () => undefined);
    } catch (e) {
      console.log('error');
      console.log(e.stack);
      console.log(e);
    }
  }
}
