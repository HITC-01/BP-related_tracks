import React from 'react';
import renderer from 'react-test-renderer';
import ArtistModal from '../client/src/components/ArtistModal';

describe('tests the ArtistModal component', () => {
  test('Should render correctly', () => {
    // mouseOut
    const songData = {
      title: 'Qui laboriosam official',
      name: 'Testing name',
      album_img: 'http://www.google.com',
      followers: 53534,
    };
    const component = renderer.create(<ArtistModal song={songData} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
