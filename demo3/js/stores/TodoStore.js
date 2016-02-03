/**
 * Created by azheng on 2/1/2016.
 */
import {EventEmitter} from 'events';
import _ from 'lodash';
import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

const CHANGE_EVENT = 'change';

var _todos = [];

function createItem(text) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _todos.push({
        id: id,
        complete: false,
        text: text
    });
}

function removeItem(id) {
    let todos = _todos;
    _.remove(todos, function(todo) {
        return todo.id == id;
    });
    _todos = todos;
}

function updateItem(id, text) {
    _todos.forEach((item) => {
        if (item.id == id) {
            item.text = text;
        }
    });
}

function toggleComplete(id, complete) {
    _todos.forEach((item) => {
        if (item.id == id) {
            item.complete = !complete;
        }
    });
}

function toggleCompleteAll(complete) {
    _todos.forEach((item) => {
        item.complete = !complete;
    });
}

function clearCompleteItem() {
    let todos = _todos;
    _.remove(todos, function(todo) {
        return todo.complete;
    });
    _todos = todos;
}

class TodoStore extends EventEmitter{
    getAll() {
        return _todos;
    }
    areAllComplete() {
        if (_todos.length == 0) {
            return false;
        }
        for (let i = 0; i < _todos.length; i++) {
            if (!_todos[i].complete) {
                return false;
            }
        }
        return true;
    }
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
}

let todoStore = new TodoStore();

AppDispatcher.register((action) => {
    switch (action.actionType) {
        case TodoConstants.TODO_CREATE:
            if (action.text.trim() !== ''){
                createItem(action.text);
                todoStore.emitChange();
            }
            break;
        case TodoConstants.TODO_DESTROY:
            removeItem(action.id);
            todoStore.emitChange();
            break;
        case TodoConstants.TODO_UPDATE_TEXT:
            updateItem(action.id, action.text);
            todoStore.emitChange();
            break;
        case TodoConstants.TODO_COMPLETE:
            toggleComplete(action.id, action.complete);
            todoStore.emitChange();
            break;
        case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
            toggleCompleteAll(action.complete);
            todoStore.emitChange();
            break;
        case TodoConstants.TODO_DESTROY_COMPLETED:
            clearCompleteItem();
            todoStore.emitChange();
            break;
        default:
    }
});



export default todoStore;
