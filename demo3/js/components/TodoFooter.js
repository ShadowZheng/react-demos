/**
 * Created by azheng on 2/1/2016.
 */
import React from 'react';

class TodoFooter extends React.Component {
    render() {
        var itemLeft = this.props.allTodos.length;
        return (
            <footer id="footer">
                <span id="todo-count">
                    <strong>{itemLeft}</strong>
                </span>
            </footer>
        );
    }
}

export default TodoFooter;