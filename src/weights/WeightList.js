import React from 'react';
import {connect} from 'react-redux';
import './css/TodoList.css'
import {removeWeight} from './redux/actions'
import List from "@material-ui/core/List";
import {ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const iconStyle = makeStyles({
    red_button: {
        color: 'crimson'
    }
})

const WeightList = ({weights = [], onRemovePressed}) => {
    const weightIcons = buildWeightIcons(weights, onRemovePressed);

    return (
        <div className="list-wrapper">
            <List component="nav" aria-label="main mailbox folders">
                {weightIcons}
            </List>
        </div>
    )
}
const buildWeightIcons = (weights, onRemovePressed) => {
    const classes = iconStyle();

    return weights.map((w, index) => {
        if (w.weight != 0) {
            return <div key={index}>
                <Divider/>
                <ListItem>
                    <ListItemText primary={w.weight}/>
                    <Tooltip title="Delete">
                        <IconButton className={classes.red_button} aria-label="delete" onClick={() => {
                            onRemovePressed(w.weight)
                        }}>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                </ListItem>
                <Divider/>
            </div>
        }
        return <div key={index}/>

    })
}

const mapStateToProps = state => ({
    weights: state.weights,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeWeight(text)),
})
export default connect(mapStateToProps, mapDispatchToProps)(WeightList);