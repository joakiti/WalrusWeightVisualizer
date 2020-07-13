import React, {Fragment} from 'react';
import {hot} from 'react-hot-loader';
import './css/App.css';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import MainPanel from "./MainPanel";
import LeftPanel from "./LeftPanel";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ed7303'
        },
        secondary: {
            main: '#3d68de'
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

const App = () => (
    <Fragment>
        <ThemeProvider theme={theme}>
            <div className="App">
                <LeftPanel/>
                <MainPanel/>
            </div>
        </ThemeProvider>
    </Fragment>
);


export default hot(module)(App);