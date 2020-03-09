import React, { useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';

import Grid from '@material-ui/core/Grid';
import { SurveyList } from './SurveyList';
import { Survey } from './Survey';

import './App.css';

import request from './libs/request';

const cnApp = cn('App');

function App() {
    const [polls, setPolls] = useState([]);

    useEffect(() => {
        request
            .get('/api/v1/poll/')
            .then(({ data }) => {
                setPolls(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className={cnApp()}>
            <Grid className={cnApp('Layout')} container spacing={0}>
                <Grid item xs={4}>
                    <SurveyList
                        polls={polls}
                        onAddClick={() => console.log('AddClick')}
                        onSelectSurvey={(id) => console.log(id)}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Survey />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
