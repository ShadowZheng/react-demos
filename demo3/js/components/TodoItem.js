/**
 * Created by azheng on 2/1/2016.
 */
import React from 'react';
import TodoTextInput from './TodoTextInput';
import TodoActions from '../actions/TodoActions';
import classNames from 'classnames';

class TodoItem extends React.Component {
    constructor() {
        super();
        this.state = {
            isEdit: false
        };
    }
    _onRemove() {
        TodoActions.removeItem(this.props.todo.id);
    }
    _onDoubleClick() {
        this.setState({isEdit: true});
    }
    _onSave(text) {
        TodoActions.updateText(this.props.todo.id, text);
        this.setState({isEdit: false});
    }
    _onToggleComplete() {
        TodoActions.toggleComplete(this.props.todo);
    }
    render() {
        var todo = this.props.todo;
        var input;
        if (this.state.isEdit) {
            input = <TodoTextInput className="edit" onSave={this._onSave.bind(this)} value={todo.text} />;
        }
        return (
            <li className={classNames({
                'completed': todo.complete,
                'editing': this.state.isEdit
            })} key={todo.id}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={todo.complete} onChange={this._onToggleComplete.bind(this)}/>
                    <label onDoubleClick={this._onDoubleClick.bind(this)}>{todo.text}</label>
                    <button className="destroy" onClick={this._onRemove.bind(this)} />
                </div>
                {input}
            </li>
        );
    }
}

export default TodoItem;