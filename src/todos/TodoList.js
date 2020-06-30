import React from 'react';
import { connect } from 'react-redux';
import ToDoListItem from './TodoListItem';
import './ToDoList.css'
import NewTodoForm from './NewTodoForm';
import { removeTodo, completeTodo} from './actions'
import { displayAlert } from './thunks'

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed}) => (
    <div className="list-wrapper">
        <NewTodoForm></NewTodoForm>
        {todos.map(todo => <ToDoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed}/>)}
    </div>
)
const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(completeTodo(text)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);