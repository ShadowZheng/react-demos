/**
 * Created by azheng on 2/1/2016.
 */
import React from 'react';
import TodoTextInput from './TodoTextInput';
import TodoActions from '../actions/TodoActions';

class TodoHeader extends React.Component {
    _onSave(text) {
        if (text.trim()) {
            TodoActions.createItem(text);
        }
    }
    render() {
        return (
            <header id="header">
                <h1>Todos</h1>
                <TodoTextInput id="new-todo" placeholder="What need to be done?" onSave={this._onSave.bind(this)} />
            </header>
        );
    }
}

export default TodoHeader;