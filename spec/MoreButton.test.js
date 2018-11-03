import React from 'react';
import renderer from 'react-test-renderer';
import MoreButton from '../client/src/components/MoreButton';

describe('tests the more button component', () => {
  test('Should render correctly', () => {
    const component = renderer.create(<MoreButton />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
