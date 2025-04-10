import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useI18nInspector, InspectorOverlay } from 'i18n-key-visualizer-react';
import './App.css';

const App = () => {
  const { t } = useTranslation();
  // Initializes i18n inspector (must be called to enable inspection features)
  useI18nInspector();

  return (
    <>
      <h1>{t('home.welcome')}</h1>
      <p>{t('home.description')}</p>
      <p>{t('home.missingkey', 'Missing Key')}</p>
      <p>This is not a translated text</p>
      <InspectorOverlay />
    </>
  );
}

export default App;