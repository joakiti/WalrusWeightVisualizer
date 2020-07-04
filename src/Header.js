import React from 'react';
import { AppBar, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default props =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="headline" color="inherit">
                DP visualizer
            </Typography>
        </Toolbar>
    </AppBar>