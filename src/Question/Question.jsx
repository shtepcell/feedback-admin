import React from 'react';
import { cn } from '@bem-react/classname';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

import './Question.css';

const cnQuestion = cn('Question');

export const Question = function () {
    const [name, setName] = React.useState('Как вам наш офис?');

    const handleChangeName = event => {
        setName(event.target.value);
    };

    const getVariant = () => (
        <div className={cnQuestion('Variant')}>
            <TextField
                size="small"
                label="Вариант ответа"
                variant="outlined"
                value=""
                fullWidth
                className={cnQuestion('Name')}
            />
            <IconButton
                size="small"
                aria-label="delete"
                className={cnQuestion('VariantDelete')}
            >
                <DeleteIcon />
            </IconButton>
        </div>
    );
    return (
        <div className={cnQuestion()}>
            <div className={cnQuestion('Head')}>
                <TextField
                    size="small"
                    required
                    label="Название вопроса"
                    variant="outlined"
                    value={name}
                    onChange={handleChangeName}
                    fullWidth
                    multiline
                    rowsMax="2"
                    className={cnQuestion('Name')}
                />
                <FormControl variant="outlined" size="small" className={cnQuestion('Type')}>
                    <InputLabel id="demo-simple-select-label">Тип вопроса</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    >
                        <MenuItem value={10}>Варианты</MenuItem>
                        <MenuItem value={20}>Рейтинг</MenuItem>
                        <MenuItem value={30}>Да или нет</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <Typography className={cnQuestion('Subtitle')} variant="subtitle2">Варианты ответа:</Typography>
                <div className={cnQuestion('Variants')}>
                    {getVariant()}
                    <Button
                        className={cnQuestion('AddVariant')}
                        size="small"
                        variant="outlined"
                        startIcon={<AddIcon />}
                    >
                        Добавить вопрос
                    </Button>
                </div>
            </div>
        </div>
    );
};
