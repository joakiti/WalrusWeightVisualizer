import React, {Fragment} from 'react';
import {hot} from 'react-hot-loader';
import WeightList from './weights/WeightList';
import './css/App.css';
import Grid from "@material-ui/core/Grid";
import NewWeightForm from "./weights/NewWeightForm";
import WeightInfo from "./weights/WeightInfo";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {ButtonAppBar} from "./ButtonAppBar";
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';

import MainPanel from "./MainPanel";
import Paper from "@material-ui/core/Paper";

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#3d68de'
        },
        primary: {
            main: '#ed7303'
        },
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '"Lato"',
            'sans-serif'
        ].join(',')
    },
    button: {}
});

const styles = {
    Paper: {
        padding: 20,
        marginBottom: 10,
        marginTop: 10
    }
}

const App = () => (
    <Fragment>
        <ThemeProvider theme={theme}>
            <Grid container>
                <Grid item sm>
                    <Paper style={styles.Paper}>
                        Left pane
                    </Paper>
                </Grid>
                <Grid item sm>
                    <Paper style={styles.Paper}>
                        Right pane
                    </Paper>
                </Grid>
            </Grid>
            <Paper>
                {ButtonAppBar()}
                <div className="App">
                    {LeftPanel()}
                    <MainPanel/>
                </div>
            </Paper>
        </ThemeProvider>
    </Fragment>
);

export function LeftPanel() {
    return (
        <div className="App_weights">
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                <Card>
                    <CardContent>
                        <WeightInfo/>
                        <NewWeightForm/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid
                container
                direction="column">
                <WeightList/>
            </Grid>

        </div>)
}


export default hot(module)(App);