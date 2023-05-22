import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, toggleComplete } from '../../redux/todoSlice';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import styles from './TodoItem.module.css';

const TodoItem = ({ id, title, completed, description }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [editTodoTitle, setEditTodoTitle] = useState(title);
  const [editTodoDescription, setEditTodoDescription] = useState(description);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));
  };

  const handleUpdate = (id, editTodoTitle, e) => {
    dispatch(
      editTodo({ id, title: editTodoTitle, description: editTodoDescription }),
    );
  };

  return (
    <>
      <CardContent className={styles.card}>
        {edit ? (
          <>
            <div className={styles.editInput}>
              <TextField
                placeholder="Add task title..."
                value={editTodoTitle}
                onChange={e => {
                  setEditTodoTitle(e.target.value);
                }}
                ref={inputRef}
                label="Add task title"
              />
            </div>
            <div className={styles.editInput}>
              <TextField
                value={editTodoDescription}
                onChange={e => {
                  setEditTodoDescription(e.target.value);
                }}
                placeholder="Add task description..."
                label="Add task description"
              />
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={completed}
                onChange={handleCompleteClick}
              />
              <Typography
                variant="h5"
                component="div"
                style={{
                  textDecoration: completed ? 'line-through' : 'none',
                }}
              >
                {title}
              </Typography>
            </div>
            <br />

            <Typography
              variant="body2"
              style={{ textDecoration: 'none', display: ' block' }}
            >
              {description}
              <br />
            </Typography>
          </>
        )}
        {edit && (
          <Button
            // size="small"
            variant="outlined"
            onClick={e => {
              handleUpdate(id, editTodoTitle, editTodoDescription, e);
              setEdit(!edit);
            }}
            className={styles.doneBtn}
          >
            Done
          </Button>
        )}
        <CardActions>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              if (!edit) {
                setEdit(!edit);
              }
            }}
            color="success"
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={handleDeleteClick}
            color="error"
          >
            Delete
          </Button>
        </CardActions>
      </CardContent>
    </>
  );
};

export default TodoItem;
