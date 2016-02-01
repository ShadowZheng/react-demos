/**
 * Created by azheng on 2/1/2016.
 */
import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

const CHANGE_EVENT = 'change';

var _todos = [];

function create(text) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _todos.push({
        id: id,
        complete: false,
        text: text
    });
    console.log(_todos);
}

class TodoStore extends EventEmitter{
    getAll() {
        return _todos;
    }
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
    emitChange() {
        this.emit(CHANGE_EVENT);
        console.log('sssss');
    }
}

let todoStore = new TodoStore();

AppDispatcher.register((action) => {
    switch (action.actionType) {
        case TodoConstants.TODO_CREATE:
            if (action.text.trim() !== ''){
                create(action.text);
                todoStore.emitChange();
            }
            break;
        default:
    }
})



export default new TodoStore();
