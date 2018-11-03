import React from 'react';
import { mount } from './setup';
import RelatedSongItem from '../client/src/components/RelatedSongItem';

describe('tests the RelatedSongItem component', () => {
  it('tests the mouseOn function', () => {
    const songData = {
      title: 'Qui laboriosam official',
      name: 'Testing name',
      album_img: 'http://www.google.com',
    };
    const wrapper = mount(<RelatedSongItem song={songData} />);
    wrapper.instance().mouseOn();
    const newState = wrapper.state().isHovered;
    expect(newState).toEqual(true);
  });

  it('tests the mouseOn function', () => {
    const songData = {
      title: 'Qui laboriosam official',
      name: 'Testing name',
      album_img: 'http://www.google.com',
    };
    const wrapper = mount(<RelatedSongItem song={songData} />);
    wrapper.instance().mouseOff();
    const newState = wrapper.state().isHovered;
    expect(newState).toEqual(false);
  });
});
