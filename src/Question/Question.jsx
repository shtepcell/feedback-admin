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

export const Question = function (props) {
    const {
        number = 1, name: questionName, type: questionType,
    } = props;

    const [name, setName] = React.useState(questionName || '');
    const [type, setType] = React.useState(questionType || '');
    const [variants, setVariants] = React.useState([1, 2]);

    const inputLabel = React.useRef(null);

    const handleChangeName = event => {
        setName(event.target.value);
    };

    const handleChange = event => {
        setType(event.target.value);
    };

    const handleAddVariant = () => {
        setVariants(variants.concat('2'));
    };

    const handleDeleteVariant = () => {
        if (variants.length < 3) {
            return;
        }

        setVariants(variants.slice(0, -1));
    };


    const getVariant = (text, canEdit = true) => (
        <div className={cnQuestion('Variant')}>
            <TextField
                size="small"
                label="Вариант ответа"
                variant="outlined"
                value={text}
                fullWidth
                disabled={!canEdit}
                className={cnQuestion('Name')}
            />
            {canEdit && (
                <IconButton
                    size="small"
                    aria-label="delete"
                    onClick={handleDeleteVariant}
                    className={cnQuestion('VariantDelete')}
                >
                    <DeleteIcon />
                </IconButton>
            )}
        </div>
    );

    return (
        <div className={cnQuestion()}>
            <div className={cnQuestion('LeftSide')}>
                <div className={cnQuestion('Number')}>
                    {number}
                    .
                </div>
            </div>
            <div className={cnQuestion('MidleSide')}>
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
                    <FormControl size="small" variant="outlined" className={cnQuestion('Type')}>
                        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                            Тип вопроса
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={type}
                            onChange={handleChange}
                        >
                            <MenuItem value="variants">Варианты ответа</MenuItem>
                            <MenuItem value="raiting">Рейтинг</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {type === 'variants' && (
                    <div>
                        <Typography className={cnQuestion('Subtitle')} variant="subtitle2">Варианты ответа:</Typography>
                        <div className={cnQuestion('Variants')}>
                            {variants.map(() => getVariant())}
                            {variants.length < 5 && (
                                <Button
                                    className={cnQuestion('AddVariant')}
                                    onClick={handleAddVariant}
                                    size="small"
                                    variant="outlined"
                                    startIcon={<AddIcon />}
                                >
                                    Еще вариант
                                </Button>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className={cnQuestion('RightSide')}>
                <IconButton
                    size="small"
                    aria-label="delete"
                    className={cnQuestion('VariantDelete')}
                >
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>
    );
};
