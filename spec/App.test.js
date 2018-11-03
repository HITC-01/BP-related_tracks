import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from './setup';
import { mount } from './setup';
import 'isomorphic-fetch';
import App from '../client/src/components/App';

describe('<App />', () => {
  test('Should render correctly', () => {
    const component = renderer.create(<App url="http://localhost:3002" />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  // test('adds songs to state', () => {
  //   const wrapper = mount(<App url="http://localhost:3002" />);
  //   const currentState = wrapper.debug();
  //   console.log(currentState);
  //   console.log(wrapper.state());
  //   expect(wrapper.find('.songDataPlaceholder')).toBeDefined();
  // });


});
