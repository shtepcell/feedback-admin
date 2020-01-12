import React from 'react';
import { cn } from '@bem-react/classname';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Skeleton from '@material-ui/lab/Skeleton';

import './Survey.css';

const cnSurvey = cn('Survey');

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const Survey = function () {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={cnSurvey()}>
            <div className={cnSurvey('Header')}>
                <Tabs className={cnSurvey('Tabs')} centered value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Настройка" {...a11yProps(0)} />
                    <Tab label="Вопросы" {...a11yProps(1)} />
                    <Tab label="Статистика" {...a11yProps(2)} />
                </Tabs>
            </div>
            <div className={cnSurvey('Content')}>
                <Skeleton variant="text" height={30} />
                <Skeleton variant="text" height={30} width="50%" />

                <Skeleton variant="text" height={30} width={100} />
                <Skeleton variant="text" height={30} width={100} />


            </div>
        </div>
    );
};
