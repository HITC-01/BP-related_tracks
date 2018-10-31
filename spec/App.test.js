import React from 'react';
import { mount } from './setup.js';
import renderer from 'react-test-renderer';
import "isomorphic-fetch";
import App from '../client/src/components/App.jsx';

describe('testing', () => {
  it('does stuff', () => {
    const test = 1000000;
    const wrapper = mount(<App />);
    // const instance = wrapper.instance();
    console.log(wrapper);
    expect(wrapper.abbreviateNumber(test)).toEqual('1.0M');
  });
});