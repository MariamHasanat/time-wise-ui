import { Button, message, Space } from 'antd';

interface IProps {
  type: 'success' | 'error' | 'warning' | 'loading',
  message: string
}

const Message = (props: IProps) => {
  const [messageApi, contextHolder] = message.useMessage();

  const msg = () => {
    messageApi.open({
      type: props.type,
      content: props.message,
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={msg}>Success</Button>
      </Space>
    </>
  );
};

export default Message;