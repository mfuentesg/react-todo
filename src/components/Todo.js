import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  render() {
    return (
      <div className="todo-app">
        <TodoForm 
          ref="todoForm"
          createItem = {this.addItem}
        />
        <TodoList ref="todoList" items = {this.state.items} removeItem = {this.removeItem}/>
      </div>
    );
  }

  removeItem(itemId) {
    let items = this.state.items;
    items.splice(itemId, 1);

    this.setState({items});
  }

  addItem(todoTitle) {
    if (todoTitle.length) {
      let items = this.state.items;
      
      items.push({title: todoTitle, state: 'active'});
      this.setState({items})
    }
  }
}
