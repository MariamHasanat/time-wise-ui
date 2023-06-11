import { message } from 'antd';

/**
 * Show a message using Ant Design's message component.
 * @param {MessageType} type - The type of the message. Can be 'success', 'error', 'warning', or 'loading'.
 * @param {string} content - The content of the message.
 * @param {number} [duration=1.5] - The duration of the message display in seconds. Defaults to 1.5 seconds.
 */
type MessageType = 'success' | 'error' | 'warning' | 'loading';

const showMessage = (type: MessageType, content: string, duration: number = 1.5): void => {
  message.open({
    type,
    content,
    duration,
  });
};

export default showMessage;
