import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
  const todos = useSelector(state =>
    state.todos.filter(todo => todo.completed === true),
  );

  return (
    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
      Total complete items: {todos.length}
    </Typography>
  );
};

export default TotalCompleteItems;
