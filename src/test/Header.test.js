import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/header/Header';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
