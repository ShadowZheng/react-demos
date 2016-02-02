/**
 * Created by azheng on 2/1/2016.
 */
import React from 'react';
import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';
import TodoList from './TodoList';
import TodoStore from '../stores/TodoStore';

function getTodoState() {
    return {
        allTodos: TodoStore.getAll(),
        areAllComplete: TodoStore.areAllComplete()
    }
}

require('../../css/app.css');

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = getTodoState();
    }
    componentDidMount() {
        TodoStore.addChangeListener(this._onChange.bind(this));
    }
    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange.bind(this));
    }
    _onChange() {
        this.setState(getTodoState());
    }
    render() {
        return (
          <div>
              <TodoHeader />
              <TodoList allTodos={this.state.allTodos} areAllComplete={this.state.areAllComplete} />
              <TodoFooter allTodos={this.state.allTodos} />
          </div>
        );
    }
}

export default TodoApp;