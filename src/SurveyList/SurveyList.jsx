import React from 'react';
import { cn } from '@bem-react/classname';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListSubheader from '@material-ui/core/ListSubheader';
import { SurveyListItem } from './Item/SurveyList-Item';

import './SurveyList.css';

const cnSurveyList = cn('SurveyList');

const names = [
    'Опрос 1', 'Опрос с длинным названием', 'Название опроса', 'Вышел на крыльцо почесать свое ...?',
    'Опрос с очень сильно длинным названием, которое должно вылезти за границы', 'Какой-то опрос',
    'Опрос 1', 'Опрос с длинным названием', 'Название опроса', 'Вышел на крыльцо почесать свое ...?',
    'Опрос с очень сильно длинным названием, которое должно вылезти за границы', 'Какой-то опрос', 'Опрос 1', 'Опрос с длинным названием', 'Название опроса', 'Вышел на крыльцо почесать свое ...?',
    'Опрос с очень сильно длинным названием, которое должно вылезти за границы', 'Какой-то опрос', 'Опрос 1', 'Опрос с длинным названием', 'Название опроса', 'Вышел на крыльцо почесать свое ...?',
    'Опрос с очень сильно длинным названием, которое должно вылезти за границы', 'Какой-то опрос', 'Опрос 1', 'Опрос с длинным названием', 'Название опроса', 'Вышел на крыльцо почесать свое ...?',
    'Опрос с очень сильно длинным названием, которое должно вылезти за границы', 'Какой-то опрос',
];

export const SurveyList = function () {
    return (
        <Grid
            className={cnSurveyList()}
            container
            justify="flex-start"
            direction="column"
            alignItems="stretch"
        >
            <div className={cnSurveyList('Header')}>
                <Typography variant="h6">Список опросов</Typography>
            </div>
            <div className={cnSurveyList('Content')}>
                <List component="nav">
                    <ListSubheader className={cnSurveyList('Subtitle')}>Активные опросы</ListSubheader>
                    {names.map((item, index) => (
                        <>
                            <SurveyListItem name={item} selected={index === 4} />
                            <Divider />
                        </>
                    ))}
                    <ListSubheader className={cnSurveyList('Subtitle')}>Завершенные опросы</ListSubheader>
                    {names.map(item => (
                        <>
                            <SurveyListItem name={item} />
                            <Divider />
                        </>
                    ))}
                </List>
            </div>
            <div className={cnSurveyList('Create')}>
                <Button aria-label="add">
                    <AddIcon />
                    Добавить опрос
                </Button>
            </div>
        </Grid>
    );
};
