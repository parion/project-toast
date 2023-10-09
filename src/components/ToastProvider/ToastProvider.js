import React, { createContext, useState } from 'react';
import useEscapeKey from '../../hooks/use-escape-key';

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  useEscapeKey('Escape', () => {
    setToasts([]);
  })
  const createToast = (e, message, variant) => {
    e.preventDefault();
    setToasts([...toasts, { id: crypto.randomUUID(), message, variant }]);
  }
  const removeToast = (id) => {
    const revisedToasts = toasts.filter(t => t.id !== id);
    setToasts(revisedToasts);
  }
  return <ToastContext.Provider value={{ toasts, createToast, removeToast }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
