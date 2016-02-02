/**
 * Created by azheng on 2/1/2016.
 */
import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

class TodoActions {
    createItem(text) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_CREATE,
            text: text
        });
    }
    removeItem(id) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_DESTROY,
            id: id
        });
    }
    updateText(id, text) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_UPDATE_TEXT,
            id: id,
            text: text
        });
    }
    toggleComplete(todo) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_COMPLETE,
            id: todo.id,
            complete: todo.complete
        });
    }
    toggleCompleteAll(areAllComplete) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL,
            complete: areAllComplete
        });
    }
}

export default new TodoActions();