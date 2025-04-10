import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TransWithInspect } from "../components/TransWithInspect";
import { getIsInspectMode, setIsInspectMode, subscribeToInspectMode } from '../states/i18nInspectorState';

export const useI18nInspector = (config = {}) => {
  const [isInspectMode, setMode] = useState(getIsInspectMode());

  useEffect(() => {
    const unsubscribe = subscribeToInspectMode(setMode);
    return unsubscribe;
  }, []);

  const toggleInspect = () => setIsInspectMode(!getIsInspectMode());

  const { t: defaultT, i18n: i18nInstance } = useTranslation();
  const originalT = config.t || defaultT;

  const t = (key, options) => {
    const translated = originalT(key, options);
    return isInspectMode ? TransWithInspect(key, translated) : translated;
  };

  const getJson = () => {
    const json = i18nInstance.store.data || i18nInstance.services.resourceStore.data;
    return json;
  }

  return {
    isInspectMode,
    toggleInspect,
    t,
    getJson
  };
};