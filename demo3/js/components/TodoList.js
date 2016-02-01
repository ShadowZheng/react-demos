/**
 * Created by azheng on 2/1/2016.
 */
import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        var todos = [];
        if (this.props.allTodos.length > 0) {
            this.props.allTodos.map((item) => {
                todos.push(<TodoItem key={item.id} value={item.text} />);
            });
        }
        return (
            <section id="main">
                <input id="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul id="todo-list">
                    {todos}
                </ul>
            </section>
        );
    }
}

export default TodoList;