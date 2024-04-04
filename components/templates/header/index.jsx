'use client'
import { useTranslation } from 'react-i18next'
import LanguageChanger from 'organisms/language-selector'
import Logo from 'assets/images/logo.svg'

const Header = () => {
  const { t } = useTranslation()
  return (
    <header className='w-full h-[70px] flex justify-between px-[48px] items-center'>
      <Logo className='h-[40px]' />
      <LanguageChanger />
    </header>
  )
}

export default Header
