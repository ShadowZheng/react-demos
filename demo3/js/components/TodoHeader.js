/**
 * Created by azheng on 2/1/2016.
 */
import React from 'react';
import TodoTextInput from './TodoTextInput';

class TodoHeader extends React.Component {
    render() {
        return (
            <header id="header">
                <h1>Todos</h1>
                <TodoTextInput id="new-todo" placeholder="What need to be done?" />
            </header>
        );
    }
}

export default TodoHeader;