import React from 'react';
import { cn } from '@bem-react/classname';

import Grid from '@material-ui/core/Grid';
import { ServeyList } from './SurveyList';

import './App.css';

const cnApp = cn('App');

function App() {
    return (
        <div className={cnApp()}>
            <Grid className={cnApp('Layout')} container spacing={0}>
                <Grid item xs={4}>
                    <ServeyList />
                </Grid>
                <Grid container item xs={8} spacing={0} />
            </Grid>
        </div>
    );
}

export default App;
