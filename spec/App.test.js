import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from './setup';
// import { mount } from './setup';
import 'isomorphic-fetch';
import App from '../client/src/components/App';

describe('<App />', () => {
  test('Should render correctly', () => {
    const component = renderer.create(<App url="http://localhost:3002" />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  // it('adds songs to state', () => {
  //   const wrapper = shallow(<App url="http://localhost:3002" />);
  //   wrapper.setState({ songs: {} });
  //   wrapper.mount();
  //   const currentState = wrapper.state().songs;
  //   expect(currentState.length).toBeGreaterThan(0);
  // });
});
