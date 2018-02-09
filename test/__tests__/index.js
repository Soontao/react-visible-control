import React from 'react';
import renderer from "react-test-renderer";
import Test from '../Test';

test('render test', () => {
  const component = renderer.create(
    <Test />
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})