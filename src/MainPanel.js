import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {findOptimalSolution} from "./calculator/actionHandlers";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

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

    const [inputValue, setInputValue] = useState(0);
    return (
        <div>
            <div className={classes.root}>
                <Typography id="discrete-slider" gutterBottom>
                    Weight goal:
                </Typography>
                <Slider
                    defaultValue={80}
                    getAriaValueText={setInputValue}
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
