/**
 * Created by azheng on 2/1/2016.
 */
import React from 'react';
import TodoActions from '../actions/TodoActions';

const ENTER_KEY_CODE = 13;

class TodoTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || ''
        }
    }

    _save() {
        this.props.onSave(this.state.value);
        this.setState({value: ''});
    }
    _onChange(event) {
        this.setState({value: event.target.value});
    }
    _onKeyDown(event) {
        if (event.keyCode == ENTER_KEY_CODE) {
            this._save();
        }
    }
    render() {
        return (
            <input className={this.props.className}
                   id={this.props.id}
                   placeholder={this.props.placeholder}
                   onBlur={this._save.bind(this)}
                   onChange={this._onChange.bind(this)}
                   onKeyDown={this._onKeyDown.bind(this)}
                   value={this.state.value}
                   autoFocus={true}
            />
        );
    }
}

export default TodoTextInput;