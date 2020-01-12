import React from 'react';
import { cn } from '@bem-react/classname';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './SurveyList-Item.css';

const cnSurveyList = cn('SurveyList');

export const SurveyListItem = function (props) {
    const { name } = props;

    return (
        <div className={cnSurveyList('Item')}>
            <ListItem button>
                <ListItemText>{name}</ListItemText>
            </ListItem>
        </div>
    );
};
