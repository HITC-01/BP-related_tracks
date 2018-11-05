import React from 'react';
import { mount } from './setup';
import RelatedSongItem from '../client/src/components/RelatedSongItem';

describe('tests the RelatedSongItem component', () => {
  it('tests the isHovered function', () => {
    const songData = {
      title: 'Qui laboriosam official',
      name: 'Testing name',
      album_img: 'http://www.google.com',
    };
    const wrapper = mount(<RelatedSongItem song={songData} />);
    wrapper.instance().isHovered();
    const newState = wrapper.state().isHovered;
    expect(newState).toEqual(true);
  });
});
