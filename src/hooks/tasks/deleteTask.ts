import { useState } from 'react';
import TaskAPI from '../../services/tasks/taskApi';
import showMessage from '../../utils/message/message';

const api = new TaskAPI();

const useDeleteTask = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const deleteTask = (taskId: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    api.deleteTask(taskId)
      .then(deleted => {
        setLoading(false);
        if (deleted) {
          setSuccess(true);
          showMessage('success', 'Task deleted successfully.');
        } else {
          setError('Failed to delete task.');
          showMessage('error', 'Failed to delete task.');
        }
      })
      .catch(error => {
        setLoading(false);
        setError('An error occurred while deleting the task.');
        showMessage('error', 'An error occurred while deleting the task.');
      });
  };

  return { loading, error, success, deleteTask };
};

export default useDeleteTask;
