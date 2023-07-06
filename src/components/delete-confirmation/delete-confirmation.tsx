import { DeleteTwoTone, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';

interface DeleteConfirmationProps {
  onDelete: (taskId: string) => void;
  taskId: string; // Add the taskId parameter here
}

const DeleteConfirmation = ({ onDelete, taskId }: DeleteConfirmationProps) => (
  <div className="delete-confirmation">
    <Popconfirm
      title="Delete this task?"
      description="This action cannot be undone."
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      onConfirm={() => onDelete(taskId)}
    >
      <Button
        danger
        style={{ "border": "none", "background": "none", "boxShadow": "none", "padding": 0, "color": "#52469C", "marginLeft": "10px" }}
      >
        <DeleteTwoTone style={{ "fontSize": "22px", "margin": "5px" }} />
      </Button>
    </Popconfirm>
  </div>
);

export default DeleteConfirmation;
