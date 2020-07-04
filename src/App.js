import React from 'react';
import {hot} from 'react-hot-loader';
import WeightList from './weights/WeightList';
import './css/App.css';
import Grid from "@material-ui/core/Grid";
import NewWeightForm from "./weights/NewWeightForm";
import WeightInfo from "./weights/WeightInfo";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {ButtonAppBar} from "./ButtonAppBar";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import MainPanel from "./MainPanel";

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#ed7303'
        },
        primary: {
            main: '#ed7303'
        }
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '"Lato"',
            'sans-serif'
        ].join(',')
    }
});

const App = () => (
    <ThemeProvider theme={theme}>
        <div>
            {ButtonAppBar()}
            <div className="App">
                {LeftPanel()}
                <MainPanel/>
            </div>
        </div>
    </ThemeProvider>
);

export function LeftPanel() {
    return (
        <div className="App_weights">
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start">
                <Card>
                    <CardContent>
                        <WeightInfo/>
                        <NewWeightForm/>
                    </CardContent>
                </Card>
                <WeightList/>
            </Grid>
        </div>)
}


export default hot(module)(App);