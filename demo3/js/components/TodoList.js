/**
 * Created by azheng on 2/1/2016.
 */
import React from 'react';
import TodoItem from './TodoItem';
import TodoActions from '../actions/TodoActions';

class TodoList extends React.Component {
    _onToggleCompleteAll() {
        console.log(this.props.areAllComplete);
        TodoActions.toggleCompleteAll(this.props.areAllComplete);
    }
    render() {
        var todos = [];
        if (this.props.allTodos.length > 0) {
            this.props.allTodos.map((item) => {
                todos.push(<TodoItem key={item.id} todo={item} />);
            });
        }
        return (
            <section id="main">
                <input id="toggle-all" type="checkbox" checked={this.props.areAllComplete ? 'checked' : ''} onChange={this._onToggleCompleteAll.bind(this)} />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul id="todo-list">
                    {todos}
                </ul>
            </section>
        );
    }
}

export default TodoList;