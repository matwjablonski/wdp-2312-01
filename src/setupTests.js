import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import matchMediaPolyfill from 'mq-polyfill';

configure({ adapter: new Adapter() });

matchMediaPolyfill(window);

window.resizeTo = function resizeTo(width, height) {
  Object.assign(this, {
    innerWidth: width,
    innerHeight: height,
    outerWidth: width,
    outerHeight: height,
  }).dispatchEvent(new this.Event('resize'));
};
