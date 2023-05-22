import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { addTodo } from '../../redux/todoSlice';
import styles from './AddTodoForm.module.css';

const AddTodoForm = () => {
  const [value, setValue] = useState('');
  const [valueDescription, setValueDescription] = useState('');
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    if (value) {
      dispatch(
        addTodo({
          title: value,
          description: valueDescription,
        }),
      );
    }
    setValue('');
    setValueDescription('');
  };

  return (
    <div className={styles.container}>
      <Typography component="h1" variant="h5">
        Add New Task
      </Typography>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inputField}>
          <TextField
            label="Name new task"
            variant="outlined"
            type="text"
            placeholder="Add todo..."
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </div>
        <div className={styles.inputField}>
          <TextField
            className={styles.inputField}
            label="Add description"
            type="text"
            placeholder="Add description..."
            value={valueDescription}
            onChange={event => setValueDescription(event.target.value)}
          />
        </div>
        <Button
          variant="outlined"
          type="submit"
          className={styles.addTodoBtn}
          disabled={!value}
        >
          Add New Task
        </Button>
      </form>
    </div>
  );
};

export default AddTodoForm;
