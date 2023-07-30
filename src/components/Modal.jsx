import { useEffect } from 'react';

const Modal = ({ notificationContent, closeNotification }) => {
  useEffect(() => {
    setTimeout(() => {
      closeNotification();
    }, 2000);
  });

  return <div>{notificationContent}</div>;
};

export default Modal;
