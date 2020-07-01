import React from 'react';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
        margin: 5
    },
    pos: {
        marginBottom: 12,
    },
});

const WeightInfo = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant="h5" component="h2">
                Weight panel
            </Typography>
            <Typography fontWeight="fontWeightLight">
                Add weights for Wallace the Weightlifting Walrus to use.
            </Typography>
        </div>
    )
}

export default WeightInfo;