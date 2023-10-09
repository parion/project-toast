import { React, useState, useContext } from 'react';
import styles from './Controls.module.css';

import Button from '../Button';
import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function Controls() {
  const { createToast } = useContext(ToastContext);
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  return (
    <form className={styles.controlsWrapper} onSubmit={(e) => createToast(e, message, variant)}>
      <div className={styles.row}>
        <label
          htmlFor="message"
          className={styles.label}
          style={{ alignSelf: 'baseline' }}
        >
          Message
        </label>
        <div className={styles.inputWrapper}>
          <textarea id="message" className={styles.messageInput} value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Variant</div>
        {VARIANT_OPTIONS.map(v => (
          <div key={v}
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <label htmlFor={`variant-${v}`}>
              <input
                id={`variant-${v}`}
                type="radio"
                name="variant"
                value={v}
                checked={v === variant}
                onChange={event => {
                  setVariant(event.target.value);
                }}
              />
              {v}
            </label>
          </div>
        ))}
      </div>

      <div className={styles.row}>
        <div className={styles.label} />
        <div
          className={`${styles.inputWrapper} ${styles.radioWrapper}`}
        >
          <Button>Pop Toast!</Button>
        </div>
      </div>
    </form>
  );
}

export default Controls;
