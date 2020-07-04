import React from 'react';
import { AppBar, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));

export default props =>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={useStyles.title}>
                    DP Visualizer
                </Typography>
            </Toolbar>
        </AppBar>
