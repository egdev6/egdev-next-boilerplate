'use client'
import { useTranslation } from 'react-i18next'
import LanguageChanger from 'organisms/language-selector'

const Header = () => {
  const { t } = useTranslation()
  return (
    <header>
      <h1>{t('Header')}</h1>
      <LanguageChanger />
    </header>
  );
}

export default Header;