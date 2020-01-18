import React from 'react';
import { cn } from '@bem-react/classname';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Question } from '../Question';

import './Survey.css';

const cnSurvey = cn('Survey');

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const Survey = function () {
    const [value, setValue] = React.useState(1);
    const [name, setName] = React.useState('Какое-то длинное название которое занимает несколько строк по идее Какое-то длинное название которое занимает несколько строк по идее Какое-то длинное название которое занимает несколько строк по идее');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeName = event => {
        setName(event.target.value);
    };

    const getMainPage = () => (
        <>
            <Typography className={cnSurvey('Title')} variant="h5" gutterBottom>
                Общие настройки
            </Typography>
            <TextField
                required
                label="Название опроса"
                variant="outlined"
                value={name}
                onCha
                onChange={handleChangeName}
                fullWidth
                className={cnSurvey('Name')}
            />
            <Typography variant="body1" gutterBottom>
                Период активности опроса:
            </Typography>
            <TextField
                id="date"
                label="Дата начала"
                type="date"
                defaultValue="2019-05-24"
                className={cnSurvey('DateStart')}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="date"
                label="Дата конца"
                type="date"
                defaultValue="2020-05-24"
                className={cnSurvey('DateEnd')}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </>
    );

    const getQuestionPage = () => (
        <>
            <Typography className={cnSurvey('Title')} variant="h5" gutterBottom>
                Список вопросов
            </Typography>
            <Question />
            <Button
                variant="outlined"
                startIcon={<AddIcon />}
            >
                Добавить вопрос
            </Button>
        </>
    );

    return (
        <div className={cnSurvey()}>
            <div className={cnSurvey('Header')}>
                <Tabs className={cnSurvey('Tabs')} centered value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Настройка" {...a11yProps(0)} />
                    <Tab label="Вопросы" {...a11yProps(1)} />
                    <Tab label="Статистика" {...a11yProps(2)} />
                </Tabs>
            </div>
            <div className={cnSurvey('Layout')}>
                <div className={cnSurvey('Content')}>
                    {value === 0 && getMainPage()}
                    {value === 1 && getQuestionPage()}
                </div>
                <div className={cnSurvey('Actions')}>
                    <Button variant="outlined" color="primary" disabled>
                        Сохранить
                    </Button>
                    <Button variant="outlined" disabled>
                        Отменить
                    </Button>
                    <Button variant="outlined" color="secondary">
                        Удалить опрос
                    </Button>
                </div>
            </div>
        </div>
    );
};
