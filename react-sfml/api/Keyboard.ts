import Subscriber from '../utils/subscriber';

const keyboardSubscription = new Subscriber();

const ON_KEY_PRESSED = 'onKeyPress';

export function SFML_KEY_PRESSED(key: string) {
  keyboardSubscription.publish(ON_KEY_PRESSED, key);
}

export default keyboardSubscription;
