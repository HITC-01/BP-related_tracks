import React from 'react';
import { shallow } from './setup';
import LikeButton from '../client/src/components/LikeButton';

describe('tests the like button component', () => {
  it('defaults to a falsy state', () => {
    const wrapper = shallow(<LikeButton />);
    const currentState = wrapper.state().isClicked;
    expect(currentState).toEqual(false);
  });

  it('changes state when clicked', () => {
    const wrapper = shallow(<LikeButton />);
    const likebtn = wrapper.find('.likeButton');
    likebtn.simulate('click');
    const newState = wrapper.state().isClicked;
    expect(newState).toEqual(true);
  });
});
