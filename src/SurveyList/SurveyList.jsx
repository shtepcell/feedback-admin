import React, { useCallback } from 'react';
import { cn } from '@bem-react/classname';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { SurveyListItem } from './Item/SurveyList-Item';

import './SurveyList.css';

const cnSurveyList = cn('SurveyList');

const texts = {
    'polls-not-found': 'Не найдено ни одного опроса',
    'create-the-poll': 'Создайте первый нажав кнопку "Добавить опрос" внизу страницы',
};

export const SurveyList = function (props) {
    const { onAddClick, onSelectSurvey, polls } = props;

    const onClickSurvey = useCallback((id) => () => onSelectSurvey(id));

    const getSurvey = ({ name, _id }) => (
        <>
            <SurveyListItem name={name} selected={false} onClick={onClickSurvey(_id)} />
            <Divider />
        </>
    );

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
                    {polls.length ? polls.map(getSurvey) : (
                        <div className={cnSurveyList('NoPolls')}>
                            {texts['polls-not-found']}
                            <br />
                            <br />
                            {texts['create-the-poll']}
                            <br />
                            <div className={cnSurveyList('Arrow')} />
                        </div>
                    )}
                </List>
            </div>

            <div className={cnSurveyList('Create')}>
                <Button aria-label="add" onClick={onAddClick}>
                    <AddIcon />
                    Добавить опрос
                </Button>
            </div>
        </Grid>
    );
};
