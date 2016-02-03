/**
 * Created by azheng on 2/1/2016.
 */
import React from 'react';
import TodoActions from '../actions/TodoActions';

class TodoFooter extends React.Component {
    _onClearCompleteItem() {
        TodoActions.clearCompleteItem();
    }
    render() {
        var todos = this.props.allTodos;
        var completeItem = 0;
        todos.forEach((todo) => {
           if (todo.complete) {
               completeItem++;
           }
        });

        var itemLeft = todos.length - completeItem;
        var clearBtn;
        if (completeItem) {
            clearBtn = <button id="clear-completed" onClick={this._onClearCompleteItem.bind(this)}>Clear Completed ({completeItem})</button>
        }
        return (
            <footer id="footer">
                <span id="todo-count">
                    <strong>{itemLeft} items left</strong>
                </span>
                {clearBtn}
            </footer>
        );
    }
}

export default TodoFooter;