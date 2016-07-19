import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import createComponent from 'react-unit';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';

import TodoItem from '../src/js/components/TodoItem';

const test = addAssertions(tape, {jsxEquals});

test('A minimal test', (t) => {
  const todoItem = createComponent.shallow(<TodoItem />);

  t.equal('something', 'something', 'are not equals');
});

