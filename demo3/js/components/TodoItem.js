/**
 * Created by azheng on 2/1/2016.
 */
import React from 'react';

class TodoItem extends React.Component {
    render() {
        var todo = this.props.todo;
        return (
            <li key={todo.id}>
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <label>{todo.text}</label>
                    <button className="destroy" />
                </div>
            </li>
        );
    }
}

export default TodoItem;