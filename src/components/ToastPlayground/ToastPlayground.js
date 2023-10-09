import React from 'react';

import styles from './ToastPlayground.module.css';
import Controls from '../Controls/Controls';
import ToastProvider from '../ToastProvider/ToastProvider';
import ToastShelf from '../ToastShelf/ToastShelf';

function ToastPlayground() {
  return (
    <ToastProvider>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>

        <ToastShelf />
        <Controls />
      </div>
    </ToastProvider>
  );
}

export default ToastPlayground;
