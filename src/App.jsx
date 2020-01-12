import React from 'react';
import { cn } from '@bem-react/classname';

import Grid from '@material-ui/core/Grid';
import { SurveyList } from './SurveyList';
import { Survey } from './Survey';

import './App.css';

const cnApp = cn('App');

function App() {
    return (
        <div className={cnApp()}>
            <Grid className={cnApp('Layout')} container spacing={0}>
                <Grid item xs={4}>
                    <SurveyList />
                </Grid>
                <Grid item xs={8}>
                    <Survey />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
