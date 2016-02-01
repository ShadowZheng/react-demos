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
}

export default new TodoActions();