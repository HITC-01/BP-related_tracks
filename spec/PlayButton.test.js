import React from 'react';
import { shallow } from './setup';
import PlayButton from '../client/src/components/PlayButton';

describe('tests the play button component', () => {
  it('defaults to a falsy state', () => {
    const wrapper = shallow(<PlayButton />);
    const currentState = wrapper.state().isClicked;
    expect(currentState).toEqual(false);
  });

  it('changes class between play/pause when clicked', () => {
    const wrapper = shallow(<PlayButton />);
    const playBtn = wrapper.find('.playButton');
    playBtn.simulate('click');
    const newState = wrapper.state().isClicked;
    expect(newState).toEqual(true);
  });
});
