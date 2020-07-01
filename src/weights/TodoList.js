import React from 'react';
import {connect} from 'react-redux';
import './css/TodoList.css'
import {removeWeight} from './redux/actions'
import NewWeightForm from "./NewWeightForm";
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
    const classes = iconStyle();
    return (
        <div className="list-wrapper">
            <List component="nav" aria-label="main mailbox folders">
                {weights.map(w =>
                    <div key={w.text}>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary={w.text}/>
                            <Tooltip title="Delete">
                                <IconButton className={classes.red_button} aria-label="delete" onClick={() => {
                                    onRemovePressed(w.text)
                                }}>
                                    <DeleteIcon/>
                                </IconButton>
                            </Tooltip>
                        </ListItem>
                        <Divider/>
                    </div>
                )}
            </List>
        </div>
    )
}
const mapStateToProps = state => ({
    weights: state.weights,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeWeight(text)),
})
export default connect(mapStateToProps, mapDispatchToProps)(WeightList);