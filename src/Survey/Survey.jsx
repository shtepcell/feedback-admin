import React from 'react';
import { cn } from '@bem-react/classname';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// import { Question } from '../Question';

import './Survey.css';

const cnSurvey = cn('Survey');

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export class Survey extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            poll: {
                _id: '123456',
                name: 'Опрос 12.02.2020',
                isActive: false,
                questions: [
                    {
                        text: 'Как долго мы можете?',
                        variants: [
                            { text: '1 минуту' },
                            { text: '5 минут' },
                            { text: '1 час' },
                            { text: 'Вообще не могу' },
                        ],
                    },
                    {
                        text: 'За кого голосуете?',
                        variants: [
                            { text: 'За Путина' },
                            { text: 'Как всегда за Путина' },
                            { text: 'Ну за кого же еще? Только за Путина' },
                        ],
                    },
                ],
            },
            tab: 0,
        };

        this.handleChangeTab = this.handleChangeTab.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeActive = this.handleChangeActive.bind(this);

        // this.getQuestionPage = this.getQuestionPage.bind(this);
    }

    getQuestionPage() {
        const { poll } = this.state;
        const { name, isActive } = poll;

        return (
            <>
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
                        onChange={this.handleChangeName}
                        fullWidth
                        className={cnSurvey('Name')}
                    />
                    <FormControlLabel
                        control={(
                            <Checkbox
                                checked={isActive}
                                onChange={this.handleChangeActive}
                                value="checkedB"
                                color="primary"
                            />
                        )}
                        label="Активный опрос"
                    />
                </>
                <Typography className={cnSurvey('Title')} variant="h5" gutterBottom>
                    Список вопросов
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<AddIcon />}
                >
                    Добавить вопрос
                </Button>
            </>
        );
    }

    handleChangeActive(event) {
        const { poll } = this.state;

        this.setState({ poll: { ...poll, isActive: event.target.checked } });
    }

    handleChangeTab(event, newValue) {
        this.setState({ tab: newValue });
    }

    handleChangeName(event) {
        const { poll } = this.state;

        this.setState({ poll: { ...poll, name: event.target.value } });
    }

    render() {
        const { tab } = this.state;

        return (
            <div className={cnSurvey()}>
                <div className={cnSurvey('Header')}>
                    <Tabs className={cnSurvey('Tabs')} centered value={tab} onChange={this.handleChangeTab} aria-label="simple tabs example">
                        <Tab label="Настройка" {...a11yProps(0)} />
                        <Tab label="Статистика" {...a11yProps(1)} />
                    </Tabs>
                </div>
                <div className={cnSurvey('Layout')}>
                    <div className={cnSurvey('Content')}>
                        {tab === 0 && this.getQuestionPage()}
                        {tab === 1 && 'Страница в разработке'}
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
    }
}
