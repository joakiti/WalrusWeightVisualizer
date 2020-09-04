import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {findOptimalSolution} from "./calculator/actionHandlers";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import {initial_goal} from "./config/store";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const MainPanel = ({weights = [], calculatorArray = [], onStartPressed}) => {
    const classes = useStyles();

    const initialValue = initial_goal;

    const [inputValue, setInputValue] = useState(initialValue);
    return (
        <div>
            <div className={classes.root}>
                <Typography id="discrete-slider" gutterBottom>
                    Weight goal:
                </Typography>
                <Slider
                    defaultValue={initialValue}
                    onChangeCommitted={(event, value) => {
                        setInputValue(prevState => value)
                    }}
                    aria-labelledby="discrete-slider"
                    step={1}
                    valueLabelDisplay="auto"
                />
            </div>
            <Button
                color="inherit"
                onClick={() => onStartPressed(weights, inputValue, calculatorArray)}
            >Start</Button>
        </div>)
}
const mapStateToProps = state => ({
    weights: state.weights,
    calculatorArray: state.calculator
});

const mapDispatchToProps = dispatch => ({
    onStartPressed: (weights, goal) => {
        findOptimalSolution(dispatch, weights, goal);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);
