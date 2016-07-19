import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }

  renderItems() {
    return this.props.items.map((item, itemKey) => {
      return <TodoItem
        title = {item.title}
        key = {`item${itemKey}`}
        id = {itemKey}
        remove = {this.removeItem}
      />
    });
  }

  removeItem(itemId) {
    this.props.removeItem(itemId);
  }

  render() {
    return <ul className = "todo-list">{this.renderItems()}</ul>
  }
}
