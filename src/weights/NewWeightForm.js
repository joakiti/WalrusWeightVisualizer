import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createWeight} from './redux/actions';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";


const NewTodoForm = ({weights, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <TextField
                id="outlined-basic"
                label="Enter weight value"
                variant="outlined"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={() => {
            const isDuplicateText =
                weights.some(todo => todo.text === null);
            if (!isDuplicateText && inputValue) {
                onCreatePressed(inputValue);
                setInputValue('');
            }
        }}>
            Add
        </Button>

        </div>
    );
};

const mapStateToProps = state => ({
    weights: state.weights,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createWeight(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);