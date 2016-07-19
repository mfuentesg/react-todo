import React from 'react';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove() {
    this.props.remove(this.props.id);
  }

  render() {
    return <li className = "todo-item">
      {this.props.title}
      <a href = "#" onClick = {this.remove}>x</a>
    </li>
  }
}

TodoItem.defaultProps = {
  id: null,
  state: 'active',
  title: null
};
