import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol role='region' aria-live='polite' aria-label='Notification' className={styles.wrapper}>
      {toasts.map(t => (
        <li key={t.id} className={styles.toastWrapper}>
          <Toast id={t.id} variant={t.variant}>{t.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
