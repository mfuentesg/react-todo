jest.unmock('../src/js/components/Todo');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import TodoItem from '../src/js/components/TodoItem';

describe('TodoItem', () => {
  it('some describe', () => {
    const itemTitle = 'my awesome title';
    const item = TestUtils.renderIntoDocument(
      <ul>  
        <TodoItem title = {itemTitle} key = {'item1'} id = {1} remove = {() => {}} />
      </ul>
    );
    
    const itemNode = ReactDOM.findDOMNode(item);

    expect(itemNode.textContent).toEqual(itemTitle);
  });
});

