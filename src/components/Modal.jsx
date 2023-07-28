import { useEffect } from 'react';

const Modal = ({ notificationContent, closeNotification }) => {
  useEffect(() => {
    setTimeout(() => {
      closeNotification();
    }, 3000);
  });

  return <div>{notificationContent}</div>;
};

export default Modal;
