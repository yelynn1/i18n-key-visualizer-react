import { TransWithInspect } from '../components/TransWithInspect';
import { getIsInspectMode, subscribeToInspectMode } from '../states/i18nInspectorState';

export const enableGlobalI18nInspection = (i18nInstance) => {
  const originalT = i18nInstance.t.bind(i18nInstance);

  const updateT = () => {
    i18nInstance.t = (key, options) => {
      const result = originalT(key, options);
      const isInspectMode = getIsInspectMode();
      if (!isInspectMode) {
        return result;
      }
      try {
        console.log("in inspect mode");
        return TransWithInspect(key, result);
      } catch (err) {
        console.warn('TransWithInspect failed:', err);
        return result;
      }
    };
  };

  updateT(); 
  subscribeToInspectMode(updateT);

  return i18nInstance;
};