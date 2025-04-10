let isInspectMode = false;
const listeners = new Set();

export const getIsInspectMode = () => isInspectMode;

export const setIsInspectMode = (val) => {
  isInspectMode = val;
  listeners.forEach((cb) => cb(isInspectMode));
};

export const subscribeToInspectMode = (cb) => {
  listeners.add(cb);
  return () => listeners.delete(cb); // unsubscribe
};