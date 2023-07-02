import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';

const DeleteConfirmation = () => (
  <div className="delete-confirmation">
    <Popconfirm
      title="Delete this task?"
      description="this action cannot be undone"
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      onConfirm={() => alert("deleting")} // replace the alert with the actual deletion functionality
    >
      <Button
        danger
        style={{ "border": "none", "background": "none", "boxShadow": "none", "padding": 0, "color":"#52469C", "marginLeft": "10px"}}
      >
        <DeleteOutlined />
      </Button>
    </Popconfirm>
  </div>
);

export default DeleteConfirmation;