import React from 'react';

function useEscapeKey(callback) {
  React.useEffect(() => {
    const keyWatcher = (key, e) => {
      if (e.code === key) {
        callback(e);
      }
    }
    window.addEventListener('keydown', keyWatcher);

    return () => {
      window.removeEventListener('keydown', keyWatcher);
    }
  }, [callback]);
}

export default useEscapeKey;