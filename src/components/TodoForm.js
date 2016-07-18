import React from 'react';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

export default class TodoForm extends React.Component {

  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
  }

  addItem(evt) {
    let titleInput = this.refs.title;
    this.props.createItem(titleInput.value);
    titleInput.value = '';

    evt.preventDefault();
  }

  render() {
    return <form onSubmit={this.addItem} className="todo-form">
      <input type="text" ref = "title" name = "title"/>
    </form>
  }
}
