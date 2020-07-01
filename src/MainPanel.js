import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {removeWeight} from "./weights/redux/actions";
import {startCalculation, writeOptimal} from "./calculator/actions";


const MainPanel = ({weights = [], calculatorArray = [], onStartPressed}) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <TextField
                color="secondary"
                id="outlined-basic"
                label="Weight goal"
                variant="standard"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <Button
                color="inherit"
                onClick={() => onStartPressed(weights, inputValue, calculatorArray)}
            >Start</Button>
            <img alt={"Photo of weight lifting walrus"}/>
        </div>)
}
const mapStateToProps = state => ({
    weights: state.weights,
    calculatorArray: state.calculator
});

const mapDispatchToProps = dispatch => ({
    onStartPressed: (weights, goal) => {
        dispatch(startCalculation(weights, goal));
        for (let targetWeight = 0; targetWeight < goal * 2; targetWeight++) {
            for (let noOfWeights = 1; noOfWeights < weights + 1; noOfWeights++) {
                dispatch(writeOptimal(noOfWeights, targetWeight))
            }
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);
