import React from 'react';
import renderer from 'react-test-renderer';
import 'isomorphic-fetch';
import SCRelated from '../client/src/components/SCRelated';

describe('<SCRelated />', () => {
  test('Should render correctly', () => {
    const component = renderer.create(<SCRelated url="http://localhost:3002" />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
